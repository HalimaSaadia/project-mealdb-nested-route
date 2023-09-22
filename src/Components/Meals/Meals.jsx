// import { useLoaderData } from "react-router-dom";
// import Meal from "../Meal/Meal";
import { Outlet } from "react-router-dom";
import CategoryAlphabet from "../CategoryAlphabet/CategoryAlphabet";

const Meals = () => {
    // const meals = useLoaderData().meals
    return (
        <div className="">
            <h1 className="text-4xl">Meals you want</h1>
            {/* <h2 className="text-2xl">There are {meals.length} Item in our Restaurant</h2> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-10">
                {meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)}
            </div> */}
            <Outlet />
            <CategoryAlphabet />
        </div>
    );
};

export default Meals;