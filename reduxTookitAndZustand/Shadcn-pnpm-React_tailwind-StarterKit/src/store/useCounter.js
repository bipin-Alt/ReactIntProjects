import { create } from "zustand";

const useCounter = create((set)=>{
    return {
        count : 1,
        increase : () => set((state)=> ({count : state.count + 1})),
        decrease : ()=> set((state)=> ({count : state.count -1})),
    };
});

export default useCounter;