import React from 'react'
import { useHistory } from 'react-router-dom';
import AddFoodsForm from '../../forms/addfooditems/AddFoodsForm'

const Admin = () => {
 const history = useHistory();

 
    function addFoodCard(FooditemData){
        
      fetch('https://restaurant-data-5fe4f-default-rtdb.firebaseio.com/FoodCards.json',
        {
            method: 'POST',
            body: JSON.stringify(FooditemData),
            headers: {
                    'Content-Type': 'application/json'
                  }
        }
        ).then(()=> {
            history.replace('/')
        });

    }

    
  return (
    <div>
      <AddFoodsForm  onAddFoods ={addFoodCard}/>
    </div>
  )
}

export default Admin
