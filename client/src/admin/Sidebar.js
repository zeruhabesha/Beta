/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Switch,Route,Link,useHistory } from 'react-router-dom';
import "./sidebar.css";
import Logos from './images/logo.png';
// import { logoutUser } from '../action/employee_action'

const Sidebar = () => {
   

    // localStorage.setItem("mode", "light");

  
    // const body = document.querySelector("body"),
    // modeToggle = body.querySelector(".mode-toggle");
    const toggleMode = () => {
        const mode = localStorage.getItem("mode");
        if (mode === "light") {
          localStorage.setItem("mode", "dark");
        } else {
          localStorage.setItem("mode", "light");
        }
      
        const body = document.querySelector("body");
        body.classList.toggle("dark");
      };
     

    

      const dispatch = useDispatch();
      // eslint-disable-next-line no-unused-vars
      const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      const handleLogout = () => {
        window.confirm('Are you sure to Logout?') && dispatch(logoutUser());
      };
    return (

              <nav class="nav1">       
        {/* <div class="menu-items">      */}

      <div class="logo-name">
        <div class="logo-image">
          <img src={Logos} alt="" />
        </div>

        {/* <div class="logo_name1">Beta</div> */}
      </div>

      
     
          <div class="menu-items">
          <ul className="nav-links">
                  <li>  <a href="#" class="side3"> <Link to="/adminhome"><i class="uil uil-label"></i></Link><span class="link-name"><Link to="/adminhome"> Dashbord</Link></span></a></li>
                  <li>  <a href="#" class="side3"> <Link to={`/employee`}><i class="uil uil-clipboard-notes"></i></Link><span class="link-name"><Link to="/employee"> Employee</Link></span></a></li>
                  <li>  <a href="#" class="side3"> <Link to={`/request`}><i class="uil uil-book-open"></i></Link><span class="link-name"><Link to="/request"> Request</Link></span></a></li>
                  <li>  <a href="#" class="side3"> <Link to="/Tender"><i class="uil uil-user-circle"></i></Link><span class="link-name"><Link to={`/Tender`}> Tender</Link></span></a></li>
                  <li>  <a href="#" class="side3"> <Link to={`/technical`}><i class="uil uil-label"></i></Link><span class="link-name"><Link to="/technical"> Technical</Link></span></a></li>
                  <li>  <a href="#" class="side3"> <Link to={`/document`}><i class="uil uil-check"></i></Link><span class="link-name"><Link to="/document"> Documentation</Link></span></a></li>
                  <li>  <a href="#" class="side3"> <Link to="/quatation"><i class="uil uil-clipboard-notes"></i></Link><span class="link-name"><Link to="/quatation"> Quatation</Link></span></a></li>
                  <li>  <a href="#" class="side3"> <Link to="/service"><i class="uil uil-book-open"></i></Link><span class="link-name"><Link to="/service"> Service</Link></span></a></li>
                  <li>  <a href="#" class="side3"> <Link to="/blog"><i class="uil uil-user-circle"></i></Link><span class="link-name"><Link to="/blog"> Blog</Link></span></a></li>
                  <li>  <a href="#" class="side3"> <Link to="/report"><i class="uil uil-label"></i></Link><span class="link-name"><Link to="/report"> Report</Link></span></a></li>
                  <li>  <a href="#" class="side3"> <Link to="/setting"><i class="uil uil-meh-alt"></i></Link><span class="link-name"><Link to="/setting"> Setting</Link></span></a></li>
                  <li>  <a href="#" class="side3"> <Link to="/others"><i class="uil uil-meh-alt"></i></Link><span class="link-name"><Link to="/others"> Others</Link></span></a></li>
           </ul>
         <ul class="logout-mode">    
             <li>  <a href="#" class="side3"> <Link onClick={handleLogout}><i class="uil uil-signout"></i></Link><span class="link-name"><Link onClick={handleLogout}> Logout </Link></span></a></li>
             <li class="mode">
      <a href="#">
        <i class="uil uil-moon"></i>
         </a>
         <span class="link-name mode-toggle">
              <span class="switch" onClick={toggleMode}></span>
            </span>
    </li></ul>  
</div>



       
      {/* </div> */}
    </nav>
    
        
    )
}

export default Sidebar



export const logoutUser = () => {
  sessionStorage.removeItem('currentUser');
  window.location.href = '/login';
};