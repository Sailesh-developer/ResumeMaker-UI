

const initialState = {
       user: null,
       loading: false,
       error:  null,
};

export const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return {
                 ...state,
                 user: action.payload,
            };
       
    
        default:
            return state;
    }
}