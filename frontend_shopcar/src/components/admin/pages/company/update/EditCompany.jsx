import React, { useEffect, useState } from "react";
import * as companyService from "../../../../../services/CompanyService";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditCompany = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const initPostData = {
    companyName: "",
    companyStatus: 0,
  };
  const initData = {
    companyName: "",
    companyStatus: 0,
  };
  const [postData, setPostData] = useState(initPostData);
  const [data, setData] = useState(initData);

  const fetchDataById = async (id) => {
    const [result, error] = await companyService.findById(id);
    if (result) {
      setData(result.data);
    }
    if (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      companyName: postData.companyName
        ? postData.companyName
        : data.companyName,
      companyStatus: postData.companyStatus
        ? postData.companyStatus
        : data.companyStatus,
    };

    const [result, error] = await companyService.update(id, newData);
    if (result) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Update Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataById(id);
  }, [id]);

  return (
    // <div className="container">
    //   <form method="post" onSubmit={(e) => handleSubmit(e)}>
    //     <h2>Thêm mới</h2>
    //     <div class="form-group">
    //       <label for="">Name</label>
    //       <input type="text" name="companyName" id=""
    //       class="form-control" placeholder="Enter your name"
    // defaultValue={data.companyName}
    // onChange={(e) => handleChange(e)} />
    //     </div>
    //  <div class="form-group">
    //    <label for="">Status</label> <br />
    //    <div class="form-check form-check-inline">
    //     <label class="form-check-label">
    //       <input
    //         class="form-check-input"
    //         type="radio"
    //         name="companyStatus"
    //         value={0}
            // defaultChecked={
            //   data.companyStatus == 0 ? "checked" : ""
            // }
            // onChange={(e) => handleChange(e)}
    //       /> Hiện
    //     </label>
    //   </div>
    //   <div class="form-check form-check-inline">
    //     <label class="form-check-label">
    //       <input class="form-check-input" type="radio"
    //       name="companyStatus" id="" value={1}
    //       defaultChecked={
    //         data.companyStatus == 1 ? "checked" : ""
    //       }
    //       onChange={(e) => handleChange(e)}/> Ẩn
    //     </label>
    //   </div>
    //  </div>

    //    <button type="submit" class="btn btn-primary">Submit</button>
    //   </form>
    // </div>
    <div class="app-main__inner">
      <div class="app-page-title">
        <div class="page-title-wrapper">
          <div class="page-title-heading">
            <div class="page-title-icon">
              <i class="pe-7s-ticket icon-gradient bg-mean-fruit"></i>
            </div>
            <div>
              Category
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
                      required
                      name="companyName"
                      placeholder="Enter your Name"
                      type="text"
                      class="form-control"
                      defaultValue={data.companyName}
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
                        name="companyStatus"
                        value="0"
                        defaultChecked={
                          data.companyStatus == 0 ? "checked" : ""
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
                        name="companyStatus"
                        value={1}
                        defaultChecked={
                          data.companyStatus == 1 ? "checked" : ""
                        }
                        onChange={(e) => handleChange(e)}
                      />{" "}
                      Ẩn
                    </label>
                  </div>
                </div>

                <div class="position-relative row form-group mb-1">
                  <div class="col-md-9 col-xl-8 offset-md-2">
                    <Link to={"/"} class="border-0 btn btn-outline-danger mr-1">
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

export default EditCompany;
