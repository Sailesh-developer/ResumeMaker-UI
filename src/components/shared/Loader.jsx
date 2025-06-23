import loaderGif from "../../assets/resumeMaker-loader.gif"


const Loader = () => {


    return(
        <div className="fixed inset-0 z-50 bg-gray-400/95 flex items-center justify-center flex-col">
         <img src={loaderGif} alt="" className="w-150 h-100 mb-50"/>
         <p className="text-3xl absolute top-145">Loading...</p>
        </div>
    )
}

export default Loader;