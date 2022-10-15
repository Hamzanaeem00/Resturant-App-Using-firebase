import React, { useEffect } from 'react'
import './App.css';
import './index.css'
import Drawer from './components/Drawers/Drawer';
import { calculateTotals } from './redux/reducers/cartSystem';
import { useDispatch, useSelector } from 'react-redux';

function App() {
 const {cart} =  useSelector((state)=> state.cart.cart);
 const dispatch = useDispatch(); 

  useEffect(()=>{
    dispatch(calculateTotals())
  },[cart]);
  return (
    <div className="App">
   < Drawer />
    </div>
  );
}

export default App;
