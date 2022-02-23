import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);
  const handleSetImage = (e) => setImage(e.target.value);
  const handleSetCalories = (e) => setCalories(e.target.value);
  const handleSetServings = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    console.log('Submitted: ', newFood);
    props.addFoodForm(newFood); // <== ADD

    // Reset the state
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleSetImage} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleSetCalories} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleSetServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
