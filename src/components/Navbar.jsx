import { useLocation } from "react-router-dom";
import finyores from "../assets/finyores.png"
import Mainpage from "./Mainpage";


const Navbar = () => {

const location = useLocation();
const isMainPage = location.pathname === "/mainpage";

    return(
        <div className="h-[40px] bg-custom-gradient text-white z-50 flex items-center sticky top-0">
        <img src={finyores} alt="" className="w-40 h-auto pt-6 ml-4"/>
        {isMainPage && (
        <button className="bg-button-gradient p-1.5 mt-4 text-slate-50 font-semibold cursor-pointer ml-auto">Logout</button>
        )}
        </div>
    )
}

export default Navbar;