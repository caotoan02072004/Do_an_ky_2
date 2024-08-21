import React, { useEffect, useState } from "react";
import * as accountService from "../../../../../services/AccountService";

const ListAccount = () => {
  const [data, setData] = useState([]);

  const fetchAllAccount = async () => {
    const [result, error] = await accountService.findByAccount();
    if (result) {
      setData(result.data);
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllAccount();
  }, []);
  return (
    <div class="app-main__inner">
      <div class="app-page-title">
        <div class="page-title-wrapper">
          <div class="page-title-heading">
            <div class="page-title-icon">
              <i class="pe-7s-ticket icon-gradient bg-mean-fruit"></i>
            </div>
            <div>
              Account
              <div class="page-title-subheading">
                View, create, update, delete and manage.
              </div>
            </div>
          </div>

          <div class="page-title-actions">
            <a
              href="/addAccount"
              class="btn-shadow btn-hover-shine mr-3 btn btn-primary"
            >
              <span class="btn-icon-wrapper pr-2 opacity-7">
                <i class="fa fa-plus fa-w-20"></i>
              </span>
              Create
            </a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header">
              <form>
                <div class="input-group">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search everything"
                    class="form-control"
                  />
                  <span class="input-group-append">
                    <button type="submit" class="btn btn-primary">
                      <i class="fa fa-search"></i>&nbsp; Search
                    </button>
                  </span>
                </div>
              </form>
            </div>

            <div class="table-responsive">
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th class="text-center">Full Name</th>
                    <th class="text-center">Avatar</th>
                    <th class="text-center">Address</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Phone</th>
                    <th class="text-center">Gender</th>
                    <th class="text-center">Level</th>
                    <th class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((item, key) => {
                      return (
                        <tr>
                          <td class="text-center">{item.userName}</td>
                          <td>
                            <div class="widget-content p-0">
                              <div class="widget-content-wrapper">
                                <div class="widget-content-left mr-3">
                                  <div class="widget-content-left">
                                    <img
                                      width="40"
                                      class="rounded-circle"
                                      data-toggle="tooltip"
                                      title="Image"
                                      data-placement="bottom"
                                      src={item.userAvatar}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="text-center">{item.userAddress}</td>
                          <td class="text-center">{item.userEmail}</td>
                          <td class="text-center">{item.userPhoneNumber}</td>
                          <td class="text-center">{item.userGender == 0 ? "Nam" : "Nữ"}</td>
                          <td class="text-center">{item.userActive == 0 ? "Admin" : "User"}</td>
                          <td class="text-center">
                            <a
                              href="./user-show.html"
                              class="btn btn-hover-shine btn-outline-primary border-0 btn-sm"
                            >
                              Details
                            </a>
                            <a
                              href="./user-edit.html"
                              data-toggle="tooltip"
                              title="Edit"
                              data-placement="bottom"
                              class="btn btn-outline-warning border-0 btn-sm"
                            >
                              <span class="btn-icon-wrapper opacity-8">
                                <i class="fa fa-edit fa-w-20"></i>
                              </span>
                            </a>
                            <form class="d-inline" action="" method="post">
                              <button
                                class="btn btn-hover-shine btn-outline-danger border-0 btn-sm"
                                type="submit"
                                data-toggle="tooltip"
                                title="Delete"
                                data-placement="bottom"
                                onclick="return confirm('Do you really want to delete this item?')"
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

export default ListAccount;
