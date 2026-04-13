import React from "react";
import "./Navbar.css";
import Layout from "./Layout";
import { SECTIONS } from "./Layout";
import { NavLink } from "react-router-dom";

function NavBar( {onselect}){
  const NavBarList = [{id:1,sectionname: "Home", iname:"Home", imgsrc: "/images/home.svg"},
                      {id:2,sectionname: "LeaveTracker", iname:"Leave Tracker", imgsrc: "/images/umbrella-round-771.svg"},
                      {id:3,sectionname: "TimeTracker", iname:"Time Tracker", imgsrc: "/images/timer.svg"},
                      {id:4,sectionname: "Attendance", iname:"Attendance", imgsrc: "/images/calendar.svg"},
                      {id:5,sectionname:"Perfomance" , iname:"Perfomance", imgsrc: "/images/trophy.svg"},
                      {id:6,sectionname:"Files" , iname:"Files", imgsrc: "/images/folder.svg"},
                      //{id:7, iname:"Travel", imgsrc: "/images/airplane.svg"},
                     // {id:8, iname:"Compensation", imgsrc: "/images/money.svg"},
                      {id:9, iname:"More", imgsrc: "/images/three-dots-svgrepo-com.svg"},
                      ] 
  
   const ListNavBar =  NavBarList.map(NavBarItem => <li key={NavBarItem.id}> 
                                                    <NavLink to={`/${NavBarItem.sectionname}`} className="NavBarDivs">
                                                     
                                                      <img className="NavBarIcon" src={NavBarItem.imgsrc}>
                                                      </img>
                                                      <p className="NavBarName"> {NavBarItem.iname} </p>
                                                     
                                                    </NavLink>
                                                    </li>) ;                 
  return (
    <div className="NavBarFlex">
      <div >
        <img id="PageLogo"src="/images/dwplogo.png" ></img>
      </div>
      <ul className="no-bullets">{ListNavBar}</ul>
      <div id="Report" className="NavBarDivs">
        <img  className="NavBarIcon"src="/images/pie-chart.svg" ></img>
        <p className="NavBarName"> Reports </p>
      </div>
    </div>
  );
}

export default NavBar;