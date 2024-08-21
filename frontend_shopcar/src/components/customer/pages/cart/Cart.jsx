import React, { useContext, useEffect, useState } from 'react'
import * as cartService from "../../../../services/CartService";
import Swal from 'sweetalert2';


const Cart = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [isDelete, setIsDelete] = useState(false);

  const findAllData = async () => {
    const [result, err] = await cartService.findAllData();
    if(result){
      if(result.data.length > 0){
        setData(result.data);
        setTotal(result.data[0].totalAmount);
      }
    }
    if(err){
      console.log(err);
    }
  } 

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      const [res, err] = await cartService.remove(id);
      if (res) {
        setIsDelete(!isDelete);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (err) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Delete failed",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  const xulytru = async (cartId) => {
    const [result, error] = await cartService.updateQuantity(cartId, "tru");
    if(result){
      console.log(result);
      setIsDelete(!isDelete);
    } 
    if(error){
      console.log(error);
      
    }
  }
  const xulycong = async (cartId) => {
    const [result, error] = await cartService.updateQuantity(cartId, "cong");
    if(result){
      console.log(result);
      setIsDelete(!isDelete);
    } 
    if(error){
      console.log(error);
      
    }
  }

  useEffect(() => {
    findAllData();
  }, [isDelete]);
  return (
    <div>
        <div className="container-fluid">
        <h2 className='text-center'>Cart</h2>
        <form action="">
        <div class="table-responsive">
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th class="text-center">ID</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Color</th>
                    <th class="text-center">Image</th>
                    <th class="text-center">Quantity</th>
                    <th class="text-center">Price</th>
                    <th class="text-center">Total</th>
                    {/* <th class="text-center">Status</th> */}
                    <th class="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                {data && data.map((item) => {
                            return(
                              <tr>
                                <td class="text-center text-muted"> {item.cartId}</td>
                                <td class="text-center"> {item.car.carName}</td>
                                <td class="text-center"> {item.car.carColor}</td>
                                <td class='pl-5'>
                                  <div class="widget-content pl-5">
                                    <div class="widget-content-wrapper pl-5">
                                      <div class="widget-content-left">
                                        <div class="widget-content-left">
                                          <img
                                            style={{
                                              height: "60px",
                                              marginLeft: "70px",
                                            }}
                                            data-toggle="tooltip"
                                            title="Image"
                                            data-placement="bottom"
                                            src={item.car.carImage}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td class="text-center but">
                                  {item.quantity > 1 ? (<button style={{ width:"50px" }} onClick={() => xulytru(item.cartId)}>-</button>) : (<button style={{ width:"50px" }}>-</button>)}
                                  <input type="text" min={1} max={100} value={item.quantity > 0 ? item.quantity : 1} style={{ width:"50px", textAlign:"center" }} />
                                  <button style={{ width:"50px" }} onClick={() => xulycong(item.cartId)}>+</button>
                                </td>
                                <td class="text-center"> ${item.car.carPrice}</td>
                                <td class="text-center">${item.totalAmount}</td>
                                {/* <td class="text-center">{item.car.carStatus}</td> */}
                                <td class="text-center btn btn-dark ml-5 mt-4"
                                 onClick={() => handleDelete(item.cartId)}
                                >Remore</td>
                              </tr>
                            )
                          })}
                </tbody>
              </table>
                        <div className="cart-total">TOTAL: {total}$</div> 
            </div>
        </form>
        </div>
    </div>
  )
}

export default Cart