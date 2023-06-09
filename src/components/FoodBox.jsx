// Your code here

// export default function FoodBox({ food, onDelete }) {
//   return (
//     <div>
//       <div>
//         <p>{food.name}</p>

//         <img style={{ width: "200px" }} src={food.image} />

//         <p>{food.calories}</p>
//         <p>{food.servings}</p>

//         <p>
//           <b>Total Calories: {food.servings * food.calories}</b> kcal
//         </p>

//         <button onClick={()=> onDelete(food.id)}>Delete</button>
//       </div>{" "}
//     </div>
//   );
// }

import {Row, Col, Card, Button } from "antd";

function FoodBox({food, onDelete}) {
  return (
    <div>
      <div>
<Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories} * {food.servings}</b> kcal
        </p>
        <Button type="primary" onClick={() => {onDelete(food.id)}}> Delete </Button>
      </Card>
    </Col>

      </div>

    </div>
    
    
  );
}

export default FoodBox;
