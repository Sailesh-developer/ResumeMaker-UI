import InputField from "../shared/InputField";


const TechnicalSkills = () => {


    return(
              <div className="flex justify-center items-center mt-10">
       <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <form className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md">
               
                 <div className="flex flex-col items-center justify-center">
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                     Technical Skills
                    </h1>
                     <div className="flex flex-col gap-3 w-full">
                <hr className="mt-2 mb-5 text-black"/>
                <label>Languages : </label>
                <InputField />

                <label>Frameworks : </label>
                <InputField />

                <label>Platforms : </label>
                <InputField />
                </div>
                </div>
                <button className="bg-button-gradient p-1.5 mt-8 w-full text-slate-50 font-semibold cursor-pointer">Save</button>
                 
                </form>
            
                </div>
                </div> 
    )
}

export default TechnicalSkills;