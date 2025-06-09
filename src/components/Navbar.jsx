import { useLocation, useNavigate } from "react-router-dom";
import finyores from "../assets/finyores.png"
import Mainpage from "./Mainpage";
import { useDispatch } from "react-redux";
import { userLogout } from "../store/actions";
import toast from "react-hot-toast";

const Navbar = () => {

const location = useLocation();
const isMainPage = location.pathname === "/mainpage";
const navigate = useNavigate();
const dispatch = useDispatch();


const user_Logout = () => {
    dispatch(userLogout(navigate,toast));
}


    return(
        <div className="h-[60px] bg-[#F1F5F9] text-white z-50 flex items-center sticky top-0">
        <img src={finyores} alt="" className="w-40 h-auto pt-1 ml-4"/>
        {isMainPage && (
        <button className="bg-button-gradient p-2 pl-3 pr-3 mt-1 text-slate-50 font-semibold cursor-pointer ml-auto mr-8 rounded" onClick={user_Logout}>Logout</button>
        )}
        </div>
    )
}

export default Navbar;