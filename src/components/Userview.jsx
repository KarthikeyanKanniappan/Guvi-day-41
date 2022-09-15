import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Userview = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    getUser(params.id);
  }, []);

  let getUser = async (id) => {
    try {
      let response = await axios.get(
        `https://62ff9b659350a1e548e2995c.mockapi.io/for/${id}`
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h2>{data.Name}</h2>
      <h2>{data.Position}</h2>
      <h2>{data.Office}</h2>
      <h2>{data.Age}</h2>
      <h2>{data.Startdate}</h2>
      <h2>{data.Salary}</h2>
    </>
  );
};

export default Userview;
