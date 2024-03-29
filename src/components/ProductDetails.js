import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { addCart } from '../rtk/cartProduct'

export default function ProductDetails() {
    const {productId} = useParams()
    const [product,setproduct] = useState({})
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const ngv = useNavigate()
    useEffect(()=>{
        const product = async()=>{
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
            const data = await res.json()
            return setproduct(data);
        }
        product()
    },[])
  return (
    <div className='ProductDetails flex items-center flex-col mt-20 p-5'>
        <img width={"200px"} src={product.image}/>
        <h1 className='font-bold p-6 mt-10 text-[30px]'>
            {product.title}
        </h1>
        <h2 className='w-[90%] p-4 text-[25px] mt-5'>
            {product.description}
        </h2>
        <button className='mt-10 bg-blue-500 py-3 px-4 rounded-md font-bold text-white hover:bg-blue-600 duration-100'
        onClick={
            ()=>{
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "The product has been added to the cart",
                    showConfirmButton: true,
                    timer: 1500
                  });
                  dispatch(addCart(product))
                  ngv('/cart')
            }
        }
        >Add to Cart</button>
    </div>
  )
}
