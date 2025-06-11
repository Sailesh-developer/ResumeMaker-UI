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
  dispatch({
    type : "RESET_RESUME",
  })
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


export const savePersonalInfo = (toast, sendData) => (dispatch) => {
  dispatch({
    type: "SAVE_PERSONAL_INFO",
    payload: sendData,
  })
  toast.success("Personal info saved successfully.")
}

export const saveEducationInfo = (toast, sendData) => (dispatch) => {
  dispatch({
    type: "SAVE_EDUCATION",
    payload: sendData,
  })
  toast.success("Education saved successfully.")
}

export const saveWorkExperience = (toast, sendData) => (dispatch) => {
  dispatch({
    type: "SAVE_WORK_EXPERIENCE",
    payload: sendData,
  })
  toast.success("Work experience saved successfully.")
}

export const saveProjectInfo = (toast, sendData) => (dispatch) => {
  dispatch({
    type: "SAVE_PROJECTS",
    payload: sendData,
  })
  toast.success("Projects saved successfully.")
}