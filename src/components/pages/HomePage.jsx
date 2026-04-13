import React from "react";
import "./HomePage.css";
import { Outlet } from "react-router";





export  function MySpace (){ return (<div className="HomePagee" > 
  <Outlet/>
  </div>
);
};



export  function Team1 () {return <h1>MySpace</h1>};
export  function Team2 () {return <h1>MySpace</h1>};
export  function MyData1 () {return <h1>MySpace</h1>};
export  function MyData2 () {return <h1>MySpace</h1>};
export  function Organization () {return <h1>MySpace</h1>};
export  function Holidays () {return <h1>MySpace</h1>};