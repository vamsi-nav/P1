import React, { useState } from "react";
import NavBar from "./NavBar";
import HeaderMenu from "./HeaderMenu";
import { Outlet } from "react-router-dom";

import { Team1, Team2, MyData1, MyData2, Organization, Holidays} from "./Pages/Homepage"
import { Overview, Dashboard, Calendar } from "./pages/MySpace";

export const SECTIONS = [{

  name:"Home",
  label: "Home",
  basepath: "/Home",
  subsections: [ 
    {label: "My Space",
      path: "myspace",
      customSecs: 
                    [ { label:"Overview",
                        path: "overview-actionlist",
                        element: <Overview />},
                      { label:"Dashboard",
                        path: "dashboard",
                        element: <Dashboard />},
                      { label:"Calendar",
                        path: "calendar",
                        element: <Calendar />}]
    },
    {label: "Team",
      path: "team1",
      customSecs: 
                    [ { label:"Team Space",
                        path: "teamspace"},
                      { label:"Department",
                        path: "department"},
                      { label:"Approvals",
                        path: "approvals"}]
    },                    
    {label: "Organization",
      path: "organization",
     customSecs: 
                    [ { label:"Policies",
                        path: "policies"},
                      { label:"Announcements",
                        path: "announcements"}]
    }
    ],
  },
{
  name:"LeaveTracker",
  label: "Leave Tracker",
  basepath: "/LeaveTracker",
  subsections: [ 
    {label: "My Data",
      path: "mydata1",
      element: <MyData1 />
    },
    {label: "Team",
      path: "Team2",
      element: <Team2 />
    },
    {label: "Holidays",
      path: "Holidays",
      element: <Holidays />
    }
    ],
  },
  {  name:"TimeTracker",
  label: "Time Tracker",
  basepath: "/TimeTracker",
  subsections: [ 
    {label: "My Data",
      path: "MyData2",
      element: <MyData2/>
    },
    ],
}];








export default function Layout(){
  <>
    <Outlet />    
  </>
}






