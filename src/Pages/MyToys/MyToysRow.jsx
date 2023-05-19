import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({myToy}) => {

    const { _id, name, subcategory, price, quantity, seller, pictureUrl } = myToy;

    return (
        <tr>
            <th><div className="font-semibold">{seller}</div></th>
            <td>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded mr-4">
                            <img className='w-full' src={pictureUrl} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <div className="font-semibold">{name}</div>
                </div>
            </td>
            <td>
                <p>{subcategory}</p>
            </td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`${_id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToysRow;