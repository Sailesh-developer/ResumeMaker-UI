import { useDispatch, useSelector } from "react-redux";
import InputField from "../shared/InputField";
import { useForm } from "react-hook-form";
import { saveWorkExperience } from "../../store/actions";
import toast from "react-hot-toast";
import { useEffect } from "react";

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

    const dispatch = useDispatch();

    const savedWorkExperience = useSelector((state) => state.resume.workExperience);

  useEffect(() => {
  if (savedWorkExperience) {
    const formattedExperience = {
      ...savedWorkExperience,
      workDescriptionOne: Array.isArray(savedWorkExperience.workDescriptionOne)
        ? savedWorkExperience.workDescriptionOne.join('\n')
        : savedWorkExperience.workDescriptionOne,
      workDescriptionTwo: Array.isArray(savedWorkExperience.workDescriptionTwo)
        ? savedWorkExperience.workDescriptionTwo.join('\n')
        : savedWorkExperience.workDescriptionTwo,
    };
    reset(formattedExperience);
  }
}, [savedWorkExperience, reset]);




const setWorkExperience = (data) => {
  const formatToArray = (value) => {
    if (Array.isArray(value)) return value;
    return value
      .split('\n')
      .map(line => line.trim())
      .filter(line => line !== "");
  };

  const formattedData = {
    ...data,
    workDescriptionOne: formatToArray(data.workDescriptionOne),
    workDescriptionTwo: formatToArray(data.workDescriptionTwo),
  };

  dispatch(saveWorkExperience(toast, formattedData));
};


    return(
      <div className="flex justify-center items-center mt-3">
       <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <form className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md" onSubmit={handleSubmit(setWorkExperience)}>
               
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
                    <textarea
                      {...register("workDescriptionOne")}
                      placeholder="Maximum of five points"
                      rows={5}
                      className="p-2 border"
                      style={{ height: "250px" }}
                    />

                <label>Project Title - 2 : </label>
                <InputField 
                register = {register}
                id="WorkProjectTitleTwo"
                placeholder="Enter Project Title"
                />

                <label>Description : </label>
                   <textarea
                       {...register("workDescriptionTwo")}
                       placeholder="Maximum of five points"
                       rows={5}
                       className="p-2 border"
                       style={{ height: "250px" }}
                            />
                 </div>
                </div>
                </div>
                <button className="bg-[#1e90ff] p-1.5 mt-8 w-full text-slate-50 font-semibold cursor-pointer">Save</button>
                 
                </form>
            
                </div>
                </div>
    )
}

export default WorkExperience;