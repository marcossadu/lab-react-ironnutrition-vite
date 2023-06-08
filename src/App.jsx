import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
// import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState([...foodsJson]);

  const handleDelete = (id) => {
    const result = foods.filter((f) => f.id !== id);

    setFoods(result);
  };
  return (
    <div className="App">
      {/* <AddFoodForm></AddFoodForm> */}

      {foods.map((f) => (
        <FoodBox key={f.id} food={f} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
