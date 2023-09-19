import { useLoaderData } from "react-router-dom";


const MealDetails = () => {
    const mealDetails = useLoaderData().meals[0]
    const{strArea, strCategory, strInstructions, strMeal,strMealThumb } = mealDetails
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={strMealThumb} className="h-80" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p className="font-bold">category: {strCategory}</p>
          <p>{strInstructions}</p>
          <p>Origin: {strArea}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default MealDetails;