import axios from "axios";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

const DeleteBlog = () => {
  const [data, setData] = useState([{}]);
  const token = sessionStorage.getItem('token');
  const Fetch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4500/api/admin/getBlogs"
      );
      setData(response.data);
      console.log("this is my data -->", data);
    } catch (error) {
      console.log("Something Problem in Axios and Url --->", error);
    }
  };

  const DeleteClick = async (id) => {
    try {
      const confirm = window.confirm("Do you want to delete this Blog");
      if (confirm) {
        const response = await axios.delete(`http://localhost:4500/api/admin/deleteBlog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        Fetch();
      }
    } catch (error) {
      console.log("Something Error in Axios and Url --->", error);
    }
  };

  useEffect(() => {
    Fetch();
  }, []);

  return (
    <div>
      <Dashboard/>
      <div className="financialss ">
        {data.map((item, index) => (
          <div key={index} className="financess" data-aos="fade-right">
            <div className="imgbox">
              <img
                src="https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/preparing-annual-accounts-with-coworkers-RJNW5P4.jpg"
                alt=""
              />
            </div>
            <h3>{item.title}</h3>
            <div className="icon">
              <i className="ri-calendar-line"></i>
              <span>{item.date}</span>
              <i className="ri-chat-4-line"></i>
              <span>0</span>
            </div>
            <p>{item.description}</p>
            <span>
              <button
                className="btn btn-primary  fw-bold fs-4 border border-2"
                onClick={(e) => DeleteClick(item._id)}
              >
                Delete
              </button>{" "}
              <i className="ri-arrow-right-line fs-1"></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteBlog;
