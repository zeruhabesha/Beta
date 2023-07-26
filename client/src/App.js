/* eslint-disable no-unused-vars */
import React , { Component } from 'react';
import './App.css';
import "./style.css";
import { useState } from "react";
import {BrowserRouter,Route,Switch,Routes,useHistory} from 'react-router-dom';
import {useEffect,createContext,useReducer,useContext} from 'react';

//frontres-end;
import Homecomponent1 from "./components/Homecomponent";
import Blogs from './components/Blogs';
import Aboutcomponent from './components/Aboutcomponent';
import ContactUscompo from './components/pages/ContactUscompo';
import Logincomponent from './components/Logincomponent';


//back-end
import Homecomponent from "./admin/Homecomponent";
import StudentsForm from './admin/StudentsForm';
import LibraryForm from './admin/LibraryForm';
import AttendanceForm from './admin/AttendanceForm';
import Documents from './admin/Documents';
// import ClearnForm from './admin/ClearnForm';
// import LibraryPage from './components/LibraryPage';
// import Admins from './admin/Admins';
import InstructorsForm from './admin/InstructorsForm';
import StaffForm from './admin/StaffForm';
import CourseForm from './admin/CourseForm';
// import AttendanceForm from './admin/AttendanceForm';
// import LibraryForm from './admin/LibraryForm';
import Profile from './admin/Profile';
import Employee from './admin/Employee';
import Request from './admin/Request';
import Iframe from './admin/Iframe';
import FilesList from './admin/FilesList';








const  Routing = () => {
  const [users, setUsers] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
 
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("currentUser"));
    if (data) {
      setUsers(data);
    } else {
    }
  }, []);
  const shouldComponentUpdate = () => {
    // Only render the component if the users state has changed.
    return users !== this.state.users;
  };


  return (
    
  <Switch>
      

       {!users && ( 
                    <div> <Route path="/adminhome" exact component={Homecomponent} />
        <Route  path="/employee" component={Employee} />
      
        <Route  path="/request" component={Request} />

        <Route  path="/course" component={CourseForm} />
      
        <Route   path="/attend" component={AttendanceForm}/> 
     
        <Route   path="/attend" component={AttendanceForm}/> 

        <Route   path="/students" component={StudentsForm}/> 
    
         
        <Route   path="/library" component={LibraryForm}/> 
      
        <Route   path="/document" component={Documents}/> 
      
        <Route   path="/profile" component={Profile}/> 
         
        <Route exact path="/" component={Homecomponent1} />
        <Route exact path="/iframe" component={Iframe} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/file" component={FilesList} />
      </div>
       )} 
              {/* <Route path="/students">  <StudentsForm /> </Route> */}
             
             {/* )} */}
             {/* {currentUser.user.role === "students" && (     */} 
               {/* )} */}
             {/* <Route path="/students/:id">  <StudentsForm /> </Route> */}
             {/* {currentUser.user.role === "staffs" && (     */}
              {/* <Route path="/staffs">  <StaffForm /> </Route> */}
              {/* )}   */}
              {/* {currentUser.user.role === "staffs" && (    */}
               {/* <Route path="/staffs/:id">  <StaffForm /> </Route> */}
                {/* )}  */}

{/* {currentUser.user.role === "staffs" && ( 
              <Route  path="/course">  <CourseForm /></Route>
              )}
               {currentUser.user.role === "staffs" && ( 
<Route  path="/course/:id">  <CourseForm /></Route> )} */}
{/* {currentUser.user.role === "staffs"  && (  */}
             {/* <Route   path="/attend" > <AttendanceForm/> </Route>  */}
             {/* )} */}
{/* {currentUser.user.role === "staffs" || currentUser.user.role === "instructors" && (  */}
             {/* <Route   path="/attend/:id">  <AttendanceForm/> </Route> */}
             {/* )} */}
{/*          
         {currentUser.user.role === "instructors" && (  
              <Route  path="/instructors">  <InstructorsForm /></Route>)}
               {currentUser.user.role === "instructors" && (  
               <Route  path="/instructors/:id">  <InstructorsForm /></Route> )}

              {currentUser.user.role === "staffs" && (    
             <Route path="/staffs">  <StaffForm /> </Route>
             )}
              {currentUser.user.role === "staffs" && (   
              <Route path="/staffs/:id">  <StaffForm /> </Route> )}

          

             {currentUser.user.role === "staffs" || currentUser.user.role === "instructors" && ( 
             <Route   path="/library" > <LibraryForm/> </Route>)}
             {currentUser.user.role === "staffs" || currentUser.user.role === "instructors" && (
             <Route   path="/library/:id">  <LibraryForm/> </Route>)} */}

           

        </Switch>
     
  );
};


function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;