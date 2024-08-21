import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div class="header_section">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a><img src="https://i.pinimg.com/736x/e7/a5/97/e7a5978c3b23fe7be6f12fa70e5ed3db.jpg" alt='ảnh' width={"80px"} /></a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                     <li class="nav-item">
                        <Link class="nav-link" to={"/homeUser"} >Home</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to={"/aboutUser"} >About</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to={"/servicesUser"} >Services</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to={"/carUser"} >Car</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to={"/contactUser"} >Contact</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to={"/cartUser"} >Cart</Link>
                     </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                  </form>
               </div>
            </nav>
         </div>
         <div class="call_text_main">
         <div class="container">
            <div class="call_taital">
               <div class="call_text"><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i><span class="padding_left_15">Location</span></a></div>
               <div class="call_text"><a href="#"><i class="fa fa-phone" aria-hidden="true"></i><span class="padding_left_15">(+71) 8522369417</span></a></div>
               <div class="call_text"><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i><span class="padding_left_15">demo@gmail.com</span></a></div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Header