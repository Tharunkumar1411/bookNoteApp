import { axiosInstance } from "../utils/client";
import { GET_HOME_DETAILS, GET_PRODUCT_DETAILS, GET_PRODUCT_LIST } from "../utils/endpoint";

export const getProductList = () => {
    return axiosInstance().get(GET_PRODUCT_LIST).then((response) => {
        return response.data;
    })
}