
import axios from 'axios';
import React from 'react';
import { Container} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://powerful-reaches-05315.herokuapp.com/packages', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Package added successfully')
                    reset()
                }
            })
    };

    return (
        <div className="add-package py-5">
            <Container className="d-flex justify-content-center align-items-center">

                <div>
                    <h3>Add a package here</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100" type="text" {...register("key", { required: true })} placeholder="key" /> <br />
                        <input className="w-100" {...register("name", { required: true })} placeholder="Package Name" /> <br />
                        <textarea className="w-100" {...register("description", { required: true })} placeholder="Description About Place" /> <br />
                        <input className="w-100" type="number" {...register("price")} placeholder="Package Price" /> <br />
                        <input className="w-100" {...register("img")} placeholder="Image Url" /> <br />
                        <input className="w-100 btn-danger border-0 rounded-1" type="submit" value="Add a Package" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default AddPackage;
