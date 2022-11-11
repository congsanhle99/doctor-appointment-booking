import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const Home = () => {
  const getData = async () => {
    // every time call API except login and register
    // will send headers
    try {
      const response = await axios.post(
        "/api/user/get-user-info-by-id",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          }, // headers
        }
      );
      console.log("response", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // get user by ID
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
};

export default Home;
