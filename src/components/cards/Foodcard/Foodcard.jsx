import React, { useEffect, useState } from "react";
import { useContext } from "react";
import FavoritesContext from '../../../store/favorites-context';
import "./foodcard.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsHeartFill, BsHeart } from "react-icons/bs";

export const TestSideBar = (props) => {
  console.log("props >>>", props);

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
  return (
    <div>
      <Offcanvas 
        show={props.show}
        onHide={props.handleClose}
        {...props}
        placement={"end"}
        
      >
        <Offcanvas.Header closeButton >
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
            <div>Pizza Choice</div>
            <div>
              <button
                className="p-1 border-0 rounded"
                style={{ backgroundColor: "#b80624", color: "white" }}
              >
                Required
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
            >
              {" "}
              ADD($15.00)
            </button>
          </div>
        </div>
      </Offcanvas>
    </div>
  );
};
 const Foodcard = (props) => {
  const [show, setShow] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [curruntItem, setCurruntItem] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (food) => {
    console.log("on click", food);
    // setShow(true);
    setShow((preValue) => !preValue);
    setIsShow((preValue) => !preValue);
    setCurruntItem(food);
  };

  const [foodcards, setFoodCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCards = () => {
    fetch(
      "https://react-restaurant-database-default-rtdb.firebaseio.com/FoodCards.json"
    )
      // const  data = await response.json(())
      // console.log(data)
      // setFoodCards(await response.json());
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
      // data-bs-toggle="offcanvas"
      // data-bs-target="#offcanvasRight"
      // aria-controls="offcanvasRight"
      >
        {isShow ? (
          <TestSideBar 
          //  item={foodcards} 
            show={show}
            image={curruntItem.image}
            id ={curruntItem.id}
            key={curruntItem.id}
            name={curruntItem.itemName}
          />
        ) : null}
        <div
          className="row border-0 rounded "
          style={{ cursor: "pointer" }}
          variant="primary"
        >
          {foodcards.map((food) => {
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
