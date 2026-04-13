import "./actionlist.css"
import "./MySpace.css"

export default function ActionList(){
  return(
  <div>
    <div className="GreetingCard CheckIn">
      <div>
        <img className="CheckInn" src="/images/calendar-tick.svg"/>
      </div>

      <div className="Reminder center ">
        <div>
          Check-in reminder
        </div>
        <em>
          Your shift has already started
        </em>
      </div>

      <div className="Reminder">
          <div>
            General
          </div>
          <em>
            9:00AM - 6:00PM
          </em>
      </div>
    </div>
  </div>
  );
}