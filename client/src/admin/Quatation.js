import React,{useState,useEffect,useRef} from 'react';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer'
import SidebarAdmin from './components/SidebarAdmin'
import axios from 'axios';
import {Button,Modal} from "react-bootstrap"
import {useParams} from 'react-router-dom'

const Quatation = () => {

  const [eid,setEid] = useState("")
  const [itemno,setItemno] = useState("")
  const [itemname,setItemname] = useState("")
  const[modelno,setModelno]=useState("")
  const [brandname,setBrandname] = useState("")
  const[origion,setOrigion]=useState("")
  const [unit,setUnit] = useState("")

  const [quotation, setQuotation] = useState([]);
  const [price,setPrice] = useState("")
  const [specification,setSpecification] = useState("")
  const [description,setDescription] = useState("")

  const [eid1,setEid1] = useState("")
  const [itemno1,setItemno1] = useState("")
  const [itemname1,setItemname1] = useState("")
  const[modelno1,setModelno1]=useState("")
  const [brandname1,setBrandname1] = useState("")
  const[origion1,setOrigion1]=useState("")
  const [unit1,setUnit1] = useState("")
  const [Id,setId] = useState("")

  const [quotation1, setQuotation1] = useState([]);
  const [price1,setPrice1] = useState("")
  const [specification1,setSpecification1] = useState("")
  const [description1,setDescription1] = useState("")
  const [show, setShow] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [file, setFile] = useState(false);

  const [catalogfile,setCatalogfile] = useState("")
  const fileInputRef = useRef(null);
  const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setShow(true)
    setId(user._id)
    setEid1(user.eid)
    setItemname1(user.itemname)
    setModelno1(user.modelno)
    setOrigion1(user.origion)
    setUnit1(user.unit)
  setPrice1(user.price)
    setSpecification1(user.specification)
    setDescription1(user.description)
    setBrandname1(user.brandname)
    setFile(user.file)
 
  };
  const [adduploadcsv, setAdduploadcsv] = useState(false);
  const handleAddUploadCsv = () =>{
		setAdduploadcsv(true)
		setShow(false);
	  }
	  const handleAddcsvClose = () => {
		setAdduploadcsv(false);
		setShow(true);
	  }
    	const [csvData, setCSVData] = useState(null);
    const handleFileUpload = event => {
      const file = event.target.files[0];
      const reader = new FileReader();
    
      reader.onload = event => {
      const contents = event.target.result;
      const rows = contents.split('\n');
      
      setCSVData(rows);
      };
    
      reader.readAsText(file);
    };
  

  const handleEdit = (hh) =>{
    setEditModal(true)
    setShow(false);
  
  };
  const handleClose1 = (hh) =>{
    setEditModal(false)
    setShow(true);
  
  };
  const AddQotatin = async (e) => {
    e.preventDefault();
    try {
      
      //  eid, itemno, itemname, modelno, brandname, origion ,unit, price ,specification ,description
      const formData = new FormData();
      formData.append("eid",eid);
      formData.append("itemno", itemno);
      formData.append("itemname", itemname);
      formData.append("modelno", modelno);
      formData.append("brandname", brandname);
      formData.append("origion", origion);
      formData.append("unit", unit);
      formData.append("price", price);
      formData.append("specification", specification);
      formData.append("file", fileInputRef.current.files[0]);
      formData.append("description",description);
      const res = await axios.post(
        "http://localhost:8005/api/addQotation",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = (id) => {
    console.log(id);
  
    axios.delete(`http://localhost:8005/api/delete-quatation/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  
 
  };
  const [Qvalues, setQvalues] = useState({})

  // define onChange to get form values
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setQvalues(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(
      `http://localhost:8005/api/update-quatation/${Id}`, Qvalues)
      .then(res => {
        if(res.status ===200){
          alert('A record successfuly updated')
          // Push to /
          window.location.href = "/quatation";
        }else{
          Promise.reject()
        }
      })
      .catch(err => alert('Something went wrong! ' +err.message))
      // Push to /
      window.location.href = "/quatation";
  }
  
  useEffect(() => {
    axios.get("http://localhost:8005/list-quotation23")
      .then((res) => {
        setQuotation(res.data);
      })
      .catch((err) => {
        console.log("Data not found" + err.message);
        // console.log(currentUser);
      }, []);
    //console.log(applicants);
  });
  // const downloadFile = async (id, path, mimetype) => {
  //   try {
  //     const result = await axios.get(`${API_URL}/download/${id}`, {
  //       responseType: 'blob'
  //     });
  //     const split = path.split('/');
  //     const filename = split[split.length - 1];
  //     setErrorMsg('');
  //     return download(result.data, filename, mimetype);
  //   } catch (error) {
  //     if (error.response && error.response.status === 400) {
  //       setErrorMsg('Error while downloading file. Try again later');
  //     }
  //   }
  // };


  // const [csvData, setCSVData] = useState(null);
	const header = ['tid', 'itemno','itemname','modelno','brandname','origion','unit','price','specification','description','cdate'];
  
	const handleOptionChange = (event) => {
	  const { name, value } = event.target;
	  header[name] = value;
	};
  
	const handleSubmit1 = ()=>{
	  const csvObj = {};
	  const csvCopyData = [...csvData]
		for (let i = 1; i < csvData.length-1; i++) {
		  csvCopyData[i] = csvData[i].split(",");
	  
		   for (let j = 0; j < header.length; j++) 
			  csvObj[header[j]]? csvObj[header[j]].push(csvCopyData[i][j]): csvObj[header[j]] =[csvCopyData[i][j]];       
	   }
	 
	   postData(csvObj);  

	}

  return (
    <div>
        <SidebarAdmin/>
        <div class="mobile-menu-overlay"></div>
 		<div class="main-container">
			<div class="pd-ltr-20 xs-pd-20-10">
     <div className="container App">
    
                <h2 >Quatation </h2>

<div class="card-box mb-30">
						
				<div class="pb-20">		

                        <div class="col-sm-9"><span type="button" style={{color:`white`}} > 
        <a  href="#" class="btn btn-primary">
			 <span type="button" style={{color:`white`}} class=""  onClick={() =>handleAddUploadCsv()}>
                  <i class="fa fa-plus" style={{color:`white`}} aria-hidden="true"></i >  Add Quatation (CSV)
                </span></a>
                <a  href="#" class="btn btn-primary">
			 <span type="button" style={{color:`white`}} class="" data-toggle="modal" data-target="#addquatation">
                  <i class="fa fa-plus" style={{color:`white`}} aria-hidden="true"></i >  Add Quatation 
                </span></a>
                </span>
			 </div>
             <table
								class="table hover  data-table-export nowrap"
							>
								<thead>
									<tr>
										<th class="table-plus datatable-nosort">Emp ID</th>
										<th>Item No</th>
										<th>Brand Name</th>
										<th>Origion</th>
										<th>Unit</th>
										<th>Actions</th>
									</tr>
								</thead>
                <tbody>
                {quotation.map((user, i) =>(
        <tr key={user._id}>
										<td class="table-plus">{user.eid}</td>
									
										<td>{user.itemno}</td>
										<td>{user.brandname}</td>
										<td>{user.origion}</td>
                    <td>{user.unit}</td>
            
              <td>
              <button class="btn btn-light"   onClick={() => handleShow(user)} ><i className="fa fa-plus"></i></button>
 <button type="button" class="btn" data-toggle="modal" data-target="#sendquatation">
                      <i class="fa fa-send"></i>
</button>
</td>
</tr>  ))}
								</tbody>
								
							</table>
						</div>
					</div>
          <Modal
        show={show}
    
        backdrop="static"
        keyboard={false}
        onHide={handleClose}
      >
       
        <Modal.Header closeButton>
          <Modal.Title >More For <h6 style={{color:'teal'}}> {Id } </h6></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table class="table table-striped table-sm">
                <tr>
                                <th>eid</th>
                                <td>{eid1}</td></tr>
                            <tr>
                                <th>item no</th>
                                <td>{itemname1}</td>
                            </tr>
                            <tr>
                                <th>brandname</th>
                                <td>{brandname1}</td>
                                </tr>
                                <tr>
                                <th>unit</th>
                                <td>{unit1}</td>
                            </tr>
                            <tr>
                                <th>price</th>
                                <td>{price1}</td>
                            </tr>
                            <tr>
                                <th>file</th>
                                <td>{file}</td>
                            </tr>
                          
                                <br/>
                            <tr colspan="2">
                            {/* <th>Actions</th>
                                <td>  onClick={() => handleedit(teste)}*/}

                            </tr>
                    </table>
                    <button className='btn btn-danger' onClick={() => deletePost(Id)}> <i className='fas fa-trash'></i></button>&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-primary"  onClick={() =>handleEdit(Id)}>
  <i className='fas fa-edit'></i></button>
  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
show={editModal}
onHide={handleClose1}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Edit Request {Id} </Modal.Title>
</Modal.Header>
<Modal.Body>

<form onSubmit={handleSubmit} method="POST">
            <div class="form-group">
    <label for="EID">EID</label>
    <input type="text" class="form-control" 
   name="eid"   defaultValue={eid1} id="FullName"  onChange={handleChange} 
    placeholder="EID"/>
  </div>
  <div class="form-group">
    <label for="Item-No">Item-No</label>
    <input type="text" class="form-control"  
    name="itemno"   defaultValue={itemno1}   onChange={handleChange} 
     placeholder="Enter Item-No"/>
  </div>
  <div class="form-group">
    <label for="Item-Name">Item-Name</label>
    <input type="text" class="form-control"name="itemname"   defaultValue={itemname1} id="FullName"  onChange={handleChange} 
    placeholder="Enter Item-Name"/>
  </div>
  <div class="form-group">
    <label for="Model-No">Model-No</label>
    <input type="text" class="form-control" name="modelno"   defaultValue={modelno1} id="FullName"  onChange={handleChange} 
    placeholder="Enter Model-No"/>
  </div>
  <div class="form-group">
    <label for="Brand-Name">Brand-Name</label>
    <input type="text" class="form-control" name="brandname"   defaultValue={brandname1} id="FullName"  onChange={handleChange} 
    placeholder="Enter Brand-Name"/>
  </div>
  <div class="form-group">
    <label for="Origion">Origion</label>
    <input type="text" class="form-control" name="origin"   defaultValue={origion1} id="FullName"  onChange={handleChange} 
    placeholder="Enter Origion"/>
  </div>
  <div class="form-group">
    <label for="Unit">Unit</label>
    <input type="text" class="form-control"name="unit"   defaultValue={unit1} id="FullName"  onChange={handleChange} 
    placeholder="Unit"/>
  </div>
  <div class="form-group">
    <label for="Price">Price</label>
    <input type="text" class="form-control" name="price"   defaultValue={price1} id="FullName"  onChange={handleChange} 
    placeholder="Enter Price"/>
  </div>
  <div class="form-group">
    <label for="specification">Specification</label>
    <input type="text" class="form-control"name="specification"   defaultValue={specification1} id="FullName"  onChange={handleChange} 
    placeholder="Enter specification"/>
  </div>
  <div class="form-group">
    <label for="Description">Description</label>
    <input type="text" class="form-control" name="description"   defaultValue={description1} id="FullName"  onChange={handleChange} 
    placeholder="Enter Description"/>
  </div>
  <div class="form-group">
    <label for="Request">File</label>
    <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>

  </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
        </form>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
 
</Modal.Footer>
</Modal>

                    <div class="modal fade" id="addquatation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add Quatation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
   
      <form>
            <div class="form-group">
    <label for="EID">EID</label>
    <input type="text" class="form-control" id="EID"  
     value={eid} onChange={(e)=>setEid(e.target.value)}
    placeholder="EID"/>
  </div>
  <div class="form-group">
    <label for="Item-No">Item-No</label>
    <input type="text" class="form-control" id="Item-No" 
     value={itemno} onChange={(e)=>setItemno(e.target.value)}
     placeholder="Enter Item-No"/>
  </div>
  <div class="form-group">
    <label for="Item-Name">Item-Name</label>
    <input type="text" class="form-control" id="Item-Name"  
     value={itemname} onChange={(e)=>setItemname(e.target.value)}
    placeholder="Enter Item-Name"/>
  </div>
  <div class="form-group">
    <label for="Model-No">Model-No</label>
    <input type="text" class="form-control" id="Model-No"  
     value={modelno} onChange={(e)=>setModelno(e.target.value)}
    placeholder="Enter Model-No"/>
  </div>
  <div class="form-group">
    <label for="Brand-Name">Brand-Name</label>
    <input type="text" class="form-control" id="Brand-Name"  
     value={brandname} onChange={(e)=>setBrandname(e.target.value)}
    placeholder="Enter Brand-Name"/>
  </div>
  <div class="form-group">
    <label for="Origion">Origion</label>
    <input type="text" class="form-control" id="Origion" 
     value={origion} onChange={(e)=>setOrigion(e.target.value)}
    placeholder="Enter Origion"/>
  </div>
  <div class="form-group">
    <label for="Unit">Unit</label>
    <input type="text" class="form-control" id="Unit" 
     value={unit} onChange={(e)=>setUnit(e.target.value)}
    placeholder="Unit"/>
  </div>
  <div class="form-group">
    <label for="Price">Price</label>
    <input type="text" class="form-control" id="Price"  
         value={price} onChange={(e)=>setPrice(e.target.value)}
    placeholder="Enter Price"/>
  </div>
  <div class="form-group">
    <label for="specification">Specification</label>
    <input type="text" class="form-control" id="specification"  
             value={specification} onChange={(e)=>setSpecification(e.target.value)}
    placeholder="Enter specification"/>
  </div>
  <div class="form-group">
    <label for="Description">Description</label>
    <input type="text" class="form-control" id="Description" 
                 value={description} onChange={(e)=>setDescription(e.target.value)}
    placeholder="Enter Description"/>
  </div>
  <div class="form-group">
    <label for="Request">File</label>
    <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>

  </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success"   onClick={AddQotatin}>Save changes</button>
      </div>
        </form>
    </div>
 
</div>
</div>
</div>

<Modal
show={adduploadcsv}
onHide={handleAddcsvClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Add Quatation (CSV)</Modal.Title>
</Modal.Header>
<Modal.Body>
   {/* <button className='btn btn-secondary' onClick={() =>handleViewUpload()}>View Upload(CSV)</button><br/> */}
<div><br/>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    
      {csvData && header.map((elem,index)=>{
        const oneRawData =csvData[1].split(',');
        return oneColumnHeader(elem,oneRawData[index], index,handleOptionChange)
      })}

     {csvData &&  <button className='btn btn-success' onClick={handleSubmit1}>Submit File</button>}
    </div>
    

</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>

<div class="modal fade" id="sendquatation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Send Quatation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
            <div class="form-group">
    <label for="EID">Select Tender-ID</label>
    <div class="form-group">
        <label>Multiple Select</label>
        <select
            class="custom-select2 form-control"
            multiple="multiple"
            style={{width: `100%`}}>
                <option value="AK">T0002</option>
                <option value="HI">T0003</option>
                <option value="AK">T0002</option>
                <option value="HI">T0003</option>
                <option value="AK">T0002</option>
                <option value="HI">T0003</option>
        </select>
    </div>
  </div>
  <div class="form-group">
    <label for="FullName">Select Item Number</label>
    <select
            class="custom-select2 form-control"
            multiple="multiple"
            style={{width: `100%`}}>
                <option value="AK">I0002</option>
                <option value="HI">I0003</option>
                <option value="AK">T0002</option>
                <option value="HI">T0003</option>
                <option value="AK">T0002</option>
                <option value="HI">T0003</option>
        </select>  </div>
  <div class="form-group">
    <label for="Remark">Remark</label>
    <input type="text" class="form-control" id="Remark"  placeholder="Enter Remark"/>
  </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
        </form>
    </div>
 
</div>
</div>
</div>

    </div>
    <Footer/></div></div>
    </div>
  )
}

export default Quatation


function oneColumnHeader(title,rawData,key,handleOptionChange) {
  return(
      <div className='d-flex flex-row gap-5 mb-4 '   key={key}>
          <p className='w-25'>{title}</p>

          <select className='form-select w-25'
           name={key}
           onChange={handleOptionChange}>
              <option value="" disabled selected hidden>-- Select --</option>
              <option value={"tid"}>Tid</option>
              <option value={"itemno"}>itemno</option>
              <option value={"itemname"}>itemname</option>
              <option value={"modelno"}>modelno</option>
              <option value={"brandname"}>brandname</option>
              <option value={"origion"}>origion</option>
              <option value={"unit"}>unit</option>
              <option value={"price"}>price</option>
              <option value={"specification"}>specification</option>
              <option value={"description"}>description</option>
              <option value={"cdate"}>cdate</option>
          </select>

          <p>{rawData}</p>
      </div>
  )
  
}

function postData(data){
axios
.post('http://localhost:8005/api/csvquatation', data) 
.then((response) => {
  // Handle success response
  console.log('API response:', response.data);
})
.catch((error) => {
  // Handle error response
  console.error('API error:', error);
});
}