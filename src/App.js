import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import { v4 as randomId } from 'uuid';
import FoodBox from './components/FoodBox';

function App() {
  const [allFoods, setFoods] = useState(foods);

  return (
    <div className={'App' + allFoods}>
      <h1>Food List</h1>
      <div>
        {allFoods.map((item) => {
          return <FoodBox key={item.name} food={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
