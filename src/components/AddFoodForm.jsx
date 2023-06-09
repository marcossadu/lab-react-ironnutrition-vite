import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';

// Your code here

export default function AddFoodForm({onCreateFood}) {
  const [name, setName]= useState("");
  const[ image, setImage]=useState("")
  const[calories, setCalories]=useState(21)
  const[servings, setServings]=useState(2)

  const handleSubmit = (event) => {
event.preventDefault();
        
    const newFood = {
        name: name,
        image: image,
        calories: calories,
        servings: servings,
        id: uuidv4()
    }

    onCreateFood(newFood)
}
  
  return <div>
    <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit} > 
<label >
  Name
  <input type="text" name="name" maxLength={50} value={name} onChange={(e)=> setName(e.target.value)} required></input>
 </label>
<label > Image
  <input type="url" name="image" maxLength={50} value={image} onChange={(e)=> setImage(e.target.value)} required></input> 
</label>
<label > Calories
  <input type="number" name="calories" min={0} max={10000} value={calories} onChange={(e)=> setCalories(e.target.value)} required></input> 
  </label>
<label>
  servings
<input type="number" name="servings"min={1} max={1000} value={servings} onChange={(e)=> setServings(e.target.value)} required></input> 
</label>

<button onClick={() => {
       
      }}>Create</button>
</form>
  </div>;

}