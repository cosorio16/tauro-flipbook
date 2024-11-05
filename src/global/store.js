import { create } from "zustand";

const useStore = create((set) => ({
  page: 0,
  limit: 0,
  showProduct: false,
  currentProduct: 0,
  updateProduct: (newProduct) => set({ currentProduct: newProduct }),
  updatePage: (newPage) => set({ page: newPage }),
  updateLimit: (l) => set({ limit: l }),
  toggleShowProduct: () =>
    set((state) => ({ showProduct: !state.showProduct })),
  cart: [],
}));

export default useStore;
