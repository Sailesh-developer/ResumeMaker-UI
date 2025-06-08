import InputField from "../shared/InputField";
import { useForm } from "react-hook-form";


const Education = () => {


          const {
             register,
             handleSubmit,
             reset,
             formState: {errors},
         } = useForm({
             mode: "onTouched",
         });



     return(
      <div className="flex justify-center items-center mt-10">
       <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <form className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md">
               
                 <div className="flex flex-col items-center justify-center">
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                      Education
                    </h1>
                    <hr className="mt-2 mb-5 text-black w-full"/>
                     <div className="flex flex-col gap-3 w-full overflow-y-scroll max-h-111.5">
              
                <label>Institute Name : </label>
                <InputField 
                 register = {register}
                 id="institute"
                />

                <label>Degree : </label>
                <InputField 
                 register = {register}
                 id="degree"
                />

                <label>CGPA : </label>
                <InputField 
                 register = {register}
                 id="cgpa"
                />

                <label>HSC : </label>
                <InputField 
                 register = {register}
                 id="hsc"
                />

                <label>Percentage 12th : </label>
                <InputField 
                 register = {register}
                 id="percentageTwelth"
                />

                
                <label>SSLC : </label>
                <InputField 
                 register = {register}
                 id="sslc"
                />

                
                <label>Percentage 10th: </label>
                <InputField 
                 register = {register}
                 id="percentageTenth"
                />
                </div>
                </div>
                <button className="bg-button-gradient p-1.5 mt-8 w-full text-slate-50 font-semibold cursor-pointer">Save</button>
                 
                </form>
            
                </div>
                </div>
     )
}


export default Education;