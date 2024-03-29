import React, { useEffect, useState } from "react";
import { useContext } from "react";
import FavoritesContext from '../../../store/favorites-context';
import "./foodcard.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { handleCart } from "../../../redux/functions/CartFunction";


export const TestSideBar = (props) => {
  console.log("props >>>", props);
  const [isOpen, setIsOpen] = useState(true);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const handleClose = () => setShow(false);

  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  function toogleStatusHandler() {

    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    }

    else {
      favoritesCtx.addFavorite({
        id: props.id,
        // image: props.image,
        // itemName: props.itemName,
        // itemType: props.itemType,
      });
    }
  }

 
  const handleAddToCart = (food) => {
    console.log("food2>>>>", food);
     handleCart(dispatch, food) 
     setIsOpen(!isOpen);
  }

  return (
    <div>
    {isOpen && (
      <Offcanvas  onHide={handleClose}  
      // show={props.show}
        show={show}
      // onHide={props.handleClose}
      {...props}
      placement={"end"}
      className={`${props.show? "":""}`}
      
      >
        <Offcanvas.Header closeButton  >
          <Offcanvas.Title>Items</Offcanvas.Title>
        </Offcanvas.Header>
        <div className="offcanvas-body">
          <div>
            <img
              className="img-fluid rounded bg-light"
              src={props.image}
              alt=""
              width="400px"
              />
          </div>
          <div>
            {" "}
            <button
              onClick={toogleStatusHandler}
              className="mt-4 border-0 rounded text-center favoriteicon"
              style={{
                backgroundColor: "white",
                color: "#b80624",
                fontSize: "14px",
                transform: "translate(300px, -240px)",
              }}
              >
              {" "}
              {itemIsFavorite ? (
                <BsHeartFill size="1.3em" />
                ) : (
                  <BsHeart size="1.3em" />
                  )}
            </button>

          </div>
          <div
            className="text-center mt-2"
            style={{ fontSize: "24px", fontWeight: "bold" }}
            >
            {props.name}
          </div>
          <p className="" style={{ fontSize: "13px", color: "gray" }}>
            Served with basmati rice or bulgur pilaf, skewered with grilled
            vegetables
          </p>
          <div className="d-flex justify-content-between mt-4">
            <div>Pizza Price</div>
            <div>
              <button
                className="p-1 border-0 rounded"
                style={{ backgroundColor: "#b80624", color: "white" }}
                >
                {props.price}
                
              </button>
            </div>
          </div>
          <div>
            <div className="mt-3">
              <input type="Checkbox" name="" id="" />
              <label htmlFor="">Cheese</label>
            </div>
            <div>
              <input type="Checkbox" name="" id="" />
              <label htmlFor="">Extra Cheese</label>
            </div>
            <div>
              <input type="Checkbox" name="" id="" />
              <label htmlFor="">Double Cheese</label>
            </div>
          </div>
          <div className="my-5 text-center  ">
            <button 
              className="p-2 border-0 rounded text-center"
              style={{
                backgroundColor: "#b80624",
                color: "white",
                width: "300px",
              }}
              onClick={() => handleAddToCart(props)}
              
              >
              {" "} 
              Add to Cart
            </button>
          </div>
        </div>
      </Offcanvas>
      )
    }
      </div>
      );
};

const Foodcard = () => { 
  // const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [curruntItem, setCurruntItem] = useState({});
  console.log("curruntItem==>", curruntItem);

  const handleShow = (food) => {
    console.log("on click", food);
    // setShow((preValue) => !preValue);
    setShow(true);
    setIsShow(true);
    // setIsShow((preValue) => !preValue);
    setCurruntItem(food);
  };
  const handleClose = () => setShow(false);

  const [foodCards, setFoodCards] = useState([]);
  console.log("foodCards==>",foodCards);
  const [loading, setLoading] = useState(true);
  const getCards =  () => {
    fetch(
      "https://restaurant-data-5fe4f-default-rtdb.firebaseio.com/FoodCards.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const foodcards = [];

        for (const key in data) {
          const foodcard = {
            id: key,
            ...data[key],
          };
          foodcards.push(foodcard);
        }
        setLoading(false);
        setFoodCards(foodcards);
      });
  };
  useEffect(() => {
    setLoading(true);
    getCards();
  }, []);

  // const handleAddToCart = (food) => {
  //   console.log("food>>>>", food);
  //    handleCart(dispatch, food) 
  // }
  


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {isShow ? (
          <TestSideBar
            //  item={foodcards} 
            show={show}
            handleClose = {handleClose}
            image={curruntItem.image}
            id={curruntItem.id}
            key={curruntItem.id}
            name={curruntItem.itemName}
            price = {curruntItem.itemPrice}

          />
        ) : null}
        <div
          className="row border-0 rounded "
          style={{ cursor: "pointer" }}
          variant="primary"
        >
          {foodCards.map((food) => {
            return (
              <div
                className="col-lg-4 col-md-4 col-sm-6 "
                key={food.id}
                onClick={() => handleShow(food)}
              >
                <div className="mt-4 mycard">
                  <div className="logosize img-fluid bg-light rounded">
                    {" "}
                    <img
                      className="logosize img-fluid bg-light rounded"
                      src={food.image}
                      alt=""
                      width="400px"
                    />{" "}
                  </div>
                  <div className="d-flex justify-content-between">

                    <div className="mt-3 p-2 foodname" >{food.itemName}</div>
                    <div className="mt-3" style={{color: '#c60021', fontWeight:'700'}}> 
                      <div>
                       { `${food.itemPrice}$`}
                      </div>
                    </div>
                    <div className="mt-3 delivery p-2">Free delivery</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Foodcard;
