import { useDispatch } from "react-redux";
import InputField from "../shared/InputField";
import { useForm } from "react-hook-form";
import { savePersonalInfo } from "../../store/actions";
import toast from "react-hot-toast";

const PersonalInfo = () => {


         const {
            register,
            handleSubmit,
            reset,
            formState: {errors},
        } = useForm({
            mode: "onTouched",
        });

        const dispatch = useDispatch();


        const setPersonalInfo = (data) => {
           dispatch(savePersonalInfo(toast,data))
        }

    return(
        <div className="flex justify-center items-center mt-5">
       <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <form className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md" onSubmit={handleSubmit(setPersonalInfo)}>
               
                 <div className="flex flex-col items-center justify-center">
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                      Personal Information
                    </h1>
                     <div className="flex flex-col gap-3 w-full">
                <hr className="mt-2 mb-5 text-black"/>
                <label>Name : </label>
                <InputField 
                  register = {register}
                  id="name"
                  placeholder="Enter Name"
                />

                <label>Email : </label>
                <InputField 
                  register = {register}
                  id="email"
                  placeholder="Enter Email"
                />

                <label>Contact : </label>
                <InputField 
                  register = {register}
                  id="contact"
                  placeholder="Enter Contact Number"
                />

                <label>Github username : </label>
                <InputField 
                  register = {register}
                  id="gitUserName"
                  placeholder="Enter Github Username"
                />

                <label>LinkedIn url : </label>
                <InputField 
                  register = {register}
                  id="linkedInUrl"
                  placeholder="Enter LinkedIn URL"
                />
                </div>
                </div>
                <button className="bg-button-gradient p-1.5 mt-8 w-full text-slate-50 font-semibold cursor-pointer">Save</button>
                 
                </form>
            
                </div>
                </div>
    )
}

export default PersonalInfo;