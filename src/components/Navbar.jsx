const Navbar = () => {
    return (
        <nav>
            <div className="title-div">
                <p className="title"> Yard Keeper</p>
                <p className="subtitle">Keep your yard in it's prime!</p>
            </div>
            <NavDropdown/>
        </nav>
    )
}

  const NavDropdown = () => {
    return (
      <ul className="dropdown">
        <img className="navbar-burger" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/menu.png"></img>
          <div className="dropdown-content">
            {/* <NavItem link="#" text = "Home"/> */}
            <NavItem link="#" text="Login"/>
            <NavItem link="http://localhost:3000/home" text="Home"/>
          </div>
      </ul>
    )
  };
  
const NavItem = ({text, link}) => {
    return (
      <li className= "nav-item">
      <a href={link} className="nav-button">{text}</a>
      </li>
    )
  };
  
  export default Navbar;
