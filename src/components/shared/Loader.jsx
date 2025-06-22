import loaderGif from "../../assets/resumeMaker-loader.gif"


const Loader = () => {


    return(
        <div className="bg-gray-400/70 flex items-center justify-center z-1000 ">
         <img src={loaderGif} alt=""/>
        </div>
    )
}

export default Loader;