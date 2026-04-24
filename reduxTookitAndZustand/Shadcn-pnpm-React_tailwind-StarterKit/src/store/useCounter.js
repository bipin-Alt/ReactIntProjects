import { create } from "zustand";

const useCounter = create((set)=>{
    return {
        count : 1,
        products: [],
        increase : () => set((state)=> ({count : state.count + 1})),
        decrease : ()=> set((state)=> ({count : state.count -1})),
        //Data fetching using zustand example :

        fetchListOfProducts : async ()=>{
            const response = await fetch("https://dummyjson.com/products");
            const result = await response.json();
            set({products : result?.products});
        }
    };
});

export default useCounter;