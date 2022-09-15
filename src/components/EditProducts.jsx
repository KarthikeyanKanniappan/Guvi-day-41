import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

const EditProducts = () => {
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      Name: "",
      Manufacturer: "",
      Description: "",
      Review: "",
      Price: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.Name === "") {
        errors.Name = "Please enter a user name ";
      }
      if (values.Description === "") {
        errors.Description = "Please enter a description";
      }
      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://62ff9b659350a1e548e2995c.mockapi.io/products/${params.id}`,
        values
      );
      alert("Product Updated");
    },
  });

  useEffect(() => {
    getUser(params.id);
  }, []);

  let getUser = async (id) => {
    try {
      let response = await axios.get(
        `https://62ff9b659350a1e548e2995c.mockapi.io/products/${id}`
      );
      formik.setValues({
        Name: response.data.Name,
        Manufacturer: response.data.Manufacturer,
        Description: response.data.Description,
        Review: response.data.Review,
        Price: response.data.Price,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row mb-4">
            <div className="col-lg-6 mt-4">
              <div className="form-outline">
                <label>Name</label>
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
                <label>Manufacturer</label>
                <input
                  type={"text"}
                  className="form-control"
                  value={formik.values.Manufacturer}
                  onChange={formik.handleChange}
                  name="Manufacturer"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="form-outline">
                <label>Description</label>
                <input
                  type={"text"}
                  className="form-control"
                  value={formik.values.Description}
                  onChange={formik.handleChange}
                  name="Description"
                />
                <span style={{ color: "red" }}>
                  {formik.errors.Description}
                </span>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="form-outline">
                <label>Review</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.Review}
                  onChange={formik.handleChange}
                  name="Review"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="form-outline">
                <label>Price</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.Price}
                  onChange={formik.handleChange}
                  name="Price"
                />
              </div>
            </div>
            <div className="col-lg-12 mt-4">
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

export default EditProducts;
