import React, { useEffect, useState } from 'react'
import './Detail.css';
import * as carService from "../../../../services/CarService";
import * as cartService from "../../../../services/CartService";
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Detail = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
  
    const fetchDataById = async (id) => {
      const[result, error] = await carService.findById(id);
      if(result){
        setData(result.data);
      }
      if(error){
        console.log(error);
      }
    }

    const [cartId, setCartId] = useState(1);
    const [dataCart, setDataCart] = useState([]);

    const findAllData = async () => {
      const [result, err] = await cartService.findAllData();
      if(result){
        setDataCart(result.data);
      }
      if(err){
        console.log(err);
      }
    } 
    const addToCart = async (carId, quantity) => {

      dataCart.map((item:car) => {
      if(item.car.carId == carId)
          setCartId(item.cartId);
      })
  
      if (cartId != 1) {
        this.cartService.updateQuantity(this.cartId).subscribe((response: car) => {
          console.log(response);
          Swal.fire(
            '',
            'Add to cart successfully !',
            'success'
          );
        }, (error) => {
          console.log(error);
        })
      } else {
        this.cartService.save(carId, 1).subscribe((response) => {
          console.log(response);
          Swal.fire(
            '',
            'Add to cart successfully !',
            'success'
          );
        }, (error) => {
          console.log(error);
        })
      }

    // console.log(carId, quantity);
    // const [result, error] = await cartService.addToCart(carId, quantity);
    // if (result) {
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: "Add Successfully",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    // }
    // if (error) {
    //   console.log(error);
    // }
    }
  
  useEffect(() => {
    fetchDataById(id);
    findAllData();
  }, [id]);
  return (
        <div className="container">
            <div className="row ">
                <div className="col-md-4 my-5">
                    <div className="show">
                        <img src={data.carImage} id="show-img" alt='ảnh'/>
                    </div>
                </div>
                <div className="col-md-8 my-5">
                    <h1>{data.carName}</h1>
                    <div className="giasanpham">
                        <p>${data.carSalePrice}<del className="giacu ml-3">${data.carPrice}</del></p>
                    </div>
                    <div className="over">
                        <b>Quick Overview</b>
                        <p>Thiết kế: {data.carDesign}. <br/>Màu sắc: {data.carColor}. <br />Mô tả sản phẩm: {data.carDescription}.
                        </p>
                    </div>
                    <div class="read_bt">
                            <Link className='mr-5' to={``}>Book Now</Link>
                            <button onClick={() => addToCart(data.carId, 1)} >Add To Cart</button>
                          </div>
                </div>
            </div>
        </div>
  )
}

export default Detail