import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getStoreData();
  }, []);

  async function getStoreData() {
    try {
      const response = await axios.get(
        "https://62ff9b659350a1e548e2995c.mockapi.io/for"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  let userDelete = async (id, el) => {
    try {
      await axios.delete(
        `https://62ff9b659350a1e548e2995c.mockapi.io/for/${id}`
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
            <h6 className="m-0 font-weight-bold text-primary">User Table</h6>
            <Link
              to="/portal/Users/CreateUsers"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Create
              User
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
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
              {data.map((el, i) => {
                return (
                  <tr className={`${el.id}`}>
                    <td>{i + 1}</td>
                    <td>{el.Name}</td>
                    <td>{el.Position}</td>
                    <td>{el.Office}</td>
                    <td>{el.Age}</td>
                    <td>{el.Startdate}</td>
                    <td>{el.Salary}</td>
                    <td>
                      <Link
                        to={`/portal/Users/${el.id}`}
                        className="btn btn-sm btn-warning mr-2 "
                      >
                        View
                      </Link>
                      <Link
                        to={`/portal/Users/EditUser/${el.id}`}
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

export default Users;
