import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


export default function Home() {
  return (
    <div>
        <Header />
        <h1 className="text-4xl text-center py-5 font-bold">The Meal DB</h1>
        <Outlet />
        <Footer />
    </div>
  )
}
