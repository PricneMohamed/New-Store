import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart, updateCountCard } from "../rtk/cartProduct";
import Swal from "sweetalert2";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.title = "Cart";
  }, []);

  useEffect(()=>{
    Swal.fire({
      title: "تحذير",
      text: "قد لا تظهر المنتجات التي اخترتها في العربة لأنه لم يتم اضافة قاعدة بيانات",
      icon: "warning"
    });  })
  const total = cart.reduce((acc, product) => {
    return (acc += product.price * product.count);
  }, 0);

  const cartOne = cart.map((ele) => {
    return ele.count;
  });
  return (
    <div className="Cart flex items-center flex-col mt-10 lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-bold">
      <h1>Your Cart</h1>
      <hr className="border-2 border-black w-[50%] m-2" />

      <div className="relative w-[100%] mt-20 p-3 overflow-x-auto">
        <h1 className="p-4">Total:$ {total.toFixed(2)}</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3">
                category
              </th>
              <th scope="col" className="px-6 py-3">
                Count
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                option
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((ele) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={ele.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {ele.title}
                  </th>
                  <td className="px-6 py-4">
                    {ele.description.slice(0, 50)}...
                  </td>
                  <td className="px-6 py-4">{ele.category}</td>
                  <td className="px-6 py-4">{ele.count}</td>
                  <td className="px-6 py-4">$ {ele.price}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        const swalWithBootstrapButtons = Swal.mixin({
                          customClass: {
                            confirmButton: "btn btn-success",
                            cancelButton: "btn btn-danger",
                          },
                          buttonsStyling: true,
                        });
                        swalWithBootstrapButtons
                          .fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonText: "Yes, delete it!",
                            cancelButtonText: "No, cancel!",
                            reverseButtons: true,
                          })
                          .then((result) => {
                            if (result.isConfirmed) {
                              swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                              });
                              dispatch(removeCart(ele));
                            } else if (
                              /* Read more about handling dismissals below */
                              result.dismiss === Swal.DismissReason.cancel
                            ) {
                              swalWithBootstrapButtons.fire({
                                title: "Cancelled",
                                text: "Your imaginary file is safe :)",
                                icon: "error",
                              });
                            }
                          });
                      }}
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>

                    <button
                      type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Confirmation
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
