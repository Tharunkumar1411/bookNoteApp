import { axiosInstance } from "../utils/client";
import { GET_HOME_DETAILS, GET_PRODUCT_DETAILS } from "../utils/endpoint";

export const getHomeDetails = () => {
    return axiosInstance().get(GET_HOME_DETAILS).then((response) => {
        return response.data[0];
    })
}

export const getProductDetails = (productId) => {
    return axiosInstance().get(GET_PRODUCT_DETAILS(productId)).then((response) => {
        return response.data;
    })
}