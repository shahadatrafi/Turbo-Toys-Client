import { Link } from "react-router-dom";
import logo from '../../assets/turbo toys.png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {

    const {user, userLogOut} = useContext(AuthContext)

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
            console.log('user successfully logged out')
            })
        .catch(err => console.error(err.message))
    }

    const navigation =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link>All Toys</Link></li>
            <li><Link>My Toys</Link></li>
            <li><Link>Add A Toy</Link></li>
            <li><Link>Blogs</Link></li>

        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {navigation}
                    </ul>
                </div>

                <Link to='/'>
                    <div className="avatar">
                        <div className="w-28 rounded-full mr-4">
                            <img src={logo} />
                        </div>
                    </div>

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navigation}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.uid ?
                    <Link><button onClick={handleLogOut} className="btn btn-primary text-white hover:text-gray-200 ">Log Out</button></Link>:
                    <Link to='/login'><a className="btn btn-primary text-white hover:text-gray-200 ">Login</a></Link>
                }
            </div>
        </div>
    );
};

export default Header;