import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {

    const [allProducts, setAllProducts] = useState([]);


    const dispatch = useDispatch();


    useEffect(() => {
      fetchProducts();
    }, [])
    

    const fetchProducts = async () => {
        await axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            dispatch(setProducts(response.data));
            setAllProducts(response.data);
        }).catch((err) => {
            console.log(err)
        });
    }

  return (
    <div>
        <div className='text-4xl font-bold m-6'>
        Product listing 
        </div>
        <div className='grid grid-cols-4 justify-items-center  gap-4 '>
            {
                allProducts.map((index, value) => {
                    return (
                        <ProductComponent key={index}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProductListing
