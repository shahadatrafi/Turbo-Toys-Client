import React from 'react';

const AllToysRow = ({ toy }) => {

    const { _id, name, subcategory, price, quantity, seller } = toy;

    return (
        <tr>
            <th><div className="font-bold">{seller}</div></th>
            <td>
                <div>
                    <div className="font-bold">{ name}</div>
                </div>
            </td>
            <td>
                <p>{ subcategory}</p>
            </td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default AllToysRow;