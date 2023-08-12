import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandscapeDesign from './components/LandscapeDesign.jsx';
import Services from './components/Services.jsx';
import LandingPage from './components/LandingPage.jsx';
import Schedule from './components/Schedule.jsx';


const App = () => {
  
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path="/home" element={<LandingPage/>} />
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/services" element={<Services/>} />
          <Route path="/design" element={<LandscapeDesign/>} />
          {/* <Route path="*" element={<NoPage/>} /> */}
        </Routes>
      </BrowserRouter>
    </main>
  )
};


// const NavBar = () => {
//   return (
//     <nav>
//       <div id="title">
//         <p>Yard Keeper</p>
//         <div id="subtitle">
//           <p id="p1">Keep</p>
//           <p> your yard, living better!</p>
//         </div>
//       </div>
//         <NavDropdown/>
//       </nav>
//   )
// };

// const NavDropdown = () => {
//   return (
//     <ul className="dropdown">
//       {/* <span className="navbar-burger">
//       <BurgerIcon/>
//       </span> */}
//       <img className="navbar-burger" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/menu.png">
//       </img>
//         <div className="dropdown-content">
//           {/* <NavItem link="#" text = "Home"/> */}
//           <NavItem link="#" text="Login"/>
//           <NavItem link="#" text="Help"/>
//         </div>
//     </ul>
//   )
// };

// const NavItem = ({text, link}) => {
//   return (
//     <li className= "nav-item">
//     <a href={link} className="nav-button">{text}</a>
//     </li>
//   )
// };


export default App;