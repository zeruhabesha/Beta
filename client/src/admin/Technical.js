
import Footer from './components/Footer'
import SidebarAdmin from './components/SidebarAdmin'
import './technical.css'
import React,{useState,useRef,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Button,Modal} from "react-bootstrap"
// import {Company} from  '../api'
// import {AddTech,getByType} from './action/technical_action';
import axios from "axios";
import { data } from 'jquery';
const Technical = () => {

const kk = ["cv","audit","license","bank","company","exprience"]

const[tasew,setTasew]=useState("")
const[hena,setHena]=useState("")
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const audit = useRef(null);
  const company = useRef(null);
  const license = useRef(null);
  const bank = useRef(null);
  // const cv = useRef(null);
  const [items, setItems] = useState([]);
  const [sClass,setSClass] = useState("")
  const [title,setTitle] = useState("")
  const [file,setFile] = useState("")
  const [type,setType] = useState("")
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [hh,setHh] = useState("")
  const [cv,setCv]=useState([]);
  const [cv1,setCv1]=useState("");
  const [second,setSecond] = useState("")
  const [modal,setModal] = useState("")
  const[test,setTest]=useState("")
    const[test1,setTest1]=useState("")
    const[yara,setYara]=useState("")
    const[yara1,setYara1]=useState("")
  const handleRequest= ()=>{
      const data = {title,file,type:sClass}

      // dispatch(AddTech(data))          


  }

  const handleClose = () => setModal(false);
  const handleShow = (data) =>{
    setShow(true)
    setSecond(false)
 setHh(data._id)
 setHena(data.title)
     setTest(data._id)
  };
  // const handleClose = () => setModal(false);
  const handleCv = (data) =>{
    setCv1(true)
    setYara(data.title)

 setCv(data._id)
 setYara(data.title)
  
     setTest1(data._id)
 
  };
  const handleClose1 = () => {
    setSecond(false);
  }
  const handleClose2 = () => {
    setShow(false);  
       setSecond(true);

  }
  
  const handleSS = (data) =>{
    setSecond(true)
    setShow(false)
  setTasew(data._id)
  setHh(data._id)
  
  setHena(data.title)

 
  };




  const [formValues, setFormValues] = useState({})

  // define onChange to get form values
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setFormValues(values => ({...values, [name]: value}))
  }
  //define form submit handler

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(
      `http://localhost:8005/api/v1/items/update/${hh}`, formValues)
      .then(res => {
        if(res.status ===200){
          alert('A record successfuly updated')
          // Push to /
       
        }else{
          Promise.reject()
        }
      })
      .catch(err => alert('Something went wrong! ' +err.message))
   
      // Push to /
  
  }
  const getItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8005/api/v1/items");
      setItems(res.data.items);
      setLoading(false);
      console.log(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  const getCv = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8005/api/v1/items/cv");
      setCv(res.data.items);
      setLoading(false);
      console.log(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  
  const addaudit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", name);
      formData.append("file", audit.current.files[0]);
    
      const res = await axios.post(
        "http://localhost:8005/api/v1/items/audit",
        formData
      ) .then(res => {
        if(res.status ===200){
          alert('A record successfuly updated')
          // Push to /
       
        }else{
      
          alert('Error')
     } })
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  // const addCompany = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     formData.append("title", name);
  //     formData.append("file", company.current.files[0]);

  //     const res = await axios.post(
  //       "http://localhost:8005/api/v1/items/company",
  //       FormData
  //     );
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const addCv = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     formData.append("title", name);
  //     formData.append("file", cv.current.files[0]);
  //     const res = await axios.post(
  //       "http://localhost:8005/api/v1/items/cv",
  //       formData
  //     );
   
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const addExprience = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     formData.append("title", name);
  //     formData.append("file", fileInputRef.current.files[0]);
  //     formData.append("type",type);
  //     const res = await axios.post(
  //       "http://localhost:8005/api/v1/items/exprience",
  //       formData
  //     );
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const addLicense = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     formData.append("title", name);
  //     formData.append("file", fileInputRef.current.files[0]);
  //     formData.append("type",type);
  //     const res = await axios.post(
  //       "http://localhost:8005/api/v1/items/license",
  //       formData
  //     );
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const addBank = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", name);
      formData.append("file", fileInputRef.current.files[0]);
      formData.append("type",type);
      const res = await axios.post(
        "http://localhost:8005/api/v1/items/bank",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = (id) => {
    // console.log(id);
  
    axios.delete(`http://localhost:8005/api/v1/items/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  
    window.location.reload();
  };
  const downloadFile = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:8005/api/v1/items/download/${id}`,
        { responseType: "blob" }
      );
      const blob = new Blob([res.data], { type: res.data.type });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
   link.download = ("filename=")[0];
      // link.download = res.headers["content-disposition"].split("filename=")[1];
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);


  return (
    <div>
              <SidebarAdmin/>
        <div class="mobile-menu-overlay"></div>
 		<div class="main-container">
			<div class="pd-ltr-20 xs-pd-20-10">
     <div className="container App">
    
                <h2 >Technical </h2>
             
    
<div class="technical-container ">
    
    
    
           <div id="technical-modal" class="technical-modal" style={{display: `none`, color: `white`}} > 
              <div id="make-form" class="make-form">
                <i onclick="exitModal()" class="fa fa-times" style={{position: `absolute`, top: `20px`, right: `30px`, cursor: `pointer`}} aria-hidden="true"></i>
              </div> 
            </div>


            <div id="view-technical-modal" class="technical-modal" style={{display: `none`, color: `white`}} > 
              <div id="make-view" class="make-view">
                <i onclick="exitViewModal()" class="fa fa-times" style={{position: `absolute`, top: `20px`, right: `30px`, cursor: `pointer`}} aria-hidden="true"></i>
                <h1 id="view-header"></h1>
                <div id="view-container" class="card-body " style={{position: `relative`}}>
                 
              
                </div> 
              </div> 
            </div>
      
		  <div class="container-for-tech">
		    <span class="technical-spans">Audit Report  
          <div>
          <i type="button" class="fa fa-plus" data-toggle="modal" data-target="#addaudit"></i>
          <i type="button" class="fa fa-eye" onClick={() => handleSS(data)}></i>
          {/* <i><button type="button" class="btn" data-toggle="modal" onClick={() => handleSS(data)} >
                      <i class="fa fa-edit"></i>
                    </button></i> */}
          </div>
        </span>
		    <span class="technical-spans">Company Profile 1 
          <div>
             <i onclick="openModal('company-profile')" class="fas fa-plus" data-toggle="modal" data-target="#addcompany"></i>
             <i onclick="openViewModal('company')" class="fa fa-eye" data-toggle="modal" data-target="#viewaudit"></i>
          </div>
        </span>
        <span class="technical-spans">Bank statment  
          <div class="btn-container">
             <i onclick="openModal('bank-statment')" class="fas fa-plus" aria-hidden="true"data-toggle="modal" data-target="#bank"></i>
             <i onclick="openViewModal('bank')" class="fa fa-eye"onClick={() => handleSS(data)} aria-hidden="true"data-target="#viewbank"></i>
          </div>
        </span>
     
		    <span class="technical-spans">Exprience  
           <div>
             <i onclick="openModal('experience-category')" style={{color: `#ffffff`}}>Add Category</i>
             <i onclick="openModal('experience')" class="fas fa-plus"data-toggle="modal" aria-hidden="true"data-target="#exprience"></i>
             <i onclick="openViewModal('experience')" class="fa fa-eye" aria-hidden="true"data-target="#viewexprience"></i>
          </div>
        </span>
		    <span class="technical-spans">CV  
          <div>
             <i onclick="openModal('cv-category')" style={{color: `#ffffff`}}>Add Category</i>
             <i onclick="openModal('cv')" class="fas fa-plus"data-toggle="modal"data-target="#cv"></i>
             <i onclick="openModal('cv')" class="fa fa-eye"  onClick={() => handleCv(data)}></i>
          </div>
      </span>
      <span class="technical-spans">License  
          <div>
             <i onclick="openModal('license-category')" style={{color: `#ffffff`}}>Add Category</i>
             <i type="button" class="fa fa-plus" data-toggle="modal" data-target="#ll"></i>
             <i onclick="openViewModal('license')" class="fa fa-eye" aria-hidden="true"data-target="#viewlicense"></i>
          </div>
        </span>
        </div >
{/* /Add Audit   */}
<div class="modal fade" id="addaudit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Audit report</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> <form>
      <div class="modal-body">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text"    onChange={(e) => setName(e.target.value)} class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="recipient-file" class="col-form-label">File:</label>
            <input type="file"ref={audit} class="form-control" id="recipient-file"/>
          </div>
    

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button"onClick={addaudit} class="btn btn-primary">Save changes</button>
      </div></form>
    </div>
  </div>
</div>
{/* Add Company */}
{/* <div class="modal fade" id="addcompany" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Company profile</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>   <form>
      <div class="modal-body">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text"    onChange={(e) => setName(e.target.value)} class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="recipient-file" class="col-form-label">File:</label>
            <input type="file"ref={company} class="form-control" id="recipient-file"/>
          </div>
    

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button"onClick={addCompany} class="btn btn-primary">Save changes</button>
      </div></form>
    </div>
  </div>
</div>
{/* bank Statment */}
 
<div class="modal fade" id="bank" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add bank Statment</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>  <form>
      <div class="modal-body">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text"    onChange={(e) => setName(e.target.value)} class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="recipient-file" class="col-form-label">File:</label>
            <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>
          </div>
    

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button"onClick={addBank} class="btn btn-primary">Save changes</button>
      </div></form>
    </div>
  </div>
</div> 
{/* Add Exprience */}
 {/* <div class="modal fade" id="exprience" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Exprience profile</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>  <form>
      <div class="modal-body">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text"    onChange={(e) => setName(e.target.value)} class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="recipient-file" class="col-form-label">File:</label>
            <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>
          </div>
    

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button"onClick={addExprience} class="btn btn-primary">Save changes</button>
      </div></form>
    </div>
  </div>
</div>  */}
{/* Add CV */}
 {/* <div class="modal fade" id="cv" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Cv</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>  <form>
      <div class="modal-body">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text"    onChange={(e) => setName(e.target.value)} class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="recipient-file" class="col-form-label">File:</label>
            <input type="file"ref={cv} class="form-control" id="recipient-file"/>
          </div>
    
 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button"onClick={addCv} class="btn btn-primary">Save changes</button>
      </div></form>
    </div>
  </div>
</div>    */}
{/* Add License */}
{/* <div class="modal fade" id="ll" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add License </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>  <form>
      <div class="modal-body">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text"    onChange={(e) => setName(e.target.value)} class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="recipient-file" class="col-form-label">File:</label>
            <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>
          </div>
    

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button"onClick={addLicense} class="btn btn-primary">Save changes</button>
      </div></form>
    </div>
  </div>
</div>  */}
<div class="modal fade" id="viewaudit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">View Audit Report</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>  
<div class="card-box mb-30">
						
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap">
								<thead>
									<tr>
										<th>Title</th>
								
								
                    <th>Action</th>
									</tr>
								</thead>
								{/* <tbody>
									<tr>
										<td class="table-plus">Gloria F. Mead</td>
										<td>25</td>
                    <td>
                      <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-edit"></i>
                    </button>
                    <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    </td>
                   
									</tr>
									<tr>
										<td class="table-plus">Gloria F. Mead</td>
										<td>25</td>
                    <td>
                      <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-edit"></i>
                    </button>
                    <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    </td>
                   
									</tr>
									
								</tbody> */}
                    <tbody>
            {/* here will display data in a table row */}
            {items.map((data, i) => (
              <tr key={data._id}>
                {/* <td>{data._id}</td> */}
                <td>{data.title}</td>
              
              
                

              <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td>
                

                

                <td>

                {/* <Link className="edit-link" to={`/EditStudent/${data._id}`}>
                    <i className="fa-solid fa-pen-to-square"></i></Link>
                 
                  {<Link className="edit-link" to={"/delete/" + data._id}>
                    <i className="fa-sharp fa-solid fa-trash"

                      onClick={() => deletePost(data._id)} style={{ color: '#f41032', padding: "10px", height: "45px" }}></i>
                  </Link>}


                  <Link className="edit-link" to={`/AddCourse/${data._id}`}>
                    <i className="fa-sharp fa-solid fa-add"></i></Link>
                    <Link className="edit-link" to={`/AddResult/${data._id}`}>
                    <i className="fa-sharp fa-solid fa-add"></i></Link>
                 */}
            

                </td>
                
                <>

<Modal

show={second}
onHide={handleClose1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View {test} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Title</th>
<th>Action</th>

</thead>
<tbody>
{items.map((data, i) => (
              <tr key={data._id}>
            
                <td>{data.title}</td>
                <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td>
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="danger" onClick={handleClose1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>

</>
<>

<Modal
show={cv1}
onHide={handleClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>View Cv {test1} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Title</th>
<th>Action</th>

</thead>
<tbody>
{cv.map((data, i) => (
              <tr key={data._id}>
            
                <td>{data.title}</td>
                <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td>
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>

</>
<>
<Modal
show={show}
onHide={handleClose2}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Edit {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>
  

<form onSubmit={handleSubmit}>
      <div class="modal-body">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text"  defaultValue={hena} name='title'    onChange={handleChange} class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="recipient-file" class="col-form-label">File:</label>
            <input type="text"ref={fileInputRef} onChange = {handleChange} class="form-control" value={data.file} id="recipient-file"/>
          </div>
    
 <select  id="selectId"  class="form-control" defaultValue = {data.type}    name='type'  onChange={handleChange}>
                 
                  {kk.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
                 </select> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" onClick={() => handleClose2()}>Close</button>
        <button type="submit" class="btn btn-success">Update</button>
        
      </div></form>

{/* <input type="checkbox" class="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch" /> */}

              <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalLong">
                
           
</button>   
  {/* <button className='btn btn-success mb-4 mt-2' onClick={() => deletePost(test)}>update</button> */}

</Modal.Body>
{/* <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
 
</Modal.Footer> */}
</Modal>
</>


              </tr>

            ))}

          </tbody>
							</table>
						</div>
					</div>

    </div>
  </div>
</div>

            </div>
            </div>

     </div>
    </div> 
    {/* <Footer/> */}
    </div>
   
  )
}

export default Technical