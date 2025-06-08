import { api } from "../../api/api";


export const userLogin = (sendData,navigate) => async (dispatch) => {
    const { data } = await api.post("/auth/login" , sendData);
    localStorage.setItem("auth" , JSON.stringify(data));
    dispatch({
        type : "USER_LOGIN",
        payload : data,
    });
    navigate("/mainpage");
    console.log("login successful!");
}