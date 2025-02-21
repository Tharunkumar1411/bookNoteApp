const BASEURL = "https://kicks-backend-seven.vercel.app/"

export const GET_HOME_DETAILS = BASEURL + `getHomeDetails`;
export const GET_PRODUCT_DETAILS = (id) => BASEURL + `getProductDetails?productId=${id}`