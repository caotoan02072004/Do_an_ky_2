import React, { useState } from "react";
import "./login.css"
import * as loginService from "../../services/LoginService"
import { useNavigate } from "react-router-dom";

function Login() {
  const initData = {
    userName: "",
    userPassword: ""
  }
  const [loginData, setLoginData] = useState(initData);
  const navigate  = useNavigate()

  const login = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // const {name, value} = e.target;
    setLoginData({...loginData, [name]:value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newData = {
      userName: loginData.userName,
      userPassword: loginData.userPassword
    }
    console.log(newData)
    const [res, err] = await loginService.login(newData);
    if(res){
      let role = res.data.user.role[0].roleName;
      if (role == "Admin") {
        localStorage.setItem("token", JSON.stringify(res.data.jwtToken));
        navigate("/admin")
      } else if(role == "User"){
        localStorage.setItem("token", JSON.stringify(res.data.jwtToken));
        navigate("/")
      }
    }
    if(err){
      console.log(err)
    }
  }
  

  return(
    <>
    <div className="anhlogin">
      <img src="https://file.vfo.vn/hinh/2018/03/hinh-anh-hinh-nen-sieu-xe-oto-dep-nhat-3.jpg" alt=""/>
    </div>
    <div id="wrapper">
        <form action="" method="post" id="form-login" onSubmit={(e) => handleSubmit(e)}>
            <h1 class="form-heading">Form đăng nhập</h1>
            <div class="form-group1">
                <i class="far fa-user"></i>
                <input type="text" name="userName" class="form-input" onChange={(e) => login(e)}/>
            </div>
            <div class="form-group1">
                <i class="fas fa-key"></i>
                <input type="password" name="userPassword" class="form-input" onChange={(e) => login(e)}/>
                <div id="eye">
                    <i class="far fa-eye"></i>
                </div>
            </div>
            <input type="submit" value="Đăng nhập" class="form-submit"/>
        </form>
    </div>
    </>
  ) 
  
}

export default Login;
