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


export const userLogout = (navigate,toast) => async (dispatch) => {
  localStorage.removeItem("auth");
  dispatch({
    type : "USER_LOGOUT",
  });
  navigate("/login");
  toast.success("Logged out successfully!")
}


export const userRegister = (navigate,toast,sendData) => async (dispatch) => {
  const {data} = await api.post("/auth/register" , sendData);
  dispatch({
    type : "USER_REGISTER",
    payload : data,
  });
  navigate("/login");
  toast.success("User Registered Successfully!")
}