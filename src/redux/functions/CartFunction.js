import { AddCartFailure, AddCartStart, AddCartSuccess, RemoveItem } from "../reducers/cartSystem";

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
  // export const RemoveFromCart = async (dispatch, id) =>{
  //   dispatch(RemoveItem(id))
  //   console.log("id>>>",id);
  // }
