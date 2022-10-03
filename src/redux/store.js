
import { configureStore } from '@reduxjs/toolkit'
import cartSystem from './reducers/cartSystem'

export  const store = configureStore({

  reducer: {
    cart: cartSystem,
    
  }
})