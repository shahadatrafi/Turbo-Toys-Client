import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AllToysRow from "../AllToys/AllToys/AllToysRow";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    const { user } = useContext(AuthContext)
    
    const [myToys, setMyToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, []);
    

    return (
        <div>
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
                            <MyToysRow key={myToy._id} myToy={myToy} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;