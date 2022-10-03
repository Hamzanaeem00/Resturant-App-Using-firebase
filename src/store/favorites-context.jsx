import { createContext,useState } from "react"
import React from 'react'


const FavoritesContext = createContext({
    favorites :[],
    totalFavorites :0,
    addFavorite: (favoriteItem) => {},
    removeFavorite: (itemId) => {},
    itemIsFavorite: (itemId) => {}
});

export function FavoritesContextProvider(props) {
    const [itemFavorites, setItemFavorites]= useState([]);
    function addFavoriteHandler(favoriteItem){
        setItemFavorites((prevItemFavorites) => {
            return prevItemFavorites.concat(favoriteItem)
        });
    }
    function removeFavoriteHandler(itemId){
        setItemFavorites((prevItemFavorites =>{
            return prevItemFavorites.filter(item => item.id !== itemId);
        }))

    }

    function itemIsFavoriteHandler(itemId){
        return itemFavorites.find(item => item.id === itemId)
    }
    const Context ={
        favorites: itemFavorites,
        totalFavorites: itemFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }
 
    return <FavoritesContext.Provider value={Context}>
        {props.children}
    </FavoritesContext.Provider>
}
export default FavoritesContext;