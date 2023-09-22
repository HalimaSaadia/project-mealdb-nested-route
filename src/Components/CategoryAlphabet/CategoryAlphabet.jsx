import { NavLink } from "react-router-dom";
import './categoryAlphabets.css'

const CategoryAlphabet = () => {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="flex gap-7 p-5 w-full bg-amber-600 justify-center flex-wrap">
      {alphabets.map((alphabet, idx) => (
        <NavLink to={`/meals/mealsbyname/${alphabet}`} className="text-lg text-white" key={idx}>
          {alphabet}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryAlphabet;
