import React from "react";
import { useFormik } from "formik";
import "../App.css";
import axios from "axios";
import { env } from "../config";

const CreateUsers = () => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Position: "",
      Office: "",
      Age: "",
      Startdate: "",
      Salary: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.Name === "") {
        errors.Name = "Please enter a user name ";
      }
      if (values.Position === "") {
        errors.Position = "Please enter Position";
      }
      return errors;
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${env.api}/user`, values, {
        headers: {
          Authorization: window.localStorage.getItem("app-token"),
        },
      });
      alert("User Created");
    },
  });
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row mb-4">
            <div className="col-lg-6 mt-4">
              <div className="form-outline">
                <label>User Name</label>
                <input
                  type={"text"}
                  className={`form-control ${
                    formik.errors.Name ? "input-error" : ""
                  }`}
                  value={formik.values.Name}
                  onChange={formik.handleChange}
                  name="Name"
                />
                <span style={{ color: "red" }}>{formik.errors.Name}</span>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="form-outline">
                <label>Position</label>
                <input
                  type={"text"}
                  className="form-control"
                  value={formik.values.Position}
                  onChange={formik.handleChange}
                  name="Position"
                />
                <span style={{ color: "red" }}>{formik.errors.Position}</span>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="form-outline">
                <label>Office</label>
                <input
                  type={"text"}
                  className="form-control"
                  value={formik.values.Office}
                  onChange={formik.handleChange}
                  name="Office"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="form-outline">
                <label>Age</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.Age}
                  onChange={formik.handleChange}
                  name="Age"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="form-outline">
                <label>Startdate</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.Startdate}
                  onChange={formik.handleChange}
                  name="Startdate"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="form-outline">
                <label>Salary</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.Salary}
                  onChange={formik.handleChange}
                  name="Salary"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <button
                type="submit"
                className="btn btn-primary "
                value="Submit"
                disabled={!formik.isValid}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUsers;
