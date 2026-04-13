import React from "react";
import "./bottomnavbar.css"
function BottomNavBar(){
  const IconsLeft = [ {id:0, iname:"Chats", imgsrc:"/images/chats.svg", side: "left"},
                  {id:1, iname:"Channels", imgsrc:"/images/channels.svg", side: "left"},
                  {id:2, iname:"Contacts", imgsrc:"/images/contacts.svg", side: "left"},
                  
                      ]

  const IconsRight = [{id:3, iname:"Notebook", imgsrc:"/images/notebook.svg", side: "right"},
                      {id:4, iname:"News", imgsrc:"/images/news.svg", side: "right"},
                                  ]

  const IconsBarLeft= IconsLeft.map(IconLeft => <li key={IconLeft.id}>
                                      <div className="IconLeftDiv">
                                        <img className="IconLeft" src={IconLeft.imgsrc}>
                                        </img>
                                        <p className="IconLeftName">{IconLeft.iname} </p>
                                      </div>
                                    </li>);

 const IconsBarRight= IconsRight.map(IconRight => <li key={IconRight.id}>
                                                    <div className="IconRightDiv"> 
                                                      <img className="IconRight" src={IconRight.imgsrc}></img>
                                                    </div>
                                                  </li>);   
  return(
    <div className="RowIcons">
      <div className="LeftIconSec">{IconsBarLeft}</div>
      <div className="ChatBar">Here is your Smart Chat (Ctrl+Space)</div>
      <div className="RightIconsSec">{IconsBarRight}</div>
    </div>
  ) ;                                                                          
}

export default BottomNavBar;