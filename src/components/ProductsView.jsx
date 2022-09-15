import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductsView = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    getUser(params.id);
  }, []);

  let getUser = async (id) => {
    try {
      let response = await axios.get(
        `https://62ff9b659350a1e548e2995c.mockapi.io/products/${id}`
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h2>{data.Name}</h2>
      <h2>{data.Manufacturer}</h2>
      <h2>{data.Description}</h2>
      <h2>{data.Review}</h2>
      <h2>{data.Price}</h2>
    </>
  );
};

export default ProductsView;
