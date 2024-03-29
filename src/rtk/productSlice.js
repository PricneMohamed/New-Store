import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProduct = createAsyncThunk("productSlice/fetchProduct", async()=>{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        return data;
})
export const productSlice = createSlice({
    initialState:[],
    name:"productSlice",
    reducers:{
        addNewProduct:(state,action)=>{
            fetch("https://fakestoreapi.com/products",{
                method:"post",
                body:JSON.stringify(action.payload)
            })  
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
})

export const {} = productSlice.reducer
export const {addNewProduct} = productSlice.actions

export default productSlice