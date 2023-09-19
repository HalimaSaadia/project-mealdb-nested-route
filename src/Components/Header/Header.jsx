
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <nav className="space-x-5 bg-amber-500 py-5 text-white text-center">
            <NavLink to="/" className="text-lg">Home</NavLink>
            <NavLink to="meals" className="text-lg">Meals</NavLink>
            <NavLink to="contacts" className="text-lg">Contact</NavLink>
        </nav>
    );
};

export default Header;