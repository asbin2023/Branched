import logo from "../images/logo.png";
import { IoMdHome } from "react-icons/io";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { BiNews } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import "../styles/Navbar.css";

//IoHomeSharp
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img src={logo} width={34.17} height={34.17} alt="linkedin logo" />
      <input type="text" placeholder="&#128269; Search" />
      <ul>
        <div>
          <IoMdHome className="icon" />
          <p>Home</p>
        </div>
        <div>
          <PiSuitcaseSimpleBold className="icon" />
          <p>Jobs</p>
        </div>
        <div>
          <BiNews className="icon" />
          <p>News</p>
        </div>
        <div>
          <CgProfile className="icon" />
          <p>Me</p>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
