import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    productsGetter();
  }, []);

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

  let userDelete = async (id, el) => {
    try {
      await axios.delete(
        `https://62ff9b659350a1e548e2995c.mockapi.io/products/${id}`
      );
      setData((current) =>
        current.filter((data) => {
          return data.id !== el.id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h6 className="m-0 font-weight-bold text-primary">Product Table</h6>
            <Link
              to="/portal/products/CreateProducts"
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
                <th>Action</th>
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
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
              {data.map((el, i) => {
                return (
                  <tr className={`${el.id}`}>
                    <td>{i + 1}</td>
                    <td>{el.Name}</td>
                    <td>{el.Manufacturer}</td>
                    <td>{el.Description}</td>
                    <td>{el.Review}</td>
                    <td>{el.Price}</td>
                    <td>
                      <Link
                        to={`/portal/products/${el.id}`}
                        className="btn btn-sm btn-warning mr-2 "
                      >
                        View
                      </Link>
                      <Link
                        to={`/portal/products/EditProducts/${el.id}`}
                        className="btn btn-sm btn-primary mr-2 "
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => userDelete(el.id, el)}
                        className="btn btn-sm btn-danger mr-2 "
                      >
                        Delete
                      </button>
                    </td>
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
