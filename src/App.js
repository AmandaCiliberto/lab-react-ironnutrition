import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import { v4 as randomId } from 'uuid';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodform';

function App() {
  const [allFoods, setFoods] = useState(foods);
  const [foodData, setFoodData] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFoodsData = [...foodData, newFood];
    const updatedAllFoods = [...allFoods, newFood];

    setFoods(updatedAllFoods);
    setFoodData(updatedFoodsData);
  }

  return (
    <div className={'App' + allFoods}>
      <h1>Food List</h1>
      <div>
        <AddFoodForm addFoodForm={addNewFood} />
      </div>
      <div>
        {allFoods.map((item) => {
          return <FoodBox key={item.name} food={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
