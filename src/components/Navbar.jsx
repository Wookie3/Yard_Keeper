import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const loginStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  py: 4,
  px: 6,
};

const btnStyle = {
  height: 40,
  borderRadius: "15%",
  // bgcolor: "#6bafdd",
  bgcolor: "#92dbb4",
  color: "black",
  border: "2px solid #000",
  py: 1,
  px: 2,
  fontWeight: "bold",
};

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState(false);
  // const [helpModalOpen, setHelpModalOpen] = useState(false);
  // const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  const handleLogin = (input) => {
    const output = `Your login is: ${input}`;
    console.log("login-btn");
    return (
      <>
        <p>{output}</p>
      </>
    );
  };

  // const ModalFill = (modalContent) => {
  //   if (modalContent === "login") {
  //     return (
  //       <Box sx={loginStyle}>
  //         <p>TESTING login TEXT</p>
  //       </Box>
  //     );
  //   }
  //   if (modalContent === "help") {
  //     return (
  //       <Box sx={helpStyle}>
  //         <p>TESTING help TEXT</p>
  //       </Box>
  //     );
  //   }
  // };

  const LoginContent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState({});
    

    const hendleLogin = (e) => {
      e.preventDefault();
      const newLoggedIn = loggedIn[username] = ["mon","tues"];
      setLoggedIn(newLoggedIn);
      console.log(username);
      console.log(password);
      console.log(loggedIn);
    };

    return (
      <Box sx={loginStyle}>
        <form onSubmit={hendleLogin}>
          <input
            style={{ height: "30px" }}
            size="30"
            name="userName"
            placeholder={"Enter username here"}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            style={{ height: "30px" }}
            size="30"
            name="password"
            placeholder={"Enter password here"}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {/* <TextField
        label="User Name"
        placeholder="enter user name here"
        onChange={() => {setText(text)}}
        inputRef={text}
        /> */}
        {/* <TextField
        label="Password"
        placeholder="enter password"
        /> */}
        <Button
          sx={btnStyle}
          variant="outlined"
          onClick={() => {
            handleLogin()
          }}
        >
          Login
        </Button>
        <p>TESTING login...</p>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
      </Box>
    );
  };

  return (
    <nav>
      <div className="title-div">
        <p className="title"> Yard Keeper</p>
        <p className="subtitle">Keep your yard in it's prime!</p>
      </div>
      <div className="nav-btn">
        {/* <Button
        className="nav-btn"
        variant="contained"
        onClick={() => {
          handleOpen("help");
        }}
      >
        Help
      </Button> */}
        <Button
          sx={btnStyle}
          variant="contained"
          onClick={() => {
            handleOpen("login");
          }}
        >
          Login
        </Button>
      </div>
      <NavDropdown />
      <Modal open={modalOpen} onClose={() => handleClose()}>
        <LoginContent />
      </Modal>
    </nav>
  );
};

const NavDropdown = () => {
  return (
    <ul className="dropdown">
      <img
        className="navbar-burger"
        src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/menu.png"
      ></img>
      <div className="dropdown-content">
        <NavItem link="http://localhost:3000/home" text="Home" />
        <NavItem link="#" text="Login" />
        <NavItem link="#" text="Help" />
      </div>
    </ul>
  );
};

// const NavItem = ({text, onClick}) => {
//   return (
//     <li className= "nav-item">
//       <Button
//       onClick={() => {
//         // handleOpen()
//       }}
//       >

//       </Button>

//     </li>
//   )
// };

const NavItem = ({ text, link }) => {
  return (
    <li className="nav-item">
      <a href={link} className="nav-button">
        {text}
      </a>
    </li>
  );
};

export default Navbar;

// const CatList = ({cats}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedCat, setSelectedCat] = useState({});

//   const handleOpen = (cat) => {
//     setIsModalOpen(true);
//     setSelectedCat(cat);
//   }

//   const handleClose = () => {
//     setIsModalOpen(false);
//   }

//   return (
//     <>
//       <Modal open={isModalOpen} onClose={()=>handleClose()}>
//         <div className="catModal">
//           <h1>{selectedCat.name}</h1>
//           <div><img src={selectedCat.image} /></div>
//           <p>{selectedCat.desc}</p>
//         </div>
//       </Modal>
//       <List>
//         {
//           cats.map((c) => (
//               <ListItem key={c.name} onClick={()=>handleOpen(c)}>
//                 <ListItemIcon>
//                   <PetsIcon />
//                 </ListItemIcon>
//                 <ListItemText>{c.name}</ListItemText>
//               </ListItem>
//           ))
//         }
//       </List>
//     </>
//   )
// }

// export default CatList;
