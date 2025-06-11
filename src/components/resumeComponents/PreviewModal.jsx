import { useNavigate } from "react-router-dom";

const PreviewModal = () => {

  const navigate = useNavigate();

  const navigateToMain = () => {
        navigate("/mainpage")
  }
  


    return(
        <>
        <div className="bg-black/70 flex items-center justify-center z-1000 ">
          
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row items-center gap-4">
                    <button className="relative left-180 text-slate-50 underline mt-2 cursor-pointer">Download</button>          
                    <button className="relative left-185 text-slate-50 underline mt-2 cursor-pointer" onClick={navigateToMain}>Close</button>
                 </div>
      <div className="w-[210mm] h-[297mm] bg-white shadow-md flex items-center justify-center">
              <p className="text-shadow-black">hi</p>
       </div>
       <div className="page-break"></div>
        <div className="w-[210mm] h-[297mm] bg-white shadow-md flex items-center justify-center">
        </div>
        </div>
       </div>
       </>
    )
}

export default PreviewModal;


