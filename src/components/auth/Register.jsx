import { useForm } from "react-hook-form";
import InputField from "../shared/InputField";
import resume_image from "../../assets/resume-login.png";
import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { userRegister } from "../../store/actions";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Register = () => {

     const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors},
    } = useForm({
        mode: "onTouched",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user_Register = (data) => {
          dispatch(userRegister(navigate,toast,data))
    }

    const username = watch('username');
    const email = watch('email');
    const password = watch('password');

    return(
          <div className="min-h-[calc(100vh-70px)] flex flex-col md:flex-row justify-center items-center">
            

                <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 gap-y-6 mt-12">
                <img src={resume_image} alt="" className="max-w-full h-auto"/>
                <p className="text-slate-800 text-center font-montserrat lg:text-4xl text-2xl font-bold mr-12.5">Craft Your Resume. Shape Your Future</p>
                <p className="text-slate-800 font-montserrat font-normal md:ml-17 sm:ml-23 lg:ml-16">Build a standout resume tailored to your goals—unlock opportunities, impress employers, and take the next step in your career journey.</p>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <form className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md" onSubmit={handleSubmit(user_Register)}>
               
                 <div className="flex flex-col items-center justify-center">
                    <IoMdLogIn className = "text-slate-800 text-5xl"/>
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                      Register here
                    </h1>
                     <div className="flex flex-col gap-3 w-full">
                <hr className="mt-2 mb-5 text-black"/>
                <label>Username : </label>
                <InputField 
                register={register}
                id="username"
                placeholder="Enter Username"
                type="text"
                />

                <label>Email : </label>
                <InputField 
                register={register}
                id="email"
                placeholder="Enter Email"
                type="text"
                />

                <label>Password : </label>
                <InputField 
                register={register}
                id="password"
                placeholder="Enter Password"
                type="password"
                />
                </div>
                </div>
                <button className={`${!username || !password || !email ? 'bg-[#1e90ff] p-1.5 mt-8 w-full text-slate-300 font-semibold cursor-not-allowed' :  'bg-[#1e90ff] p-1.5 mt-8 w-full text-slate-50 font-semibold cursor-pointer'}`} disabled = {!username || !password || !email}>Register</button>
                       <p className="text-center text-sm text-slate-700 mt-6">
                            Already have an account?
                            <Link to="/login"><span>Login</span></Link>
                 </p>
                </form>
            
                </div>
                </div>
    )
}


export default Register;