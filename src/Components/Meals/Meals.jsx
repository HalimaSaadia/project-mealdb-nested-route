import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
    const meals = useLoaderData().meals
    console.log(meals)
    return (
        <div className="p-5 md:p-10">
            <h1 className="text-4xl">Meals you want</h1>
            <h2 className="text-2xl">There are {meals.length} Item in our Restaurant</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)}
            </div>
        </div>
    );
};

export default Meals;