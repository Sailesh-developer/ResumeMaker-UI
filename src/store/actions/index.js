import { api } from "../../api/api";


export const userLogin = (sendData,navigate,toast) => async (dispatch) => {
    try{
    const { data } = await api.post("/auth/login" , sendData);
    localStorage.setItem("auth" , JSON.stringify(data));
    dispatch({
        type : "USER_LOGIN",
        payload : data,
    });
    navigate("/mainpage");
    toast.success("Logged in!");
    console.log("login successful!");
}
   catch(error){
     if(error.status === 404)
     toast.error("User does not exist. Register and try again.")
   };
   
}