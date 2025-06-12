
import { useDispatch, useSelector } from "react-redux";
import InputField from "../shared/InputField";
import { useForm } from "react-hook-form";
import { saveAchievements } from "../../store/actions";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Achievements = () => {


         const {
            register,
            handleSubmit,
            watch,
            reset,
            formState: {errors},
        } = useForm({
            mode: "onTouched",
        });


    const inputHeight = {
    height: "120px",
    }

    const achievements = watch('achievements');
    const portfolio = watch('portfolioUrl');

    const dispatch = useDispatch();



        const savedAchievements = useSelector((state) => state.resume.achievements);

    useEffect(() => {
     if (savedAchievements) {
    reset(savedAchievements);
      }
    }, [savedAchievements, reset]);

  const setAchievements = (data) => {
  const formatToArray = (value) => {
    if (Array.isArray(value)) return value;
    return value
      .split('\n')
      .map(line => line.trim())
      .filter(line => line !== "");
  };

  const formattedData = {
    ...data,
    achievements: formatToArray(data.achievements),
  };

  dispatch(saveAchievements(toast, formattedData));
};

    return(
       
             <div className="flex justify-center items-center mt-4">
       <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <form className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md" onSubmit={handleSubmit(setAchievements)}>
               
                 <div className="flex flex-col items-center justify-center">
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                     Achievements
                    </h1>
                     <div className="flex flex-col gap-3 w-full">
                <hr className="mt-2 mb-5 text-black"/>
                <label>Achievements : </label>
                    <textarea
                      {...register("achievements")}
                      placeholder="Maximum of five points"
                      rows={5}
                      className="p-2 border rounded"
                      style={{ height: "150px" }}
                    />

                <label>Portfolio URL (Optional): </label>
                <InputField 
                register = {register}
                id="portfolioUrl"
                placeholder="Enter Portfolio URL"
                />

                </div>
                </div>
                <button className={`${!achievements || !portfolio ? 'bg-[#1e90ff] p-1.5 mt-8 w-full text-slate-300 font-semibold cursor-not-allowed' :  'bg-[#1e90ff] p-1.5 mt-8 w-full text-slate-50 font-semibold cursor-pointer'}`}>Save</button>
                 
                </form>
            
                </div>
                </div> 
             
    )
}

export default Achievements;