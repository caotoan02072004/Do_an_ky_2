import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as blogService from "../../../../../services/BlogService";
import Swal from "sweetalert2";

const AddBlog = () => {
    const initData = {
        blogTitle: "",
        blogContent: "",
        blogAuthor: "",
        blogDate: "",
    };

    const [postData, setPostData] = useState(initData);

    const handleChangeValue = async (e) => {
      const {name, value} = e.target;
      setPostData({ ...postData, [name] : value});
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newData = {
        blogTitle: postData.blogTitle,
        blogContent: postData.blogContent,
        blogAuthor: postData.blogAuthor,
        blogDate: postData.blogDate.toString(),
      };
      const [result, error] = await blogService.save(newData);
      if (result) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Add Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/listBlog");
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
              Blog
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
                    for="blogTitle"
                    class="col-md-3 text-md-right col-form-label"
                  >
                    Title
                  </label>
                  <div class="col-md-9 col-xl-8">
                    <input
                      type="text"
                      name="blogTitle"
                      class="form-control"
                      placeholder="Enter your TitLe"
                      onChange={(e) => handleChangeValue(e)}
                    />
                  </div>
                </div>
                <div class="position-relative row form-group">
                  <label
                    for="blogContent"
                    class="col-md-3 text-md-right col-form-label"
                  >
                    Content
                  </label>
                  <div class="col-md-9 col-xl-8">
                    <input
                      type="text"
                      name="blogContent"
                      class="form-control"
                      placeholder="Enter your Content"
                      onChange={(e) => handleChangeValue(e)}
                    />
                  </div>
                </div>
                <div class="position-relative row form-group">
                  <label
                    for="blogAuthor"
                    class="col-md-3 text-md-right col-form-label"
                  >
                    Author
                  </label>
                  <div class="col-md-9 col-xl-8">
                    <input
                      type="text"
                      name="blogAuthor"
                      class="form-control"
                      placeholder="Enter your Author"
                      onChange={(e) => handleChangeValue(e)}
                    />
                  </div>
                </div>
                <div class="position-relative row form-group">
                  <label
                    for="blogDate"
                    class="col-md-3 text-md-right col-form-label"
                  >
                    Date
                  </label>
                  <div class="col-md-9 col-xl-8">
                    <input
                      type="date"
                      name="blogDate"
                      class="form-control"
                      onChange={(e) => handleChangeValue(e)}
                    />
                  </div>
                </div>
                <div class="position-relative row form-group mb-1">
                  <div class="col-md-9 col-xl-8 offset-md-2">
                    <Link to={"/listBlog"} class="border-0 btn btn-outline-danger mr-1">
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
  )
}

export default AddBlog