import { useForm } from "react-hook-form";
import InputField from "../shared/InputField";
import resume_image from "../../assets/resume-login.png";
import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Login = () => {

     const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        mode: "onTouched",
    });

    const navigate = useNavigate();

    const navigateToMainPage = () => {
           navigate("/mainpage")
    }

    return(
          <div className="min-h-[calc(100vh-70px)] flex flex-col md:flex-row justify-center items-center">
            

                <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 gap-y-6">
                <img src={resume_image} alt="" className="max-w-full h-auto"/>
                <p className="text-slate-800 text-center font-montserrat lg:text-4xl text-2xl font-bold mr-12.5">Craft Your Resume. Shape Your Future</p>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <form className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md" onSubmit={handleSubmit(navigateToMainPage)}>
               
                 <div className="flex flex-col items-center justify-center">
                    <IoMdLogIn className = "text-slate-800 text-5xl"/>
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                      Login here
                    </h1>
                     <div className="flex flex-col gap-3 w-full">
                <hr className="mt-2 mb-5 text-black"/>
                <label>Username : </label>
                <InputField />

                <label>Password : </label>
                <InputField />
                </div>
                </div>
                <button className="bg-button-gradient p-1.5 mt-8 w-full text-slate-50 font-semibold cursor-pointer">Login</button>
                       <p className="text-center text-sm text-slate-700 mt-6">
                            Don't have an account? 
                            <span>SignUp</span>
                 </p>
                </form>
            
                </div>
                </div>
    )
}


export default Login;