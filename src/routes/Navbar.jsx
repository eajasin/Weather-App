import {Link, Outlet} from 'react-router-dom'

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
        <div>
        <Link to="/todo">Add to Todo List</Link>
        </div>
        <div>
        <Link to="/expense">Track Expenses</Link>
        </div>
        <Outlet />
        </nav>
    </div>
    )
}
