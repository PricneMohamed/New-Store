import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../rtk/productSlice";
import { addCart } from "../rtk/cartProduct";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function () {
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  return (
    <div className="productDiv w-[100%] flex justify-evenly flex-wrap mt-20">
      {product.map((ele) => {
        return (
          <div
            className="relative mb-10 flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
            key={ele.id}
          >
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Link to={ele.id}>
                <img
                  width={"200px"}
                  className="m-auto"
                  src={ele.image}
                  alt="card-image"
                />
              </Link>
            </div>
            <div className="p-6">
              <Link
                to={ele.id}
                className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
              >
                {ele.title}
              </Link>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {ele.description.slice(0, 200)} ...
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                onClick={() => {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "The Product Has Been Added To The Cart",
                    showConfirmButton: true,
                    timer: 1500,
                  });
                }}
              >
                Add To Cart
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
