import { createSlice } from '@reduxjs/toolkit'

const initialState={
  cart: [],
    value: 1,
    total:0,
   
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
      const deleteItem = state.cart.filter((item, index)=> {
        console.log("itemId>>>",item);
       return index !== action.payload
       
      })    
      // const deleteItem = state.cart.splice(1, state.cart.length)
      state.cart = deleteItem;
      console.log("Remaining Item>>>",deleteItem);                 
   },
    incrementSuccess:  (state, action)=>{
      state.isFetching = false 
      // const incrementValue = state.cart.find((item)=> (item === action.payload) ? state.value++ : "")
      const incrementValue = state.cart.find((item)=>{
        return ((item.id===action.payload.id)? state.value++  :"")

      })
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
      const decrementValue = state.cart.find((item)=> {

        return (((item.id === action.payload.id)? state.value-- :"") ) 
      })
      console.log("decrementValue>>>>", decrementValue);
      
      
      
    },
    decrementStart: (state) =>{
      state.isFetching = true
      state.error = false ;
    },
    decrementFailure: (state) =>{
      state.isFetching = false
      state.error = true ;
    },


    calculateTotals: (state)=>{
      let value = 0
      let total = 0
      state.cart.forEach((item)=>{
        value += item.value
        total += item.value*item.price
        console.log("price",total);
      })
      state.value = value;
      state.total = total;
    }

    }
    
  }


  
);
console.log("cartSystem>>>>",cartSystem);

export const { AddCartStart, AddCartSuccess, AddCartFailure, incrementSuccess, incrementStart, 
  incrementFailure, RemoveItem, decrementFailure, decrementStart, decrementSuccess, priceHandling, calculateTotals} = cartSystem.actions;
export default cartSystem.reducer