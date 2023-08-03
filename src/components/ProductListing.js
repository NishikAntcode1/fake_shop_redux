import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);



    const dispatch = useDispatch();
    const fetchProducts = async () => {
        await axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            dispatch(setProducts(response.data));
        }).catch((err) => {
            console.log(err)
        });
    }


    useEffect(() => {
      fetchProducts();
    })
    

   
    console.log("Products :", products);

  return (
    <div>
        <div className='text-4xl font-bold m-6'>
        Product listing 
        </div>
        <div className='grid grid-cols-4 justify-items-center  gap-4 '>
            <ProductComponent/>
        </div>
    </div>
  )
}

export default ProductListing
