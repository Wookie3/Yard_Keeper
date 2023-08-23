import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import EventIcon from "@mui/icons-material/Event";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="page">
      <p>Schedule page.</p>
      <p>
        Select... what days of the week you would like to have your lawn kept?
      </p>
      <WeekButtons />
      {/* <ShowDays/> */}
    </div>
  );
};

// const ShowDays = ({days}) => {
//     useEffect(() => {
//         const selected = days?.join(", ");
//     }, [days]);

//     return (
//         <>
//         {/* {selected} */}
//         </>
//     )
// };

const WeekButtons = () => {
  const [days, setDays] = useState([]);
  const handelDays = (e, newDay) => {
    setDays(newDay);
  };

  return (
    <>
      <ToggleButtonGroup value={days} onChange={handelDays}>
        <ToggleButton value="monday">
          <EventIcon />
          <p>Mon</p>
        </ToggleButton>
        <ToggleButton value="tuesday">
          <EventIcon />
          <p>Tues</p>
        </ToggleButton>
        <ToggleButton value="wednesday">
          <EventIcon />
          <p>Wed</p>
        </ToggleButton>
        <ToggleButton value="thursday">
          <EventIcon />
          <p>Thurs</p>
        </ToggleButton>
        <ToggleButton value="friday">
          <EventIcon />
          <p>Fri</p>
        </ToggleButton>
        <ToggleButton value="saturday">
          <EventIcon />
          <p>Sat</p>
        </ToggleButton>
        <ToggleButton value="sunday" disabled>
          <EventIcon />
          <p>Sun</p>
        </ToggleButton>
      </ToggleButtonGroup>

      <p>You have selected :{days}</p>
    </>
  );
};

export default Schedule;
