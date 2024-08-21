import React, { useContext, useEffect, useState } from 'react'
import * as carService from "../../../../services/CarService";
import { CartContext } from "../../../../services/CarService"
import { Link } from "react-router-dom";
import Services from '../services/Services';

const Home = () => {
  const [data, SetData] = useState([]);
  

  


  const fetchAllData = async () => {
    const [result, error] = await carService.findAll();
    if (result) {
      SetData(result.data);
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);
  return (
    <>
      <div class="banner_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div
                id="banner_slider"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="banner_taital_main">
                      <h1 class="banner_taital">
                        Car Rent <br />
                        <span style={{ color: "#fe5b29" }}>For You</span>
                      </h1>
                      <p class="banner_text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority
                      </p>
                      <div class="btn_main">
                        <div class="contact_bt">
                          <a href="#">Read More</a>
                        </div>
                        <div class="contact_bt active">
                          <a href="#">Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="banner_taital_main">
                      <h1 class="banner_taital">
                        Car Rent <br />
                        <span style={{ color: "#fe5b29" }}>For You</span>
                      </h1>
                      <p class="banner_text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority
                      </p>
                      <div class="btn_main">
                        <div class="contact_bt">
                          <a href="#">Read More</a>
                        </div>
                        <div class="contact_bt active">
                          <a href="#">Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="banner_taital_main">
                      <h1 class="banner_taital">
                        Car Rent <br />
                        <span style={{ color: "#fe5b29" }}>For You</span>
                      </h1>
                      <p class="banner_text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority
                      </p>
                      <div class="btn_main">
                        <div class="contact_bt">
                          <a href="#">Read More</a>
                        </div>
                        <div class="contact_bt active">
                          <a href="#">Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#banner_slider"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-left"></i>
                </a>
                <a
                  class="carousel-control-next"
                  href="#banner_slider"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="banner_img">
                <img src="assets/images/banner-img.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about_section layout_padding">
        <div class="container">
          <div class="about_section_2">
            <div class="row">
              <div class="col-md-6">
                <div class="image_iman">
                  <img src="assets/images/about-img.png" />{" "}
                </div>
              </div>
              <div class="col-md-6">
                <div class="about_taital_box">
                  <h1 class="about_taital">
                    About <span style={{ color: "#fe5b29" }}>Us</span>
                  </h1>
                  <p class="about_text">
                    going to use a passage of Lorem Ipsum, you need to be sure
                    there isn't anything embarrassing hidden in the middle of
                    text. All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined going to use a passage of Lorem Ipsum, you
                    need to be sure there isn't anything embarrassing hidden in
                    the middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined{" "}
                  </p>
                  <div class="readmore_btn">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="gallery_taital">Our best offers</h1>
            </div>
          </div>
          <div class="gallery_section_2">
            <div className="row">
              {data &&
                data.map((item, key) => {
                  return (
                      <div class="col-md-4 mb-3" >
                        <div class="gallery_box">
                          <div class="gallery_img">
                            <img src={item.carImage} style={{ with:"100%", height: "200px" }} />
                          </div>
                          <h3 class="types_text">{item.carName}</h3>
                          <p class="looking_text">${item.carPrice}</p>
                          <div class="read_bt">
                            <Link className="mr-3" to={`/detailUser/${item.carId}`}>Book Now</Link>
                            <a className='btn' style={{ color: "white" }}>Add To Cart</a>
                          </div>
                        </div>
                      </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div class="choose_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="choose_taital">WHY CHOOSE US</h1>
            </div>
          </div>
          <div class="choose_section_2">
            <div class="row">
              <div class="col-sm-4">
                <div class="icon_1">
                  <img src="assets/images/icon-1.png" />
                </div>
                <h4 class="safety_text">SAFETY & SECURITY</h4>
                <p class="ipsum_text">
                  variations of passages of Lorem Ipsum available, but the
                  majority have{" "}
                </p>
              </div>
              <div class="col-sm-4">
                <div class="icon_1">
                  <img src="assets/images/icon-2.png" />
                </div>
                <h4 class="safety_text">Online Booking</h4>
                <p class="ipsum_text">
                  variations of passages of Lorem Ipsum available, but the
                  majority have{" "}
                </p>
              </div>
              <div class="col-sm-4">
                <div class="icon_1">
                  <img src="assets/images/icon-3.png" />
                </div>
                <h4 class="safety_text">Best Drivers</h4>
                <p class="ipsum_text">
                  variations of passages of Lorem Ipsum available, but the
                  majority have{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="client_section layout_padding">
        <div class="container">
          <div id="custom_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-12">
                    <h1 class="client_taital">What Says Customers</h1>
                  </div>
                </div>
                <div class="client_section_2">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="client_taital_box">
                        <div class="client_img">
                          <img src="assets/images/client-img1.png" />
                        </div>
                        <h3 class="moark_text">Hannery</h3>
                        <p class="client_text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page
                        </p>
                      </div>
                      <div class="quick_icon">
                        <img src="assets/images/quick-icon.png" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="client_taital_box">
                        <div class="client_img">
                          <img src="assets/images/client-img2.png" />
                        </div>
                        <h3 class="moark_text">Channery</h3>
                        <p class="client_text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page
                        </p>
                      </div>
                      <div class="quick_icon">
                        <img src="assets/images/quick-icon.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-12">
                    <h1 class="client_taital">What Says Customers</h1>
                  </div>
                </div>
                <div class="client_section_2">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="client_taital_box">
                        <div class="client_img">
                          <img src="assets/images/client-img1.png" />
                        </div>
                        <h3 class="moark_text">Hannery</h3>
                        <p class="client_text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page
                        </p>
                      </div>
                      <div class="quick_icon">
                        <img src="assets/images/quick-icon.png" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="client_taital_box">
                        <div class="client_img">
                          <img src="assets/images/client-img2.png" />
                        </div>
                        <h3 class="moark_text">Channery</h3>
                        <p class="client_text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page
                        </p>
                      </div>
                      <div class="quick_icon">
                        <img src="assets/images/quick-icon.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-12">
                    <h1 class="client_taital">What Says Customers</h1>
                  </div>
                </div>
                <div class="client_section_2">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="client_taital_box">
                        <div class="client_img">
                          <img src="assets/images/client-img1.png" />
                        </div>
                        <h3 class="moark_text">Hannery</h3>
                        <p class="client_text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page
                        </p>
                      </div>
                      <div class="quick_icon">
                        <img src="assets/images/quick-icon.png" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="client_taital_box">
                        <div class="client_img">
                          <img src="assets/images/client-img2.png" />
                        </div>
                        <h3 class="moark_text">Channery</h3>
                        <p class="client_text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page
                        </p>
                      </div>
                      <div class="quick_icon">
                        <img src="assets/images/quick-icon.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#custom_slider"
              role="button"
              data-slide="prev"
            >
              <i class="fa fa-angle-left"></i>
            </a>
            <a
              class="carousel-control-next"
              href="#custom_slider"
              role="button"
              data-slide="next"
            >
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="contact_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h1 class="contact_taital">Get In Touch</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="contact_section_2">
            <div class="row">
              <div class="col-md-12">
                <div class="mail_section_1">
                  <input
                    type="text"
                    class="mail_text"
                    placeholder="Name"
                    name="Name"
                  />
                  <input
                    type="text"
                    class="mail_text"
                    placeholder="Email"
                    name="Email"
                  />
                  <input
                    type="text"
                    class="mail_text"
                    placeholder="Phone Number"
                    name="Phone Number"
                  />
                  <textarea
                    class="massage-bt"
                    placeholder="Massage"
                    rows="5"
                    id="comment"
                    name="Massage"
                  ></textarea>
                  <div class="send_bt">
                    <a>Send</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
