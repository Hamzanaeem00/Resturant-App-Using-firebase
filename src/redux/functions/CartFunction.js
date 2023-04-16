import { AddCartFailure, AddCartStart, AddCartSuccess, decrementFailure, decrementStart, decrementSuccess, incrementFailure, incrementStart, incrementSuccess } from "../reducers/cartSystem";

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
  
   export  const  handleIncrementValue = async (dispatch, item )=>{
    dispatch(incrementStart());
    try {
      console.log("increment data from toggleincrement >>",item);
      dispatch(incrementSuccess(item));
    } catch (err) {  
      console.log("error from catch", err);  
      dispatch(incrementFailure());
    } 
  }
  export  const  handleDecrementValue = async (dispatch, item )=>{
    dispatch(decrementStart());
    try {
      console.log("decrement value from toggledecrement>>",item);
      dispatch(decrementSuccess(item));
    } catch (err) {  
      console.log("error from catch", err);  
      dispatch(decrementFailure());
    } 
  }
    // export const handlePriceValue = async  (dispatch, price)=>{
    //          console.log("price in array>>",price);
    //          dispatch(priceHandling(price))
    // }
  
    
  // export const RemoveFromCart = async (dispatch, id) =>{
  //   dispatch(RemoveItem(id))
  //   console.log("id>>>",id);
  // }
