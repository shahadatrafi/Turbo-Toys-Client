import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    useTitle('Login');
    
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const { userLogin } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser)
                navigate(from, {replace: true})
            })
            .catch(err => console.error(err.message))
        
    };

    return (
        <div className='min-h-screen py-8'>
            <h1 className="text-5xl font-bold text-center pb-2">Welcome to Turbo Login!</h1>
            <p className="py-6 text-xl text-center pb-8">Please enter your credentials to access your Turbo collection.</p>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/2 lg:text-left">
                        <h1 className="text-2xl font-semibold text-center">You can choose your preferred method to sign in</h1>
                        <p className="py-6 text-xl text-center">Please click a button to access your Turbo collection.</p>
                        <SocialLogin></SocialLogin>
                        <p className='pt-12 text-center'>New user? <Link to='/sign-up' className='text-primary font-bold'>Sign Up</Link> to create an account.</p>
                    </div>
                    <div className="divider divider-horizontal">OR</div>
                    <div className="card flex-shrink-0 w-1/2 max-w-md shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" required name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" required name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;