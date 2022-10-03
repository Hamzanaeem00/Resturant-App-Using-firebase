import { createSlice } from '@reduxjs/toolkit'

const initialState={
  cart: [],
    totalQuantity: 0,
    isFetching: false,
    error: false,
};

 const cartSystem = createSlice({
  name: 'cart',
   initialState,
   
  reducers: {
    AddCartSuccess: (state, action) => {
      state.isFetching = false;

      let payload = action.payload
      console.log("payload>>>>>",payload);
      state.cart.push({
        payload,
      });
    },
    AddCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    AddCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
   RemoveItem: (state, action)=>{
    console.log("removeitemAction",action);
      // const deleteItem = state.cart.filter((item)=> item.id !==  action.payload.id)
      const deleteItem = state.cart.splice(1, state.cart.length)
      state.cart = deleteItem; 
   },

   cartQuantity:(state)=>{
     let totalQuantity = state.cart.length+1;
     console.log("totalCartQuantity>>>",totalQuantity);
   }
    // increment:  (state)=>{
    //   state.value +=1;
    // },
    // decrement:(state)=>{
    //   state.value -=1
    // },
    // incrementByAmount:(state, action) =>{
    //   state.value +=action.payload
    // },

  }

  
});
console.log("cartSystem>>>>",cartSystem);

export const { AddCartStart, AddCartSuccess, AddCartFailure, increment, decrement, incrementByAmount, RemoveItem, cartQuantity} = cartSystem.actions;
export default cartSystem.reducer