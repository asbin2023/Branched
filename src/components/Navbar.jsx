import logo from "../images/logo.png";
import { IoMdHome } from "react-icons/io";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { BiNews, BiSearch } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

//IoHomeSharp
const Navbar = () => {
  function handleRefresh() {
    window.localStorage.reload(true);
  }
  return (
    <nav className="navbar-container">
      <Link to={"/"}>
        {" "}
        <img src={logo} width={40.17} height={30.17} alt="linkedin logo" />
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
          <Link to={"feed"}>
            {" "}
            <p>Home</p>
          </Link>
        </div>

        <div>
          <Link to={"feed"}>
            {" "}
            <BiNews className="icon" />
          </Link>
          <Link to={"feed"}>
            {" "}
            <p>News</p>
          </Link>
        </div>
        <div>
          <Link to={"profile"}>
            <CgProfile className="icon" />
          </Link>
          <Link to={"profile"}>
            {" "}
            <p>Me</p>
          </Link>
        </div>
        <div>
          <Link onClick={handleRefresh} to={"/"}>
            {" "}
            <MdOutlineLogout className="icon" />
          </Link>
          <Link onClick={handleRefresh} to={"/"}>
            {" "}
            <p>Logout</p>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
