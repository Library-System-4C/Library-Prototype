import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import NoPage from "./Components/Nopage";
import Service from "./Components/services";
const App=()=>{
  return(
    
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="service" element={<Service />} />
          </Route>
          <Route path="login" element={<Login />} />
            <Route path="Register" element={<Register />} />
          
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;