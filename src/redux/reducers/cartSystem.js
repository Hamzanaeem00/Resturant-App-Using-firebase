import { createSlice } from '@reduxjs/toolkit'

const initialState={
  cart: [],
    value: 1,
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
      const deleteItem = state.cart.filter((item)=> item.id !==  action.payload.id)
      // const deleteItem = state.cart.splice(1, state.cart.length)
      state.cart = deleteItem; 
   },

  //  cartQuantity:(state)=>{
  //    let totalQuantity= state.cart.length;
  //    console.log("cartLength>>>>",totalQuantity);
  //   },
    incrementSuccess:  (state, action)=>{
      state.isFetching = false 
      const incrementValue = state.cart.find((cartItem)=> (cartItem.id === action.payload.id) ? state.value++ : "")
    },
    
    incrementStart: (state) =>{
      state.isFetching = true
      state.error = false ;
    },
    incrementFailure: (state) =>{
      state.isFetching = false
      state.error = true ;
    },


    decrementSuccess:  (state, action)=>{
      state.isFetching = false 
      const decrementValue = state.cart.findIndex((cartItem)=> (cartItem.id === action.payload.id)? state.value -- : "")
      console.log("decrementValue>>>>",decrementValue);
      // if (state.cart[decrementValue].value >1){
      //   state.cart[decrementValue].value -=1
      // } else
       if(state.value === 1){
      const deleteItem = state.cart.filter((cartItem)=> cartItem.id !==  action.payload.id)
           
      }
      
      
    },
    decrementStart: (state) =>{
      state.isFetching = true
      state.error = false ;
    },
    decrementFailure: (state) =>{
      state.isFetching = false
      state.error = true ;
    },
    // decrement:(state)=>{
    //   state.value -=1
    // },
    // incrementByAmount:(state, action) =>{
    //   state.value +=action.payload
    // },

  }

  
});
console.log("cartSystem>>>>",cartSystem);

export const { AddCartStart, AddCartSuccess, AddCartFailure, incrementSuccess, incrementStart, 
  incrementFailure, RemoveItem, decrementFailure, decrementStart, decrementSuccess} = cartSystem.actions;
export default cartSystem.reducer