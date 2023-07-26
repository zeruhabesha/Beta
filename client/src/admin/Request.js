/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';
// import {Link,useHistory} from 'react-router-dom';
import {registerUser} from './action/employee_action';
import {getEmployee} from './action/employee_action';

// import {userProfile} from "./action/user_action"
import {registerTender} from './action/employee_action';
// import { Role } from '../../Utills';
import axios from 'axios';
import {Button,Modal} from "react-bootstrap"
import {useParams} from 'react-router-dom'
// import SidebarAdmin from './components/SidebarAdmin';
// import HomeAdmin from './components/HomeAdmin';
import './table.css';
import './table.js';
import { Link} from 'react-router-dom';
// import Footer from './components/Footer';
// import TenderCreate from './Request/TenderCreate';
// import Pagination from 'react-bootstrap/Pagination';
import Sidebar from './Sidebar';
// import Search from 'react-bootstrap/Search';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import Toastr from 'toastr';
const Request = () => {
  const dispatch = useDispatch()
  const [student, setStudent] = useState({})
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setStudent(values => ({...values, [name]: value}))
  }
  const handleExpandRow = (row) => {
    row.expanded = !row.expanded;
  };


  const [eid,setEid] = useState("")
  const [rid,setRid] = useState("")
  const [oid,setOid] = useState("")
  const fileInputRef = useRef(null);
