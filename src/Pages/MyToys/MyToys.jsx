import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
    const { user } = useContext(AuthContext);

    useTitle('My Toys')

    const [myToys, setMyToys] = useState([]);
    const [asc, setAsc] = useState(true);

    useEffect(() => {
        fetch(`https://turbo-toys-server.vercel.app/toys?email=${user.email}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [asc]);



    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://turbo-toys-server.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = myToys.filter(toy => toy._id !== id)
                        setMyToys(remaining);
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })
            }
        })


    };


    return (
        <div>
            <div className='text-center'>
                <h1 className="text-5xl font-bold my-8">My Toys Here </h1>
            </div>
            {/* sorting */}
            <div className=" text-right mb-6">
                <button
                    className="btn btn-primary text-white"
                    onClick={() => setAsc(!asc)}
                >{asc ? 'Price: High to Low' : 'Price: Low to High'}</button>
            </div>
            {/* sorting */}
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
                            <th>Edit Toy</th>
                            <th>Delete Toy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map(myToy => (
                            <MyToysRow
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;