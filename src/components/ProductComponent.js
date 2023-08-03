import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const { id, title, description, image, price, category } = product;
        return (
            <div className="py-10">
                <Link to={`product/${id}`}>
                    <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                        <div className='overflow-hidden object-contain justify-items-center'>
                        <img className="w-full" src={image} alt="Sunset in the mountains" /></div>
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>
                                {title}
                            </div>
                            <p className="text-gray-700 text-sm">
                            {description}
                            </p>
                        </div>
                        <div className='grid grid-flow-col gap-5 pb-2 px-6'>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$ {price}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{category}</span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

  return (
    <>{renderList}</>
  )
}

export default ProductComponent
