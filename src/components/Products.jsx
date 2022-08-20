import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let productsGetter = async () => {
      try {
        let response = await axios.get(
          "https://62ff9b659350a1e548e2995c.mockapi.io/products"
        );
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    productsGetter();
  }, []);
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h6 className="m-0 font-weight-bold text-primary">Product Table</h6>
            <Link
              to="/portal/Users/CreateUsers"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Create
              Products
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Description</th>
                <th>Review</th>
                <th>Price</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Description</th>
                <th>Review</th>
                <th>Price</th>
              </tr>
            </tfoot>
            <tbody>
              {data.map((el, i) => {
                return (
                  <tr className={`${el.id}`}>
                    <td>{i + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.Manufacturer}</td>
                    <td>{el.Description}</td>
                    <td>{el.Review}</td>
                    <td>{el.Price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
