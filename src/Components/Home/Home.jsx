import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";


export default function Home() {
  const navigation = useNavigation()
  return (
    <div>
        <Header />
        <h1 className="text-4xl text-center py-5 font-bold">The Meal DB</h1>
        {navigation.state === 'loading'? <Loader /> :  <div className="min-h-screen"><Outlet /></div> }
      
        <Footer />
    </div>
  )
}
