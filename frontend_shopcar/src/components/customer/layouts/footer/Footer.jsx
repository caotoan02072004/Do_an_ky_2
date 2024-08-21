import React from 'react'

const Footer = () => {
  return (
    <>
     <div class="footer_section layout_padding margin_top200">
         <div class="container">
            <div class="footer_section_2">
               <div class="row">
                  <div class="col">
                     <h4 class="footer_taital">Subscribe Now</h4>
                     <p class="footer_text">There are many variations of passages of Lorem Ipsum available,</p>
                     <div class="form-group">
                        <textarea class="update_mail" placeholder="Enter Your Email" rows="5" id="comment" name="Enter Your Email"></textarea>
                        <div class="subscribe_bt"><a href="#">Subscribe</a></div>
                     </div>
                  </div>
                  <div class="col">
                     <h4 class="footer_taital">Information</h4>
                     <p class="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority </p>
                  </div>
                  <div class="col">
                     <h4 class="footer_taital">Helpful Links</h4>
                     <p class="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority </p>
                  </div>
                  <div class="col">
                     <h4 class="footer_taital">Invesments</h4>
                     <p class="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority </p>
                  </div>
                  <div class="col">
                     <h4 class="footer_taital">Contact Us</h4>
                     <div class="location_text"><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i><span class="padding_left_15">Location</span></a></div>
                     <div class="location_text"><a href="#"><i class="fa fa-phone" aria-hidden="true"></i><span class="padding_left_15">(+71) 8522369417</span></a></div>
                     <div class="location_text"><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i><span class="padding_left_15">demo@gmail.com</span></a></div>
                     <div class="social_icon">
                        <ul>
                           <li><a href="#"><i style={{ height:"30px" }} class="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="#"><i style={{ height:"30px"  }} class="fa-brands fa-twitter"></i></a></li>
                           <li><a href="#"><i style={{ height:"30px"  }} class="fa-brands fa-linkedin-in"></i></a></li>
                           <li><a href="#"><i style={{ height:"30px"  }} class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Footer