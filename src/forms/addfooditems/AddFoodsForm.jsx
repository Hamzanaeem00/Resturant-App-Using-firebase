import React, { useRef } from "react";
import "./addfoodform.css";

const AddFoodsForm = (props) => {

const imageInputRef = useRef();
const itemNameInuputRef = useRef();
const itemTypeInuputRef = useRef();
const itemPriceInputRef = useRef();

function SubmitHandler(event){
    event.preventDefault();
    const enteredImage =   imageInputRef.current.value;
    const enteredItemName = itemNameInuputRef.current.value;
    const enteredItemType = itemTypeInuputRef.current.value;
    const enteredItemPrice = itemPriceInputRef.current.value;

    const FooditemData = {
        image: enteredImage ,
        itemName: enteredItemName,
        itemType: enteredItemType,
        itemPrice: enteredItemPrice
        
    }
    // console.log(FooditemData);
    props.onAddFoods(FooditemData)
}



  return (
    <form onSubmit={SubmitHandler} 
      className="p-3 rounded mt-5 mx-5"
      style={{
        width: "400px",
        boxShadow: "0 .125rem .25rem 0 rgba(58,59,69,.2)",
        backgroundColor: "white",
      }}
    >
      <div>
        <h3
          className="text-center mt-2"
          style={{ fontWeight: "bolder", color: "#1cc88a" }}
        >
          {" "}
          Add New Food Items{" "}
        </h3>
      </div>
      <div>
        <div className=" p-1 mx-1 mt-4">
          <label className="" htmlFor="image">
            Food Item Image
          </label>
        </div>
        <div>
          {" "}
          <input
            className="wd-100% rounded border-1"
            style={{ backgroundColor: "", width: "100%" }}
            type="url"
            name=""
            id="image"
             ref={imageInputRef}/>
        </div>
        <div className="p-1 mt-2">
          <label className="" htmlFor="itemName">
            Item Name{" "}
          </label>{" "}
        </div>
        <div>
          <input
            className="wd-100% rounded border-1"
            style={{ backgroundColor: "", width: "100%" }}
            type="text"
            name=""
            id="item"
          ref={itemNameInuputRef}/>
        </div>
        <div className="p-1 mt-2">
          <label className="" htmlFor="itemName">
            Item Price{" "}
          </label>{" "}
        </div>
        <div>
          <input
            className="wd-100% rounded border-1"
            style={{ backgroundColor: "", width: "100%" }}
            type="text"
            name=""
            id="item"
          ref={itemPriceInputRef}/>
        </div>
        
        <div className="p-1 mt-2">
          <label className="" htmlFor="itemName">
            Item Type{" "}
          </label>
        </div>
        <div>
          <select
            className="p-1 rounded   "
            style={{ backgroundColor: "", width: "100%" }}
            aria-label="Default select example"
          ref={itemTypeInuputRef}>
            <option selected>Open this select menu</option>
            <option value="1">Free Delivery</option>
            <option value="2">50% off</option>
            <option value="3">Cashback</option>
          </select>
        </div>
        <div className="mt-4 text-center">
        <button className="p-1 border-0 rounded" style={{width:'30%', backgroundColor:'#b80624', color:'white'}}>submit</button>
        </div>
      </div>
    </form>
  );
};

export default AddFoodsForm;
