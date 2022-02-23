import './App.css';
import { useImperativeHandle, useState } from 'react';
import foods from './foods.json';
import { v4 as randomId } from 'uuid';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodform';
import Search from './components/Search';

function App() {
  const [foodData, setFoodData] = useState(foods);
  const [filteredFoods, setFilteredFoods] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFoodsData = [...foodData, newFood];

    setFilteredFoods(updatedFoodsData);
    setFoodData(updatedFoodsData);
  };

  const searchFood = (str) => {
    console.log(str);
    //create a new array by filtering the original array
    let filteredFood;
    //if no input then return the original array
    if (str === '') {
      filteredFood = foodData;
    }
    //Return the item which contains the user input
    else {
      filteredFood = filteredFoods.filter((food) => {
        return food.name.toLowerCase().includes(str.toLowerCase());
      });
    }
    setFilteredFoods(filteredFood);
  };

  const deleteFood = (food) => {
   let foodCopy = [...filteredFoods];

   const deleteFood = foodCopy.filter((item) => {
     return item.name !== food.name;
   })
   setFilteredFoods(deleteFood);
  }

  return (
    <div className={'App'}>
      <div>
        <h2>Search</h2>
        <Search search={searchFood} />
      </div>
      <h1>Food List</h1>
      <div>
        <AddFoodForm addFoodForm={addNewFood} />
      </div>
      <div>
        {filteredFoods.map((item) => {
          return (
            <FoodBox
              key={Math.random()}
              food={item}
              deleteBtn={deleteFood}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
