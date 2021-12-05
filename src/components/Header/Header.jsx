import {Link} from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div className="header-list">
            <Link to="/">Main Page</Link>
            <br/>
            <Link to="/about">About Page</Link>
            <br/>
            <Link to="/welcome">Welcome Page</Link>
        </div>
    )
}

export default Header