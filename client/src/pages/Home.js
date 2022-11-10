import React, { useEffect } from "react";
import axios from "axios";

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

  return <div>Home</div>;
};

export default Home;
