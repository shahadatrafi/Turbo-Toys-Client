import React from 'react';
import { FaGithub, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
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
                        <div className="text-center">
                            <button className="btn btn-outline mx-4"><FaGoogle className='text-xl mr-2'></FaGoogle>Google</button>
                            <button className="btn btn-outline mx-4"><FaFacebookF className='text-xl mr-2'></FaFacebookF> Facebook</button>
                            <button className="btn btn-outline mx-4"><FaGithub className='text-xl mr-2'></FaGithub>Github</button>
                        </div>
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