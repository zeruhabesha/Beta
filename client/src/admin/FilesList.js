import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiChevronDown, FiChevronRight, FiFilter, FiChevronLeft, FiChevronUp } from 'react-icons/fi';
import { CSVLink } from 'react-csv';
import './table.css'; // Import custom CSS for styling
import './PrintTable.css'; // Import print-specific CSS
import SidebarAdmin from './Sidebar';
const FileList = () => {
  const [data, setData] = useState([]);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [expandedRow, setExpandedRow] = useState(null); // Track the expanded row
  const [filteredData, setFilteredData] = useState([]);
  const [columns, setColumns] = useState({
    fname: true,
    email: true,
    gender: true,
    username: true,
    role: true,
    mobile: true,
  });

  useEffect(() => {
    fetchData();
  }, [sortField, sortOrder, searchQuery, currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8005/findx', {
        params: {
          sortField,
          sortOrder,
          searchQuery,
          page: currentPage,
        },
      });

      setData(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  const handleSort = (field) => {
    setSortField(field);
    setSortOrder(sortField === field && sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page when performing a new search

    // Filter data based on searchQuery
    const filteredResults = data.filter(
      (item) =>
        item.fname.toLowerCase().includes(query.toLowerCase()) ||
        item.gender.toLowerCase().includes(query.toLowerCase())||
        item.email.toLowerCase().includes(query.toLowerCase())||

        item.mobile.toLowerCase().includes(query.toLowerCase())||
        item.username.toLowerCase().includes(query.toLowerCase())||


        item.role.toLowerCase().includes(query.toLowerCase())

    );
    setFilteredData(filteredResults);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowToggle = (id) => {
    // Toggle the expanded row based on the selected column (id)
    setExpandedRow(expandedRow === id ? null : id);
  };

  const getRowToggleIcon = (id) => {
    return expandedRow === id ? <FiChevronDown /> : <FiChevronRight />;
  };

  // Use filteredData for rendering the table rows
  const displayedData = searchQuery ? filteredData : data;

  // Create a function to extract CSV data from the table data
  const getCSVData = () => {
    const csvData = data.map((item) => ({
      fname: item.fname,
      email: item.email,
      mobile: item.mobile,
      role: item.role,
      gender: item.gender,
      username: item.username,
    }));
    return csvData;
  };

  const handlePrint = () => {
    window.print();
  };

  // Function to toggle column visibility
  const toggleColumnVisibility = (column) => {
    setColumns({
      ...columns,
      [column]: !columns[column],
    });
  };

  // Function to get the visible columns
  const getVisibleColumns = () => {
    return Object.keys(columns).filter((column) => columns[column]);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
         

        <div className="data-table-container">

        <div className="column-visibility">
        {Object.keys(columns).map((column) => (
          
        //   <select >
             <div key={column}>
 <label>
             <input
               type="checkbox"
                checked={columns[column]}
                onChange={() => toggleColumnVisibility(column)}
              />
              {column}
           </label></div>
// </select>
        //   <div key={column}>
        //     <label>
        //       <input
        //         type="checkbox"
        //         checked={columns[column]}
        //         onChange={() => toggleColumnVisibility(column)}
        //       />
        //       {column}
        //     </label>
        //   </div>
        ))}
      </div>
      <input
            type="search"
            placeholder="Search by name or gender..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        {/* Export to CSV */}
        <CSVLink
        data={getCSVData()} // Provide CSV data to the CSVLink component
        filename="table_data.csv"
        className="export-button"
      >
        Export to CSV
      </CSVLink>
      {/* Print Table */}
      <button className="print-button" onClick={handlePrint}>
        Print Table
      </button>
   
          <FiFilter />
        
    
      <div>
     
      </div>
      <table className="data-table1">
        {/* Table header */}
        <thead>
          <tr>
            {columns.fname && (
              <th onClick={() => handleSort('fname')}>
                Name
                {sortField === 'fname' && sortOrder === 'asc' && <FiChevronUp />}
                {sortField === 'fname' && sortOrder === 'desc' && <FiChevronDown />}
              </th>
            )}
            {columns.email && (
              <th onClick={() => handleSort('email')}>
                Email
                {sortField === 'email' && sortOrder === 'asc' && <FiChevronUp />}
                {sortField === 'email' && sortOrder === 'desc' && <FiChevronDown />}
              </th>
            )}
            {columns.username && (
              <th onClick={() => handleSort('username')}>
                Username
                {sortField === 'username' && sortOrder === 'asc' && <FiChevronUp />}
                {sortField === 'username' && sortOrder === 'desc' && <FiChevronDown />}
              </th>
            )}
              {columns.gender && (
              <th onClick={() => handleSort('gender')}>
                Gender
                {sortField === 'gender' && sortOrder === 'asc' && <FiChevronUp />}
                {sortField === 'gender' && sortOrder === 'desc' && <FiChevronDown />}
              </th>
            )}

{columns.role && (
              <th onClick={() => handleSort('role')}>
                Role
                {sortField === 'role' && sortOrder === 'asc' && <FiChevronUp />}
                {sortField === 'role' && sortOrder === 'desc' && <FiChevronDown />}
              </th>
            )}
            
{columns.mobile && (
              <th onClick={() => handleSort('mobile')}>
                Phone no
                {sortField === 'mobile' && sortOrder === 'asc' && <FiChevronUp />}
                {sortField === 'mobile' && sortOrder === 'desc' && <FiChevronDown />}
              </th>
            )}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {displayedData.map((item) => (
            <React.Fragment key={item._id}>
              {/* Main row */}
              <tr onClick={() => handleRowToggle(item._id)}>
            
                {columns.fname && <td>
                {getRowToggleIcon(item._id)} {item.fname}</td>}
                {columns.email && <td>{item.email}</td>}
                {columns.username && <td>{item.username}</td>}
                {columns.gender && <td>{item.gender}</td>}
                {columns.role && <td>{item.role}</td>}
                {columns.mobile && <td>{item.mobile}</td>}


              </tr>
              {/* Expanded row */}
              {expandedRow === item._id && (
                <tr>
                  <td colSpan={Object.keys(columns).filter((column) => columns[column]).length - 1}>
                    Name: {item.name}<br></br>
                 
                    Email: {item.email}<br></br>
                    Mobile: {item.mobile}<br></br>
                    username: {item.username}<br></br>
                    gender: {item.gender}<br></br>
                    role: {item.role}<br></br>


                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <FiChevronLeft /> Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next <FiChevronRight />
        </button>
      </div>
      {/* Search */}
     
    
      {/* Manage Column Visibility */}
     
    </div>
  );
};

export default FileList;