const [employee,setEmployee]= useState([]);
  const[oname,setOname]=useState("")
  const [tenderno,setTenderno] = useState("")
  const[tendername,setTendername]=useState("")
  const [priority,setPriority] = useState("")
  const {id} = useParams();
  const [applicants, setApplicants] = useState([]);
  const [start,setStart] = useState("")
  const [end,setEnd] = useState("")
  const [location,setLocation] = useState("")
  const [link,setLink] = useState("")
  // const [file,setFile] = useState("")
  const [address,setAddress] = useState("")
  const [city,setCity] = useState("")
  const [country,setCountry] = useState("")
  const [assign,setAssign] = useState("")
  const [bind,setBind] = useState("")
  const [documentfee,setDocumentFee] = useState("")
  const [region,setRegion] = useState("")
  const [category,setCatgory] = useState("")
  const [projectmanager,setProjectManagr] = useState("")
  const [description,setDescription] = useState("")



  // start,end,location,link,status,address,city,country,assign,
  //           bind,documentfee,region,category,projectmanager,opendate,enddate,description


  const[test,setTest]=useState("")
  const [show, setShow] = useState(false);
  const[selectedOption,setSelectedOption] = useState("")
  const [status, setStatus] = useState(false);
  const kk = ["Approve","DisApprove"];
  const [value,setValue] = useState("")
  const [alltender,setAlltender] =  useState([]);
  const kk1 = [{label:"yellow",value:1,lable1:"sample1"},


  {label:"red ",value:1,lable1:"sample1"},
  {label:"green",value:2,lable1:"sample2"},
  {label:"teal",value:3,lable1:"sample3"},
  {label:"teal",value:5,lable1:"sample4"},
  {label:"teal",value:4,lable1:"sample5"},

];
function handleSelect(applicants){
  setValue(applicants.rid)
  // setIi(applicants.oid)
}
  const [eid1,setEid1] = useState("")
  const [rid1,setRid1] = useState("")
  const [rid2,setRid2] = useState("")
  const [oid1,setOid1] = useState("")
  const[oname1,setOname1]=useState("")
  const [tenderno1,setTenderno1] = useState("")
  const[tendername1,setTendername1]=useState("")
  const [priority1,setPriority1] = useState("")
  const [start1,setStart1] = useState("")
  const [end1,setEnd1] = useState("")
  const [location1,setLocation1] = useState("")
  const [link1,setLink1] = useState("")
  const [file1,setFile1] = useState("")
  const [status1, setStatus1] = useState(false);
  const [hh,setHh] = useState("")
  const [hh2,setHh2] = useState("")
  const [tid,setTid] = useState("")
  const [oid2,setOid2] = useState("")
  const [tenderno2,setTenderno2] = useState("")
  const [oname2,setOname2] = useState("")
  const [tendername2,setTendername2] = useState("")
  const [start2,setStart2] = useState("")
  const [end2,setEnd2] = useState("")
  const [address2,setAddress2] = useState("")
  const [city2,setCity2] = useState("")
  const [country2,setCountry2] = useState("")
  const [assign2,setAssign2] = useState("")
  const [bind2,setBind2] = useState("")
  const [region2,setRegion2] = useState("")
  const [projectmanager2,setProjectmanager2] = useState("")
  const [description2,setDescription2] = useState("")
  const [documentfee2,setDocumentFee2] = useState("")

  const [approve, setApprove] = useState(false);
  const [tender, setTender] = useState(false);

 
  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setShow(true)
    setHh(user._id)
    setRid1(user.rid)
    setEid1(user.eid)
    setOid1(user.oid)
    setOname1(user.oname)
    setTenderno1(user.tenderno)
  setTendername1(user.tendername)
    setPriority1(user.priority)
    setStart1(user.start)
    setEnd1(user.end)
    setLocation1(user.location)
    setLink1(user.link)
    setFile1(user.file)
    setStatus1(user.status)
  };
  const handleClose2 = () => setShow(false);
  const handleShow1 = (user1) => {
    setHh2(user1._id)
    setRid2(user1.rid)
    setTid(user1.tid)
    setOid2(user1.oid)
    setOname2(user1.oname)
    setTendername2(user1.tendername)
    setTenderno2(user1.tenderno)
    setStart2(user1.start)
    setEnd2(user1.end)
    setAddress2(user1.address)
    setCity2(user1.city)
    setCountry2(user1.country)
    setAssign2(user1.assign)
    setBind2(user1.bind)
    setRegion2(user1.region)
    setProjectmanager2(user1.projectmanager)
    setDescription2(user1.description)
    setDocumentFee2(user1.documentfee)


    setTenderMore(true)
    
  
  };
  const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
  // console.log(currentUser);
  const addCv = async (e) => {
    e.preventDefault();
    try {
      // eid,rid,oid,oname,
      // tenderno,tendername,priority,
      //  start,end,location,link,file:fileInputRef.current.files[0],status
      const formData = new FormData();
      formData.append("eid",eid);
      formData.append("oid", oid);
      formData.append("oname", oname);
      formData.append("tenderno", tenderno);
      formData.append("tendername", tendername);
      formData.append("priority", priority);
      formData.append("start", start);
      formData.append("end", end);
      formData.append("location", location);
      formData.append("file", fileInputRef.current.files[0]);
      formData.append("link",link);
      const res = await axios.post(
        "http://localhost:8005/api/request",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

    
  useEffect(() =>{
    // string formatting: template literals are enclosed in backticks
    axios.get(`http://localhost:8005/api/getTender`)
          .then((res) =>{
            setAlltender(res.data);
          })
          .catch((err) =>{
            console.log("Error:" + err.message)
          });
  }, [id]);



  const registerRequest = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:8005/api/request", user).then(res => {
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
    
      axios.delete(`http://localhost:8005/api/delete/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    
   
    };
    const deleteTender = (id) => {
      console.log(id);
    
      axios.delete(`http://localhost:8005/api/delete-tender/${id}`)
        .then((res) => 
        
        console.log(res))
        .catch((err) => console.log(err));
    
   
    };


    

   const handleRequest = () =>{
        const tender = {
          rid:rid1,
           eid:eid1,
           oid:oid1,
           oname:oname1,
           tenderno,tendername,priority,
            start,end,location,link,status,address,city,country,assign,
            bind,documentfee,region,category,projectmanager,start,end,description,
        }
       dispatch(registerTender(tender))
       setEid("")
       setRid("");
       setOid("")
       setOname("")
       setTenderno("")
       setTendername("")
       setPriority("")
       setStart("")
       setEnd("")
       setLocation("")
       setLink("")
      
       setStatus("")
       setAddress("")
       setCity("")
       setCountry("")
       setAssign("")
       setBind("")
       setDocumentFee("")
       setRegion("")
       setCatgory("")
       setProjectManagr("")
       setStart("")
       setEnd("")
       setDescription("")

    }

useEffect(() => {
  axios
    .get("http://localhost:8005/api/requests")
    .then((res) => {
      setApplicants(res.data);
    })
    .catch((err) => {
      console.log("Data not found" + err.message);
      // console.log(currentUser);
    }, [id]);
  //console.log(applicants);
});
useEffect(() =>{
  // string formatting: template literals are enclosed in backticks
  axios.get(`http://localhost:8005/findx`)
        .then((res) =>{
          setEmployee(res.data);
        })
        .catch((err) =>{
          console.log("Error:" + err.message)
        });
}, []);

const showDetail = (_id) =>
{

fetch(`http://localhost:8005/AllRequest/${_id}`)
.then(resposne=> resposne.json())
.then(res=>setApplicants(res))
}
const [editModal, setEditModal] = useState(false);
const [editTender, setEditTender] = useState(false);
const [more, setMore] = useState(false);
const [request, setRequest] = useState(false);
const [organization, setOrganization] = useState(false);
const [edittOrg, setEditOrg] = useState(false);
const [tenderadd, setTenderAdd] = useState(false);
const [tendermore, setTenderMore] = useState(false);
const [tenderedit, setTendEdit] = useState(false);
const handleEdit = (hh) =>{
  setEditModal(true)
  setShow(false);

};
const handleEdit1 = (hh2) =>{
  setEditTender(true)
  setShow(true);

};
const handleAppClose = () => {
  setApprove(false);
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
const handleTendMoreClose1 = () => {
  setTenderMore(false);
  setEditTender(false);
  
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
// for tenders Modal Action
const handleTenderMore = (user1) =>{
  setTenderMore(true);
  setTender(false);
  setHh2(user1._id)
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
    `http://localhost:8005/api/update/${hh}`, formValues)
    .then(res => {
      if(res.status ===200){
        alert('A record successfuly updated')
        // Push to /
        window.location.href = "/request";
      }else{
        Promise.reject()
      }
    })
    .catch(err => alert('Something went wrong! ' +err.message))
    // Push to /
    window.location.href = "/request";
}
const [formValues1, setFormValues1] = useState({})

// define onChange to get form values
const handleChange1 = (event) => {
  const name = event.target.name;
  const value = event.target.value;
 
  setFormValues1(values => ({...values, [name]: value}))
}
const handleSubmit1 = (event) => {
  event.preventDefault();
  axios.put(
    `http://localhost:8005/api/update-tender/${hh2}`, formValues1)
    .then(res => {
      if(res.status ===200){
        alert('A record successfuly updated')
        // Push to /
        window.location.href = "/request";
      }else{
      alert("error")
      }
    })
    .catch(err => alert('Something went wrong! ' +err.message))
    // Push to /
    window.location.href = "/request";
}
const toggleSidebar = () => {
  const sidebar = document.querySelector("nav");
  sidebar.classList.toggle("close");
  localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
}; 



const [message, setMessage] = useState('');

const handleSucess= () => {
  Toastr.options = {
    positionClass: 'toast-top-right',
    closeButton: true,
    progressBar: true,
    preventDuplicates: true,
    timeOut: 3000, // milliseconds
  };
  // Toastr.danger('This is a danger message', 'Danger');
  // setMessage('');
  Toastr.success('This is a success message', 'Success');
  setMessage('');
};
const handleDanger = () => {
  Toastr.options = {
    positionClass: 'toast-top-right',
    closeButton: true,
    progressBar: true,
    preventDuplicates: true,
    timeOut: 3000, // milliseconds
  };
  
  Toastr.error('This is a danger message', 'Danger');
  setMessage('');
};
  return (
    <div>

<Sidebar/>
        <section class="dashboard">
      <div class="top">
      <button class="uil uil-bars sidebar-toggle" onClick={toggleSidebar}>
                 {/* <i ></i> */}
                 </button>
        <div class="search-box">
          <i class="uil uil-search"></i>
          <input type="text" placeholder="Search here..." />
        </div>

      </div>
      <br/> <br/> <br/> <br/>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addrequest">
  Add Request
</button>
{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Employee Status
</button> table hover  data-table-export nowraptable-plus datatable-nosort*/}
<div class="card-box mb-30">
						<div class="pd-20">
							<h4 class="text-blue h4">Request</h4>
						</div>
						<div class="pb-20">
							<table
								class=""
							>
								<thead>
									<tr>
										<th class="">ID</th>
										<th>EID</th>
										<th>Org ID</th>
										<th>Priority</th>
										<th>Status</th>
                    <th>File</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
                {applicants.map((user, i) =>(
        <tr key={user._id}>
										<td class="table-plus">{user.rid}</td>
										<td>{user.eid}</td>
										<td>{user.oid}</td>
										<td>{user.oname}</td>
										<td>{user.tenderno}</td>
                    <td>{user.tendername}</td>
                    <td>
 <button class="btn btn-light"   onClick={() => handleShow(user)} ><i className="fa fa-plus"></i></button>
              </td>
</tr>  ))}
								</tbody>
							</table>
						</div>
					</div>
          <div>
      <button onClick={handleSucess}>Click me</button>
      <button onClick={handleDanger}>Click1 me</button>
      <p>{message}</p>
    </div>

<div class="modal fade" id="addrequest" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add Request</h5><br></br>
        <h5 class="modal-title" id="exampleModalLongTitle">Add Request{currentUser && currentUser[0] && currentUser[0].email}</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
 
			<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
 
            <form>
            <div class="form-group">
    <label for="RID">RID</label>
    <input type="text" class="form-control" id="RID"  placeholder="RID"
     value={rid} onChange={(e)=>setRid(e.target.value)}
   />
  </div>
            <div class="form-group">
    <label for="EID">EID</label>
    <input type="text" class="form-control" id="EID"  placeholder="EID"
    value={eid} onChange={(e)=>setEid(e.target.value)}/>
  </div>
    <div class="form-group">
    <label for="OrgID">Org ID</label>
    <input type="text" class="form-control" id="OrgID"  placeholder="Org ID"
    value={oid} onChange={(e)=>setOid(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="OrgName">Org Name</label>
    <input type="text" class="form-control" id="OrgName"  placeholder="Org Name"
    value={oname} onChange={(e)=>setOname(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="TenderNo">Tender No</label>
    <input type="text" class="form-control" id="TenderNo"  placeholder="Enter Tender No"
    value={tenderno} onChange={(e)=>setTenderno(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="TenderName">Tender Name</label>
    <input type="text" class="form-control" id="TenderName"  placeholder="Enter Tender Name"
    value={tendername} onChange={(e)=>setTendername(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="Priority">Priority</label>
    <input type="email" class="form-control" id="Priority"  placeholder="Enter Priority"
    value={priority} onChange={(e)=>setPriority(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="StartDate">Start-Date</label>
    <input type="date" class="form-control" id="StartDate"  placeholder="Enter Start-Date"
    value={start} onChange={(e)=>setStart(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="EndDate">End-Date</label>
    <input type="date" class="form-control" id="EndDate"  placeholder="Enter End-Date"
    value={end} onChange={(e)=>setEnd(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="Location">Location</label>
    <input type="text" class="form-control" id="Location" placeholder="Location"
    value={location} onChange={(e)=>setLocation(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="Link">Link</label>
    <input type="text" class="form-control" id="Link"  placeholder="Enter Link"
    value={link} onChange={(e)=>setLink(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="Request">File</label>
    <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>

  </div>
  

  <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" 
       onClick={addCv}
        >Save changes</button>
   </div>
</form>
						</div>
					</div>
              

</div>
</div>
</div>
</div>


	





  <Modal
        show={show}
       onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>More For {hh} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table class="table table-striped table-sm">
                <tr>
                                <th>Priority</th>
                                <td>{priority1}</td></tr>
                            <tr>
                                <th>Start-Date</th>
                                <td>{start1}</td>
                            </tr>
                            <tr>
                                <th>End-Date</th>
                                <td>{end1}</td>
                                </tr>
                                <tr>
                                <th>Location</th>
                                <td>{location1}</td>
                            </tr>
                            <tr>
                                <th>Link</th>
                                <td>{link1}</td>
                            </tr>
                            <tr>
                                <th>File</th>
                                <td>{file1}</td>
                            </tr>
                                <br/>
                            <tr colspan="2">
                            {/* <th>Actions</th>
                                <td>  onClick={() => handleedit(teste)}*/}

                            </tr>
                    </table>
                    <button type="button" class="btn btn-primary"  onClick={() =>handleEdit(hh)}>
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;
<button className='btn btn-danger' onClick={() => deletePost(hh)}> <i className='fas fa-trash'></i></button>
&nbsp;&nbsp;&nbsp;
<button type="button" class="btn btn-secondary" onClick={()=> handleApprove(hh)}>
Approve
</button>&nbsp;&nbsp;&nbsp;
<button type="button" class="btn btn-warning" onClick={() =>handleTender(hh)}>
Tender
</button>&nbsp;&nbsp;&nbsp;
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
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
        // aria-labelledby="contained-modal-title-vcenter"
        // centered
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
                {alltender.map((user1, i) =>(
        <tr key={user1._id}>
										<td class="table-plus" style={{backgroundColor:"teal",color:"white"}}  >{user1.tid}</td>
										<td>{user1.empid}</td>
										<td>{user1.oid}</td>
										<td>{user1.oname}</td>
										<td>{user1.status}</td>
                    <td>{user1.file}</td>
                    <td>
                    <button type="button" class="btn btn-primary" style={{backgroundColor:"teal",color:'white'}} onClick={() =>handleShow1(user1)}>
                        
                      <i class="icon-copy fi-plus"></i>
                </button>
                
                </td>
</tr>  ))}
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

  <form onSubmit={handleSubmit} method="POST">
            <div class="form-group">
    <label for="EID">RID</label>
    <input type="text" class="form-control" id="EID"  value="" onChange={handleChange} placeholder="RID"/>
  </div>
  <div class="form-group">
    <label for="FullName">EID</label>
    <input type="text" class="form-control"  name="eid"   defaultValue={eid1} id="FullName"  onChange={handleChange} placeholder="Enter EID"/>
  </div>
  <div class="form-group">
    <label for="text">Org-ID</label>
    <input type="text" class="form-control" id="Email" defaultValue={oid1} name='oid'  onChange={handleChange}  placeholder="Enter OID"/>
  </div>
  <div class="form-group">
    <label for="Gender">Org-Name</label>
    <input type="text" class="form-control" id="Gender" defaultValue={oname1} name='oname'  onChange={handleChange} placeholder="Enter Oname"/>
  </div>
  <div class="form-group">
    <label for="Phone">Tender-No</label>
    <input type="text" class="form-control" id="Phone"defaultValue={tenderno1} name='tenderno'  onChange={handleChange} placeholder="Enter Tender-No"/>
  </div>
  <div class="form-group">
    <label for="User">Tender-Name</label>
    <input type="text" class="form-control" id="User" defaultValue={tendername1} name="tendername" onChange={handleChange} placeholder="Enter Tender-Name"/>
  </div>
  <div class="form-group">
    <label for="Password">Priority</label>
    <input type="taxt" class="form-control" id="Password"  defaultValue={priority1} name='priority' onChange={handleChange}  placeholder="Priority"/>
  </div>
  <div class="form-group">
    <label for="Role">Start-Date</label>
    <input type="date" class="form-control" id="Role" defaultValue={start1} name='startdate'  onChange={handleChange} placeholder="Enter Start"/>
  </div>
  <div class="form-group">
    <label for="Photo">End-Date</label>
    <input type="date" class="form-control" id="Photo"  defaultValue={end1} name='enddate'onChange={handleChange}  placeholder="Enter End"/>
  </div>
  <div class="form-group">
    <label for="Password">Location</label>
    <input type="text" class="form-control" id="Password" defaultValue={location1} name='location' onChange={handleChange}  placeholder="Location"/>
  </div>
  <div class="form-group">
    <label for="Role">Link</label>
    <input type="text" class="form-control" id="Role" defaultValue={link1} name='link' onChange={handleChange} placeholder="Enter Link"/>
  </div>
  {/* <div class="form-group">
    <label for="Photo">File</label>
    <input type="file" class="form-control" id="Photo"  value="" onChange={handleChange} placeholder="Enter File"/>
  </div> */}


      <div class="modal-footer">
      <Button variant="secondary" onClick={handleReqClose}>
    Close
  </Button> 
          <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
        </form>
  
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>

<Modal
show={editTender}
onHide={handleTendMoreClose1}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Edit Tenders {tid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<form onSubmit={handleSubmit1} method="POST">
        <div class="row">
        <div class="col-md-6">
 <div class="form-group">
    <label for="TID">TID</label>
    <input type="text" class="form-control"defaultValue={tid}  name='tid' id="FullName" readOnly onChange={handleChange1}   placeholder="TID"/>
  </div>
  <div class="form-group">
    <label for="FullName">RID</label>
    <input type="text" defaultValue={rid2} name='rid'     onChange={handleChange1} readOnly
 class="form-control" id="FullName"  placeholder="Enter RID"/>
  </div>
  <div class="form-group">
    <label for="Email">Tender-No</label>
    <input type="text"defaultValue={tenderno2}name='tenderno'  onChange={handleChange1} class="form-control" id="Email"  placeholder="Enter Tender-No"/>
  </div>
  <div class="form-group">
    <label for="Gender">Org-ID</label>
   
                 
              

  
    <input type="text" class="form-control"defaultValue={oid2} name='oid'  onChange={handleChange1} id="Gender"  placeholder="Enter Org-ID"/>
  </div>

  <div class="form-group">
    <label for="Phone">Org-Name</label>
    <input type="text" class="form-control"defaultValue={oname2}name='oname' onChange={handleChange1} id="Phone"  placeholder="Enter Org-Name"/>
  </div>
  <div class="form-group">
    <label for="User">Address</label>
    <input type="text" class="form-control" id="User"defaultValue={address2} name='address' onChange={handleChange1}  placeholder="Enter Address"/>
  </div>
  <div class="form-group">
    <label for="Password">City</label>
    <input type="text" class="form-control" defaultValue={city2} onChange={handleChange1} name='city'  id="Password" placeholder="City"/>
  </div>
  <div class="form-group">
    <label for="Role">Country</label>
    <input type="text" class="form-control" value={country2} onChange={handleChange1} name='country' id="Role"  placeholder="Enter Country"/>
  </div>
  </div> <div class="col-md-6">
  <div class="form-group">
  <label for="Photo">Assign-Project-Leader</label>
    <select value={assign} id="selectId"  class="form-control" onChange={e => setAssign(e.target.value)}>
                 
                 {employee.map((item) => (
                  <option value={item.fname} key={item}>
                    {" "}
                    {item.fname}{" "}
                  </option>
                ))}
                 </select>
                 
                   </div>
  <div class="form-group">
    <label for="Photo">Bid-Bind</label>
    <input type="text" class="form-control"  defaultValue={bind2} id="Photo"onChange={handleChange1}  name='bind' placeholder="Enter Bid-Bind"/>
  </div>
  <div class="form-group">
    <label for="Photo">Document-Fee</label>
    <input type="text" class="form-control"defaultValue={documentfee2} id="Photo"onChange={handleChange1} name='documentfee'   placeholder="Enter Document-Fee"/>
  </div>
  <div class="form-group">
    <label for="Photo">Region</label>
    <input type="text" class="form-control"defaultValue={region2} name='region' id="Photo"onChange={(e)=>setRegion(e.target.value)}   placeholder="Enter Region"/>
  </div>
  <div class="form-group">
    <label for="Photo">Category</label>
    <input type="text" class="form-control" value={category} id="Photo"  onChange={handleChange1}   placeholder="Enter Category"/>
  </div>
  <div class="form-group">
    <label for="Photo">Project-Manager</label>
    <input type="text" class="form-control" defaultValue={projectmanager2} name='projectmanager' id="Photo"onChange={handleChange1}  placeholder="Enter Project-Manager"/>
  </div>
  <div class="form-group">
    <label for="Photo">Open-Date</label>
    <input type="date" class="form-control"defaultValue={start2} name='start' id="Photo" onChange={handleChange1}   placeholder="Enter Open-Date"/>
  </div>
  <div class="form-group">
    <label for="Photo">Close-Date</label>
    <input type="date" class="form-control"defaultValue={end2} name='end' id="Photo" onChange={handleChange1} placeholder="Enter Close-Date"/>
  </div>
  <div class="form-group">
    <label for="Photo">Description</label>
    <textarea type="text" class="form-control" defaultValue={description2} name='description' onChange={handleChange1}id="Photo"  placeholder="Enter Description"/>
  </div> </div></div>
  

      <div class="modal-footer">
      <Button variant="secondary" onClick={handleTendAddClose}>
    Close
  </Button> 
  <button type="submit" class="btn btn-success">Save changes</button>
      </div>
        </form>
  
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
       onHide={handleOrgClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>More For Tender {tid} {hh2}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

      PLC-β enzymatically cleaves the membrane phospholipid phosphoatidylinositol-4,5-bisphopshate (PIP2) into diacylglycerol (DAG) and inositol trisphosphate (IP3). 
      Both DAG and IP3 act as important second messengers. 
      DAG remains in the membrane where it recruits and activates protein kinase C.
      <br/><br/>
      <button type="button" class="btn btn-primary"  onClick={() =>handleEdit1(hh2)}>
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;
<button className='btn btn-danger' > <i className='fas fa-trash'  onClick={() => deleteTender(hh2)}></i></button>
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

  <form onSubmit={handleSubmit} method="POST">
            <div class="form-group">
    <label for="EID">Org-ID</label>
    <input type="text" class="form-control" id="EID"  value="" onChange={handleChange} placeholder="Org-ID"/>
  </div>
  <div class="form-group">
    <label for="FullName">Org-Name</label>
    <input type="text" class="form-control" id="FullName" value="" onChange={handleChange} placeholder="Enter Org-Name"/>
  </div>

 
  <div class="form-group">
    <label for="Password">Address</label>
    <input type="text" class="form-control" id="Password"  value=""onChange={handleChange}  placeholder="Address"/>
  </div>
  <div class="form-group">
    <label for="Role">Country</label>
    <input type="text" class="form-control" id="Role" value="" onChange={handleChange} placeholder="Enter Country"/>
  </div>
  <div class="form-group">
    <label for="Photo">City</label>
    <input type="file" class="form-control" id="Photo"  value="" onChange={handleChange} placeholder="Enter City"/>
  </div>
  <div class="form-group">
    <label for="Photo">Region</label>
    <input type="file" class="form-control" id="Photo"  value="" onChange={handleChange} placeholder="Enter Region"/>
  </div>

      <div class="modal-footer">
      <Button variant="secondary" onClick={handleOrgClose}>
    Close
  </Button> 
          <button type="button" class="btn btn-primary">Save changes</button>
      </div>
        </form>
  
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
  <Modal.Title>Add Tender {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>
      <form>
        <div class="row">
        <div class="col-md-6">
 <div class="form-group">
    <label for="TID">TID</label>
    <input type="text" class="form-control" id="TID"  placeholder="TID"/>
  </div>
  <div class="form-group">
    <label for="FullName">RID</label>
    <input type="text" defaultValue={rid1}     onChange={(e)=>setRid(e.target.value)}
 class="form-control" id="FullName"  placeholder="Enter RID"/>
  </div>
  <div class="form-group">
    <label for="Email">Tender-No</label>
    <input type="text"defaultValue={tenderno1}  onChange={(e)=>setTenderno(e.target.value)} class="form-control" id="Email"  placeholder="Enter Tender-No"/>
  </div>
  <div class="form-group">
    <label for="Gender">Org-ID</label>
   
    <input type="text" class="form-control"defaultValue={oid1} value={value.rid}  onChange={(e)=>setOid(e.target.value)} id="Gender"  placeholder="Enter Org-ID"/>
  </div>

  <div class="form-group">
    <label for="Phone">Org-Name</label>
    <input type="text" class="form-control"defaultValue={oname1}  onChange={(e)=>setOname(e.target.value)} id="Phone"  placeholder="Enter Org-Name"/>
  </div>
  <div class="form-group">
    <label for="User">Address</label>
    <input type="text" class="form-control" id="User"value={address} onChange={(e)=>setAddress(e.target.value)}  placeholder="Enter Address"/>
  </div>
  <div class="form-group">
    <label for="Password">City</label>
    <input type="text" class="form-control" value={city} onChange={(e)=>setCity(e.target.value)}  id="Password" placeholder="City"/>
  </div>
  <div class="form-group">
    <label for="Role">Country</label>
    <input type="text" class="form-control" value={country} onChange={(e)=>setCountry(e.target.value)}  id="Role"  placeholder="Enter Country"/>
  </div>
  </div> <div class="col-md-6">
  <div class="form-group">
  <label for="Photo">Assign-Project-Leader</label>
    <select value={assign} id="selectId"  class="form-control" onChange={e => setAssign(e.target.value)}>
                 
                 {employee.map((item) => (
                  <option value={item.fname} key={item}>
                    {" "}
                    {item.fname}{" "}
                  </option>
                ))}
                 </select>
                 
                   </div>
  <div class="form-group">
    <label for="Photo">Bid-Bind</label>
    <input type="text" class="form-control"  value={bind} id="Photo"onChange={(e)=>setBind(e.target.value)}   placeholder="Enter Bid-Bind"/>
  </div>
  <div class="form-group">
    <label for="Photo">Document-Fee</label>
    <input type="text" class="form-control"value={documentfee} id="Photo"onChange={(e)=>setDocumentFee(e.target.value)}   placeholder="Enter Document-Fee"/>
  </div>
  <div class="form-group">
    <label for="Photo">Region</label>
    <input type="text" class="form-control"value={region} id="Photo"onChange={(e)=>setRegion(e.target.value)}   placeholder="Enter Region"/>
  </div>
  <div class="form-group">
    <label for="Photo">Category</label>
    <input type="text" class="form-control" value={category} id="Photo" onChange={(e)=>setCatgory(e.target.value)}   placeholder="Enter Category"/>
  </div>
  <div class="form-group">
    <label for="Photo">Project-Manager</label>
    <input type="text" class="form-control" value={projectmanager} id="Photo"onChange={(e)=>setProjectManagr(e.target.value)}   placeholder="Enter Project-Manager"/>
  </div>
  <div class="form-group">
    <label for="Photo">Open-Date</label>
    <input type="date" class="form-control"value={start} id="Photo"onChange={(e)=>setStart(e.target.value)}   placeholder="Enter Open-Date"/>
  </div>
  <div class="form-group">
    <label for="Photo">Close-Date</label>
    <input type="date" class="form-control"value={end} id="Photo"onChange={(e)=>setEnd(e.target.value)}  placeholder="Enter Close-Date"/>
  </div>
  <div class="form-group">
    <label for="Photo">Description</label>
    <textarea type="text" class="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} id="Photo"  placeholder="Enter Description"/>
  </div> </div></div>
  

      <div class="modal-footer">
      <Button variant="secondary" onClick={handleTendAddClose}>
    Close
  </Button> 
          <button type="button"  onClick={() => handleRequest()}  class="btn btn-primary">Save changes</button>
      </div>
        </form>
  
    </Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>



{/* <div className="card">
      <div className="card-header">
        <h3 className="card-title">DataTable with default features</h3>
        <input
          type="text"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <div className="card-body">
        <table {...getTableProps()} className="table table-bordered table-striped">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={columns.length}>
                <div className="pagination">
                  <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                  </button>
                  <span>
                    Page{' '}
                    <strong>
                      {pageIndex + 1} of {pageOptions.length}
                    </strong>
                  </span>
                  <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div> */}




  </section>

{/* <Footer/> */}
</div>
  )
}

export default Request