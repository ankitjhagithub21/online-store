import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({ product }) => {
    const navigate = useNavigate()
    return (

        <div className="xl:w-1/4 md:w-1/2 p-4 w-full cursor-pointer" onClick={() => navigate(`/products/${product.id}`)}>
            <div className="p-2 bg-gray-100 rounded-lg shadow-md">
                <div className='bg-white rounded-lg'>
                    <img
                        className="h-52 rounded w-full object-contain object-center"
                        src={product.image}
                        alt="content"
                    />
                </div>

              

            </div>
        </div>
    )
}

export default Product