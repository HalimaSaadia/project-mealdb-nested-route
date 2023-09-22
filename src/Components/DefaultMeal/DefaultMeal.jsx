import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const DefaultMeal = () => {
  const meals = useLoaderData().meals;
  console.log(meals)
  return (
    <>
      <h2 className="text-2xl">
        These are Default meal {meals.length} 
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-10">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
};

export default DefaultMeal;
