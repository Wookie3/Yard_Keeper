import { useEffect, useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Modal,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Slider,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styles/Schedule.css";

const accordionHead = {
  backgroundColor: "success.main",
};

const loginStyle = {
  display: "flex",
  flexDirection: "column",
  // textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 330,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  py: 4,
  px: 6,
  backgroundColor: "#bed3bb",
};

const btnStyle = {
  height: 40,
  borderRadius: "15%",
  bgcolor: "#b071ce",
  color: "black",
  border: "2px solid #000",
  py: "5px",
  px: "12px",
  "&:hover": {
    bgcolor: "#bc88f7",
  },
  boxShadow: "none",
  margin: "10px",
};

const boxStyle = {
  width: 500,
  padding: "25px",
};

const options = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },
  {
    value: 9,
    label: "9",
  },
  {
    value: 10,
    label: "Indefinate",
  },
];

const Schedule = () => {
  // Schedule page
  const [modalOpen, setModalOpen] = useState(false);
  const [days, setDays] = useState([]);

  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  const DisplayLogin = (input) => {
    const output = `Your login is: ${input}`;
  };

  const SliderBar = () => {
    const [sliderValue, setSliderValue] = useState(3);
    return (
      <Box sx={boxStyle}>
        <Slider
          min={1}
          max={10}
          value={sliderValue}
          step={1}
          valueLabelDisplay="auto"
          marks={options}
          color="success"
          onChange={(e, sliderValue) => {
            setSliderValue(sliderValue);
          }}
        />
        <p>
          Number of weeks to skip maintenance:{" "}
          {sliderValue === 10 ? "Indefinite" : sliderValue}
        </p>
      </Box>
    );
  };

  const ShowDays = ({ days }) => {
    // Show days selected
    return (
      <div className="page">
        <p>Days selected: {days.join(", ")}</p>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={accordionHead}>
            <Typography variant="h5">
              Click here to schedule days off the schedule
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SliderBar />
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };

  const LoginContent = () => {
    // Modal content for login
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState({});

    const hendleLogin = (e) => {
      e.preventDefault();
      const newLoggedIn = (loggedIn[username] = [days]);
      setLoggedIn(newLoggedIn);
      console.log(username);
      console.log(password);
      console.log(loggedIn);
      alert(`Login successful. Welcome: ${username}. Your password is: ${password}. The days you selected are: ${days.join(", ")}`);
    };

    return (
      <Box sx={loginStyle}>
        <form onSubmit={hendleLogin}>
          <input
            style={{ height: "30px"}}
            size="30"
            name="userName"
            placeholder={"  Enter username here"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            style={{ height: "30px" }}
            size="30"
            name="password"
            placeholder={"  Enter password here"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <button type="submit">Login</button> */}
          <Button type="submit" sx={btnStyle} variant="outlined">
            Login
          </Button>
        </form>
        <div className="loginOutput">
        <p className="daysSelected">Days selected:</p>
        <p>{days.join(", ")}</p>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
        </div>
      </Box>
    );
  };

  return (
    <div className="page">
      <Modal open={modalOpen} onClose={() => handleClose()}>
        <LoginContent />
      </Modal>
      <Button
        sx={btnStyle}
        variant="contained"
        onClick={() => {
          handleOpen("login");
        }}
      >
        Login
      </Button>
      <p>
        Select... what days of the week you would like to have your lawn kept?
      </p>
      <WeekButtons days={days} setDays={setDays} />
      <ShowDays days={days} />
    </div>
  );
};

const weekButtonStyle = {
  fontWeight: "bold",
  "&:hover": {
    bgcolor: "#78a588",
  },
};

const WeekButtons = ({ days, setDays }) => {
  // Weekday buttons
  const handleDays = (e, newDay) => {
    setDays(newDay);
  };

  return (
    <>
      <ToggleButtonGroup value={days} onChange={handleDays}>
        <ToggleButton sx={weekButtonStyle} value="Monday">
          <EventIcon />
          <p>Mon</p>
        </ToggleButton>
        <ToggleButton sx={weekButtonStyle} value="Tuesday">
          <EventIcon />
          <p>Tues</p>
        </ToggleButton>
        <ToggleButton sx={weekButtonStyle} value="Wednesday">
          <EventIcon />
          <p>Wed</p>
        </ToggleButton>
        <ToggleButton sx={weekButtonStyle} value="Thursday">
          <EventIcon />
          <p>Thurs</p>
        </ToggleButton>
        <ToggleButton sx={weekButtonStyle} value="Friday">
          <EventIcon />
          <p>Fri</p>
        </ToggleButton>
        <ToggleButton sx={weekButtonStyle} value="Saturday">
          <EventIcon />
          <p>Sat</p>
        </ToggleButton>
        <ToggleButton sx={weekButtonStyle} value="Sunday" disabled>
          <EventIcon />
          <p>Sun</p>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default Schedule;
