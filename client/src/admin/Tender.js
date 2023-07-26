import React,{useState,useEffect} from 'react';
import{useRef} from 'react';
import { useDispatch } from 'react-redux';
import { Switch,Route, } from 'react-router-dom';
// import {Link,useHistory} from 'react-router-dom';
// import {registerUser} from './action/employee_action';
import {getEmployee} from './action/employee_action';
import {UploadTask1} from './action/employee_action';
// import { Role } from '../../Utills';
import axios from 'axios';
// import download from 'downloadjs';

import {Button} from "react-bootstrap"
import {useParams} from 'react-router-dom'
import SidebarAdmin from './components/SidebarAdmin';
import HomeAdmin from './components/HomeAdmin';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CSVReader from './csvUpload';
import './table.css';
import './table.js';
import { Link} from 'react-router-dom';
import Footer from './components/Footer';
import { UploadTask,uploadStuMark } from './action/tender_action';
import {registerUpload} from './action/employee_action';

const Tender = ({yared,abay}) => {

	const [tid,setTid] = useState("")
	const [tid1,setTid1] = useState("")
	const [csvData, setCSVData] = useState(null);
	const fileInputRef = useRef(null);

	const header = ['tid', 'item_no','item_name','unit','qty','description','cdate'];
	const [tenderuser,setTenderuser] = useState("")
	const[tenderid,setTenderid] = useState("")
	const[type,setType] = useState("Audit")

	const[viewaudit,setViewaudit] = useState("")
	const type1="Authorization",type2="Bank",
	type3="Company",type4="Exprience",type5="Quality",
	type6="Methodology",type7="Cv",type8="license",
	type9="Trailing",type10="Cad-Design",type12="Tenderparticipation"

////



const dispatch=useDispatch()




const [errorMsg, setErrorMsg] = useState('');

const[cv,setCv] = useState("")
const[cv1,setCv1] = useState("")
const[cv44,setCv44] = useState("")
const[experiance,setExperiance] = useState("")
const[experiance1,setExperiance1] = useState("")
const[experiance44,setExperiance44] = useState("")

const[audit,setAudit] = useState("")
const[audit44,setAudit44] = useState("")
const[document23,setDocument23] = useState([])
const [viewdocument,setViewdocument] = useState("")
const[license,setLicense] = useState("")
const[license1,setLicense1] = useState("")
const[license44,setLicense44] = useState("")
const[bank,setBank] = useState("")
const[bank1,setBank1] = useState("")
const[bank44,setBank44] = useState("")

const[catalog,setCatalog] = useState("")
const[catalog44,setCatalog44] = useState("")

const[compliance,setCompliance] = useState("")
const[authorization,setAuthorization] = useState("")
const[authorization44,setAuthorization44] = useState("")

const[companyprofile,setCompanyprofile] = useState("")
const[companyprofile44,setCompanyprofile44] = useState("")

const[cad,setCad] = useState("")
const[cad44,setCad44] = useState("")

const[cad1,setCad1] = useState("")
const[audit1,setAudit1] = useState("")
const[methodology,setMethodology] = useState("")
const[methodology1,setMethodology1] = useState("")
const[methodology44,setMethodology44] = useState("")

const[financial,setFinancial] = useState("")
const[traling,setTrailing] = useState("")
const[traling44,setTrailing44] = useState("")

const[traling1,setTrailing1] = useState("")
const[qoatation,setQoatation] = useState("")
const[documentation,setDocumention] = useState("")

const[tendpart,setTendpart] = useState("")
const[tendpart44,setTendpart44] = useState("")

const [technicals,setTechnicals] = useState([])
const [applicants,setApplicants] = useState([])
const [applicants1,setApplicants1] = useState([])
const [address,setAddress] = useState("")
const [city,setCity] = useState("")
const[totalcheck,setTotalcheck]=useState("")

const[country,setCountry]=useState("")
const [assignproject,setAssignproject] = useState("")
const[binbind,setBinbind]=useState("")
const [docfee,setDocfee] = useState("")
const [catagory,setCatagory] = useState("")
const [region,setRegion] = useState("")
const [closedate,setClosedate] = useState("")
const [opendate,setOpendate] = useState("")
const [description,setDescription] = useState("")
const [progress, setProgress] = useState("");
const [projectmanager, setProjectmanager] = useState("");
const [rid,setRid] = useState("")
const [oid, setOid] = useState("");
const [tenderno, setTenderno] = useState("");
const [oname, setOname] = useState("");
const [itemno, setItemno1] = useState("");
const [itemname, setItemname1] = useState("");
const [quality1,setQuality1] = useState("")
const [highquality,setHighquality] = useState("")
const [highquality44,setHighquality44] = useState("")

const [company,setCompany] = useState("")
const [company1,setCompany1] = useState("")
const [tectype,setTectype] = useState("")
const [tecstatus,setTecstatus] = useState("")
const [tecfile,setTecfile] = useState("")
const [auditest,setAuditest] = useState("")
const [tecid,setTecid] = useState("")

//   const[trailing,setTrailing] = useState("")
const[quality,setQuality] = useState("")
const[auth1,setAuth1] = useState("")






///





const [editTender, setEditTender] = useState(false);
const [check, setCheck] = useState(false);
const [show, setShow] = useState(false);
const [addupload, setAddupload] = useState(false);
const [addcatagory, setAddcatagory] = useState(false);
const [viewcatagory, setViewcatagory] = useState(false);
const [more, setMore] = useState(false);
// const [edittender, setEditTend] = useState(false);
const [upload, setUpload] = useState(false);
const [adduploadcsv, setAdduploadcsv] = useState(false);
const [viewupload, setViewUpload] = useState(false);

// const [qty, setQuality] = useState(false);
const [item_no, setItemno] = useState(false);
const [item_name, setItemname] = useState(false);
const [unit, setUnit] = useState(false);
const[hh,setHh] = useState("")
const[tenderpart1,setTenderpart1] = useState("")
/////





//for tec defoult value

// const[type1,setType1] = useState("Authorization")

// const[type5,setType5] = useState("Quality")
// const[type6,setType6] = useState("Methodology")

// const[type9,setType9] = useState("Trailing")
// const[type10,setType10] = useState("Cad-Design")
// const[type11,setType11] = useState("Financial")
// const[type12,setType12] = useState("Tenderparticipation")


const[viewquality,setViewquality] = useState("");
const[viewexprience,setViewexprience] = useState("")
const[viewcv,setViewcv] = useState("")
const[viewlicense,setViewlicense] = useState("")

const[viewbank,setViewbank] = useState("")
const[viewcompany,setViewcompany] = useState("")

const[viewauthorization,setViewAuthorization] = useState("")
const[viewtrailing,setViewtrailing] = useState("")
const[viewcad,setViewcad] = useState("")
const[viewtenderpart,setViewtenderpart] = useState("")
const[viewmethodology,setViewmethodology] = useState("")





///////////////////////////


///////////////////////


// const[currentDate,setCurrentDate]=useState("")
//const[userItem,setUserItem]=useState("mahen")

//   const [show, setShow] = useState(false);


// const[name,setName] = useState("")
// const[file,setFile] = useState("")








	const handleTenderuser = (hh) => {
	  setTenderuser(true);
	  setMore(false);
	}
	const handleTenderuserClose = () => {
	  setTenderuser(false);
	  setMore(true);
	}
	const handleAudit = () => {
	  setAudit(true);
	  setShow(true);
	}



	const handleViewDocument = () => {
		setViewdocument(true);
		setShow(true);
	  }

	  const handleViewDocument1 = () => {
		setViewdocument(false);
		setShow(true);
	  }
	const handleAuditClose = () => {
	  setAudit(false);
	  setShow(true);
	}
	const handleauth = () => {
		setAuth1(true);
		setShow(true);
	  }
	  const handleauthClose = () => {
		setAuth1(false);
		setShow(true);
	  }
	
	const handleCompliance = () => {
	  setCompliance(true);
	  setShow(true);
	}
	const handleComClose = () => {
	  setCompliance(false);
	  setShow(true);
	}
  
	const handleQuality = () => {
	  setQuality1(true);
	  setShow(true);
	}
	const handleQualClose = () => {
	  setQuality1(false);
	  setShow(true);
	}
  
	const handleExperiance= () => {
	setExperiance1(true);
	setShow(true);
	}
	const handleExpClose = () => {
		setExperiance1(false);
	  setShow(true);
	}
  
	const handleLicense= () => {
	  setLicense1(true);
	  setShow(true);
	  }
	  const handleLicClose = () => {
		setLicense1(false);
		setShow(true);
	  }
  
	  const handleCompany= () => {
		setCompany1(true);
		setShow(true);
		}
		const handleCompClose = () => {
			setCompany1(false);
		  setShow(true);
		}
  
		const handleMethodology= () => {
		  setMethodology1(true);
		
		  }
		  const handleMethodClose = () => {
			setMethodology1(false);
			setShow(true);
		  }
  
	  const handleTrailing= () => {
		setTrailing1(true);
		setShow(true);
		}
		const handleTrailClose = () => {
		  setTrailing1(false);
		  setShow(true);
		}
  
	const handleCad= () => {
	  setCad1(true);
	  setShow(true);
	  }
	  const handleCadClose = () => {
		setCad1(false);
		setShow(true);
	  }
  
	  const handleFinancial= () => {
		setFinancial(true);
		setShow(true);
		}
		const handleFinanClose = () => {
		  setFinancial(false);
		  setShow(true);
		}
  
		const handleCv= () => {
		  setCv1(true);
		  setShow(true);
		  }
		  const handleViewAudit = () => {
			setViewaudit(true);
			setShow(true);
			}
			const handleViewAudit1 = () => {
				setViewaudit(false);
				setShow(true);
				}

				const handleViewlicense = () => {
					setViewlicense(true);
					setShow(true);
					}
					const handleViewlicense1 = () => {
						setViewlicense(false);
						setShow(true);
						}


		  const handleCvClose = () => {
			setCv1(false);
			setShow(true);
		  }
  
		  const handleBank= () => {
			setBank1(true);
			setShow(true);
			}
			const handleBankClose = () => {
			  setBank1(false);
			  setShow(true);
			}
  
		const handleTendpart= () => {
		  setTenderpart1(true);
		  setShow(true);
		  }
		  const handleTendClose = () => {
			setTenderpart1(false);
			setShow(true);
		  }

	const handleOptionChange = (event) => {
	  const { name, value } = event.target;
	  header[name] = value;
	};
  
	const handleSubmit = ()=>{
	  const csvObj = {};
	  const csvCopyData = [...csvData]
		for (let i = 1; i < csvData.length-1; i++) {
		  csvCopyData[i] = csvData[i].split(",");
	  
		   for (let j = 0; j < header.length; j++) 
			  csvObj[header[j]]? csvObj[header[j]].push(csvCopyData[i][j]): csvObj[header[j]] =[csvCopyData[i][j]];       
	   }
	 
	   postData(csvObj);  

	}


	const handleviewquality = () => {
		setViewquality(true);
	
		
	  }

	  const handleviewquality1 = () => {
		setViewquality(false);
		setShow(true);
		}
	  const handleviewexprience = () => {
		setViewexprience(true);
		
		  
		}
		const handleviewexprience1 = () => {
			setViewexprience(false);
			setShow(true);
			}
		const handleviewcv = () => {
			setViewcv(true);
		
			
		  }
		  const handleviewcv1 = () => {
			setViewcv(false);
			setShow(true);
			}

		  const handleviewbank = () => {
			setViewbank(true);
		
			  
			}
			const handleviewbank1 = () => {
				setViewbank(false);
				setShow(true);
				}
				const handleviewcompany = () => {
					setViewcompany(true);
			  
					
				  }
				  const handleviewcompany1 = () => {
					setViewcompany(false);
					  setShow(true);
					  }
				
					  const handleviewauthorization = () => {
						setViewAuthorization(true);
					
						  
						}
						const handleviewauthorization1 = () => {
							setViewAuthorization(false);
							setShow(true);
							}
							const handleViewtrailing = () => {
								setViewtrailing(true);
							
								  
								}
								const handleViewtrailing1 = () => {
									setViewtrailing(false);
									setShow(true);
									}
									const handleviewcad = () => {
										setViewcad(true);
									
										  
										}
										const handleviewcad1 = () => {
											setViewcad(false);
											setShow(true);
											}
		
											const handleviewtenderpart = () => {
												setViewtenderpart(true);
											
												  
												}
												const handleviewtenderpart1 = () => {
													setViewtenderpart(false);
													setShow(true);
													}

													
											const handleviewmethodology = (tid)=> { 
												setViewmethodology(true);
											
												  
												}
												const handleviewmethodology1 = () => {
													setViewmethodology(false);
													setShow(true);
													}

	const addItem = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };


	  const AdQuality = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type5);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };


	  const adMethodology = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type6);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };

	  const adTrailing = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type9);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  }

	  const adCad = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type10);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  }


	  const adTenderpart = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type12);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  }
  	const AdBank = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.set("total", totalcheck);

		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type2);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };


	  const adAuthorization = async (k) => {
	
	
		try {
			const formData = new FormData();
			formData.set("tenderid", tid);
			formData.append("file", fileInputRef.current.files[0]);
			formData.append("type",type1);
			const res = await axios.post(
			  "http://localhost:8005/api/tecAdd",
			  formData
			);
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };

	  const addCv = async () => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.set("total", totalcheck);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type7);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };
	  const adCompany = async () => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.set("total", totalcheck);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type3);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };
	  const adExprience = async () => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type4);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };
  
	  const addLicense = async () => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type8);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };

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


	// const [hh2,setHh2] = useState("")

	const handleEdit1 = (hh) =>{
		setEditTender(true);
		setMore(false);
	  };
	  const  handleTendAddClose = (hh) =>{ 
		setEditTender(false)
		setMore(true);
	}
	const handleCheck = (hh) =>{
		// setHh (hh._id)
		setCheck(true)
		setUpload(false);
	  }
	  const handleCheckClose = () => {
		setCheck(false);
		setUpload(true);
	  }

	  const handleAddUpload = (hh) =>{
		setAddupload(true)
		setUpload(false);
		// setTid(hh.tid)
		// setItemno(hh.itemno)
		// setItemname(hh.itemname)
		// setUnit(hh.unit)
		// setQuality(hh.quality)
		// setDescription(hh.description)
		// setHh (hh._id)
	  }
	  const handleAddupClose = () => {
		setAddupload(false);
		setUpload(true);
	  }
	  const handleAUditTestView = () => {
		setAuditest(false);
	
		
	  }
	  const handleAUditTestView1 = () => {
	
		setAuditest(false);
		

	  }
	  const handleAddUploadCsv = () =>{
		setAdduploadcsv(true)
		setUpload(false);
	  }
	  const handleAddcsvClose = () => {
		setAdduploadcsv(false);
		setUpload(true);
	  }


	  const handleAddCatagory = () =>{
		setAddcatagory(true)
		setShow(false);
	  }
	  const handleAddcataClose = () => {
		setAddcatagory(false);
		setShow(true);
	  }

	    const handleViewCatagory = () =>{
		setViewcatagory(true)
		
		setAddcatagory(false);
	  }
	  const handleViewcataClose = () => {
		setViewcatagory(false);
		setAddcatagory(true);
	  }
	  const handleMore = () => {
		// setMore(true);
		// setShow(false);
	  }
	  const handleMoreClose = () => {
		setMore(false);
		setShow(true);
	  }
	//   const handleEditTender = () => {
	// 	setEditTend(true);
	// 	setMore(false);
	//   }
	//   const handleEditTendClose = () => {
	// 	setEditTend(false);
	// 	setMore(true);
	//   }

	  const handleUpload = (hh) => {
		setUpload(true);
		setMore(false);
		// setTid(hh.tid)
		setItemno(hh.itemno)
		setItemname(hh.itemname)
		setUnit(hh.unit)
		// setQuality(hh.quality)
		// setDescription(hh.description)
		// setHh (hh._id)
	  }
	  const handleUploadClose = () => {
		setUpload(false);
		setMore(true);
	  }

	  const handleViewUpload = () => {
		setViewUpload(true);
		setAdduploadcsv(false);
	  }
	  const handleViewUploadClose = () => {
		setViewUpload(false);
		setAdduploadcsv(true);
	  }

	//   const {id} = useParams();
	

	  const handleRequest3 = (hh)=> {
		const obj = {
			hh,authorization,bank,audit,compliance,company,catalog,experiance,license,cv,qoatation,documentation,methodology,cad,financial,traling,tendpart
		}
	
	   dispatch(UploadTask1(obj))
	 
	
	}
	const [
		formValues1, setFormValues1] = useState({})
	const handleChange1 = (event) => {

		const name = event.target.name;
		const value = event.target.value;
	   
		setFormValues1(values => ({...values, [name]: value}))
	  }
	  const [formValues3, setFormValues3] = useState({})
	  const handleChange3 = (event) => {
		  const name = event.target.name;
		  const value = event.target.value;
		 
		  setFormValues3(values => ({...values, [name]: value}))
		}


		const [formValues4, setFormValues4] = useState({})
		const handleChange4 = (event) => {
			const name = event.target.name;
			const value = event.target.value;
	
			 setFormValues4(values => ({...values, [name]: value}))
		  }

	  const [formValues2, setFormValues2] = useState({})
	  const handleChange2 = (event) => {
		  const name = event.target.name;
		  const value = event.target.value;
		 
		  setFormValues2(values => ({...values, [name]: value}))
		}

		const handleRequest1 = ()=>{
			const user = {
			  tid,
			  itemno,
			  itemname,
			  unit,
			  quality,
			  description 
			}
			 
		   dispatch(registerUpload(user))
		
		   setTid("");
		   setItemno1("")
		   setItemname1("")
		   setUnit("")
		   setQuality1("")
		   setDescription("")
		  
		}
		
		const handleShow1 = (tec) => {
			setAuditest(true);
			setShow(false);
			setTecid(tec._id)
		
			
			setTectype(tec.type)
			setTecstatus(tec.status)
			setTecfile(tec.file)
		  };


	const handleShow = (user) => {
		setMore(true);
		setShow(false);
		setHh(user._id)
		setTid(user.tid)
		setTid1(user.tid)
		setRid(user.rid)
		setRegion(user.region)
		setOid(user.oid)
		setHighquality(user.qualitycertificate)
		setHighquality44(user.qualitycertificate1)

		setOname(user.oname)
		setAddress(user.address)
		setCity(user.city)
		setCountry(user.country)
		setAssignproject(user.assignproject)
		setBinbind(user.binbind)
		setDocfee(user.docfee)
		setTenderno(user.tenderno)
		setCatagory(user.catagory)
		setProjectmanager(user.projectmanager)
		setOpendate(user.opendate)
		setClosedate(user.closedate)
		setDescription(user.description)
		setProgress(user.progress)
		setCv(user.cv)
		setCv44(user.cv1)
		setExperiance(user.experiance)
		setExperiance44(user.experiance1)
		setAudit1(user.auditreport)
		setAudit44(user.auditreport1)
		setLicense(user.license)
		setLicense44(user.license1)
		setBank(user.bankstatement)
		setBank44(user.bankstatement1)

		setCatalog(user.cv)
		setCatalog44(user.catalog1)

		setCompliance(user.compliance)
		setAuthorization(user.authorization)
		setAuthorization44(user.authorization1)

		setCompanyprofile(user.companyprofile)
		setCompanyprofile44(user.companyprofile1)

		setCompany(user.companyprofile)
		setCad(user.caddesign)
		setCad44(user.caddesign1)

		setFinancial(user.financial)
		setTrailing(user.trailing)
		setTrailing44(user.trailing1)
		setMethodology(user.methodology)
		setMethodology44(user.methodology1)
		setTendpart(user.tenderparticipation)
		setTendpart44(user.tenderparticipation1)
		setTotalcheck(user.total)
		
	  };
	
	//   const[company,setCompany] = useState("")
	//   const[cad,setCad] = useState("")
	//   const[methodology,setMethodology] = useState("")
	//   const[financial,setFinancial] = useState("")
	//   const[traling,setTrailing] = useState("")
	//   const[qoatation,setQoatation] = useState("")
	//   const[documentation,setDocumention] = useState("")
	//   const[tendpart,setTendpart] = useState("")


	const [tecmethodology,setTecmethodology]=useState([]) 
	useEffect(() => {
	  axios
		.get(`http://localhost:8005/list-applicants/${tid1}`)	 

		.then((res) => {
		  setTecmethodology(res.data);
		})
		.catch((err) => {
		  console.log("Data not found" + err.message);
		  // console.log(currentUser);
		}, );
	},[tid1]);   


	useEffect(() => {
		axios
		  .get(`http://localhost:8005/list-applicants/${tid1}`)	 
  
		  .then((res) => {
			setDocument23(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
			// console.log(currentUser);
		  }, );
	  },[tid1]); 



	  const addUpload = async (e) => {
		e.preventDefault();
		try {
		  const formData = new FormData();
		  formData.append("tid",tid);
		  formData.append("itemno", itemno);
		  formData.append("itemname", itemname);
		  formData.append("unit", unit);
		  formData.append("quality", quality);
		  formData.append("description", description);
		  const res = await axios.post(
			"http://localhost:8005/api/addupload",
			formData
		  );
			alert('The data is add successfully')
			window.location.href = "/tender";
		  } catch (error) {
		  alert('Error')
		  }
	  };
	  const downloadFile = async (id) => {
		try {
		  const res = await axios.get(
			`http://localhost:8005/api/download-technicals/${id}`,
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



	  const downloadFile90 = async (id, path, mimetype) => {
		try {
		  const result = await axios.get(`http://localhost:8005/xx/download/${id}`, {
			responseType: 'blob'
		  });
		  const split = path.split('/');
		  const filename = split[split.length - 1];
		  setErrorMsg('');
		//   return download(result.data, filename, mimetype);
		} catch (error) {
		  if (error.response && error.response.status === 400) {
			setErrorMsg('Error while downloading file. Try again later');
		  }
		}
	  };
	  const deletePost = (id) => {
		console.log(id);
	  
		axios.delete(`http://localhost:8005/api/delete-technicals/${id}`)
		  .then((res) => console.log(res))
		  .catch((err) => console.log(err));
	  
		window.location.reload();
	  };

	  const handleSubmit1 = (event) => {
		event.preventDefault();
		axios.put(
		  `http://localhost:8005/api/update-tender/${hh}`, formValues1)
		  .then(res => {
			if(res.status ===200){
			  alert('A record successfuly updated')
			  // Push to /
			  window.location.href = "/tender";
		
			}else{
			alert("error")
			}
		  })
		  .catch(err => alert('Something went wrong! ' +err.message))
		  // Push to /
		  window.location.href = "/tender";
	  }


	  
	  const handleSubmit3 = (event) => {
		event.preventDefault();
		axios.put(
		  `http://localhost:8005/api/update-technicals/${tecid}`, formValues3)
		  .then(res => {
			if(res.status ===200){
			  alert('A record successfuly updated')
			  // Push to /
			  window.location.href = "/tender";
		
			}else{
			alert("error")
			}
		  })
		  .catch(err => alert('Something went wrong! ' +err.message))
		  // Push to /
		  window.location.href = "/tender";
	  }


	  const handleSubmit44 = (event) => {
		event.preventDefault();
		axios.put(
		  `http://localhost:8005/api/update-technicals/${tecid}`, formValues4)
		  .then(res => {
			if(res.status ===200){
			  alert('A record successfuly updated')
			  // Push to /
			  window.location.href = "/tender";
		
			}else{
			alert("error")
			}
		  })
		  .catch(err => alert('Something went wrong! ' +err.message))
		  // Push to /
		  window.location.href = "/tender";
	  }
	


	  	  const handleSubmit2 = (event) => {
		event.preventDefault();
		axios.post(
		  `http://localhost:8005/upload-tender`, formValues2)
		  .then(res => {
			if(res.status ===200){
			  alert('A record successfuly')
			  // Push to /
			  window.location.href = "/tender";
			}else{
			alert("error")
			}
		  })
		  .catch(err => alert('Something went wrong! ' +err.message))
		  // Push to /
		  window.location.href = "/tender";
	  }
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/authorization")
		  .then((res) => {
	setTechnicals(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
			// console.log(currentUser);
		  }, );

	
	  },[abay]);

	  const [tecbank,setTecbank]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/bank")
		  .then((res) => {
			setTecbank(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
			// console.log(currentUser);
		  }, );
	  },[abay]);
	  const [tecquality,setTecquality]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/quality")
		  .then((res) => {
			setTecquality(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
			// console.log(currentUser);
		  }, );
	  },[abay]);

	  const [tecexprience,setTecexprience]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/exprience")
		  .then((res) => {
			setTecexprience(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
			// console.log(currentUser);
		  }, );
	  },[abay]);
	  const [teccompany,setTeccompany]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/company")
		  .then((res) => {
			setTeccompany(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
			// console.log(currentUser);
		  }, );
	  },[abay]);
	  


	  const [teccv,setTeccv]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/cv")
		  .then((res) => {
			setTeccv(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
			// console.log(currentUser);
		  }, );
	  },[abay]);







	
	  useEffect(() => {
	
		axios
		  .get("http://localhost:8005/api/getTender")
		  .then((res) => {
			setApplicants(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  },);
	  },[yared]);
	  const[tecaudit,setTecaudit]=useState([])
	
	  useEffect(() => {
	
		axios
		  .get("http://localhost:8005/technicals/audit")
		  .then((res) => {
			setTecaudit(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  },);
	  },[yared]);

	
	
	



	

	  const [teclicense,setTeclicense]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/license")
		  .then((res) => {
			setTeclicense(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
			// console.log(currentUser);
		  }, );
	  },[abay]);

	  const [teccad,seTeccad]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/cad")
		  .then((res) => {
			seTeccad(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );
	
	  },[abay]);
	  
	  const [tectrailing,setTectrailin]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/trailing")
		  .then((res) => {
			setTectrailin(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );

	  },[abay]);

	  	  
	  const [tectenderpart,setTectenderpart]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/tenderpart")
		  .then((res) => {
			setTectenderpart(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );

	  },[abay]);
	
	
	  useEffect(() => {
		axios
		  .get(`http://localhost:8005/AllUpload/${tid}`)
		  .then((res) => {
			setApplicants1(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, [abay]);

	  });
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/AllUpload1")
		  .then((res) => {
			setApplicants1(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, [abay]);
	  });

  return (
    <div>
        <SidebarAdmin/>
        <div class="main-container">
			<div class="xs-pd-20-10 pd-ltr-20">
            <div class="card-box mb-30">
			
        <div class="card-box pb-10">
					<div class="h5 pd-20 mb-0">Tender</div>
					<button type="button" class="btn btn-primary"  onClick={() =>handleAddCatagory()}>
						Add Tender Catagory
						</button>
						<div></div>
						{/* data-table table nowrap */}
					<table class="">
						<thead>
							<tr>
								<th class="table-plus">Assign-Project</th>
								<th>TID</th>
								<th>Tender-No</th>
								<th>Progress</th>
								<th>Close-Date</th>
								<th>Opern-Date</th>
								<th class="datatable-nosort">Actions</th>
							</tr>
						</thead>
						<tbody>
						{applicants.map((user, i) =>(
        <tr key={user._id}>
								<td class="table-plus">
									<div class="name-avatar d-flex align-items-center">
										<div class="avatar mr-2 flex-shrink-0">
											<img 
												src="vendors/images/photo4.jpg"
												class="border-radius-100 shadow table-plus"
												width="40"
												height="40"
												alt=""
											/>
										</div>
										<div class="txt">
											<div class="weight-600">Jennifer O. Oster</div>
										</div>
									</div>
								</td>
								<td>{user.tid}</td>
								<td>{user.oid}</td> 

								<td>
								{user.progress =="0" &&  <>
								<div class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
                                 <div class="progress-bar bg-warning progress-bar-striped  " 
                                 role="progressbar" style={{width: "100%"}} 
								 aria-valuenow="25" aria-valuemin="0" 
								 aria-valuemax="100">Pending</div>
</div>				
								</>}
							
								{user.progress < 25 && user.progress >= 1 && <>
								<div class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
                                 <div class="progress-bar bg-info progress-bar-striped  " 
                                 role="progressbar" style={{width: "25%"}} 
								 aria-valuenow="25" aria-valuemin="0" 
								 aria-valuemax="100">25%</div>
</div>				
					
								</>}
								{user.progress < 50 && user.progress >= 25 && <>
								<div class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
                                 <div class="progress-bar bg-info progress-bar-striped  " 
                                 role="progressbar" style={{width: "50%"}} 
								 aria-valuenow="25" aria-valuemin="0" 
								 aria-valuemax="100">50%</div>
</div>				
								
								</>}
								{user.progress < 99 && user.progress >= 50 && <>
								<div class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
                                 <div class="progress-bar bg-info progress-bar-striped  " 
                                 role="progressbar" style={{width: "75%"}} 
								 aria-valuenow="25" aria-valuemin="0" 
								 aria-valuemax="100">75%</div>
</div>				
								
								</>}

								{user.progress =="100" &&  <>
								<div class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
                                 <div class="progress-bar bg-success progress-bar-striped  " 
                                 role="progressbar" style={{width: "100%"}} 
								 aria-valuenow="25" aria-valuemin="0" 
								 aria-valuemax="100">100%completed</div>
</div>				
								
								</>}
								</td>
								<td>{user.end}</td>
								<td>{user.start}</td>
								<td>
									<div class="table-actions">
									<button type="button" class="btn" data-color="#265ed7" onClick={() =>handleShow(user)}>
                                       <i class="fa fa-plus"></i>
                                    </button>
									</div>
									
								</td>
							
</tr>  ))}
							
						</tbody>
					</table>
				</div>
				</div>

<Modal
show={addcatagory}
onHide={handleAddcataClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Add Tender Category </Modal.Title>
</Modal.Header>
<Modal.Body>
<form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
     
      <div class="modal-footer">
	  <button type="button" class="btn btn-primary" onClick={() =>handleViewCatagory()}>View</button>
        <button type="button" class="btn btn-danger" onClick={() =>handleAddcataClose()}>Close</button>
        <button type="button" class="btn btn-success">Save changes</button>
      </div></form>
  
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>

<Modal
show={viewcatagory}
onHide={handleViewcataClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>View Tender Category </Modal.Title>
</Modal.Header>
<Modal.Body>
 

						
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap"
							>
								<thead>
									<tr>
										<th class="table-plus datatable-nosort">Name</th>
										<th>Age</th>
										<th>Office</th>
										<th>Address</th>
										<th>Start Date</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="table-plus">Gloria F. Mead</td>
										<td>25</td>
										<td>Sagittarius</td>
										<td>2829 Trainer Avenue Peoria, IL 61602</td>
										<td>29-03-2018</td>
                    <td>
                      <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalLong">
                      <i class="icon-copy fi-plus"></i>
</button>
</td>
									</tr>
									
								</tbody>
							</table>
						</div>
						</Modal.Body>
<Modal.Footer>
</Modal.Footer>
</Modal>


<Modal
show={tenderuser}
onHide={handleTenderuserClose}
backdrop="static"
keyboard={false}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Tender {tid}</Modal.Title>
</Modal.Header>
<Modal.Body>
<div class="row" style={{width:`100%`}}>
<span class="col-sm-6">
<div class="card card-row card-secondary">
          <div class="card-header card1">
            <h3 class="card-title">
            Started
            </h3>
          </div>
          <div class="card-body">
	
<ul class="started d-inline">
{authorization=="1"  && <> <li>Authorization
{/* btns fa fa-send    fa fa-eye*/}
<a  >    

<a class="fa fa-eye"onClick={() => handleviewauthorization()}></a>




</a>



<a class="fas fa-plus"style={{marginLeft:"20px"}}  onClick={() => handleauth()}   ></a>
</li></>}
{audit1=="1"  && <> <li>Audit

<a class="fa fa-eye"onClick={() => handleViewAudit()}></a> 
<a class="fas fa-plus" onClick={() => handleAudit()}></a>
</li></>}
{bank=="1"  && <> <li>Bank

<a class="fa fa-eye" onClick={() => handleviewbank()}></a>
<a class="fas fa-plus" onClick={() => handleBank()}></a>
</li></>}
{company=="1"  && <> <li>Company

<a class="fa fa-eye"onClick={() => handleviewcompany()}></a>
<a class="fas fa-plus" onClick={() => handleCompany()}></a>
</li></>}
{compliance=="1"  && <> <li>Compliance

<a class="fa fa-eye"></a> 
<a class="fas fa-plus" onClick={() => handleCompliance()}></a>
</li></>}
{experiance=="1"  && <> <li>Exprience

<a class="fa fa-eye"onClick={() => handleviewexprience()}></a> 
<a class="fas fa-plus" onClick={() => handleExperiance()}></a>
</li></>}
{highquality=="1"  && <> <li>Quality

<a class="fa fa-eye"onClick={() => handleviewquality()}></a>
<a class="fas fa-plus" onClick={() => handleQuality()}></a>
</li></>}
{methodology=="1"  && <> <li>Methodology

<a class="fa fa-eye"onClick={() => handleviewmethodology()}></a> 
<a class="fas fa-plus" onClick={() => handleMethodology()}></a>
</li></>}
{cv=="1"  && <> <li>Cv

<a class="fa fa-eye"onClick={() => handleviewcv()}></a> 
<a class="fas fa-plus" onClick={() => handleCv()}></a>
</li></>}
{license=="1"  && <> <li>license

<a class="fa fa-eye"onClick={() => handleViewlicense()}></a> 
<a class="fas fa-plus" onClick={() => handleLicense()}></a>
</li></>}
{traling=="1"  && <> <li>Trailing

<a class="btns fa fa-send"onClick={() => handleViewtrailing()}></a> 
<a class="fas fa-plus" onClick={() => handleTrailing()}></a>
</li></>}
{cad=="1"  && <> <li>Cad-Design

<a class="fa fa-eye" onClick={() => handleviewcad()}></a> 
<a class="fas fa-plus" onClick={() => handleCad()}></a>
</li></>}
{financial=="1"  && <> <li>Financial

<a class="fa fa-eye"></a> 
<a class="fas fa-plus" onClick={() => handleFinancial()}></a>
</li></>}
{tendpart=="1"  && <> <li>Tenderparticipation

<a class="fa fa-eye"onClick={() => handleviewtenderpart()}></a> 
<a class="fas fa-plus" onClick={() => handleTendpart()}></a>
</li></>}
	
    {/* 
   

    
    <li>Tender-Participation
    <a class="btns fa fa-send"></a> 
     <a class="btns fa fa-edit" onClick={() => handleTendpart()}></a>
    </li> */}
  </ul></div></div>
</span>

<span class="col-sm-6">
<div class=" card card-row card-primary">
          <div class="card-header card2">
            <h3 class="card-title">
            Done
            </h3>
          </div>

	



<div class="card-body">
<ul class="done d-inline">
	
{bank44=="1"  && <>


<li>Bank-Statement
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}

{audit44=="1"  && <>


<li>Audit Report
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{authorization44=="1"  && <>


<li>Authorization
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}

{cv44=="1"  && <>


<li>Cv
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{experiance44=="1"  && <>


<li>Exprience
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{license44=="1"  && <>


<li>License
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{cad44=="1"  && <>


<li>Cad Design
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}

{highquality44=="1"  && <>


<li>Quality
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{methodology44=="1"  && <>


<li>Methodology
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}

{traling44=="1"  && <>


<li>Trailing
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{catalog44=="1"  && <>


<li>catalog
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>
	
</>}
{tendpart44=="1"  && <>


<li>Tenderparticipation
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{companyprofile44=="1"  && <>


<li>Company Profile
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
    </ul> 

</div>





         </div> 
</span>
</div>




	  </Modal.Body>
<Modal.Footer>
</Modal.Footer>
</Modal>
<Modal
show={audit}
onHide={handleAuditClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Audit-Report for{tid}</Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={addItem}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>
<Modal
show={bank1}
onHide={handleBankClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Bank for{tid}</Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={AdBank}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>
<Modal
show={methodology1}
onHide={handleMethodClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Methodology for{tid}</Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adMethodology}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>



<Modal

show={tenderpart1}
onHide={handleTendClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Tender Part for{tid}</Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adTenderpart}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>


<Modal

show={cad1}
onHide={handleCadClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Cad  for{tid}</Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adCad}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>

<Modal

show={auth1}
onHide={handleauthClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Auth  for{tid}</Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adAuthorization}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>
<Modal

show={traling1}
onHide={handleTrailClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Trailing for{tid}</Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adTrailing}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>

<Modal

show={quality1}
onHide={handleQualClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Quality for{tid}</Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={AdQuality}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>

<Modal
show={auditest}
onHide={handleAUditTestView1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>update {tecid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<form onSubmit={handleSubmit3}>
  <div class="row">
  <div class="form-group">
    <label for="TID">TID</label>
    <input type="text" class="form-control"defaultValue={tid}  name='tid' id="FullName" readOnly onChange={handleChange1}   placeholder="TID"/>
  </div>
  <div class="form-group">
    <label for="TID">status</label>
    <input type="text" class="form-control"defaultValue={tecstatus}  name='status' id="FullName"  onChange={handleChange3}   placeholder="Status"/>
  </div>
	<div class="col">
      <input type="text"  onChange={handleChange3} defaultValue={tectype} name='type' class="form-control"  placeholder="type"/>
    </div><br></br>
    <div class="col">
		{tecfile}
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="submit"  class="btn btn-success">Save changes</button>
      </div>
	  </form> 
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleAUditTestView1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>





<Modal

show={viewaudit}
onHide={handleViewAudit1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View Audit {tid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>
</thead>
<tbody>
{tecaudit.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
			
				<td>



				{tec.status=="1"  && <> <li>started




</li></>}


{tec.status=="2"  && <> <li>Finished




</li></>}



				</td>
              <td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
					</td> 
					  {/* 
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleAuditClose}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>
<Modal

show={viewbank}
onHide={handleviewbank1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View Bank {tid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{tecbank.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
					<button type="button" class="btn"onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewquality1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>

<Modal

show={viewlicense}
onHide={handleViewlicense1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View License {tid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{teclicense.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
					<button type="button" class="btn"onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleViewlicense1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>



<Modal

show={viewtrailing}
onHide={handleViewtrailing1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View Trailing {tid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{tectrailing.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
					<button type="button" class="btn"onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleViewtrailing1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>

<Modal

show={viewcad}
onHide={handleviewcad1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View cad {tid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{teccad.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
					<button type="button" class="btn"onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewcad1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>


<Modal

show={viewcv}
onHide={handleviewcv1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View CV {tid}+{totalcheck} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{teccv.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
					<button type="button" class="btn"onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewquality1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>

<Modal
show={viewmethodology}
onHide={handleviewmethodology1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View Methodology {tid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>ActionW</th>

</thead>
<tbody>

   
{tecmethodology.map((tec, i) => (



       


              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
					<button type="button" class="btn"onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewmethodology1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>



<Modal
show={viewdocument}
onHide={handleViewDocument1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View Documents {tid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Tid</th>
<th>Name</th>


<th>Files</th>

</thead>
<tbody>

   
{document23.map((tec, i) => (



       


              <tr key={tec._id}>
            
              
				<td>{tec.tenderid}</td>
				<td>{tec.type}</td>
			

			<td>
			<button type="button" class="btn btn-success" onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn btn-success" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
<div class="form-group">
    <label for="Photo">Comment</label>
    <textarea type="text" class="form-control"   placeholder="Enter Description"/><button type="button" class="btn btn-success"data-toggle="modal" data-target="#exampleModalLong">
                      Submit
                    </button>
  </div>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewmethodology1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>

<Modal

show={viewtenderpart}
onHide={handleviewtenderpart1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View Tenderpart {tid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{tectenderpart.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
					<button type="button" class="btn"onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewtenderpart1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>




<Modal

show={viewexprience}
onHide={handleviewexprience1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View Exprience {tid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Title</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{tecexprience.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>
                <td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td>
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewexprience1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>



<Modal


show={viewquality}
onHide={handleviewquality1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View Quality {tid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Title</th>
<th>Tid</th>
<th>Action</th>

</thead>
<tbody>
{tecquality.map((tecb, i) => (

              <tr key={tecb._id}>
            
                <td>{tecb.type}</td>
				<td>{tecb.tenderid}</td>
				<td>{tecb.status}</td>
                {/*  <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    */}
					<td>
                    <button type="button" class="btn"onClick={() => downloadFile(tecb._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> 
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewquality1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>
<Modal
show={viewcompany}
onHide={handleviewcompany1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View company {tecid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Title</th>
<th>Tid</th>
<th>Action</th>

</thead>
<tbody>
{teccompany.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>
                <td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td>
		
                </tr>
))}
</tbody>
</table>

</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewcompany1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>
<Modal
show={viewauthorization}
onHide={handleviewauthorization1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>View Authorization {tecid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{technicals.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>
                <td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td>
		
                </tr>
))}
</tbody>
</table>

</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewauthorization1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>


<Modal
show={cv1}
onHide={handleCvClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Cv for{tid}</Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button"onClick={handleViewAudit1} class="btn btn-danger" >Close</button>
        <button type="button"onClick={addCv}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>

<Modal
show={company1}
onHide={handleCompClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>company for{tid}</Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adCompany}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>
<Modal
show={experiance1}
onHide={handleExpClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Exprience for{tid}</Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adExprience}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>
<Modal
show={license1}
onHide={handleLicClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>License for{tid}</Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={addLicense}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>
<Modal
show={more}
onHide={handleMoreClose}
backdrop="static"
keyboard={false}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>More {hh}</Modal.Title>
</Modal.Header>
<Modal.Body>

  
     
	 <table class="table table-striped table-sm">
	 <div class="row">
        <div class="col-md-6">
				            <tr>
                                <th>RID</th>
                                <td>{rid}</td></tr>
                            <tr>
                                <th>Tender-Name</th>
                                <td>{tenderno}</td>
                            </tr>
                            <tr>
                                <th>Organization-ID</th>
                                <td>{oid}</td>
                                </tr>
                             <tr>
                                <th>Organization-Name</th>
                                <td>{oname}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{address}</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>{city}</td>
                            </tr>
							<tr>
                                <th>Country</th>
                                <td>{country}</td>
							</tr>

                                </div>
								<div class="col-md-6">
						
                            <tr>
                                <th>Region</th>
                                <td>{region}</td>
                            </tr>
                            <tr>
                                <th>Bid-Bind</th>
                                <td>{binbind}</td>
                                </tr>
                             <tr>
                                <th>Document-Fee</th>
                                <td>{docfee}</td>
                            </tr>
                            <tr>
                                <th>Catagory</th>
                                <td>{catalog}</td>
                            </tr>
                            <tr>
                                <th>Project-Manager</th>
                                <td>{projectmanager}</td>
                            </tr>	
							<tr>
                                <th>Description</th>
                                <td>{description}</td>
                            </tr>	
							</div>
								</div>
                         
                    </table>
      <br/><br/>
     

<button type="button" className="btn btn-info"style={{color:"white"}}  onClick={() =>handleUpload(hh)}>
Upload
</button>&nbsp;&nbsp;&nbsp;
<button type="button" className="btn btn-info"style={{color:"white"}}  onClick={() =>handleTenderuser(hh)}>
Tender
</button>&nbsp;&nbsp;&nbsp;

<button className="btn btn-info"style={{color:"white"}} onClick={() =>handleViewDocument()}>
                    
					Documentation</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" class="btn btn-primary" onClick={() =>handleEdit1(hh)}>
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;

<button type="button" class="btn btn-danger" data-toggle="modal"   onClick={() =>deletePost(hh)} data-target="#deletedata">
  <i className='fas fa-trash'></i>
</button>&nbsp;&nbsp;&nbsp;


   
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>


<Modal
show={upload}
onHide={handleUploadClose}
backdrop="static"
keyboard={false}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Upload Page {hh}</Modal.Title>
</Modal.Header>
<Modal.Body>

    {/* <Link to="/addcsv" >Add Upload(CSV)</Link> */}
<button type="button" class="btn btn-secondary" onClick={() =>handleAddUploadCsv()}>
Add Upload(CSV)
</button>
&nbsp;&nbsp;&nbsp;
<button type="button" class="btn btn-secondary" onClick={() =>handleAddUpload(hh)}>
Add Upload
</button>&nbsp;&nbsp;&nbsp;

<button type="button" class="btn btn-success"  onClick={() =>handleCheck(hh)}>Check</button>

<div class="card-box mb-30">
						
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap"
							>
								<thead>
									<tr>
										<th class="table-plus datatable-nosort">TID</th>
										<th>Item-Number</th>
										<th>Item-Name</th>
										<th>Unit</th>
										<th>Quality</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
								{applicants1.map((user, i) =>(
						<tr key={user._id}>
										<td class="table-plus">{user.tid}</td>
										<td>{user.itemno}</td>
										<td>{user.itemname}</td>
										<td>{user.unit}</td>
										<td>{user.quality}</td>
                    <td>
                      <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalLong">
                      <i class="icon-copy fi-plus"></i>
					</button>
					</td>
									</tr>
								))}
									
								</tbody>
							</table>
						</div>
					</div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
	  </Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>


<Modal
show={addupload}
onHide={handleAddupClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Add Upload {hh}</Modal.Title>
</Modal.Header>
<Modal.Body>
   {/* onSubmit={handleSubmit2} onChange={(e)=>setTid(e.target.value)}*/}
<form>
            <div class="form-group">
    <label for="TID">TID</label>
    <input type="text" class="form-control" id="TID" defaultValue={tid} name='tid'
	 value={tid} 
	 placeholder="TID"/>
  </div>
  <div class="form-group">
    <label for="itemno">Item-Number</label>
    <input type="text" class="form-control" id="itemno"  
	value={itemno} name='itemno' onChange={(e)=>setItemno1(e.target.value)}
	placeholder="Enter Item-Number"/>
  </div>
  <div class="form-group">
    <label for="itemname">Item-Name</label>
    <input type="text" class="form-control" id="itemname" 
	value={itemname} name='itemname' onChange={(e)=>setItemname1(e.target.value)}
	placeholder="Enter Unit"/>
  </div>
  <div class="form-group">
    <label for="Unit">Unit</label>
    <input type="text" class="form-control" id="Unit" 
	value={unit} name='unit' onChange={(e)=>setUnit(e.target.value)}
	placeholder="Enter Unit"/>
  </div>
  <div class="form-group">
    <label for="qty">Quantity</label>
    <input type="text" class="form-control" id="qty" 
	value={quality} name='qty' onChange={(e)=>setQuality1(e.target.value)}
	placeholder="Enter Quality"/>
  </div>
  <div class="form-group">
    <label for="Description">Description</label>
    <input type="text" class="form-control" id="Description"  
	value={description} name='description'  onChange={(e)=>setDescription(e.target.value)}
	placeholder="Enter Description"/>
  </div>

  <div class="modal-footer">
      <Button variant="danger" onClick={handleAddupClose}>
    Close
  </Button> 
  <button type="button" class="btn btn-success" 
      onClick={() => handleRequest1()}
        >Add Upload</button>
      </div>
	</form>
    

</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>

<Modal
show={adduploadcsv}
onHide={handleAddcsvClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Add Upload (CSV)</Modal.Title>
</Modal.Header>
<Modal.Body>
   {/* <button className='btn btn-secondary' onClick={() =>handleViewUpload()}>View Upload(CSV)</button><br/> */}
<div><br/>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    
      {csvData && header.map((elem,index)=>{
        const oneRawData =csvData[1].split(',');
        return oneColumnHeader(elem,oneRawData[index], index,handleOptionChange)
      })}

     {csvData &&  <button className='btn btn-success' onClick={handleSubmit}>Submit File</button>}
    </div>
    

</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>


<Modal
show={viewupload}
onHide={handleViewUploadClose}
backdrop="static"
keyboard={false}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>View Upload {hh}</Modal.Title>
</Modal.Header>
<Modal.Body>

<div class="card-box mb-30">
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap"
							>
								<thead>
									<tr>
										<th class="table-plus datatable-nosort">Name</th>
										<th>Age</th>
										<th>Office</th>
										<th>Address</th>
										<th>Start Date</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="table-plus">Gloria F. Mead</td>
										<td>25</td>
										<td>Sagittarius</td>
										<td>2829 Trainer Avenue Peoria, IL 61602</td>
										<td>29-03-2018</td>
                    <td>
                      <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalLong">
                      <i class="icon-copy fi-plus"></i>
</button>
</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
	  </Modal.Body>
<Modal.Footer>
</Modal.Footer>
</Modal>




<Modal
show={check}
onHide={handleCheckClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Check Privilage {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>
<form onSubmit={handleSubmit1}>
          <div class="form-group">
		  
			<div class="col-md-12">
			<input type="text" class="form-control" 
					   value={tid}
					   onChange={(e)=>setTid(e.target.value)} readOnly style={{border:`0`}}/>
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox" class="custom-control-input" id="Authorization"name='authorization'
					   value={1}
					  
					   onChange={handleChange1}/>
					<label class="custom-control-label" for="Authorization">Authorization
					
					  {authorization=="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>} {authorization=="0"  && <>Unchecked</>}</label>
				</div>
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox" name='companyprofile' class="custom-control-input" id="Compliance-Sheet"
										   value={1}
										  
										   onChange={handleChange1}/>
					<label class="custom-control-label" for="Compliance-Sheet">Company-Profile
					
					
					 {companyprofile=="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}

					  {companyprofile=="0"  && <>Unchecked</>} </label>
				</div>
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox"name='qualitycertificate' class="custom-control-input" id="Quality-Certificate"
						value={1}
					  
					   onChange={handleChange1}/>
					<label class="custom-control-label" for="Quality-Certificate">Quality-Certificate 
		
					 {highquality=="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}

					  {highquality=="0"  && <>Unchecked</>} </label>
					
	
				</div>
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox" name='auditreport' class="custom-control-input" id="Audit-Report"
										   value={1}
										  
										   onChange={handleChange1}/>
					<label class="custom-control-label" for="Audit-Report">Audit-Report 


				
					 {audit1=="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}

					  {audit1=="0"  && <>Unchecked</>} </label>
				</div>
        	<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox" name='bankstatement' class="custom-control-input" id="Bank-Statement"
					   value={1}
					
					   onChange={handleChange1}/>
					<label class="custom-control-label" for="Bank-Statement">Bank-Statement
				
					 {bank=="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}

					  {bank=="0"  && <>Unchecked</>} </label>

					
				</div>
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox"name='experiance' class="custom-control-input" id="Experiance"
										   value={1}
					  
					   onChange={handleChange1}/>
					<label class="custom-control-label" for="Experiance">Experiance
				
					 {experiance=="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}

					  {experiance=="0"  && <>Unchecked</>} </label>
				</div>
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox" name='cv' class="custom-control-input" id="CV"
										   value={1}
										
										   onChange={handleChange1}/>
					<label class="custom-control-label" for="CV">CV
					
					 {cv=="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}

					  {cv=="0"  && <>Unchecked</>} </label>
				</div>
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox"name='license' class="custom-control-input" id="License"
										   value={1}
										  
										   onChange={handleChange1}/>
					<label class="custom-control-label" for="License">License
					
					 {license=="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}

					  {license=="0"  && <>Unchecked</>} </label>
				</div>
				
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox" name='methodology' class="custom-control-input" id="Methodology"
										   value={1}
										
										   onChange={handleChange1}/>
					<label class="custom-control-label" for="Methodology">methodology	
				
					 {methodology=="1"  && <><i class="bi bi-check"style={{fontSize:'27px',marginLeft:"67px"}}></i></>}

					  {methodology=="0"  && <>Unchecked</>} </label>
				</div>
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox"name='trailing' class="custom-control-input" id="Trailing"
										   value={1}
								

										   onChange={handleChange1}/>
					<label class="custom-control-label" for="Trailing">Trailing
			
					 {traling=="1" && <><i class="bi bi-check"style={{fontSize:'27px'}}       checked></i></>}

					  {traling=="0"  && <>Unchecked</>} </label>
				</div>
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox" name='caddesign' class="custom-control-input" id="Cad-Design"
										   value={1}
										   onChange={handleChange1}/>
					<label class="custom-control-label" for="Cad-Design">Cad-Design
				
					 {cad=="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}

					  {cad=="0"  && <>Unchecked</>} </label>
				</div>
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox"name='financial' class="custom-control-input" id="Financial"
										   value={1}
										  
										   onChange={handleChange1}/>
					<label class="custom-control-label" for="Financial">financial
				
					 {financial=="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}

					  {financial=="0"  && <><h1 style={{marginLeft:"200px"}}>Unchecked</h1></>} </label>
				</div>
				<div class="custom-control custom-checkbox mb-3">
					<input type="checkbox"name='tenderparticipation' class="custom-control-input" id="Tender-Participation"
										   value={1}
										 
										   onChange={handleChange1}/>
					<label class="custom-control-label" for="Tender-Participation"> Tender-Participatio
				
					 {tendpart=="1"  && <><i class="bi bi-check"style={{fontSize:'27px',marginLeft:"367px"}}></i></>}

					  {tendpart=="0"  && <>Unchecked</>} </label>
				</div>
			</div>
      
		
       <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
		<button type="submit" class="btn btn-primary" >Save changes</button>      </div>
	</div>
	</form>
	</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>


<Modal
show={editTender}
onHide={handleTendAddClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Edit Tenders {hh} </Modal.Title>
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
    <input type="text" defaultValue={rid} name='rid'     onChange={handleChange1} readOnly
 class="form-control" id="FullName"  placeholder="Enter RID"/>
  </div>
  <div class="form-group">
    <label for="Email">Tender-No</label>
    <input type="text"defaultValue={tenderno}name='tenderno'  onChange={handleChange1} class="form-control" id="Email"  placeholder="Enter Tender-No"/>
  </div>
  <div class="form-group">
    <label for="Gender">Org-ID</label>
   
    <input type="text" class="form-control"defaultValue={oid} name='oid'  onChange={handleChange1} id="Gender"  placeholder="Enter Org-ID"/>
  </div>

  <div class="form-group">
    <label for="Phone">Org-Name</label>
    <input type="text" class="form-control"defaultValue={oname}name='oname' onChange={handleChange1} id="Phone"  placeholder="Enter Org-Name"/>
  </div>
  <div class="form-group">
    <label for="User">Address</label>
    <input type="text" class="form-control" id="User"defaultValue={address} name='address' onChange={handleChange1}  placeholder="Enter Address"/>
  </div>
  <div class="form-group">
    <label for="Password">City</label>
    <input type="text" class="form-control" defaultValue={city} onChange={handleChange1} name='city'  id="Password" placeholder="City"/>
  </div>
  <div class="form-group">
    <label for="Role">Country</label>
    <input type="text" class="form-control" value={country} onChange={handleChange1} name='country' id="Role"  placeholder="Enter Country"/>
  </div>
  </div> <div class="col-md-6">
  <div class="form-group">
  <label for="Photo">Assign-Project-Leader</label>
    {/* <select value={assign} id="selectId"  class="form-control" onChange={e => setAssign(e.target.value)}>
                 
                 {employee.map((item) => (
                  <option value={item.fname} key={item}>
                    {" "}
                    {item.fname}{" "}
                  </option>
                ))}
                 </select> */}
                 
                   </div>
  <div class="form-group">
    <label for="Photo">Bid-Bind</label>
    <input type="text" class="form-control"  defaultValue={binbind} name='binbind'  id="Photo"onChange={handleChange1}  placeholder="Enter Bid-Bind"/>
  </div>
  <div class="form-group">
    <label for="Photo">Document-Fee</label>
    <input type="text" class="form-control"defaultValue={docfee} id="Photo"onChange={handleChange1} name='docfee'   placeholder="Enter Document-Fee"/>
  </div>
  <div class="form-group">
    <label for="Photo">Region</label>
    <input type="text" class="form-control" defaultValue={region} name='region' id="Photo"onChange={(e)=>setRegion(e.target.value)}   placeholder="Enter Region"/>
  </div>
  <div class="form-group">
    <label for="Photo">Category</label>
    <input type="text" class="form-control" value={catagory} name='catagory' id="Photo"  onChange={handleChange1}   placeholder="Enter Category"/>
  </div>
  <div class="form-group">
    <label for="Photo">Project-Manager</label>
    <input type="text" class="form-control" defaultValue={projectmanager} name='projectmanager' id="Photo"onChange={handleChange1}  placeholder="Enter Project-Manager"/>
  </div>
  <div class="form-group">
    <label for="Photo">Open-Date</label>
    <input type="date" class="form-control"defaultValue={opendate} name='start' id="Photo" onChange={handleChange1}   placeholder="Enter Open-Date"/>
  </div>
  <div class="form-group">
    <label for="Photo">Close-Date</label>
    <input type="date" class="form-control"defaultValue={closedate} name='end' id="Photo" onChange={handleChange1} placeholder="Enter Close-Date"/>
  </div>
  <div class="form-group">
    <label for="Photo">Description</label>
    <textarea type="text" class="form-control" defaultValue={description} name='description' onChange={handleChange1}id="Photo"  placeholder="Enter Description"/>
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




<Footer/>
    </div>
    </div> </div>
  )
}

export default Tender


function oneColumnHeader(title,rawData,key,handleOptionChange) {
    return(
        <div className='d-flex flex-row gap-5 mb-4 '   key={key}>
            <p className='w-25'>{title}</p>

            <select className='form-select w-25'
             name={key}
             onChange={handleOptionChange}>
                <option value="" disabled selected hidden>-- Select --</option>
                <option value={"tid"}>Tid</option>
                <option value={"item_no"}>item_no</option>
                <option value={"item_name"}>item_name</option>
                <option value={"unit"}>unit</option>
                <option value={"qty"}>qty</option>
                <option value={"description"}>description</option>
                <option value={"cdate"}>cdate</option>
            </select>

            <p>{rawData}</p>
        </div>
    )
    
}

function postData(data){
  axios
  .post('http://localhost:8005/csvupload', data) 
  .then((response) => {
    // Handle success response
    console.log('API response:', response.data);
	window.location.href = "/tender";
	// const [viewupload, setViewUpload] = useState(false);
	// const [upload, setUpload] = useState(false);
	// setViewUpload(true);  
	// setUpload(false); 
  })
  .catch((error) => {
    // Handle error response
    console.error('API error:', error);
  });
}
