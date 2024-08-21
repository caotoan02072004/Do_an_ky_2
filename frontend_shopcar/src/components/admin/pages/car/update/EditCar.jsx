import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as carService from "../../../../../services/CarService";
import Swal from "sweetalert2";

const EditCar = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const initPostData = {
    carName: "",
    carImage: "",
    carCompanyId: 1,
    carDesign: "",
    carDate: "",
    carColor: "",
    carPrice: 0,
    carSalePrice: 0,
    carStatus: 1,
    carNumberKm: 0,
    carDescription: "",
  }

  const initData = {
    carName: "",
    carImage: "",
    carCompanyId: "",
    carDesign: "",
    carDate: "",
    carColor: "",
    carPrice: "",
    carSalePrice: "",
    carStatus: "",
    carNumberKm: "",
    carDescription: "",
  }

  const [postData, setPostData] = useState(initPostData);
  const [data, setData] = useState(initData) ;

  const fetchDataById = async (id) => {
    const [result, error] = await carService.findById(id);
    if(result){
      setData(result.data);
    }
    if(error){
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPostData({...postData, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      carName: postData.carName
       ? postData.carName
       : data.carName,
      carImage: postData.carImage
       ? postData.carImage
       : data.carImage,
      carCompanyId: postData.carCompanyId
       ? postData.carCompanyId
       : data.carCompanyId,
      carDesign: postData.carDesign
       ? postData.carDesign
       : data.carDesign,
      carDate: postData.carDate
       ? postData.carDate
       : data.carDate,
      carColor: postData.carColor
       ? postData.carColor
       : data.carColor,
      carPrice: postData.carPrice
       ? postData.carPrice
       : data.carPrice,
      carSalePrice: postData.carSalePrice
       ? postData.carSalePrice
       : data.carSalePrice,
      carStatus: postData.carStatus
       ? postData.carStatus
       : data.carStatus,
      carNumberKm: postData.carNumberKm
       ? postData.carNumberKm
       : data.carNumberKm,
      carDescription: postData.carDescription
       ? postData.carDescription
       : data.carDescription,
    };

    const [result, error] = await carService.update(id, newData);
    if (result) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Update Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/listCar");
    }
    if (error) {
      console.log(error);
    }
  }


useEffect(() => {
  fetchDataById(id);
}, [id]);

  return (
    <>
      <div class="app-main__inner">
        <div class="app-page-title">
          <div class="page-title-wrapper">
            <div class="page-title-heading">
              <div class="page-title-icon">
                <i class="pe-7s-ticket icon-gradient bg-mean-fruit"></i>
              </div>
              <div>
                Car
                <div class="page-title-subheading">
                  View, create, update, delete and manage.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <form method="post"
                 enctype="multipart/form-data"
                 onSubmit={(e) => handleSubmit(e)}
                 >
                <div class="position-relative row form-group">
                    <label
                      for="carName"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Car Name
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        required
                        type="text"
                        name="carName"
                        class="form-control"
                        placeholder="Name"
                        defaultValue={data.carName}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group">
                    <label
                      for="carImage"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Image
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        required
                        type="text"
                        name="carImage"
                        class="form-control"
                        placeholder="Image"
                        defaultValue={data.carImage}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group">
                    <label
                      for="carCompanyId"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Company
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        required
                        type="text"
                        name="carCompanyId"
                        class="form-control"
                        placeholder="Company"
                        defaultValue={data.carCompanyId}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group">
                    <label
                      for="carDesign"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Design
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        required
                        type="text"
                        name="carDesign"
                        class="form-control"
                        placeholder="Design"
                        defaultValue={data.carDesign}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group">
                    <label
                      for="carDate"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Date
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        required
                        type="date"
                        name="carDate"
                        class="form-control"
                        placeholder="Date"
                        defaultValue={data.carDate}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group">
                    <label
                      for="carColor"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Color
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        required
                        type="text"
                        name="carColor"
                        class="form-control"
                        placeholder="Color"
                        defaultValue={data.carColor}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group">
                    <label
                      for="carPrice"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Price
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        required
                        type="text"
                        name="carPrice"
                        class="form-control"
                        placeholder="Price"
                        defaultValue={data.carPrice}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div class="position-relative row form-group">
                    <label
                      for="carSalePrice"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Sale Price
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        required
                        type="text"
                        name="carSalePrice"
                        class="form-control"
                        placeholder="Sale Price"
                        defaultValue={data.carSalePrice}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group">
                  <label
                    for="status"
                    class="col-md-3 text-md-right col-form-label"
                  >
                    Status
                  </label>
                  <div class="form-check form-check-inline ml-4">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="carStatus"
                        value="0"
                        defaultChecked={
                          data.carStatus == 0 ? "checked" : ""
                        }
                        onChange={(e) => handleChange(e)}
                      />{" "}
                      Hiện
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="carStatus"
                        value={1}
                        defaultChecked={
                          data.carStatus == 1 ? "checked" : ""
                        }
                        onChange={(e) => handleChange(e)}
                      />{" "}
                      Ẩn
                    </label>
                  </div>
                </div>

                  <div class="position-relative row form-group">
                    <label
                      for="carNumberKm"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Number Km
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        required
                        type="text"
                        name="carNumberKm"
                        class="form-control"
                        placeholder="Number Km"
                        defaultValue={data.carNumberKm}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div class="position-relative row form-group">
                    <label
                      for="carDescription"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Description
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        required
                        type="text"
                        name="carDescription"
                        class="form-control"
                        placeholder="Description"
                        defaultValue={data.carDescription}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group mb-1">
                    <div class="col-md-9 col-xl-8 offset-md-2">
                      <Link to={"/listCar"} class="border-0 btn btn-outline-danger mr-1">
                        <span class="btn-icon-wrapper pr-1 opacity-8">
                          <i class="fa fa-times fa-w-20"></i>
                        </span>
                        <span>Cancel</span>
                      </Link>

                      <button
                        type="submit"
                        class="btn-shadow btn-hover-shine btn btn-primary"
                      >
                        <span class="btn-icon-wrapper pr-2 opacity-8">
                          <i class="fa fa-download fa-w-20"></i>
                        </span>
                        <span>Save</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCar;
