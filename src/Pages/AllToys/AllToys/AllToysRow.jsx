import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ toy }) => {

    const { _id, name, subcategory, price, quantity, seller } = toy;

    return (
        <tr>
            <th><div className="font-semibold">{seller}</div></th>
            <td>
                <div>
                    <div className="font-semibold">{ name}</div>
                </div>
            </td>
            <td>
                <p>{ subcategory}</p>
            </td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`${_id}`}><button className="btn btn-ghost btn-xs">Details</button></Link>
            </th>
        </tr>
    );
};

export default AllToysRow;