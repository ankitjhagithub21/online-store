import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { orderNow } from '../redux/slices/cartSlice'

const Cart = () => {
  const items = useSelector((state) => state.cart.cart)
  const totalPrice = items.reduce((total, item) => total + item.price * item.qty, 0);
  const dispatch = useDispatch()
  return (
    <section className='py-12 min-h-screen px-5'>
      <h2 className='text-center text-3xl mb-5 font-bold text-gray-800'>Cart Items</h2>
      {
        items.length == 0 ? <p className='text-center text-xl font-medium'>Your Cart is empty.</p> : <div className="flex flex-wrap text-center   ">
          <div className="w-full">

            <div className="flex flex-wrap">
              {
                items.map((item) => {
                  return <CartItem key={item.id} item={item} />
                })
              }

            </div>
          </div>
          <div className=" md:w-1/2  w-full mx-auto mt-10">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-2xl text-gray-900 mb-4">Cart Summary</h2>
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg">Total Items:</span>
                <span className="text-lg">{items.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">Total Price:</span>
                <span className="text-lg">$ {totalPrice.toFixed(2)}</span>
              </div>
              <button className="mt-6 py-2 px-4 text-white bg-green-500 rounded hover:bg-green-600" onClick={()=>dispatch(orderNow())}>
                ORDER NOW
              </button>

            </div>
          </div>
        </div>
      }

    </section>
  )
}

export default Cart