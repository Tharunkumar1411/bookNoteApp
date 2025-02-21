import { create } from "zustand";
import { persist } from "zustand/middleware";

const useHomeStore = create(
  persist(
    (set, get) => ({
      homeDetails: {},
      productDetails: {},
      setHomeDetails: (details) => {
        set((state) => ({
          homeDetails: { ...state.homeDetails, ...details },
        }));
      },
      setProductDetails: (details) => {
        set((state) => ({
          productDetails: { ...state.productDetails, ...details },
        }));
      },
    }),
    {
      name: "home-storage",
      getStorage: () => sessionStorage,
    }
  )
);

export default useHomeStore;
