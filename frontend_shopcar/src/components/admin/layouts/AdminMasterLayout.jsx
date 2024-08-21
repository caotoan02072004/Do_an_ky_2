import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SideBar from "./sidebar/SideBar";

const AdminMasterLayout = ({ child }) => {
  return (
    <div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
      <Header />
      <div class="app-main">
        <SideBar />
        <div class="app-main__outer">
          {child}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminMasterLayout;
