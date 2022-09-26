import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { env } from "../config";
const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getStoreData();
  }, []);

  async function getStoreData() {
    try {
      const response = await axios.get(`${env.api}/users`, {
        headers: {
          Authorization: window.localStorage.getItem("app-token"),
        },
      });
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  let userDelete = async (id, el) => {
    try {
      await axios.delete(`${env.api}/user/${id}`, {
        headers: {
          Authorization: window.localStorage.getItem("app-token"),
        },
      });

      setData((current) =>
        current.filter((data) => {
          return data._id !== el._id;
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
            <h6 className="m-0 font-weight-bold text-primary">
              User Table- Data are from_MongoDb
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
                        to={`/portal/Users/${el._id}`}
                        className="btn btn-sm btn-warning mr-2 "
                      >
                        View
                      </Link>
                      <Link
                        to={`/portal/Users/EditUser/${el._id}`}
                        className="btn btn-sm btn-primary mr-2 "
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => userDelete(el._id, el)}
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
