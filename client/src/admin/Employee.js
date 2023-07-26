/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {registerUser} from './action/employee_action';
import {getEmployee} from './action/employee_action';
import {registerTender,UploadTask} from './action/employee_action';
import axios from 'axios';
import {Button,Modal} from "react-bootstrap"
import {useParams} from 'react-router-dom'
import './table.css';
// import './table.js';
import { Link} from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import Sidebar from './Sidebar';
// import { ThemeContext } from '@mui/system';
import { FiChevronDown, FiChevronRight, FiFilter, FiChevronLeft, FiChevronUp } from 'react-icons/fi';
import { CSVLink } from 'react-csv';
import './Tables.css'; // Import custom CSS for styling
import './PrintTable.css';
import Imagess from "./images/sample.jpg";

const Employee = () => {
  


  const [eid,setEid] = useState("")
  const [oid,setOid] = useState("")
const [employee,setEmployee]=useState("")
  const[oname,setOname]=useState("")
  const [tenderno,setTenderno] = useState("")
  const fileInputRef = useRef(null);
  const [priority,setPriority] = useState("")
  const {id} = useParams();
  const [applicants, setApplicants] = useState([]);
  const [session, setSession] = useState([]);
  const [start,setStart] = useState("")
  const [end,setEnd] = useState("")
  const [location,setLocation] = useState("")
  const [link,setLink] = useState("")
  // const [file,setFile] = useState("")
  const [fullname,setFullname] = useState("")
  const [email1,setEmail1] = useState("")
  const [location1,setLocation1] = useState("")
  const [mobile1,setMobile1] = useState("")
  const [username1,setUsername1] = useState("")
  const [password1,setPassword1] = useState("")
  const [role1,setRole1] = useState("")
  const [photo1,setPhoto1] = useState("")




  // start,end,location,link,status,address,city,country,assign,
  //           bind,documentfee,region,category,projectmanager,opendate,enddate,description


  const[test,setTest]=useState("")
  const [show, setShow] = useState(false);
  const[selectedOption,setSelectedOption] = useState("")
  const [status, setStatus] = useState(false);
  const kk = [1,0];
  const [value,setValue] = useState("")
 
  const[technical,setTechnical] = useState("")
  const[service,setService] = useState("")
  const[blog,setBlog] = useState("")
  const[report,setReport] = useState("")
  const[setting,setSetting] = useState("")
  const[others,setOthers] = useState("")


  const [empid,setEmpid] = useState("")
  const [fname,setFname] = useState("")
  const [mname,setMname] = useState("")
  const [lname,setLname] = useState("")
  const [email,setEmail] = useState("")
  const[phone,setPhone]=useState("")
    const[password,setPasword]=useState("")

  const [role,setRole] = useState("")
  const[Estatus,setEstatus]=useState("")
  const [gender,setGender] = useState("")
  const [username,setUsername] = useState("")
  const [end1,setEnd1] = useState("")
  const [mobile,setMobile] = useState("")
  const [link1,setLink1] = useState("")
  const [file1,setFile1] = useState("")
  const [status1, setStatus1] = useState(false);
  const [hh,setHh] = useState("")
  const [approve, setApprove] = useState(false);
  const Role = ["Admin", "Employee"]
  const [tender, setTender] = useState(false);
  const [privilage, setPrivilage] = useState(false);

  const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(userProfile())
// },[])
  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setShow(true)
    setHh(user._id)
    setEmpid(user.empid)
    setFname(user.fname)
    setLname(user.lname)
    setMname(user.mname)
    setEmail1(user.email)
  setPhone(user.mobile)
    setRole(user.role)
    setGender(user.gender)
    setEstatus(user.status)
    setLocation1(user.location)
    setLink1(user.link)
    setFile1(user.file)
    setStatus1(user.status)
  };

  const handleRequest1 = ()=>{
    const user = {
       
        fname,
      email,
   
      mobile,
      username,
      password,
      role,
    
      gender:selectedOption
       
    }
     
   dispatch(registerUser(user))

   setFname("");
   setEmail("")
   setMobile("")
   setUsername("")
   setPassword1("")
   setRole("")
  
   setGender ("")
  
}


  
  const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
  // console.log(currentUser);
  const AddEmployee = async (e) => {
    e.preventDefault();
    try {
      // eid,rid,oid,oname,
      // tenderno,tendername,priority,
      //  start,end,location,link,file:fileInputRef.current.files[0],status
      const formData = new FormData();
      formData.append("fname",fullname);
      formData.append("email", email);
      formData.append("gender", selectedOption);
      formData.append("mobile", mobile1);
      formData.append("username", username1);
      formData.append("password", password1);
      formData.append("role", role1);
      formData.append("pic", fileInputRef.current.files[0]);
    
   
      const res = await axios.post(
        "http://localhost:8005/empAdd",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

    
  useEffect(() =>{
    // string formatting: template literals are enclosed in backticks
    axios.get(`http://localhost:8005/findxvvvvvvvvvvv`)
          .then((res) =>{
            setEmployee(res.data);
          })
          .catch((err) =>{
            console.log("Error:" + err.message)
          });
  }, []);



  const registerRequest = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:8787/api/request", user).then(res => {
            if(res.status ===200){
              alert('The data is add successfully')
              // Push to /
              window.location.href = "/request";
            }else{
            alert('succes')
            }
          })
        console.log(res);
        dispatch({
            type: 'USER_REGISTER_SUCCESS'

        })
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAILED',
            payload: error
        })
    }
}


