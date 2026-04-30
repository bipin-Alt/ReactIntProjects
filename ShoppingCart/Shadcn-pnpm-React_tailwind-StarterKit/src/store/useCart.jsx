import { create } from "zustand";
import { toast } from "sonner";

const useCart = create((set,get)=>{
    return {
        Cartproducts :[],
        actions : {
             
             increaseQuantity : (product)=>{
                const existingProduct = get().Cartproducts.find((item)=> item.id === product.id);
                if(existingProduct){
                    set({
                        Cartproducts : get().Cartproducts.map((item)=> item.id === product.id? {...item, quantity : item.quantity+1} : item)
                    })
                }
             },

             addToCart : (product)=>{
                const existingProduct = get().Cartproducts.find(item => item.id === product.id);
                if(existingProduct){
                    set({
                        Cartproducts : get().Cartproducts.map((item)=> item.id === product.id ? {...item, status:"Already in Cart"}: item)
                    });
                }else {
                    set({
                       Cartproducts : [...get().Cartproducts,{...product, quantity : 1}]
                    })
                }
             },

             removeFromCart : (id)=> {
                   set({
                    Cartproducts : get().Cartproducts.filter((item)=> item.id !== id),
                   })
             },

             clearCart : ()=>{set({Cartproducts : []})},

             decreaseQuantity : (product) => {
                const existingProduct = get().Cartproducts.find(item => item.id === product.id);
                const checkQuantity = existingProduct?.quantity === 1;
                if(checkQuantity){
                    toast.warning("Minimum 1 item required", {
                        description: "You cannot reduce the quantity below 1."
                    });
                    
                    set({
                        Cartproducts: get().Cartproducts.map((item)=> item.id === product.id? {...item, status:"Can't be decreased further"}: item)
                    })
                }else if(existingProduct){
                    set({
                        Cartproducts:get().Cartproducts.map((item)=> item.id === product.id? {...item, quantity : item.quantity - 1} : item)
                    });
                };
             },
            
        },

    };
})

export default useCart;