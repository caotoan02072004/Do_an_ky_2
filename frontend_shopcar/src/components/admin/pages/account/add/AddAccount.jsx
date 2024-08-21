import React, { useState } from "react";
import * as accountService from "../../../../../services/AccountService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddAccount = () => {
  const initData = {
    userName: "",
    userAvatar: "",
    userFullName: "",
    userEmail: "",
    userPassword: "",
    userPhoneNumber: "",
    userAddress: "",
    userGender: "",
    userActive: "",
    userCount: "",
    userCurrentTime: "",
    userUnlockTime: "",
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
      userName: postData.userName,
      userAvatar: postData.userAvatar,
      userFullName: postData.userFullName,
      userEmail: postData.userEmail,
      userPassword: postData.userPassword,
      userPhoneNumber: postData.userPhoneNumber,
      userAddress: postData.userAddress,
      userGender: postData.userGender,
      userActive: postData.userActive,
      userCount: postData.userCount,
      userCurrentTime: postData.userCurrentTime,
      userUnlockTime: postData.userUnlockTime,
    };
    const [result, error] = await accountService.save(newData);
    if (result) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Add Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/listAccount");
    }
    if (error) {
      console.log(error);
    }
  };
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
                User
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
                method="post"
                  enctype="multipart/form-data"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div class="position-relative row form-group">
                    <label
                      for="name"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Name
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        name="userName"
                        placeholder="Name"
                        type="text"
                        class="form-control"
                        onChange={(e) => handleChangeValue(e)}
                      />
                    </div>
                  </div>
                  <div class="position-relative row form-group">
                    <label
                      for="userAvatar"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Avatar
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        name="userAvatar"
                        placeholder="Avatar"
                        type="text"
                        class="form-control"
                        onChange={(e) => handleChangeValue(e)}
                      />
                    </div>
                  </div>
                  <div class="position-relative row form-group">
                    <label
                      for="userFullName"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      FullName
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        name="userFullName"
                        placeholder="FullName"
                        type="text"
                        class="form-control"
                        onChange={(e) => handleChangeValue(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group">
                    <label
                      for="userEmail"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Email
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        name="userEmail"
                        placeholder="Email"
                        type="text"
                        class="form-control"
                        onChange={(e) => handleChangeValue(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group">
                    <label
                      for="userPassword"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Password
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        name="userPassword"
                        placeholder="userPassword"
                        type="password"
                        class="form-control"
                        onChange={(e) => handleChangeValue(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group">
                    <label
                      for="userPhoneNumber"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Phone Number
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        name="userPhoneNumber"
                        placeholder="Phone Number"
                        type="text"
                        class="form-control"
                        onChange={(e) => handleChangeValue(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group">
                    <label
                      for="userAddress"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Address
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        name="userAddress"
                        placeholder="Address"
                        type="text"
                        class="form-control"
                        onChange={(e) => handleChangeValue(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group">
                    <label
                      for="userGender"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Gender
                    </label>
                    <div class="form-check form-check-inline ml-4">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userGender"
                          value="0"
                          checked
                          onChange={(e) => handleChangeValue(e)}
                        />{" "}
                        Nam
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userGender"
                          value="1"
                          onChange={(e) => handleChangeValue(e)}
                        />{" "}
                        Nữ
                      </label>
                    </div>
                  </div>
                  <div class="position-relative row form-group">
                    <label
                      for="userActive"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Active
                    </label>
                    <div class="form-check form-check-inline ml-4">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userActive"
                          value="0"
                          checked
                          onChange={(e) => handleChangeValue(e)}
                        />{" "}
                        Admin
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userActive"
                          value="1"
                          onChange={(e) => handleChangeValue(e)}
                        />{" "}
                        User
                      </label>
                    </div>
                  </div>
                  <div class="position-relative row form-group">
                    <label
                      for="userCount"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Count
                    </label>
                    <div class="form-check form-check-inline ml-4">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userCount"
                          value="0"
                          checked
                          onChange={(e) => handleChangeValue(e)}
                        />{" "}
                        Nam
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userCount"
                          value="1"
                          onChange={(e) => handleChangeValue(e)}
                        />{" "}
                        Nữ
                      </label>
                    </div>
                  </div>
                  <div class="position-relative row form-group">
                    <label
                      for="userCurrentTime"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      CurrentTime
                    </label>
                    <div class="form-check form-check-inline ml-4">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userCurrentTime"
                          value="0"
                          checked
                          onChange={(e) => handleChangeValue(e)}
                        />{" "}
                        Nam
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userCurrentTime"
                          value="1"
                          onChange={(e) => handleChangeValue(e)}
                        />{" "}
                        Nữ
                      </label>
                    </div>
                  </div>
                  <div class="position-relative row form-group">
                    <label
                      for="userUnlockTime"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      UnlockTime
                    </label>
                    <div class="form-check form-check-inline ml-4">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userUnlockTime"
                          value="0"
                          checked
                          onChange={(e) => handleChangeValue(e)}
                        />{" "}
                        Nam
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userUnlockTime"
                          value="1"
                          onChange={(e) => handleChangeValue(e)}
                        />{" "}
                        Nữ
                      </label>
                    </div>
                  </div>
                  <div class="position-relative row form-group mb-1">
                    <div class="col-md-9 col-xl-8 offset-md-2">
                      <a href="#" class="border-0 btn btn-outline-danger mr-1">
                        <span class="btn-icon-wrapper pr-1 opacity-8">
                          <i class="fa fa-times fa-w-20"></i>
                        </span>
                        <span>Cancel</span>
                      </a>

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

export default AddAccount;
