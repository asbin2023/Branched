import logo from "../images/logo.png";
import { IoMdHome } from "react-icons/io";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { BiNews, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

//IoHomeSharp
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to={"/"}>
        {" "}
        <img src={logo} width={54.17} height={34.17} alt="linkedin logo" />
      </Link>

      <input type="text" placeholder="&#128269; Search" />
      <ul>
        <div>
          <Link to={"/"}>
            {" "}
            <BiSearch className="icon glass" />
          </Link>
        </div>
        <div>
          <Link to={"feed"}>
            {" "}
            <IoMdHome className="icon" />
          </Link>
          <p>Home</p>
        </div>
        <div>
          <Link>
            {" "}
            <PiSuitcaseSimpleBold className="icon" />
          </Link>
          <p>Jobs</p>
        </div>
        <div>
          <Link to={"feed"}>
            {" "}
            <BiNews className="icon" />
          </Link>
          <p>News</p>
        </div>
        <div>
          <Link to={'profile'}>
            <CgProfile className="icon" />
          </Link>
          <p>Me</p>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
