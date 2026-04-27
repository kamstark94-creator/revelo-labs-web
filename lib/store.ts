import { create } from "zustand";

type CartState = {
  count: number;
  addToLab: () => void;
  handleCheckout: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  count: 0,
  addToLab: () => set((state) => ({ count: state.count + 1 })),
  handleCheckout: () => {
    console.log("TODO: Replace checkout stub with payment provider SDK.");
  },
}));
