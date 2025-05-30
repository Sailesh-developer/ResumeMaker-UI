import InputField from "../shared/InputField";


const Projects = () => {

   
const inputHeight = {
    height: "180px",
}


    return(
      <div className="flex justify-center items-center mt-10">
       <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <form className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md">
               
                 <div className="flex flex-col items-center justify-center">
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                      Projects
                    </h1>
                     <div className="flex flex-col gap-3 w-full">
                <hr className="mt-2 mb-5 text-black"/>
                  <div className="flex flex-col gap-3 w-full overflow-y-scroll max-h-110">
                <label>Project Title - 1 : </label>
                <InputField />

                <label>Description : </label>
                <InputField inputHeight={inputHeight.height}/>

                <label>Project Title - 2 : </label>
                <InputField />

                <label>Description : </label>
                <InputField inputHeight={inputHeight.height}/>
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