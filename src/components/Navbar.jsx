import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

// const loginStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   borderRadius: "10px",
//   py: 4,
//   px: 6,
// };

const burgerStyle = {
  color: "black",
  fontSize: "50px",
};

const btnStyle = {
  height: 40,
  borderRadius: "15%",
  bgcolor: "#92dbb4",
  color: "black",
  border: "2px solid #000",
  py: 1,
  px: 2,
  fontWeight: "bold",
};

const Navbar = () => {
  const [anchorE, setAnchorE] = useState(null);
  const open = Boolean(anchorE);
  const menuClick = (e) => {
    setAnchorE(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorE(null);
  };

  const navigate = useNavigate();

  const gotoSchedule = (e) => {
    e.preventDefault();
    navigate("/schedule");
  };
  const gotoService = (e) => {
    e.preventDefault();
    navigate("/services");
  };
  const gotoDesign = (e) => {
    e.preventDefault();
    navigate("/design");
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <nav>
      <div className="title-div">
        <p className="title"> Yard Keeper</p>
        <p className="subtitle">Keep your yard in it's prime!</p>
      </div>
      <div className="nav-btn">
        <Button
          sx={btnStyle}
          variant="contained"
          onClick={handleClick}
          startIcon={<HomeIcon />}
          color="success"
        >
          Home
        </Button>
      </div>
      <div className="burger-btn">
      <Button 
      id="burger-button" 
      onClick={menuClick}
      onMouseOver={menuClick}
      >
        {open? <MenuOpenRoundedIcon sx={burgerStyle} /> : <MenuRoundedIcon sx={burgerStyle} /> }
        {/* <MenuIcon sx={burgerStyle} /> */}
      </Button>
      </div>
      {/* <NavDropdown /> */}
      <Menu
        id="menu"
        anchorEl={anchorE}
        open={open}
        onClose={handleClose}
        MenuListProps={"burger-button"}
      >
        <MenuItem onClick={gotoSchedule}>Schedule</MenuItem>
        <MenuItem onClick={gotoService}>Services</MenuItem>
        <MenuItem onClick={gotoDesign}>Landscape Design</MenuItem>
      </Menu>
    </nav>
  );
};

// const NavBurger = ({ anchorE, open, handleClose }) => {
//   return <div></div>;
// };

// const NavDropdown = () => {
//   return (
//     <ul className="dropdown">
//       <img
//         className="navbar-burger"
//         src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/menu.png"
//       ></img>
//       <div className="dropdown-content">
//         <NavItem link="http://localhost:3000/home" text="Home" />
//         <NavItem link="#" text="Login" />
//         <NavItem link="#" text="Help" />
//       </div>
//     </ul>
//   );
// };

// const NavItem = ({ text, link }) => {
//   return (
//     <li className="nav-item">
//       <a href={link} className="nav-button">
//         {text}
//       </a>
//     </li>
//   );
// };

export default Navbar;

