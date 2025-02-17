import * as types from "./type";

const initialValues = {
    homeDetails: {}
}

export const HomeReducer = (action, state = initialValues) => {
    switch(action.type){
        case types.HOME_DETAILS:
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