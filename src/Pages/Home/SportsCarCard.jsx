import React from 'react';
import { Link } from 'react-router-dom';

const SportsCarCard = ({ sportsCar }) => {

    const { _id, name, pictureUrl, price, rating, } = sportsCar;

    return (
        <div className="card w-96 glass shadow-lg hover:shadow-2xl duration-500">
            <figure><img className='h-[250px] w-full' src={pictureUrl} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='font-semibold '>Price: <span className='text-primary'>${price}</span></p>
                <p className='font-semibold '>Rating: <span className='text-primary'>{rating}</span></p>
                <div className="card-actions justify-end">
                    <Link><button className="btn btn-primary text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SportsCarCard;