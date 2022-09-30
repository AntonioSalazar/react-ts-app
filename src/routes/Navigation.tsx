import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"

import logo from '../logo.svg';
import { showActive } from '../helpers/showActive';

const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="" />
                <ul>
                    <li>
                        <NavLink to="/" className={showActive}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={showActive}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={showActive} >Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/about" element={ <h1>About Page</h1> } />
                <Route path="/users" element={ <h1>Users Page</h1> } />
                <Route path="/" element={ <h1>Home Page</h1> } />
                <Route path="/*" element={ <Navigate to="/" replace /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Navigation