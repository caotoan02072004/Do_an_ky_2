import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as carService from "../../../../../services/CarService";

const AddCar = () => {
  const initData = {
    carName: "",
    carImage: "",
    carCompanyId: 1,
    carDesign: "",
    carDate: 0,
    carColor: "",
    carPrice: 0,
    carSalePrice: 0,
    carStatus: 1,
    carNumberKm: 0,
    carDescription: "",
  };
  const [postData, setPostData] = useState(initData);

  const handleChangeValue = async (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
        carName: postData.carName ? postData.carName : null,
        carImage: postData.carImage,
        carCompanyId: Number(postData.carCompanyId),
        carDesign: postData.carDesign,
        carDate: postData.carDate.toString(),
        carColor: postData.carColor,
        carPrice: Number(postData.carPrice),
        carSalePrice: Number(postData.carSalePrice),
        carStatus: Number(postData.carStatus),
        carNumberKm: Number(postData.carNumberKm),
        carDescription: postData.carDescription,
      };
      console.log(newData)
    const [result, error] = await carService.save(newData);
    if (result) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Add Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/listCar");
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
    // localStorage.setItem("token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcyMDQ3MTMyMSwiaWF0IjoxNzIwNDUzMzIxfQ.VrucjhA7eH1ylr98LFO8PdBOKsrNTd6mCa5nniRZ2s1FRjvHdoLQyX8KWWoH67wWM_UT5XC_ScgwUoGkw57x5Q")
  },[])
  return (
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
                <form
                  enctype="multipart/form-data"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  {/* <div class="position-relative row form-group">
                    <label
                      for="image"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Avatar
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <img
                        style={{ height: "200px", cursor: "pointer" }}
                        class="thumbnail rounded-circle"
                        data-toggle="tooltip"
                        title="Click to change the image"
                        data-placement="bottom"
                        src="assets/images/add-image-icon.jpg"
                        alt="Avatar"
                      />
                      <input
                        name="image"
                        type="file"
                        onchange="changeImg(this)"
                        class="image form-control-file"
                        style={{ display: "none" }}
                        value=""
                      />
                      <input type="hidden" name="image_old" value="" />
                      <small class="form-text text-muted">
                        Click on the image to change (required)
                      </small>
                    </div>
                  </div> */}

                  <div class="position-relative row form-group">
                    <label
                      for="carName"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Car Name
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        type="text"
                        name="carName"
                        class="form-control"
                        placeholder="Name"
                        onChange={(e) => handleChangeValue(e)}
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
                        type="text"
                        name="carImage"
                        class="form-control"
                        placeholder="Image"
                        onChange={(e) => handleChangeValue(e)}
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
                        type="text"
                        name="carCompanyId"
                        class="form-control"
                        placeholder="Id Company"
                        onChange={(e) => handleChangeValue(e)}
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
                        type="text"
                        name="carDesign"
                        class="form-control"
                        placeholder="Design"
                        onChange={(e) => handleChangeValue(e)}
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
                        type="date"
                        name="carDate"
                        class="form-control"
                        placeholder="Date"
                        onChange={(e) => handleChangeValue(e)}
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
                        type="text"
                        name="carColor"
                        class="form-control"
                        placeholder="Color"
                        onChange={(e) => handleChangeValue(e)}
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
                        type="text"
                        name="carPrice"
                        class="form-control"
                        placeholder="Price"
                        onChange={(e) => handleChangeValue(e)}
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
                        type="text"
                        name="carSalePrice"
                        class="form-control"
                        placeholder="Sale Price"
                        onChange={(e) => handleChangeValue(e)}
                      />
                    </div>
                  </div>
                  <div class="position-relative row form-group">
                    <label
                      for="carStatus"
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
                          checked
                          onChange={(e) => handleChangeValue(e)}
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
                          value="1"
                          onChange={(e) => handleChangeValue(e)}
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
                        type="text"
                        name="carNumberKm"
                        class="form-control"
                        placeholder="Number Km"
                        onChange={(e) => handleChangeValue(e)}
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
                      <textarea
                        class="form-control"
                        name="carDescription"
                        id="carDescription"
                        placeholder="Description"
                        onChange={(e) => handleChangeValue(e)}
                      ></textarea>
                    </div>
                  </div>

                  <div class="position-relative row form-group mb-1">
                    <div class="col-md-9 col-xl-8 offset-md-2">
                      <Link
                        to={"/listCar"}
                        class="border-0 btn btn-outline-danger mr-1"
                      >
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
  );
};

export default AddCar;
