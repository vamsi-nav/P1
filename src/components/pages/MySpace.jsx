import { Routes, Route } from "react-router-dom";
import "./MySpace.css";
import Sections from "./SectionsMySpace";
import ActionList from "./actionlist";




export function Overview(){
  return(
    <>
    <div className="MySpacee">
        <img className="coverphoo" src={"/images/coverrr.jpg"}></img>
    </div>

    <div className="myspace-contents">
      <div className="UserDetails">
        <div className="UserProf">
        <figure>
          
            <div className="Activity">
              <img id="UserProfImg" src="/images/profpic.jpg"></img>
            </div>
          <figcaption>
          <div className="Details" >
            <div className="UserName">
              <em>DWP-907 - </em>
              <b >Vamsi Navuluri</b>
            </div>
            <div>
              <em>Trainee Software Engineer</em>
            </div>
          </div>  
          </figcaption>
        </figure>
        <div className="Time">
          <div className="CheckInStatus">Yet to Check-in</div>
          <div>
            <span>00 :</span>
            <span> 00 :</span>
            <span> 00</span>
          </div>
          <div >
            <button className="CheckInButton"> Check-in</button>
          </div>
        </div>
        </div>
        <div className="ManagerInfo">
          <div className="ManagerFlex">
            <div className="ManagerPic">
              <img id="ManagerDP" src="/images/profpic.jpg">
              </img>
            </div>
            <div className="TextinManager">
              <em >Reporting to</em>
              <div className="UserName">
              <em>DWP-697 - </em>
              <b >Mahendra Kumar Thanneru</b>
              </div>
              <div className="AttendanceStatus">Leave</div>
            </div>
          </div>
        </div> 
        <div className="OthersList">
          <div>
            <div>
              <h5 className="DepartmentMembers">Department Members</h5>
              <div className="MemberCard">
                <div className="MemberPic">
                  <img id="MemberDP" src="/images/profpic.jpg">
                  </img>
                </div>
                <div className="TextinMember"> 
                  <div className="UserName">
                  <em>DWP-645 - </em>
                  <b >Maruthi Prasad</b>
                  </div>
                  <div className="MemberAttendance">Yet to Check In</div>
                </div>
              </div>
               <div  className="MemberCard">
                <div className="MemberPic">
                  <img id="MemberDP" src="/images/profpic.jpg">
                  </img>
                </div>
                <div className="TextinMember"> 
                  <div className="UserName">
                  <em>DWP-730 - </em>
                  <b >Veneetha Chowdary</b>
                  </div>
                  <div className="MemberAttendance">Yet to Check In</div>
                </div>
              </div >
               <div  className="MemberCard">
                <div className="MemberPic">
                  <img id="MemberDP" src="/images/profpic.jpg">
                  </img>
                </div>
                <div className="TextinMember"> 
                  <div className="UserName">
                  <em>DWP-981 - </em>
                  <b >Karthik Vaddi</b>
                  </div>
                  <div className="MemberAttendance">Yet to Check In</div>
                </div>
              </div>
              <div className="MoreMembers">+80 More</div>
            </div>
          </div>
        </div>
      </div>
      <section className="myspace-sections">
      <div className="sectionsdiv">
        <div>
          <Sections/>
        </div>
        <div className="CardWrap">
          <div className="GreetingCard">
            <span className="logo">
              <img className="logoo" src="/images/dwplogo.png"></img>
            </span>
            <div className="Carddd">
              <div className="textinGreeting">
                <div className="Greeting">
                  <b>Good Afternoon</b>
                  <span>Vamsi Navuluri</span>
                </div>
                <em>
                  Have a productive day!
                </em>
              </div>
              <div>
                <img className="Afternoon" src="/images/aafternoon.jpg" />
              </div>
            </div>
          </div>
          <div >
          <ActionList/>
          </div>
        </div>
      </div>  
      </section>      
    </div>
    </>
  );
}




export function Dashboard(){
  return(
    <div>
        Dashboarrdd
    </div>
  )
}

export function Calendar(){
  return(
    <div>
        Calendarr
    </div>
  )
}