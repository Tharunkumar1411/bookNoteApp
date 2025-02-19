import { HOME_DETIALS_SUCCESS } from "./type"

export const setHomeDetails = (payload) => {
    return {
        type: HOME_DETIALS_SUCCESS,
        payload
    }
}