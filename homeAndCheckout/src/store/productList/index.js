import { create } from "zustand";

const useProductStore = create(
    (set, get) => ({
      productList: [],
      setProductList: (details) => {
        set(() => ({
            productList: [...details],
        }));
      }
    })
);

export default useProductStore;
