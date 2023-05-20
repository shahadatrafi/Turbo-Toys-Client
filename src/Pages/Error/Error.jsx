import React from 'react';
import img404 from '../../assets/404.png'
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Error = () => {

    useTitle('Error!!! - 404 Not Found')

    return (
        <div className='min-h-screen text-center'>
            <img className='w-1/2 mx-auto' src={img404} alt="" />
            
            <div>
            <Link><button className='btn btn-primary text-white'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default Error;