import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addCart:(state,action)=>{
            const finded = state.find((i)=> i.id === action.payload.id)
            if(finded){
                finded.count +=1    
            }else{
                const clone=  {...action.payload,count:1}
                state.push(clone)
            }
        },
        removeCart: (state, action) => {
            const idProduct = action.payload.id;
            const productChooice = state.find(productid=> productid.id === idProduct);
            if(productChooice.count > 1){
                productChooice.count -=1;
            }else{
                return state.filter((i)=> i.id !== action.payload.id)
            }
            // console.log(countProduct);
        }
        
    }
})
export const {addCart,removeCart} = cartSlice.actions;
export default cartSlice;