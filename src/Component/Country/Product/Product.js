import React from 'react';
import Realmodal from '../Realmodal/Realmodal';


const Product = (props) => {
    // const [catagory,description,image,price]=props.product;
    console.log(props.product);
    return (
        <div className='col-md-4'>
           <div className='card p-3'>
               <img className='w-50 m-auto' src={props.product.image} alt="" />
               <h3>Catagory: {props.product.catagory}</h3>
               <div className="d-flex justify-content-evenly">
                   <button className='btn btn-success'>Add to cart</button>
                   <button className='btn btn-primary'>Delete</button>
                <Realmodal></Realmodal>
               </div>
           </div>
        </div>
    )
  
};

export default Product;