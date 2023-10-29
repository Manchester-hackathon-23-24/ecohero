import { Link } from "react-router-dom";
import userDefaultLogo from "../assets/images/defaultUser.png";
import logo from "../assets/images/logo.png";

const Navbar = () => {
    return (
        <div className="navbar rounded-xl bg-success text-white px-4">
            <div className="flex-1 cursor-pointer">
                <img src={logo} className="w-10 h-10 mr-2" />
                <Link to="/" className="normal-case text-xl font-medium">UI</Link>
            </div>
            <div>
                <ul className="flex items-center list-style-none space-x-4 mr-4 text-lg">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/challenge/new">New Challenge</Link>
                    </li>
                </ul>
                <label className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full bg-white">
                        <img src={userDefaultLogo} />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;