const deletePost = (id) => {
  console.log(id);

  axios.delete(`http://localhost:8005/delete/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


};
const handleRequest = ()=> {
  const obj = {
  
      hh,technical,service,blog,report,setting,others,
  
  }
 
 dispatch(UploadTask(obj))


}

    

 


const showDetail = (_id) =>
{

fetch(`http://localhost:8005/AllRequest/${_id}`)
.then(resposne=> resposne.json())
.then(res=>setApplicants(res))
}
const [editModal, setEditModal] = useState(false);
const [more, setMore] = useState(false);
const [request, setRequest] = useState(false);
const [organization, setOrganization] = useState(false);
const [edittOrg, setEditOrg] = useState(false);
const [tenderadd, setTenderAdd] = useState(false);
const [tendermore, setTenderMore] = useState(false);
const [statuss, setStatuss] = useState(false);
const [tenderedit, setTendEdit] = useState(false);
const [addemployee, setAddemployee] = useState(false);


const handleEdit = (hh) =>{
  setEditModal(true)
  setShow(false);

};

const handleStatus = (hh) =>{
  setStatuss(true)
  setShow(false);
}
const handleAppClose = () => {
  setApprove(false);
  setShow(true);
}
const handleAppClose1 = () => {
  setPrivilage(false);
  setShow(true);
}
const handleReqClose = () => {
  setEditModal(false);
  setShow(true);
}

const handleMoreClose = () => {
  setMore(false);
  setShow(true);
}
const handleTendClose = () => {
  setTender(false);
  setShow(true);
}
const handleTendAddClose = () => {
  setTenderAdd(false);
  setTender(true);
}
const handleOrgClose = () => {
  setOrganization(false);
  setTender(true);
}
const handleTendMoreClose = () => {
  setTenderMore(false);
  setTender(true);
}
const handleEditOrgClose = () => {
  setEditOrg(false);
  setOrganization(true);
}
const handleOrganization = () => {
  setOrganization(true);
  setTender(false);
}
const handleEditOrg = () => {
  setEditOrg(true);
  setOrganization(false);
}
const handleApprove = (hh) =>{
  setApprove(true);
  setShow(false);
}
const handleAddEmp = () =>{
  setAddemployee(true);
  // setShow(false);
}
const handleAddEmpClose = () =>{
  setAddemployee(false);
  // setShow(true);
}
const handlePrivilage = (hh) =>{
  setPrivilage(true)
  // setEid2(user1.eid)
  // setMobile2(user1.phone)
  // setUsername2(user1.username)
  // setGender2(user1.gender)
  // setTest2(user1._id)
  setShow(false);

};
const handleTenderMore = (hh) =>{
  setTenderMore(true);
  setTender(false);
}
const handleTender = () =>{
  setTender(true);
  setShow(false);
}
const handleTenderEdit = () =>{
  setTendEdit(true);
  setTender(false);
}
const handleMore = (hh) =>{
  setMore(true);
  setShow(false);
}
const handleTenderAdd = (hh) =>{
  setTenderAdd(true);
  setTender(false);
}


const [formValues, setFormValues] = useState({})

// define onChange to get form values
const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
 
  setFormValues(values => ({...values, [name]: value}))
}
const handleSubmit = (event) => {
  event.preventDefault();
  axios.put(
    `http://localhost:8005/update-employee/${hh}`, formValues)
    .then(res => {
      if(res.status ===200){
        alert('A record successfuly updated')
        // Push to /
        window.location.href = "/employee";
      }else{
        Promise.reject()
      }
    })
    .catch(err => alert('Something went wrong! ' +err.message))
    // Push to /
  
}

