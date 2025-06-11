import { useDispatch, useSelector } from "react-redux";
import { saveProjectInfo } from "../../store/actions";
import InputField from "../shared/InputField";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Projects = () => {

   
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

    const savedProjectInfo = useSelector((state) => state.resume.projects)


  //      const setProjectInfo = (data) => {
  //    const formattedData = {
  //   ...data,
  //   descriptionOne: data.descriptionOne
  //     .split('\n')
  //     .map(line => line.trim())
  //     .filter(line => line !== ""),
      
  //   descriptionTwo: data.descriptionTwo
  //     .split('\n')
  //     .map(line => line.trim())
  //     .filter(line => line !== ""),
  // };

  //     dispatch(saveProjectInfo(toast, formattedData));
  //   };

const setProjectInfo = (data) => {
  const formatToArray = (value) => {
    if (Array.isArray(value)) return value;
    return value
      .split('\n')
      .map(line => line.trim())
      .filter(line => line !== "");
  };

  const formattedData = {
    ...data,
    descriptionOne: formatToArray(data.descriptionOne),
    descriptionTwo: formatToArray(data.descriptionTwo),
  };

  dispatch(saveProjectInfo(toast, formattedData));
};


        useEffect(() => {
         if (savedProjectInfo) {
        reset(savedProjectInfo);
          }
        }, [savedProjectInfo, reset]);

    return(
      <div className="flex justify-center items-center mt-5">
       <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <form className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md" onSubmit={handleSubmit(setProjectInfo)}>
               
                 <div className="flex flex-col items-center justify-center">
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                      Projects
                    </h1>
                     <div className="flex flex-col gap-3 w-full">
                <hr className="mt-2 mb-5 text-black"/>
                  <div className="flex flex-col gap-3 w-full overflow-y-scroll max-h-110">
                <label>Project Title - 1 : </label>
                <InputField    
                register = {register}
                id="projectTitleOne"
                placeholder="Enter Project Title"
                />

                <label>Description : </label>
                   <textarea
                      {...register("descriptionOne")}
                      placeholder="Maximum of five points"
                      rows={5}
                      className="p-2 border"
                      style={{ height: "250px" }}
                    />

                <label>Project Title - 2 : </label>
                <InputField 
                register = {register}
                id="projectTitleTwo"
                placeholder="Enter Project Title"
                />

                <label>Description : </label>
                <textarea
                      {...register("descriptionTwo")}
                      placeholder="Maximum of five points"
                      rows={5}
                      className="p-2 border"
                      style={{ height: "250px" }}
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


export default Projects;