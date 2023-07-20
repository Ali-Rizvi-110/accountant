import axios from "axios";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

const AddBlog = () => {
  const [data, setData] = useState({
    title: "",
    date: "",
    description: "",
    image: "",
  });
  const token = sessionStorage.getItem("token");

  const submitClick = async () => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("description", data.description);
    formData.append("image", data.image);
    try {
      const confirm = window.confirm("Do you want to upload this Blog");
      if (confirm) {
        const response = await axios.post(
          "http://localhost:4500/api/admin/addBlog",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Data Post Successfully");
      }
    } catch (error) {
      console.log("something error in axios and url --->", error);
    }
  };

  return (
    <>
      <Dashboard/>
      <div className="" style={{position: "absolute", left: "22vw", top:"25vh"}}>
        <h1 className="text-center mt-3 fs-1 text-primary">
          <u>Create Blogs</u>
        </h1>
        <div className="container-fluid ">
          <div className="row  d-flex justify-content-center">
            <div className="col-lg-8 col-sm-12 col-md-12 border border-3 border-primary mt-5 mb-5">
              <div className="d-flex flex-wrap justify-content-between mt-4">
                {/* Hay */}
                <div className="col-sm-12 col-md-12 col-lg-5">
                  <label className="fw-bold">
                    Title <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control mt-1 fw-bold border border-2 border-primary"
                    name="title"
                    placeholder="Blog Title"
                    type="text"
                    required
                    onChange={(e) =>
                      setData({ ...data, title: e.target.value })
                    }
                  />
                </div>
                {/* byy */}

                {/* Hay */}
                <div className="col-sm-12 col-md-12 col-lg-5">
                  <label className="fw-bold">
                    Date <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control mt-1 fw-bold border border-2 border-primary"
                    placeholder="Blog Name"
                    name="date"
                    type="date"
                    required
                    onChange={(e) => setData({ ...data, date: e.target.value })}
                  />
                </div>
                {/* byy */}

                {/* Hay */}
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <label className="fw-bold">
                    Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    cols="33"
                    rows="5"
                    name={"description"}
                    placeholder="Blog Description..."
                    className="form-control border-2 fw-bold border-primary"
                    required
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                  ></textarea>
                </div>
                {/* byy */}

                {/* Hay */}
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <label className="fw-bold">
                    Image <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control mt-1 fw-bold border border-2 border-primary"
                    name="image"
                    type="file"
                    required
                    onChange={(e) =>
                      setData({ ...data, image: e.target.files[0] })
                    }
                  />
                </div>
                {/* byy */}
              </div>
              <div className="d-flex justify-content-center mt-4 mb-4">
                <button className="btn btn-primary" onClick={submitClick}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
