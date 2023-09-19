import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
    const {strMealThumb, strMeal, idMeal} = meal

    const navigate = useNavigate()
    const handleMealDetails = () => {
        navigate(`/meal/${idMeal}`)
    }
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={strMealThumb}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>
        <div className="card-actions justify-end">
          <button onClick={handleMealDetails} className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
