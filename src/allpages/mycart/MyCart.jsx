import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { handleDecrementValue, handleIncrementValue } from '../../redux/functions/CartFunction';
import { RemoveItem } from '../../redux/reducers/cartSystem';
import Header from '../../components/header/Header';
import { MdDelete } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";



function MyCart() {
    const dispatch = useDispatch();
    const getCartQuantity = useSelector((state)=> state.cart.cart.length)
    const count = useSelector((state) => state.cart.value)
    console.log("count>>>",count);
    const totalPrice = useSelector((state) => state.cart.total)
    console.log("totalPrice>>",totalPrice);
    const getCartData = useSelector(state => state.cart.cart);
    console.log("getCartData>>", getCartData);



    const RemoveItemhandler = (id) => {
        console.log("remove item>>>", id);
        dispatch(RemoveItem(id))

        }
        
        const toggleIncrementValue = (count) => {
            console.log("increasedValue", count);
            handleIncrementValue(dispatch, count)
              
    }

    const toggleDecrementValue = (count) => {
        console.log("decresed value>>>",count);
        if (count === 1){   
        dispatch(RemoveItem())
        } 
        else {
            handleDecrementValue(dispatch, count)
            
        }
    }
    return (

        <div>
            <div>

                <Header />
            </div>
            <div
                className=""
                style={{ cursor: "pointer" }}
                variant="primary"
            >
                {getCartData.map((food, index) => {
                    return (
                        <div>
                        <div className=" border-0 rounded  w-100 d-flex p-3 border-0 rounded "
                        >
                            <div
                                className='border-0 rounded w-25  d-flex  border-0 rounded  text-center'
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

                                        <div className="mt-3 p-2 foodname" >{food.payload.name}</div>

                                        <div className="mt-3 delivery p-2">Free delivery</div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-25 text-center my-5' >
                               {`${food.payload.price}$`}
                            </div>
                            <div className='w-25 text-center my-5'>
                                <div>
                                    <div>
                                        <button className="border-0 rounded text-center"  style={{
                                            borderRadius: '6px',
                                            backgroundColor: "#b80624",
                                            color: "white",
                                        }}
                                            aria-label="Increment value"
                                        
                                         onClick={() => toggleIncrementValue(count)}
    
                                        >
                                            <AiOutlinePlus color='white' size='1.5em'/>
                                        </button>
                                        <span className='mx-2'>{count}</span>
                                        <button className="border-0 rounded text-center" style={{
                                            borderRadius: '6px',
                                            backgroundColor: "#b80624",
                                            color: "white",
                                        }}
                                            aria-label="Decrement value"
                                    
                                        onClick={()=> toggleDecrementValue(count)}
                                        >
                                            <AiOutlineMinus  color='white' size='1.5em'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-25 text-center my-5'>
                            {`${food.payload.price*count} $`}
                            </div>
                            <div className='w-25 text-center'>
                                <div className='text-center my-5'>
                                    <button className="border-0 rounded text-center"

                                        style={{
                                            borderRadius: '6px',
                                            marginTop: "15px",
                                            backgroundColor: "#b80624",
                                            color: "white",
                                            // Width: "200px",
                                            fontSize: "15px"
                                        }}

                                        onClick={() => RemoveItemhandler(index)}
                                    // onClick={()=> { dispatch (RemoveItem(food))}}
                                    > <MdDelete size='1.8em' /> </button>
                                </div>
                                
                            </div>
                            
                        </div>
                        
           </div>
                                
                    );
                    
                })}
            </div>
            <div className='w-100 d-flex p-3 border-0 rounded'>
        <div className='w-50  mx-5 my-5'>
         {`Number Of Products You Selected ${getCartQuantity}` }
        </div>
        <div className='w-25 text-center my-5'>
            {`Total ${getCartData.reduce((item)=> item.price+count * item.price, 0)}`}
        </div>
    </div>
        </div>





    )
}

export default MyCart