import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SingleToy = () => {

    const toy = useLoaderData();

    useTitle('Toy Details')

    const { _id, pictureUrl, name, subcategory, price, rating, quantity, description, seller, sellerEmail } = toy

    return (
        <div>
            <h1 className="text-5xl my-8 text-center font-bold">Shop </h1>
            <div className="hero my-14">
            
            <div className="hero-content flex-col lg:flex-row gap-16">
                <div className='max-w-xl'>
                    <img className='w-full rounded-2xl' src={pictureUrl} />
                </div>
                <div>
                    <h1 className="text-4xl font-bold">{name}</h1>
                    <p className='font-semibold py-4 text-xl'>Rating: <span className='text-primary'>{rating}</span></p>
                    <div className="divider"></div>
                    <p className='font-semibold py-2 text-xl'>Price: <span className='text-primary'>${price}</span></p>
                    <p className='font-semibold py-2 text-xl'>Quantity In Stock: <span className='text-primary '>{quantity}</span></p>
                    <p className="py-6 "><span className='font-semibold'>Description:</span> {description}</p>

                    {seller && <div className='flex justify-between gap-10'>
                    <p className='py-2'><span className='font-semibold'>Seller:</span> <span >{seller}</span></p>
                    <p className='py-2'><span className='font-semibold'>Seller Email:</span> <span >{sellerEmail}</span></p>
                    </div>}

                </div>
            </div>
        </div>
        </div>
    );
};

export default SingleToy;