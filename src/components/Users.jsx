import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
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
    getStoreData();
  }, []);
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
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