const addEmployee = () => {

}

const toggleSidebar = () => {
    const sidebar = document.querySelector("nav");
    sidebar.classList.toggle("close");
    localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
  }; 



  const [searchTerm, setSearchTerm] = useState("");


  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8005/findx")
  //     .then((res) => {
  //       setApplicants(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Data not found" + err.message);
  //     });
  // }, []);
  const [data, setData] = useState([]);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [expandedRow, setExpandedRow] = useState(null); // Track the expanded row
  const [filteredData, setFilteredData] = useState([]);
  const [columns, setColumns] = useState({
    empid: true, 
    pic: true, 
    fname: true,
    email: true,
    gender: true,
    username: true,
    role: true,
    mobile: true,
    status: true,
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
      (item.fname?.toLowerCase().includes(query.toLowerCase()) ||
      item.gender?.toLowerCase().includes(query.toLowerCase())||
      item.email?.toLowerCase().includes(query.toLowerCase())||
      item.mobile?.toLowerCase().includes(query.toLowerCase())||
      item.username?.toLowerCase().includes(query.toLowerCase())||
      item.role?.toLowerCase().includes(query.toLowerCase()))
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


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    // event.preventDefault();
  };


  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const percentScrolled = (scrolled / (document.body.clientHeight - window.innerHeight)) * 100;


    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const [isCollapsed1, setIsCollapsed1] = React.useState(false);   
    const [isCollapsed2, setIsCollapsed2] = React.useState(false);
    const [isCollapsed3, setIsCollapsed3] = React.useState(false);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
    const toggleCollapse1 = () => {
      setIsCollapsed1(!isCollapsed1);
    };
    const toggleCollapse2 = () => {
      setIsCollapsed2(!isCollapsed2);
    };
    const toggleCollapse3 = () => {
      setIsCollapsed3(!isCollapsed3);
    };
    const handleClick = () => {
      const elem = document.documentElement; // Get the root element of the document
    
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        // If the screen is already in fullscreen mode, exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        // If the screen is not in fullscreen mode, enter fullscreen
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      }
    };
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick1 = () => {
      setShowDropdown(!showDropdown);
    };

    const [showPopup, setShowPopup] = useState(false);

    const handleTogglePopup = () => {
      setShowPopup(!showPopup);
    };
    const [selectedDate, setSelectedDate] = useState(null);
    const [open, setOpen] = React.useState(false); 
 
    const handleClick5 = () => { 
      setOpen(!open); 
    }; 
  return (
    <div>

        <Sidebar/>
        <section class="dashboard">   

      <div class="top" style={{top:`10px`,dispaly:`inline`}}>
      <button class="uil uil-bars sidebar-toggle" onClick={toggleSidebar} style={{dispaly:`inline`}}></button>
     <ul className="ml-auto" style={{ display: `inline` }}>
      
      <li className="nav-item chats dropdown d-none d-sm-inline-block">
        <button className="nav-link" data-toggle="dropdown" onClick={handleClick1}>
          <i className="far fa-comments"></i>
          <span className="badge badge-danger navbar-badge" >3</span>
        </button>
        {showDropdown && (
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <div class="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">Call me whenever you can...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <div class="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <div class="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>)}
      </li>

 

      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>

      <li className="nav-item dropdown d-none d-sm-inline-block">
          <a
            className="nav-link"
            data-widget="fullscreen"
            href="#"
            role="button"
            onClick={handleClick}
          >
            <i className="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
        
        <li class="nav-item d-sm-inline-block">
    <a class="nav-link" data-widget="navbar-search" href="#" role="button">
      <i class="fas fa-search"></i>
    </a>
    <div class="navbar-search-block">
  
    </div>
  </li>
  
    </ul>
        {/* <div class="search-box">
          <i class="uil uil-search"></i>
          <input type="text" placeholder="Search here..." />
        </div> */}

      </div>
      <div class="scroll-line" style={{ width: percentScrolled + '%', zIndex:'3'}} />
      <div class="dash-content">

<div class="main-container">


<div class="xs-pd-20-10 pd-ltr-20">
  <br/>
  <br/>

      <Button variant="primary" style={{float:`right`}}  onClick={handleAddEmp}>
  Add Employee
</Button><br/>

<div>
         

         <div className="data-table-container">
 
         {/* <div className="column-visibility"> */}
       
        
         <div className="row" >
      <div className="col-md-6">
        <div className="dt-buttons btn-group flex-wrap">

          <button style={{fontSize:`medium`}} className="btn btn-primary buttons-pdf buttons-html5" tabIndex="0" aria-controls="example1" type="button"><span>
          <CSVLink
         data={getCSVData()} // Provide CSV data to the CSVLink component
         filename="table_data.csv"
        //  className="export-button"
       >
         Export to CSV
       </CSVLink>
            </span></button>
          <button className="btn btn-primary buttons-print" tabIndex="0" aria-controls="example1" type="button"><span>
          <button style={{color:`white`,fontSize:`medium`}} onClick={handlePrint}>
         Print Table
       </button>
            </span></button>
         
    
    <div className="btn-group">
    <button
      style={{ fontSize: 'medium' }}
      className="btn btn-primary buttons-collection dropdown-toggle buttons-colvis"
      type="button"
      aria-haspopup="true"
      aria-expanded={isDropdownOpen}
      onClick={toggleDropdown}
    >
      <span>Column visibility</span>
      <span className="dt-down-arrow"></span>
    </button>
    {/* style={{ top: '76px', left: '6.5px' }} */}
    {isDropdownOpen && (
      <div className="dt-button-collection" >
        <div className="dropdown-menu" role="menu">
          {Object.keys(columns).map((column) => (
            <a
              key={column}
              // className="dt-button dropdown-item buttons-columnVisibility active"
              tabIndex="0"
              aria-controls="example1"
              href="#"
              data-cv-idx={column}
            >
              <span>{column}</span>
            </a>
          ))}
        </div>
      </div>
    )}
  </div>

    </div></div>
  
  
{/*   
    <select>
  <option disabled>Select Columns:</option>
  {Object.keys(columns).map((column) => (
    <option key={column}>
         <label>
        <input 
          type="checkbox"
          checked={columns[column]}
          onChange={() => toggleColumnVisibility(column)}
        />
        {column} 
      </label>
    </option>
  ))}
</select> */}
      <div className="col-md-6">
       <input
             type="search" style={{float:`right`,width:`100%`,display:`inline` }}
             placeholder="Search by name or gender..."
             value={searchQuery}
             onChange={(e) => handleSearch(e.target.value)}
           /></div></div>
             {/* <FiFilter /> */}
         
    
       <table className="data-table1">
         {/* Table header */}
         <thead>
           <tr>
           {columns.empid && (
               <th onClick={() => handleSort('empid')}>
                 empid
                 {sortField === 'empid' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'empid' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
             {columns.pic && (
               <th onClick={() => handleSort('pic')}>
                 pic
                 {sortField === 'pic' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'pic' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
             {columns.fname && (
               <th onClick={() => handleSort('fname')}>
                 Full-Name
                 {sortField === 'fname' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'fname' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
            
               {columns.status && (
               <th onClick={() => handleSort('status')}>
                 Status
                 {sortField === 'status' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'status' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
 
 {columns.role && (
               <th onClick={() => handleSort('role')}>
                 Role
                 {sortField === 'role' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'role' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
            
               <th onClick={() => handleSort('progress')}>
                 Progress
                 {sortField === 'progress' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'progress' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
            
             
               <th >
                 Action
               </th>
             
           
           </tr>
         </thead>
         {/* Table body */}
         <tbody>
         {displayedData && displayedData.map((item) => (
             <React.Fragment key={item._id}>
               {/* Main row */}
               <tr onClick={() => handleRowToggle(item._id)}>
               {columns.empid && <td>{getRowToggleIcon(item._id)}{item.empid}</td>}
               {columns.pic && <td>
               <div class="multi-button">
                <img src={Imagess} class="imgemp" style={{width:`50px`, height:`50px`, borderRadius:`50%`}}/>
               
        <button class="editimg fas fa-edit"></button></div>
    </td>}{columns.fname && <td>{item.fname}</td>}
                 {columns.status && <td>{item.status}</td>}
                 {columns.role && <td>{item.role}</td>}
                 <td><div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: `50%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">50%</div>
</div></td>
                 <td><button class="btn btn-primary"   onClick={() => handleShow(item)} >
                  <i className="fa fa-plus"></i></button></td>
 
               </tr>
               {/* Expanded row */}
               {expandedRow === item._id && (
                 <tr>
                   <td colSpan={Object.keys(columns).filter((column) => columns[column]).length - 1}>
                    <strong>Email:</strong> &nbsp; &nbsp;&nbsp;{item.email}<br></br>
                    <strong>Mobile:</strong> &nbsp; &nbsp;&nbsp; {item.mobile}<br></br>
                    <strong>username:</strong> &nbsp; &nbsp;&nbsp; {item.username}<br></br>
                    <strong>gender:</strong> &nbsp; &nbsp;&nbsp;{item.gender}<br></br>
              
                   </td>
                 </tr>
               )}
             </React.Fragment>
           ))}
         </tbody>
       </table>
     </div>
       {/* Pagination */}
       <div className="pagination" style={{float:`right`}}>
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


          <Modal
        show={addemployee}
       onHide={handleAddEmpClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h5 class="modal-title" id="exampleModalLongTitle">{currentUser && currentUser[0] && currentUser[0].email}</h5>

        <form>
            <div class="form-group">
    <label for="EID">EID</label>
    <input type="text" class="form-control" id="EID" 
    
    onChange={(e)=>setEmpid(e.target.value)}
    placeholder="EID"/>
  </div>
  <div class="form-group">
    <label for="FullName">Full Name</label>
    <input type="text" class="form-control" id="FullName"  
   onChange={(e)=>setFname(e.target.value)}

    placeholder="Enter Full Name"/>
  </div>
  <div class="form-group">
    <label for="Email">Email</label>
    <input type="email" class="form-control" id="Email"  
   value={email}
      onChange={(e)=>setEmail(e.target.value)}
    placeholder="Enter Email"/>
  </div>
  <div class="form-group">
    <label for="Gender">Gender</label>
    <div className="col" style={{ display:"flex" }}>
           <div className="radio" >
          <label>
            <input
              type="radio"
              value="Male"
              checked={selectedOption === "Male"}
              onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Male
          </label>
        </div>
        <div className="radio" style={{ marginLeft:"15px" }}>
          <label>
            <input
              type="radio"
              value="Female"
              checked={selectedOption === "Female"}
              onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Female
          </label>
        </div>
           </div>  
             </div>
  <div class="form-group">
    <label for="Phone">Phone-Number</label>
    <input type="text" class="form-control" id="Phone" 
 onChange={e => setMobile(e.target.value)}
 value={mobile}
     placeholder="Enter Phone-Number"/>
  </div>
  <div class="form-group">
    <label for="User">User-Name</label>
    <input type="text" class="form-control" id="User"  
 
   onChange={(e)=>setUsername(e.target.value)}
   value={username}
    placeholder="Enter User-Name"/>
  </div>
  <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="Password" 
  
    onChange={(e)=>setPasword(e.target.value)}
    value={password}
    placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="Role">Role</label>
    <select value={role} id="selectId"  class="form-control" onChange={e => setRole(e.target.value)}>
                 
                 {Role.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
                 </select>  </div>
                 <div class="form-group">
            <label for="recipient-file" class="col-form-label">Photo:</label>
            <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>
          </div>
  

  <div class="modal-footer">
        <button type="button" onClick={handleAddEmpClose} class="btn btn-danger">Close</button>
        <button type="button" onClick={() => handleRequest1()} class="btn btn-primary">Save changes</button>
   </div>
</form>
</Modal.Body>

</Modal>





  <Modal
        show={show}
       onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>More For {hh} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <table class="table table-striped table-sm">
                <tr>
                <th>Gender</th>
                                <td>{gender}</td></tr>
                           <tr>
                                <th>Phone -Number</th>
                                <td>{phone}</td>
                            </tr>
                            <tr>
                                <th>User-Name</th>
                                <td>{username}</td>
                                <br/>
                                </tr>
                            <tr colspan="2">
                            {/* <th>Actions</th>
                                <td>  onClick={() => handleedit(teste)}

                            </tr>
                    </table> */}
                    <button type="button" class="btn btn-primary"  onClick={() =>handleEdit(hh)}>
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;
<button className='btn btn-danger' onClick={() => deletePost(hh)}> <i className='fas fa-trash'></i></button>
&nbsp;&nbsp;&nbsp;
<button type="button" class="btn btn-secondary" onClick={()=> handleApprove(hh)}>
Approve
</button>&nbsp;&nbsp;&nbsp;
<button type="button" class="btn btn-warning" onClick={() =>handlePrivilage(hh)}>
Privilage
</button>&nbsp;&nbsp;&nbsp;
<button type="button" class="btn btn-success" onClick={() =>handleStatus(hh)}>Status</button>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal
        show={tender}
       onHide={handleTendClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Tender  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
 
        <div class="col-sm-9"><span type="button" style={{color:`white`}} > 
        <a  href="#" class="btn btn-primary">
			 <span type="button" style={{color:`white`}} class="" onClick={() =>handleTenderAdd(hh)}>
                  <i class="fa fa-plus" style={{color:`white`}} aria-hidden="true"></i >  Add-Tender 
                </span></a>&nbps;
                <a  href="#" class="btn btn-success">
			 <span type="button" style={{color:`white`}} class="" onClick={() =>handleOrganization()}>
                  <i class="fa fa-plus" style={{color:`white`}} aria-hidden="true"></i >  Add-Org 
                </span></a>&nbps;
                <a  href="#" class="btn btn-success">
			 <span type="button" style={{color:`white`}} class="" onClick={() =>handleEditOrg()}>
                  <i class="fa fa-eye" style={{color:`white`}} aria-hidden="true"></i >  View-Org 
                </span></a>
                </span>
			 </div><br/>
        <div class="pb-20">
							<table
								class="table hover  data-table-export nowrap"
							>
								<thead>
									<tr>
										<th class="table-plus datatable-nosort">ID</th>
										<th>EID</th>
										<th>Org ID</th>
										<th>Priority</th>
										<th>Status</th>
                     <th>File</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="table-plus">Gloria F. Mead</td>
										<td>25</td>
										<td>Sagittarius</td>
										<td>2829 Trainer Avenue Peoria, IL 61602</td>
										<td>29-03-2018</td><td>29-03-2018</td>
                    <td>
                      <button type="button" class="btn" onClick={() =>handleTenderMore(hh)}>
                      <i class="icon-copy fi-plus"></i>
                </button>
                </td>
									</tr>
									
								</tbody>
							</table>
						</div>
 
  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleTendClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


<Modal
show={editModal}
onHide={handleReqClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Edit Request {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>
<form onSubmit={handleSubmit}>
            <div class="form-group">
    <label for="EID">EID</label>
    <input type="text" class="form-control" id="EID"name="empid" onChange={handleChange} defaultValue={empid} placeholder="EID"/>
  </div>
  <div class="form-group">
    <label for="FullName">Full Name</label>
    <input type="text" class="form-control" id="FullName" name='fname'   onChange={handleChange} defaultValue={fname} placeholder="Enter Full Name"/>
  </div>

  <div class="form-group">
    <label for="Gender">Gender</label>
    <input type="text" class="form-control"name="gender" id="Gender"onChange={handleChange} defaultValue={gender} placeholder="Enter Gender"/>
  </div>
  <div class="form-group">
    <label for="Phone">Phone-Number</label>
    <input type="text" class="form-control"name="mobile" id="Phone"onChange={handleChange} defaultValue={phone} placeholder="Enter Phone-Number"/>
  </div>
  <div class="form-group">
    <label for="User">User-Name</label>
    <input type="text" class="form-control"name='username' id="User"  onChange={handleChange} defaultValue={username} placeholder="Enter User-Name"/>
  </div>
 
  <div class="form-group">
    <label for="Role">Role</label>
    <input type="text" class="form-control"name="role" id="Role" onChange={handleChange} defaultValue={role} placeholder="Enter Role"/>
  </div>


      <div class="modal-footer">
        <Button variant="secondary" onClick={handleReqClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-primary" >Save changes</button>
      </div>
        </form>
  
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>
<Modal
show={privilage}
onHide={handleAppClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title> Privilage {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

<div class="form-group">
		
    <div class="col-md-12">
      <div class="custom-control custom-checkbox mb-3">
        
        <input
        
        
        value={1}
        checked={technical}
        onChange={(e)=>setTechnical(e.target.value)}
        type="checkbox" class="custom-control-input" id="Technical"/>
        <label class="custom-control-label" for="Technical">Technical</label>
      </div>
      <div class="custom-control custom-checkbox mb-3">
        <input
        
        value={1}
        checked={service}
        onChange={(e)=>setService(e.target.value)}
        type="checkbox" class="custom-control-input" id="Service"/>
        <label class="custom-control-label" for="Service">Service</label>
      </div>
      <div class="custom-control custom-checkbox mb-3">
        <input
              value={1}
              checked={blog}
              onChange={(e)=>setBlog(e.target.value)}
        type="checkbox" class="custom-control-input" id="Blog"/>
        <label class="custom-control-label" for="Blog">Blog</label>
      </div>
      <div class="custom-control custom-checkbox mb-3">
        <input
        
        value={1}
        checked={report}
        onChange={(e)=>setReport(e.target.value)}
        type="checkbox" class="custom-control-input" id="Report"/>
        <label class="custom-control-label" for="Report">Report</label>
      </div>
        <div class="custom-control custom-checkbox mb-3">
        <input
        
        value={1}
        checked={setting}
        onChange={(e)=>setSetting(e.target.value)}
        type="checkbox" class="custom-control-input" id="Setting"/>
        <label class="custom-control-label" for="Setting">Setting</label>
      </div>
      <div class="custom-control custom-checkbox mb-3">
        <input       value={1}
        checked={others}
        onChange={(e)=>setOthers(e.target.value)}
        
        
        
        
        type="checkbox" class="custom-control-input" id="Others"/>
        <label class="custom-control-label" for="Others">Others</label>
      </div>
    </div>
    
  
     <div class="modal-footer">
     <Button variant="secondary" onClick={handleAppClose1}>
    Close
  </Button>     
  <button  class="btn btn-succes"onClick={() => handleRequest()} >Approve</button>    </div>
</div>

  {/* onClick={() => handleActivity()} */}
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>

<Modal
show={approve}
onHide={handleAppClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>(Approve / Reject) Request {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

  <form   onSubmit={handleSubmit}  >
            <div class="form-group">
    <label for="EID">Current Status</label>
    <input type="text" defaultValue={status1} style={{backgroundColor:"teal" ,color:"white"}} readOnly  class="form-control" id="EID" placeholder="Active"/>
  </div> 
  <label for="EID">Action</label>

  <select  id="selectId"  class="form-control"   name='status'  onChange={handleChange}>
                 
                 {kk.map((item) => (
                 <option value={item} key={item}>
                   {" "}
                   {item}{" "}
                 </option>
               ))}
                </select> 
  <div class="modal-footer">
  <Button variant="secondary" onClick={handleAppClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-primary" >Approve</button>
      </div>
  </form>
  {/* onClick={() => handleActivity()} */}
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>

<Modal
        show={tendermore}
       onHide={handleTendMoreClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>More For Tender</Modal.Title>
        </Modal.Header>
        <Modal.Body>

      PLC-β enzymatically cleaves the membrane phospholipid phosphoatidylinositol-4,5-bisphopshate (PIP2) into diacylglycerol (DAG) and inositol trisphosphate (IP3). 
      Both DAG and IP3 act as important second messengers. 
      DAG remains in the membrane where it recruits and activates protein kinase C.
      <br/><br/>
      <button type="button" class="btn btn-primary"  onClick={() =>handleTenderEdit()}>
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;
<button className='btn btn-danger' > <i className='fas fa-trash'></i></button>
&nbsp;&nbsp;&nbsp;
{/* onClick={() => deleteMore()} */}
      </Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleTendMoreClose}>
    Close
  </Button> 
 
</Modal.Footer>
</Modal>	

<Modal
show={organization}
onHide={handleOrgClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Add Organization {currentUser && currentUser[0] && currentUser[0].email} {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

  
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>


<Modal
show={tenderadd}
onHide={handleTendAddClose}
backdrop="static"
keyboard={false}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Add Tender for request {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>
      <form>
      
        </form>
  
    </Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>
</div>
</div>
    </div> 
    <footer class="main-footer">
    <strong>Copyright © 2023-2025 <a href="#">Betaplc</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.2.0
    </div>
  </footer>
    </section>
    </div> 
  )
}

export default Employee