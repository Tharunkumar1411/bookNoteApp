import { axiosInstance } from "../utils/client";
import { GET_HOME_DETAILS } from "../utils/endpoint";

export const getHomeDetails = () => {
    return axiosInstance().get(GET_HOME_DETAILS).then((response) => {
        console.log("sdfsa", response)
        return response.data[0];
    })
}