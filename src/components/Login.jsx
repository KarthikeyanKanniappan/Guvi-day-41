import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { env } from "../config";

const Login = () => {
  let navigate = useNavigate();
  // let username = "WelcomeUser";
  // let password = "1233";
  // let login = () => {
  //   if (username === "WelcomeUser" && password === "1233") {
  //     navigate("/portal/dashboard");
  //   } else {
  //     alert("Wrong Credientials");
  //   }
  // };
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post(`${env.api}/login`, values);
        if (loginData.status === 200) {
          window.localStorage.setItem("app-token", loginData.data.token);
          navigate("/portal/dashboard");
        }
      } catch (err) {
        console.log(err);
        alert(err.response.data.message);
      }
    },
  });
  return (
    <div className="container">
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={formik.handleSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          name="email"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            for="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>
                      <hr />
                    </form>
                    <hr />
                    <div style={{ color: "black" }} className="text-center">
                      Please enter <br /> <b>email address</b> :
                      perosn1@gmail.com,
                      <br />
                      <b>password</b> : hello
                    </div>
                    <div style={{ color: "black" }} className="text-center">
                      <b>Note</b>:Website will be active for 5mints
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
