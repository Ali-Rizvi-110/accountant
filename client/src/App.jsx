import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import Allpages from "./components/Allpages";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Studio from "./pages/Studio";
import About1 from "./pages/About1";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
// import About from './components/About'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AddBlog from "./admin/AddBlog";
import Blog from "./components/Blog";
import DeleteBlog from "./admin/DeleteBlog";
import ChangePass from "./admin/ChangePass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            {/* <Route index element={<Allpages />} /> */}
            <Route path="/" element={<Allpages />} />
            <Route path="about" element={<About1 />} />
            <Route path="contact" element={<Contact />} />
            <Route path="service" element={<Service />} />
            <Route path="studio" element={<Studio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/addBlog" element={<AddBlog />} />
            <Route path="/admin/deleteBlog" element={<DeleteBlog />} />
            <Route path="/admin/changePass" element={<ChangePass />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
