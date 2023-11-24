import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import { useLogout } from '../features/authentication/useLogout';

const Navbar = () => {

    const { isLoading, user } = useUser();

    const { logout } = useLogout();

    return (
        <nav className="p-4 bg-slate-950 h-16">
            <div className="container flex items-center justify-between mx-auto text-zinc-200 lg:pl-24 lg:pr-24">
                <div className="text-xl font-bold">
                    <NavLink to={user ? "dashboard" : "/"}>Cards Against Universe</NavLink>
                </div>

                {!user ?
                    <ul className="flex space-x-4">
                        <NavLink to="/login" className="font-semibold transition duration-300 hover:font-bold">
                            Login
                        </NavLink>
                        <NavLink to="/register" className="font-semibold transition duration-300 hover:font-bold">
                            Register
                        </NavLink>
                    </ul>
                    :
                    <button onClick={logout} className="font-semibold transition duration-300 hover:font-bold">
                        Logout
                    </button>
                }
            </div>
        </nav>
    );
};

export default Navbar;
