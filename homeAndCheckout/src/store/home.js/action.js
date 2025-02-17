import { HOME_DETAILS } from "./type"

export const getHomeDetails = (payload) => {
    return {
        type: HOME_DETAILS,
        payload
    }
}