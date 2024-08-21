import { useState } from "react";
import * as carService from "../../../../../services/CarService";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ListCar = () => {
  const [data, SetData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [keyword, setKeyword] = useState("");

  const fetchAllData = async () => {
    const [result, error] = await carService.findAll();
    if (result) {
      SetData(result.data);
    } else {
      console.log(error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const [result, error] = await carService.search(keyword);
    if (result) {
      SetData(result.data);
    }
    if (error) {
      console.log(error);
    }
  };

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
      const [res, err] = await carService.remove(id);
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

  useEffect(() => {
    fetchAllData();
  }, [isDelete]);
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

          <div class="page-title-actions">
            <Link
              to={"/addCar"}
              class="btn-shadow btn-hover-shine mr-3 btn btn-primary"
            >
              <span class="btn-icon-wrapper pr-2 opacity-7">
                <i class="fa fa-plus fa-w-20"></i>
              </span>
              Create
            </Link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header">
              <form onSubmit={(e) => handleSearch(e)}>
                <div class="input-group">
                  <input
                    type="text"
                    placeholder="Search everything"
                    class="form-control"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <span class="input-group-append">
                    <button type="submit" class="btn btn-primary">
                      <i class="fa fa-search"></i>
                    </button>
                  </span>
                </div>
              </form>
            </div>

            <div class="table-responsive">
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th class="text-center">ID</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Color</th>
                    <th class="text-center">Image</th>
                    <th class="text-center">Price</th>
                    <th class="text-center">Sele Price</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {data &&
                    data.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td class="text-center text-muted">#{item.carId}</td>
                          <td class="text-center">{item.carName}</td>
                          <td class="text-center">{item.carColor}</td>
                          <td>
                            <div class="widget-content p-0">
                              <div class="widget-content-wrapper">
                                <div class="widget-content-left mr-3">
                                  <div class="widget-content-left">
                                    <img
                                      style={{
                                        height: "60px",
                                        marginLeft: "70px",
                                      }}
                                      data-toggle="tooltip"
                                      title="Image"
                                      data-placement="bottom"
                                      src={item.carImage}
                                      alt="anh"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="text-center">${item.carPrice}</td>
                          <td class="text-center">${item.carSalePrice}</td>
                          <td class="text-center">
                            <div class="badge badge-success mt-2">
                              {item.carStatus === 0 ? "Ẩn" : "Hiện"}
                            </div>
                          </td>
                          <td class="text-center">
                            <Link
                              to={`/detailCar/${item.carId}`}
                              class="btn btn-hover-shine btn-outline-primary border-0 btn-sm"
                            >
                              Details
                            </Link>
                            <Link
                              to={`/editCar/${item.carId}`}
                              data-toggle="tooltip"
                              title="Edit"
                              data-placement="bottom"
                              class="btn btn-outline-warning border-0 btn-sm"
                            >
                              <span class="btn-icon-wrapper opacity-8">
                                <i class="fa fa-edit fa-w-20"></i>
                              </span>
                            </Link>
                            <form class="d-inline" action="" method="post">
                              <button
                                class="btn btn-hover-shine btn-outline-danger border-0 btn-sm"
                                type="button"
                                data-toggle="tooltip"
                                title="Delete"
                                data-placement="bottom"
                                onClick={() => handleDelete(item.carId)}
                              >
                                <span class="btn-icon-wrapper opacity-8">
                                  <i class="fa fa-trash fa-w-20"></i>
                                </span>
                              </button>
                            </form>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCar;
