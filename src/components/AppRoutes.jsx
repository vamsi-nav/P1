 import HeaderMenu from "./HeaderMenu";
 import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { SECTIONS } from "./Layout";
import Layout from "./Layout";
import { Overview } from "./pages/MySpace";
import { MySpace } from "./Pages/Homepage";

export default function AppRoutes(){
  return(
   <Routes>
    <Route path="/Home/myspace" element={<MySpace/>}>
      <Route path="overview-actionlist" element={<Overview/>}/>
    </Route>
  </Routes>
  );
  
}





