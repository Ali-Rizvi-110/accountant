import React from "react";
import "./dash.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" main flex p-10 bg-white-500">
        <input className="menu-btn" type="checkbox" id="menu-icon" />
        <label for="menu-icon" className="bg-white-500 mt-1 h-10 w-10">
          <div className="h-1 my-1 z-[9] w-8 bg-black"></div>
          <div className="h-1 my-1 z-[9] w-8 bg-black"></div>
          <div className="h-1 my-1 z-[9] w-8 bg-black"></div>
        </label>
        <h1 className="text-3xl">Dashboard</h1>
        <ul className="menu">
          <li className="hover:text-white hover:bg-white-600 px-10 rounded-xl">
            Blog
            <ul>
              <li className="hover:text-white hover:bg-blue-200 px-10 rounded-xl" onClick={()=>navigate('/admin/addBlog')} >
                Create Blog{" "}
              </li>
              <li className="hover:text-white hover:bg-blue-200 px-10 rounded-xl" onClick={()=>navigate('/admin/deleteBlog')} >
                Delete Blog{" "}
              </li>
            </ul>
          </li>
          <li className="hover:text-white hover:bg-red-600 px-10 rounded-xl" onClick={()=>navigate('/admin/changePass')} >
            Change Password
          </li>
          <li onClick={()=>{
            sessionStorage.removeItem('token');
            navigate('/admin');
          }} className="hover:text-white hover:bg-red-600 px-10 rounded-xl">
            Logout
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dashboard;
