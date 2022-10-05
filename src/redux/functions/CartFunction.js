import { AddCartFailure, AddCartStart, AddCartSuccess, decrementFailure, decrementStart, decrementSuccess, incrementFailure, incrementStart, incrementSuccess, } from "../reducers/cartSystem";

export const handleCart = async (dispatch, inputData) => {
    dispatch(AddCartStart());
    try {
      console.log("input data from handle cart >>",inputData);
      dispatch(AddCartSuccess(inputData));
    } catch (err) {  
      console.log("error from catch", err);  
      dispatch(AddCartFailure());
    }
     
  };
  
   export  const  handleIncrementValue = async (dispatch, cartItem )=>{
    dispatch(incrementStart());
    try {
      console.log("increment data from toggleincrement >>",cartItem);
      dispatch(incrementSuccess(cartItem));
    } catch (err) {  
      console.log("error from catch", err);  
      dispatch(incrementFailure());
    } 
  }
  export  const  handleDecrementValue = async (dispatch, cartItem )=>{
    dispatch(decrementStart());
    try {
      console.log("decrement value from toggledecrement>>",cartItem);
      dispatch(decrementSuccess(cartItem));
    } catch (err) {  
      console.log("error from catch", err);  
      dispatch(decrementFailure());
    } 
  }
  
  // export const RemoveFromCart = async (dispatch, id) =>{
  //   dispatch(RemoveItem(id))
  //   console.log("id>>>",id);
  // }
