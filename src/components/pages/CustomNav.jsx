import React from "react";
import { useLocation, NavLink } from "react-router";
import { SECTIONS } from "../Layout";
import "../CustomNav.css";


export default function CustomNav(){  
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
  const subsectionName = segments[1];
  const subsection = SECTIONS
  .flatMap(section => section.subsections)
  .find(sub => sub.path === subsectionName);

  const customsecss = subsection?.customSecs?.map((cns)=>( <NavLink className="sublinks"   to={`/${segments[0]}/${subsection.path}/${cns.path}`} key={cns.path}>{cns.label}</NavLink>))


  return (
    <div className="DivBar" >
    <nav  className="SubDivs">
        {customsecss}
      </nav>
   </div>
  );   
}
