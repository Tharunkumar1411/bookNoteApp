import * as types from "./type";

const initialValues = {
    homeDetails: {}
}

export const HomeReducer = (state = initialValues, action) => {
    console.log("checking in reducer:::,:", action)
    switch(action.type){
        case types.HOME_DETIALS_SUCCESS:
            return{
                ...state,
                homeDetails: action.payload
            }
        default: 
            return{
                homeDetails: {}
            }
    }
};