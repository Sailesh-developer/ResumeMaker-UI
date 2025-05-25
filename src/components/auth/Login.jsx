import { useForm } from "react-hook-form";
import InputField from "../shared/InputField";
import resume_image from "../../assets/resume-login.png"

const Login = () => {

     const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        mode: "onTouched",
    });

    return(
          <div className="min-h-[calc(100vh-70px)] flex flex-col md:flex-row justify-center items-center">
            

                <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 gap-y-6">
                <img src={resume_image} alt="" className="max-w-full h-auto"/>
                <p className="text-slate-800 text-center font-montserrat lg:text-4xl text-2xl font-bold mr-12.5">Craft Your Resume. Shape Your Future</p>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <form className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md">
                 <div className="flex flex-col items-center justify-center">
                     <div className="flex flex-col gap-3">
                <label>Username : </label>
                <InputField />

                <label>Password : </label>
                <InputField />
                </div>
                </div>
                </form>
                </div>
                

                </div>
    )
}


export default Login;