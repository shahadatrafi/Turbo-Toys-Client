import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import { useState } from 'react';
import useTitle from "../../../hooks/useTitle";


const AllToys = () => {

    useTitle('All Toys');

    const toys = useLoaderData();
    const [searchValue, setSearchValue] = useState('');
    const filteredToys = toys.filter(toy =>
        toy.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div>
            <div className='text-center'>
                <h1 className="text-5xl font-bold my-8">All Toys Here </h1>
            </div>
            <div className="text-right my-4">
            <input className="input input-bordered w-full max-w-xs"
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
            </div>
            <div className="overflow-x-auto w-full">
                
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredToys.map(toy => (
                            <AllToysRow key={toy._id} toy={toy} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;