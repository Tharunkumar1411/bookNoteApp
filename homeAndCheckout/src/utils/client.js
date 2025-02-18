import axios from "axios";

const defaultOptions = (withAuth, isSource) => {
    const headers = {};
  
    // headers.Authorization = withAuth
    //   ? `Bearer ${store.getState()?.auth?.token || ""}`
    //   : "";
  
    return {
      headers,
    };
  };

export const axiosInstance = (
    withAuth = true,
    showToast = () => true,
    isSource = false
  ) => {
    const instance = axios.create({
      baseURL: "",
      ...defaultOptions(withAuth, isSource),
    });
  
    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        // Logout user if unauthorized
  
        if (error?.response?.status === 401) {
        //   toast.error(
        //     <div>
        //       Unauthorized access. <br />
        //       Please verify the URL and try again.
        //     </div>,
        //     {
        //       toastId: "api-error",
        //     }
        //   );
  
        //   dispatchAction(logoutUser());
        }
        throw error;
      }
    );
    return instance;
};