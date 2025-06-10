import InputField from "../shared/InputField";
import { useForm } from "react-hook-form";

const WorkExperience = () => {

const inputHeight = {
    height: "180px",
}

     const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        mode: "onTouched",
    });


    return(
      <div className="flex justify-center items-center mt-5">
       <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <form className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md">
               
                 <div className="flex flex-col items-center justify-center">
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                      Work Experience
                    </h1>
                     <div className="flex flex-col gap-3 w-full">
                <hr className="mt-2 mb-5 text-black"/>
                  <div className="flex flex-col gap-3 w-full overflow-y-scroll max-h-110">
                <label>Project Title - 1 : </label>
                <InputField 
                register = {register}
                id="WorkProjectTitleOne"
                placeholder="Enter Project Title"
                />

                <label>Description : </label>
                <InputField 
                inputHeight={inputHeight.height}
                register = {register}
                id="workDescriptionOne"
                placeholder="Description"
                />

                <label>Project Title - 2 : </label>
                <InputField 
                register = {register}
                id="WorkProjectTitleTwo"
                placeholder="Enter Project Title"
                />

                <label>Description : </label>
                <InputField 
                inputHeight={inputHeight.height}
                register = {register}
                id="workDescriptionTwo"
                placeholder="Description"
                />
                 </div>
                </div>
                </div>
                <button className="bg-button-gradient p-1.5 mt-8 w-full text-slate-50 font-semibold cursor-pointer">Save</button>
                 
                </form>
            
                </div>
                </div>
    )
}

export default WorkExperience;