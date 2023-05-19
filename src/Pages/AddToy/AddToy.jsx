import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {

    const { user } = useContext(AuthContext);

    const handleAddToy = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const seller = user?.displayName
        const sellerEmail = user?.email
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const pictureUrl = form.pictureUrl.value;
        const description = form.description.value;

        const newToy = {
            name,
            subcategory,
            seller,
            sellerEmail,
            price,
            quantity,
            rating,
            pictureUrl,
            description,
        };

        console.log(newToy)


        fetch(`http://localhost:5000/toys`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You Added the Toy!',
                        'success'
                    )
                };
            });


    };

    return (
        <div>
            <h1 className="text-5xl text-center my-8 font-bold">Add Your Toy</h1>
            <div className="card-body max-w-5xl mx-auto">
                <form onSubmit={handleAddToy}>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input
                            name="pictureUrl"
                            type="text"
                            placeholder="Picture URL"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-1/2">
                            <label className="label font-semibold">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Toy Name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label font-semibold">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <input
                                name="subcategory"
                                type="text"
                                placeholder="Sub-category"
                                className="input input-bordered"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-1/3">
                            <label className="label font-semibold">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                name="price"
                                type="text"
                                placeholder="Price"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label font-semibold">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                name="rating"
                                type="text"
                                placeholder="Rating"
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
                                placeholder="Available Quantity"
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
                            placeholder="Description"
                            className="textarea textarea-bordered h-32"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary text-white" type="submit" value="Add Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;
