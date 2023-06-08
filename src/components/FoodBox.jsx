// Your code here

export default function FoodBox({ food, onDelete }) {
  return (
    <div>
      <div>
        <p>{food.name}</p>

        <img style={{ width: "200px" }} src={food.image} />

        <p>{food.calories}</p>
        <p>{food.servings}</p>

        <p>
          <b>Total Calories: {food.servings * food.calories}</b> kcal
        </p>

        <button onClick={()=> onDelete(food.id)}>Delete</button>
      </div>{" "}
    </div>
  );
}
