import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions';
import axios from 'axios';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { image, title, description, category, price } = product

    const { productId } = useParams();
    console.log(productId)
    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => {
            console.log(response)
            dispatch(selectedProduct(response.data));
        }).catch((err) => {
            
        });
    }

    useEffect(() => {
        if(productId && productId !== " ")
        {
            fetchProductDetails();
        }
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])
    

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
        {
            Object.keys(product).length === 0 ? (<div>Loading....</div>) : (
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{title}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{category}</h1>
                        
                        <p className="leading-relaxed">{description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <div className="flex">
                            <span className="mr-3">Color</span>
                            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                            <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none" />
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">$ {price}</span>
                            <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add To Cart</button>
                        </div>
                        </div>
                    </div>
                </div>
            )
        }
    
  </section>
  )
}

export default ProductDetails
