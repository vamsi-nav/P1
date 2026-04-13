import React from "react";
import "./headerMenu.css";
import Layout from "./Layout";
import { SECTIONS } from "./Layout";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import AuthModal from "./pages/AuthModal";
import { AuthContext } from "/src/components/AuthContext";
function HeaderMenu( { subsections } ) {

  const [open, setOpen] = useState(false);
const { token, logoutUser } = useContext(AuthContext);

  const HeaderMenuList =  [ {id:4, iname:"Profile", isrc:"/images/profpic.jpg"},
                            {id:3, iname:"Notifications", isrc:"/images/notification-bell.svg"},
                            {id:2, iname:"SearchEmployee", isrc:"/images/search.svg"},
                            {id:1, iname:"QuickActions", isrc:"/images/plus-sign.svg"},
                          ] 
const ListHeaderMenu = HeaderMenuList.map((item) => (
  <li key={item.id}>
    <div
      onClick={() => {
        if (item.iname === "Profile") {
          setOpen(true); // open modal
        }
      }}
      style={{ cursor: "pointer" }}
    >
      <img className={item.iname} src={item.isrc} />
    </div>
  </li>
));
  const location = useLocation();
  const sectionName = location.pathname.split("/")[1];
  
  const section = SECTIONS.find(
    (s) => s.name === sectionName    
  );


  if (!section) return null;


  const subsec = section.subsections.map((item)=>( 
    <NavLink className="links"   to={`${section.basepath}/${item.path}`} key={item.path}>{item.label}</NavLink>
  )) ;  
  

return (
  <div className="HeaderDiv">
    <nav className="SubSections">
      {subsec}
    </nav>

    <div className="ConstIcons">
      {ListHeaderMenu}
    </div>

    {open && <AuthModal close={() => setOpen(false)} />}
  </div>
);
}

export default HeaderMenu;