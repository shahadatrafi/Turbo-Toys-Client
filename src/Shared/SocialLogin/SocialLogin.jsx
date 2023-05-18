import React, { useContext } from 'react';
import { FaGithub, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';


const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
            console.log(res.user)
            })
            .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className="text-center">
            <button onClick={handleGoogleSignIn} className="btn btn-outline mx-4"><FaGoogle className='text-xl mr-2'></FaGoogle>Google</button>
            <button className="btn btn-outline mx-4"><FaFacebookF className='text-xl mr-2'></FaFacebookF> Facebook</button>
            <button className="btn btn-outline mx-4"><FaGithub className='text-xl mr-2'></FaGithub>Github</button>
        </div>
    );
};

export default SocialLogin;