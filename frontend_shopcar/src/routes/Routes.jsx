import AddCompany from "../components/admin/pages/company/add/AddCompany";
import ListCompany from "../components/admin/pages/company/list/ListCompany";
import EditCompany from "../components/admin/pages/company/update/EditCompany";
import ListAccount from "../components/admin/pages/account/list/ListAccount";

import AdminMasterLayout from "../components/admin/layouts/AdminMasterLayout";
import Home from "../components/customer/pages/home/Home";
import About from "../components/customer/pages/about/About";

import UserMasterLayout from "../components/customer/layouts/UserMasterLayout";
import ListCar from "../components/admin/pages/car/list/ListCar";
import AddCar from "../components/admin/pages/car/add/AddCar";
import EditCar from "../components/admin/pages/car/update/EditCar";
import DetailCar from "../components/admin/pages/car/detail/DetailCar";
import ListBlog from "../components/admin/pages/blog/list/ListBlog";
import AddBlog from "../components/admin/pages/blog/add/AddBlog";
import EditBlog from "../components/admin/pages/blog/update/EditBlog";
import Services from "../components/customer/pages/services/Services";
import Car from "../components/customer/pages/car/Car";
import Contact from "../components/customer/pages/contact/Contact";
import Detail from "../components/customer/pages/detail/Detail";
import Cart from "../components/customer/pages/cart/Cart";
import Login from "../components/login/Login";
import AddAccount from "../components/admin/pages/account/add/AddAccount";


export const adminRoutes = [
    {
        path: "/admin",
        element: <AdminMasterLayout child={<ListCompany />} />
    },
    {
        path: "/add",
        element: <AdminMasterLayout child={<AddCompany />} />
    },
    {
        path: "/edit/:id",
        element: <AdminMasterLayout child={<EditCompany />} />
    },
    {
        path: "/listCar",
        element: <AdminMasterLayout child={<ListCar />} />
    },
    {
        path: "/addCar",
        element: <AdminMasterLayout child={<AddCar />} />
    },
    {
        path: "/editCar/:id",
        element: <AdminMasterLayout child={<EditCar />} />
    },
    {
        path: "/detailCar/:id",
        element: <AdminMasterLayout child={<DetailCar />} />
    },
    {
        path: "/listBlog",
        element: <AdminMasterLayout child={<ListBlog />}/>
    },
    {
        path: "/addBlog",
        element: <AdminMasterLayout child={<AddBlog />}/>
    },
    {
        path: "/editBlog/:id",
        element: <AdminMasterLayout child={<EditBlog/>}/>
    },
    {
        path: "/listAccount",
        element:<AdminMasterLayout child={<ListAccount/>} />
    },
    {
        path: "/addAccount",
        element:<AdminMasterLayout child={<AddAccount/>}/>
    },
];


export const userRoutes = [
    {
        path:"/",
        element:<UserMasterLayout child={<Home/>}/>
    },
    {
        path:"/homeUser",
        element:<UserMasterLayout child={<Home/>}/>
    },
    {
        path: "/aboutUser",
        element: <UserMasterLayout child={<About/>}/>
    },
    {
        path: "/servicesUser",
        element: <UserMasterLayout child={<Services/>}/>
    },
    {
        path: "carUser",
        element: <UserMasterLayout child={<Car/>}/>
    },
    {
        path: "/contactUser",
        element: <UserMasterLayout child={<Contact/>}/>
    },
    {
        path: "/detailUser/:id",
        element: <UserMasterLayout child={<Detail/>}/>
    },
    {
        path: "/cartUser",
        element: <UserMasterLayout child={<Cart/>}/>
    },
];

export const loginRoutes = [
    {
        path: "/login",
        element: <Login/>
    },
];