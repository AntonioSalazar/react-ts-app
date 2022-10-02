import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"

import logo from '../logo.svg';
import { showActive } from '../helpers/showActive';
import { routes } from "./routes";
import { Suspense } from "react";

const Navigation = () => {
  return (
      <Suspense fallback={<span>cargando</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="" />
                    <ul>
                        {
                            routes.map(({name, to}) => (
                                <li key={name}>
                                    <NavLink to={to} className={showActive}>{name}</NavLink>
                                </li>
                            ))
                        }

                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map(({ name, path, Component }) => (
                            <Route 
                            key={name}
                                path={path} 
                                element={ < Component/> } 
                            />
                            ))
                        }

                    <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}

export default Navigation