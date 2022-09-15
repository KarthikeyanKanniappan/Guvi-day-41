import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

const EditUser = () => {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getUser(params.id);
  }, []);

  let getUser = async (id) => {
    try {
      let response = await axios.get(
        `https://62ff9b659350a1e548e2995c.mockapi.io/for/${id}`
      );
      formik.setValues({
        Name: response.data.Name,
        Position: response.data.Position,
        Office: response.data.Office,
        Age: response.data.Age,
        Startdate: response.data.Startdate,
        Salary: response.data.Salary,
      });
    } catch (err) {
      console.log(err);
    }
  };

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
      await axios.put(
        `https://62ff9b659350a1e548e2995c.mockapi.io/for/${params.id}`,
        values
      );
      navigate("/portal/Users");
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

export default EditUser;
