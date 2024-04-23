import { Link, Outlet } from "react-router-dom"

export default function Navbar(){
    return (
        <div>
            <nav>
                <div>
                <Link to="/">Home</Link>
                </div>
                <div>
                <Link to="/weather">Check Weather</Link>
                </div>
                <Outlet />
            </nav>
            
            
            
        </div>
    )
}