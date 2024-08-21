import React, { useEffect, useState } from "react";
import * as carService from "../../../../services/CarService";
import { Link } from "react-router-dom";

const Car = () => {
  const [data, setData] = useState([]);

  const fetchAllData = async () => {
    const [result, error] = await carService.findAll();
    if (result) {
      setData(result.data);
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);
  return (
    <>
      <div class="gallery_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="gallery_taital">Our best offers</h1>
            </div>
          </div>
          <div class="gallery_section_2">
            <div class="row">
              {data &&
                data.map((item, key) => {
                  return (
                     <div class="col-md-4 mb-3" key={key}>
                     <div class="gallery_box">
                       <div class="gallery_img">
                         <img src={item.carImage} style={{ with:"100%", height: "200px" }} />
                       </div>
                       <h3 class="types_text">{item.carName}</h3>
                       <p class="looking_text">${item.carPrice}</p>
                       <div class="read_bt">
                         <Link className="mr-3" to={`/detailUser/${item.carId}`}>Book Now</Link>
                         <Link to={``}>Add To Cart</Link>
                       </div>
                     </div>
                   </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Car;
