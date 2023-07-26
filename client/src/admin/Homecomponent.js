/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Typewriter from "typewriter-effect";
// import Typewriter from "react-typewriter";
import { TypeAnimation } from 'react-type-animation';

// import $ from 'jquery';
import Sidebar from './Sidebar'
import React , {useEffect,useState,useRef }from "react";
import './OtherFormtable.css';
import Ehda from "./images/EhdaLogo.png";
import FAMATEL from "./images/FAMATEL.png";
import DAK from "./images/DAK.png";
import visbo from "./images/visbo.png";
import AUX2 from "./images/AUX 2.png";
import FSL from "./images/FSL.png";
import LEZARD from "./images/LEZARD.png";
import MATEST from "./images/MATEST.png";
import sandp from "./images/sandp.png";
import Banner from "./images/banner-img.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Nav.css';
import Imgd from './images/sample.jpg'
import { Dropdown, Badge } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import Calendar from 'react-calendar';

const Homecomponent = () => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector("nav");
    sidebar.classList.toggle("close");
    localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
  };
  // eslint-disable-next-line no-unused-vars
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
        <div class="slider4">
			
				{/* <div style={{fontFamily: `'Cursive', Lucida Handwriting`,  boxShadow: `#453e3e`}}

         class="advert card-box pd-20 height-100-p mb-30">
					<div class="row align-items-center">
						<div class="col-md-4">
							<img src={Banner} alt='Banner' />
						</div>
						<div class="col-md-8">
							<h4 class="font-20 weight-500 mb-10 text-capitalize">
								Welcome back
								<div class="weight-600 font-30 text-blue">Johnny Brown!</div>
							</h4>
							<p class="font-18 max-width-600">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
								hic non repellendus debitis iure, doloremque assumenda.
							</p>
						</div>
					</div>
				</div> */}





        <div class="title pb-20">
				{/* <div class="" style={{textAlign:`center`, width: `100%` , height: `5%`, marginTop:`30px`}}> 
  <h2 style={{fontFamily: `'Cursive', Lucida Handwriting`, border: `5px outset`}}> BETA ENGINEERING PLC</h2>

  </div> */}
  {/* <div class="word"> </div> */}
  {/* <Typewriter
 
 onInit={(typewriter) => {
     typewriter
         .typeString("GeeksForGeeks")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Welcomes You")
         .start();
        //  .pauseFor(1000)
         .callFunction(() => {
          typewriter.deleteAll().start();
        });
 }}
/> */}
<div class="word"> 
<TypeAnimation
      sequence={[
        'Beta', 1000,'Enginnering', 1000,'Plc',1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
 </div>


    
 </div><div>
	<div class="service-card">
        <div class="service-card-inner">
          <div class="service-card-front">
            <p class="title">Tender</p>
          </div>
          <div class="service-card-back">
            <p class="title">5</p>
          </div>
        </div>
      </div>
      <div class="service-card">
        <div class="service-card-inner">
          <div class="service-card-front">
            <p class="title">Employee</p>
          </div>
          <div class="service-card-back">
            <p class="title">41</p>
          </div>
        </div>
      </div>
      <div class="service-card">
        <div class="service-card-inner">
          <div class="service-card-front">
            <p class="title">Quatation</p>
          </div>
          <div class="service-card-back">
            <p class="title">22</p>
          </div>
        </div>
      </div>
      <div class="service-card">
        <div class="service-card-inner">
          <div class="service-card-front">
            <p class="title">Request</p>
          </div>
          <div class="service-card-back">
            <p class="title">64</p>
          </div>
        </div>
	</div>	
	</div>	
</div>

<div class="CSSgal">
<s id="s1"></s> 
<s id="s2"></s>
<s id="s3"></s>
<s id="s4"></s>
<s id="s5"></s>
<s id="s6"></s>
<s id="s7"></s>
<s id="s8"></s>
<s id="s9"></s>

<div class="slider3">
  <div class="slider">
    <div>
      <img src={Ehda} alt='Ehda' class="icons1"/>
    </div>
    <div>
      <img src={FAMATEL} alt='FAMATEL' class="icons1"/>
    </div>
    <div>
      <img src={DAK} alt='DAK' class="icons1"/>
    </div>
    <div>
      <img src={visbo} alt='visbo' class="icons1"/>
    </div> 
    <div>
      <img src={AUX2} alt='AUX 2' class="icons1"/>
    </div>  
    <div>
      <img src={FSL} alt='FSL' class="icons1"/>
    </div>  
    <div>
      <img src={LEZARD} alt='LEZARD' class="icons1"/>
    </div>  
    <div>
      <img src={MATEST} alt='MATEST' class="icons1"/>
    </div> 
    <div>
      <img src={sandp} alt='sandp' class="icons1"/>
    </div>
  </div>
</div>
<div class="prevNext">
  <div><a href="#s4"></a><a href="#s2"></a></div>
  <div><a href="#s1"></a><a href="#s3"></a></div>
  <div><a href="#s2"></a><a href="#s4"></a></div>  
  <div><a href="#s3"></a><a href="#s5"></a></div>
  <div><a href="#s4"></a><a href="#s6"></a></div>
  <div><a href="#s5"></a><a href="#s7"></a></div>
  <div><a href="#s6"></a><a href="#s8"></a></div>
  <div><a href="#s7"></a><a href="#s9"></a></div>
  <div><a href="#s8"></a><a href="#s1"></a></div>
</div>

<div class="bullets">
  <a href="#s1">1</a>
  <a href="#s2">2</a>
  <a href="#s3">3</a>
  <a href="#s4">4</a>
  <a href="#s5">5</a>
  <a href="#s6">6</a>
  <a href="#s7">7</a>
  <a href="#s8">8</a>
  <a href="#s9">9</a>
</div>

</div>
<div className="row">
 

  <div className="col-md-6">
      <div className="card">
        <div className="card-header" style={{backgroundColor:`#3f89f5`,color:`white`}}>
          {/* <h3 className="card-title" style={{display:`inline`}}></h3> */}
          <h3 className="card-title" style={{display:`inline`}}> <i class="far fa-user"></i> &nbsp;Latest Members</h3>
         <div className="card-tools" style={{display:`inline`,float:`right`}}>
            <span className="badge badge-danger">8 New Members</span>
            <button 
              type="button" 
              className="btn btn-tool"
              data-card-widget="collapse"
              onClick={toggleCollapse}
            >
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div
          className={`card-body p-0 ${isCollapsed ? "collapse" : ""}`}
           >
          <ul className="users-list clearfix">
            <li>
              <img src={Imgd} alt="User Image"/>
              <a className="users-list-name" href="#">Alexander</a><br/>
              <span className="users-list-date">Today</span>
            </li>
            <li>
            <img src={Imgd} alt="User Image"/>
              <a className="users-list-name" href="#">Normangf</a><br/>
              <span className="users-list-date">Yesterday</span>
            </li>
            <li>
            <img src={Imgd} alt="User Image"/>
              <a className="users-list-name" href="#">Janegfdsg</a><br/>
              <span className="users-list-date">12 Jan</span>
            </li>
            <li>
            <img src={Imgd} alt="User Image"/>
              <a className="users-list-name" href="#">Johngfdf</a><br/>
              <span className="users-list-date">12 Jan</span>
            </li>
            <li>
            <img src={Imgd} alt="User Image"/>
              <a className="users-list-name" href="#">Alexander</a><br/>
              <span className="users-list-date">13 Jan</span>
            </li>
            <li>
            <img src={Imgd} alt="User Image"/>
              <a className="users-list-name" href="#">Sarah</a><br/>
              <span className="users-list-date">14 Jan</span>
            </li>
            <li>
            <img src={Imgd} alt="User Image"/>
              <a className="users-list-name" href="#">Nora</a><br/>
              <span className="users-list-date">15 Jan</span>
            </li>
            <li>
            <img src={Imgd} alt="User Image"/>
              <a className="users-list-name" href="#">Nadia</a><br/>
              <span className="users-list-date">15 Jan</span>
            </li>
          
       {/* style={{backgroundColor:`#3f89f5`,color:`white`}} */}
        <div className="card-footer text-center">
          <a href="javascript:">View All Users</a>
        </div> </ul></div>
      </div>
    </div>
      
    <div className="col-md-6">
      <div className="card">
        <div className="card-header" style={{backgroundColor:`#3f89f5`,color:`white`}}>
          <h3 className="card-title" style={{display:`inline`}}> <i class="far fa-calendar-alt"></i>
                  &nbsp;Calendar</h3>

          <div className="card-tools" style={{display:`inline`,float:`right`}}>
            <button 
              type="button" 
              className="btn btn-tool"
              data-card-widget="collapse"
              onClick={toggleCollapse1}
            >
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div
          className={`card-body p-0 ${isCollapsed1 ? "collapse" : ""}`}
           >
        <Calendar
        selectedDate={selectedDate} style={{flexGrow: `0`}}
        onChange={date => setSelectedDate(date)}
      /> </div>
      
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <div className="card-header" style={{backgroundColor:`#3f89f5`,color:`white`}}>
          <h3 className="card-title" style={{display:`inline`}}> <i class="far fa-map"></i>
                  &nbsp;Map</h3>

          <div className="card-tools" style={{display:`inline`,float:`right`}}>
            <button 
              type="button" 
              className="btn btn-tool"
              data-card-widget="collapse"
              onClick={toggleCollapse2}
            >
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>
 {/* <div
    style={{
      margin: "0 auto",
      width: "400px",
    }}
  >
    <AdvertisementExampleBannerVertical />
  </div> */}
        {/* <Calendar
        selectedDate={selectedDate}
        onChange={date => setSelectedDate(date)}
      />  */}
       <div className={`card-body p-0 ${isCollapsed2 ? "collapse" : ""}`}>
      <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1353.4792009078637!2d38.7520194842046!3d9.027905227265627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f18287ac61%3A0x6c03d3567560724c!2sM.k%20Business%20Center!5e0!3m2!1sen!2set!4v1688980322702!5m2!1sen!2set" width="100%" height="300px" style={{border:`0`}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
       
        </div>
      </div>
    </div> 
    <div className="col-md-6">
      <div className="card">
        <div className="card-header" style={{backgroundColor:`#3f89f5`,color:`white`}}>
          <h3 className="card-title" style={{display:`inline`}}> <i class="far fa-file"></i>
                  &nbsp;Report</h3>

          <div className="card-tools" style={{display:`inline`,float:`right`}}>
            <button 
              type="button" 
              className="btn btn-tool"
              data-card-widget="collapse"
              onClick={toggleCollapse3}
            >
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>
        {/* <Calendar
        selectedDate={selectedDate}
        onChange={date => setSelectedDate(date)}
      />  */}
       <div style={{padding:`5px`}} className={`card-body p-0 ${isCollapsed3 ? "collapse" : ""}`}>
      
            <div class="info-box m-2 p-3 bg-light" style={{borderRadius: `9px`}}>
              <span class="info-box-icon yes"><i style={{color:`blue`}} class="fas fa-tag"></i></span>

              <div class="info-box-content">
                <span class="info-box-text"style={{color:`blue`}}>Inventory</span>
                <span class="info-box-number">5,200</span>
              </div>
            </div>
            <div class="info-box m-2 p-3 bg-light" style={{borderRadius: `9px`}}>
              <span class="info-box-icon yes"><i style={{color:`red`}} class="far fa-heart"></i></span>

              <div class="info-box-content">
                <span class="info-box-text"style={{color:`red`}}>Mentions</span>
                <span class="info-box-number">92,050</span>
              </div>
            </div>
            <div class="info-box m-2 p-3 bg-light" style={{borderRadius: `9px`}}>
              <span class="info-box-icon yes"><i style={{color:`green`}} class="fas fa-cloud-download-alt"></i></span>

              <div class="info-box-content">
                <span class="info-box-text"style={{color:`green`}}>Downloads</span>
                <span class="info-box-number">114,381</span>
              </div>
            </div>
            <div class="info-box m-2 p-3 bg-light" style={{borderRadius: `9px`}}>
              <span class="info-box-icon yes"><i style={{color:`orange`}} class="far fa-comment"></i></span>

              <div class="info-box-content">
                <span class="info-box-text" style={{color:`orange`}}>Direct Messages</span>
                <span class="info-box-number">163,921</span>
              </div>
            </div>
            <div className="card-footer text-center">
          <a href="javascript:">View Reports</a>
        </div>
        </div>
      </div>
    </div> 
    

    
    <div className="col-md-6">
    <div class="container7">
  <div class="card">
    <h3 class="title">Card 1</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
  <div class="card">
    <h3 class="title">Card 2</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
  <div class="card">
    <h3 class="title">Card 3</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
  <div class="card">
    <h3 class="title">Card 4</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
</div>
</div>
<div className="col-md-6 advertpp">


</div>    </div>
{/* .card
 %input#rad1{:checked => "checked", :name => "rad", :type => "radio"}/
 %div{:for => "rad1"}
  %h1 1
  .btn
 %input#rad2{:name => "rad", :type => "radio"}/
 %div{:for => "rad2"}
  %h1 2
  .btn
 %input#rad3{:name => "rad", :type => "radio"}/
 %div{:for => "rad3"}
  %h1 3
  .btn
 %input{:type => "checkbox"}/
 %a Read More
 %p Phasellus nec sem in justo pellentesque facilisis. In hac habitasse platea dictumst. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
 .shapes
 .photo
  -3.times do
   %div
 .blob
  .glob */}




<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
<defs>
<filter id="goo">
<feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
<feComposite in="SourceGraphic" in2="goo" operator="atop"/>
</filter>
</defs>
</svg>
<svg class="svg" viewBox="0 0 400 400">
<defs>
<filter id="duotone-filter-post-one">
<feColorMatrix type="matrix" values="0.14453125 0 0 0 0.33203125 0.71875 0 0 0 0.27734375 -0.34765625 0 0 0 0.73046875 0 0 0 1 0"></feColorMatrix>
</filter>
</defs>
</svg>



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

export default Homecomponent

