import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from '../../hooks/useTitle';

const UpdateToy = () => {

    useTitle('Update Toy')

    const { user } = useContext(AuthContext);
    const toy = useLoaderData();

    const { rating, _id, price, quantity, description } = toy;


    const handleUpdateToy = e => {
        e.preventDefault();
        const form = e.target;
        
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = {
            price,
            quantity,
            description,
        };

        console.log(updatedToy)


        fetch(`https://turbo-toys-server.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire(
                        'Good job!',
                        'You Updated the Toy!',
                        'success'
                    )
                };
            });


    };

    return (
        <div>
            <h1 className="text-5xl text-center my-8 font-bold">Update Your Toy</h1>
            <div className="card-body max-w-5xl mx-auto">
                <form onSubmit={handleUpdateToy}>
                    
                    
                    <div className="flex gap-4">
                        <div className="form-control w-1/3">
                            <label className="label font-semibold">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                name="price"
                                type="text"
                                placeholder={price}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label font-semibold">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                readOnly
                                name="rating"
                                type="text"
                                placeholder={rating}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label font-semibold">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                name="quantity"
                                type="text"
                                placeholder={quantity}
                                className="input input-bordered"
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className="label-text">Detail description</span>
                        </label>
                        <textarea
                            name="description"
                            placeholder={description}
                            className="textarea textarea-bordered h-32"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary text-white" type="submit" value="Update Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;