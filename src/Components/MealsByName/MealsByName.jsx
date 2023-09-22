import { useLoaderData } from "react-router-dom";
import MealByName from "../MealByName/MealByName";
import CategoryAlphabet from "../CategoryAlphabet/CategoryAlphabet";

const MealsByName = () => {
  const searchMeals = useLoaderData().meals;
  return (
    <div>
      <h1 className="text-4xl">Your Search Result</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10">
        {searchMeals.map((meal) => (
          <MealByName key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default MealsByName;
