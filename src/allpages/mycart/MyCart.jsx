import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { handleCart, RemoveFromCart } from '../../redux/functions/CartFunction';
import { RemoveItem } from '../../redux/reducers/cartSystem';
import Foodcard from '../../components/cards/Foodcard/Foodcard'



function MyCart() {
    const  dispatch = useDispatch();
    useSelector((state)=>{
        console.log("state>>",state);
    })

   const getCartData = useSelector( state=> state.cart.cart);
   console.log("getCartData>>",getCartData);

  const RemoveItemhandler=(food)=>{
     console.log("remove item>>>",food);
     dispatch(RemoveItem(food.payload.id))
   }
  return (
    // <div>
    //    {getCartData.map((item)=>{
    //     return <Foodcard key={item.id}{...item}/>
    //    })}
    // </div>
 <div>
     {getCartData.map((food) => {
            return (
              <div
                className="col-lg-4 col-md-4 col-sm-6 "
                key={food.payload.id}
              >
                <div className="mt-4 mycard">
                  <div className="logosize img-fluid bg-light rounded">
                    {" "}
                    <img
                      className="logosize img-fluid bg-light rounded"
                      src={food.payload.image}
                      alt=""
                      width="400px"
                    />{" "}
                  </div>
                  <div className="d-flex justify-content-between">

                    <div className="mt-3 p-2 foodname" >{food.payload.itemName}</div>
                    <div>
                      <button className="border-0"
                        
                        style={{
                          borderRadius: '6px',
                          marginTop: "15px",
                          backgroundColor: "#b80624",
                          color: "white",
                          Width: "100px",
                          
                        }}
                        onClick ={()=> RemoveItemhandler(food)}
                        // onClick={()=> { dispatch (RemoveItem(food))}}
                        > Remove</button>
                    </div>
                    <div className="mt-3 delivery p-2">Free delivery</div>
                  </div>
                </div>
              </div>
            );
          })}
</div> 

  )
}

export default MyCart