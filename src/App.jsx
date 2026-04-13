import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import HeaderMenu from "./components/HeaderMenu";
import NavBar from "./components/NavBar";
import BottomNavBar from "./components/bottomnavbar";
import HelpBar from "./components/helpbar";
import Layout from "./components/Layout";
import CustomNav from "./components/pages/CustomNav"; 
import AppRoutes from "./components/AppRoutes";
import { AuthProvider } from "./components/AuthContext";

function App(){
  return(
    <BrowserRouter>
 
     
           <NavBar/>
           <HeaderMenu/>   
           <CustomNav />   
     
      
        <AppRoutes/>
      
      
  
      <div className="HelpBarr">
        <HelpBar/>
      </div>

      <div className="BottomNavBarr">
        <BottomNavBar/>
      </div>

    </BrowserRouter>
        );
                }

export default App; 