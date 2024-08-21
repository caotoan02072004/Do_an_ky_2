import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as blogService from "../../../../../services/BlogService";
import Swal from "sweetalert2";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const initPostData = {
    blogTitle: "",
    blogContent: "",
    blogAuthor: "",
    blogDate: 0,
  };

  const initData = {
    blogTitle: "",
    blogContent: "",
    blogAuthor: "",
    blogDate: "",
  };

  const [postData, setPostData] = useState(initPostData);
  const [data, setData] = useState(initData);

  const fetchDataById = async (id) => {
    const [result, error] = await blogService.findById(id);
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
      blogTitle: postData.blogTitle ? postData.blogTitle : data.blogTitle,
      blogContent: postData.blogContent
        ? postData.blogContent
        : data.blogContent,
      blogAuthor: postData.blogAuthor ? postData.blogAuthor : data.blogAuthor,
      blogDate: postData.blogDate ? postData.blogDate : data.blogDate,
    };
    const [result, error] = await blogService.update(id, newData);
    if (result) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Update Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/listBlog");
    }
    if (error) {
      console.log(error);
    }
  };

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
                <form method="post"
                 enctype="multipart/form-data"
                 onSubmit={(e) => handleSubmit(e)}
                 >
                  <div class="position-relative row form-group">
                    <label
                      for="name"
                      class="col-md-3 text-md-right col-form-label"
                    >
                      Title
                    </label>
                    <div class="col-md-9 col-xl-8">
                      <input
                        required
                        name="blogTitle"
                        id="blogTitle"
                        placeholder="Name"
                        type="text"
                        class="form-control"
                        defaultValue={data.blogTitle}
                        onChange={(e) => handleChange(e)}
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
                        required
                        name="blogContent"
                        id="blogContent"
                        placeholder="Content"
                        type="text"
                        class="form-control"
                        defaultValue={data.blogContent}
                        onChange={(e) => handleChange(e)}
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
                        required
                        name="blogAuthor"
                        id="blogAuthor"
                        placeholder="Author"
                        type="text"
                        class="form-control"
                        defaultValue={data.blogAuthor}
                        onChange={(e) => handleChange(e)}
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
                        required
                        type="date"
                        name="blogDate"
                        class="form-control"
                        placeholder="Date"
                        defaultValue={data.blogDate}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>

                  <div class="position-relative row form-group mb-1">
                    <div class="col-md-9 col-xl-8 offset-md-2">
                      <Link
                        to={`/listBlog`}
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
    </>
  );
};

export default EditBlog;
