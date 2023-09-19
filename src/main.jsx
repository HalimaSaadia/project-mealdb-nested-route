import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Meals from './Components/Meals/Meals.jsx'
import Contact from './Components/Contact/Contact.jsx'
import MealDetails from './Components/MealDetails/MealDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "meals",
        element: <Meals />,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      },
      {
        path: "contacts",
        element: <Contact />
        
      },
      {
        path: "meal/:mealId",
        element: <MealDetails />,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
