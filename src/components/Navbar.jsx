import { Link, Outlet } from "react-router-dom"

export default function Navbar(){
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/weather">Check Weather</Link>
            </nav>
            
            
            
        </div>
    )
}