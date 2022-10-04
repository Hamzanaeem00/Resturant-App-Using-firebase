import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Drawer.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "../../allpages/homes/Home";
import Orders from "../../allpages/Orders/Order";
import Explore from "../../allpages/Explore/Explore";
import Favorite from "../../allpages/Favorites/Favorite";
// import { useState } from 'react';
import Pickup from "../../allpages/Pickup/Pickup";
import { BiCurrentLocation, BiShoppingBag } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import { HiHome } from "react-icons/hi";
import { BiBookmarkHeart } from "react-icons/bi";
import logo from "../../images/logo.png";
import { FiTrello } from "react-icons/fi";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Resturantdetail from "../../allpages/ResturantDetails/Resturantdetail";
import Admin from "../../allpages/Admins/Admin";
import MyCart from "../../allpages/mycart/MyCart";
import { Container } from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux'
import { cartQuantity } from "../../redux/reducers/cartSystem";
 

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const getCartQuantity=useSelector((state)=> state.cart.value);
  console.log("getCartQuantity",getCartQuantity);
  
  const dispatch = useDispatch();
  const favoritesCtx = useContext(FavoritesContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    
  };

  const drawer = (
    <div className="sidebar">
      <Toolbar className="drawerHeader">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img
            src={logo}
            className="logosize img-fluid"
            width="45px"
            alt="logo"
          />
        </Typography>
      </Toolbar>

      <Divider />
      <List>
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="my-3 mx-3 side-btn d-flex dashboard-btn  d-flex p-2">
            <div className="mx-1 ">
              <HiHome size="1.2em" />
            </div>
            <div className="w-100  dashboard-btn3  p-1 ">HOME</div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/explore">
          <div className="my-3 mx-3 side-btn d-flex dashboard-btn  d-flex p-2">
            <div className="mx-1 ">
              <FiTrello size="1.2em" />
            </div>
            <div className="w-100  dashboard-btn3  p-1 ">Explore</div>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/favorites">
          <div className="my-3 mx-3 side-btn d-flex dashboard-btn  d-flex p-2">
            <div className="mx-1 ">
              <BiBookmarkHeart size="1.2em" />
            </div>
            <div className="w-100  dashboard-btn3  p-1 ">Favorites</div>
            <span className=" mt-1 mx-4 badge">
              {favoritesCtx.totalFavorites}
            </span>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/orders">
          <div className="my-3 mx-3 side-btn d-flex dashboard-btn  d-flex p-2">
            <div className="mx-1 ">
              <BsFillCreditCard2FrontFill size="1.2em" />
            </div>
            <div className="w-100  dashboard-btn3  p-1 ">Orders</div>
          </div>
        </Link>

      </List>
      <Divider />
      <List>
      <Link style={{ textDecoration: "none" }} to="/admins">
          <div className="my-3 mx-3 side-btn d-flex dashboard-btn  d-flex p-2">
            <div className="mx-1 ">
              <FaUserCog size="1.2em" />
            </div>
            <div className="w-100  dashboard-btn3  p-1 ">Admin</div>
          </div>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar 
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
      
        <Toolbar style={{ backgroundColor: "#fff", color: "black", width:'100%'}}>
            
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            >
            <MenuIcon />
          </IconButton>
              <Container>
          <div className="d-flex justify-content-between">
            <div className="d-flex  justify-content-between">
              <div
                className="d-flex  justify-content-between"
                style={{ cursor: "pointer", color: "gray" }}
                >
                <div>
                  <BiCurrentLocation />
                </div>
                <div className=""  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="of />fcanvasRight">Location</div>

              </div>
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/pickup"
              >
                <div className="mx-3">
                  <BiShoppingBag
                    className="mx-1"
                    style={{ color: "#CE2642" }}
                  />
                  Pickup
                </div>
              </Link>
              <div
                className="mx-3 d-flex  justify-content-between "
                style={{ cursor: "pointer", color: "gray" }}
              >
                <div>
                  <HiOutlineCurrencyDollar
                    style={{ color: "#FFC107", fontSize: "20px" }}
                  />
                </div>
                <div>Best Deals</div>
              </div>
            </div>
           

            <div className="d-flex justify-content-between ">
              <div>
                <input
                  type="Search"
                  placeholder="search for..."
                  className="border rounded p-1 "
                  style={{ backgroundColor: "#f6f6f8", width: "300px" }}
                />
              </div>
              <div
                className="border rounded p-1"
                style={{ backgroundColor: "#CE2642" }}
              >
                <AiOutlineSearch style={{ color: "white", fontSize: "20px" }} />
              </div>
            </div>
            <div
              className="border rounded p-1 mx-1"
              style={{ backgroundColor: "#CE2642" }}
            >
              <IoFilterSharp style={{ color: "white", fontSize: "20px" }} />
            </div>
            <Link
            style={{ textDecoration: "none", color: "gray" }}
             to="/cart">
            <div
              className="border rounded p-1"
              style={{ backgroundColor: "#CE2642" }}
            >
              <BiShoppingBag style={{ color: "white", fontSize: "20px" }} />
              <span className=" badgecart">{getCartQuantity}</span>
            </div>
            
            </Link>
          </div>
        </Container>
        </Toolbar>
        
      </AppBar> 
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        
        <Toolbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/favorites">
            <Favorite />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/pickup">
            <Pickup />
          </Route>
          <Route path='/resturantdetail'>
            <Resturantdetail />
          </Route>
          <Route path='/admins'>
            <Admin />
            </Route>
            <Route>
            <MyCart />
            </Route>
        </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
