import React, { useEffect, useState } from 'react'
import * as carService from "../../../../../services/CarService";
import { useParams } from 'react-router-dom';

const DetailCar = props => {
  const { id } = useParams();
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

  const [data, setData] = useState(initData);

  const fetchDataById = async (id) => {
    const[result, error] = await carService.findById(id);
    if(result){
      setData(result.data);
    }
    if(error){
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
                Product
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
            <div class="card-body display_data">

                <div class="position-relative row form-group">
                    <label for="" class="col-md-3 text-md-right col-form-label">Images</label>
                    <div class="col-md-9 col-xl-8">
                        <ul class="text-nowrap overflow-auto" id="images">
                            <li class="d-inline-block mr-1" style={{ position: "relative" }}>
                                <img style={{ height: "150px" }} src={data.carImage}
                                    alt="ảnh" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="position-relative row form-group">
                    <label for="brand_id"
                        class="col-md-3 text-md-right col-form-label">Name</label>
                    <div class="col-md-9 col-xl-8">
                        <p>
                          {data.carName}
                        </p>
                    </div>
                </div>

                <div class="position-relative row form-group">
                    <label for="brand_id"
                        class="col-md-3 text-md-right col-form-label">Company</label>
                    <div class="col-md-9 col-xl-8">
                        <p>
                          {data.carCompanyId}
                        </p>
                    </div>
                </div>

                <div class="position-relative row form-group">
                    <label for="brand_id"
                        class="col-md-3 text-md-right col-form-label">Design</label>
                    <div class="col-md-9 col-xl-8">
                        <p>
                          {data.carDesign}
                        </p>
                    </div>
                </div>
            
                <div class="position-relative row form-group">
                    <label for="name" class="col-md-3 text-md-right col-form-label">Date</label>
                    <div class="col-md-9 col-xl-8">
                        <p>
                          {data.carDate}
                        </p>
                    </div>
                </div>

                <div class="position-relative row form-group">
                    <label for="content"
                        class="col-md-3 text-md-right col-form-label">Color</label>
                    <div class="col-md-9 col-xl-8">
                        <p>
                          {data.carColor}
                        </p>
                    </div>
                </div>

                <div class="position-relative row form-group">
                    <label for="price"
                        class="col-md-3 text-md-right col-form-label">Price</label>
                    <div class="col-md-9 col-xl-8">
                        <p>${data.carPrice}</p>
                    </div>
                </div>

                <div class="position-relative row form-group">
                    <label for="discount"
                        class="col-md-3 text-md-right col-form-label">Sale Price</label>
                    <div class="col-md-9 col-xl-8">
                        <p>${data.carSalePrice}</p>
                    </div>
                </div>

                <div class="position-relative row form-group">
                    <label for="qty"
                        class="col-md-3 text-md-right col-form-label">Number Km</label>
                    <div class="col-md-9 col-xl-8">
                        <p>
                          {data.carNumberKm}
                        </p>
                    </div>
                </div>

                <div class="position-relative row form-group">
                    <label for="description"
                        class="col-md-3 text-md-right col-form-label">Description</label>
                    <div class="col-md-9 col-xl-8">
                        <p>
                          {data.carDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default DetailCar