/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetProductsQuery,
  useUpdateQuantitiesMutation,
} from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hooks/hook";
import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const { totalOrderPrice } = useAppSelector((state) => state.cart);
  const cartItems = useAppSelector((state) => state.cart.items);
  const { data: products } = useGetProductsQuery(undefined);
  const [updateQuantity, { isLoading, isError }] =
    useUpdateQuantitiesMutation();

  const navigate = useNavigate();

  console.log(isLoading, isError);

  // const handlePlaceOrder = async () => {
  //   try {
  //     for (const item of cartItems) {
  //       const product = products?.data.find((p: any) => p._id === item._id);
  //       if (product) {
  //         const updatedQuantity = product.quantity - item.cartQuantity;
  //         const options = {
  //           id: product._id,
  //           data: {
  //             quantity: updatedQuantity,
  //           },
  //         };
  //         console.log(options);
  //         await updateQuantity(options);
  //       }
  //     }

  //     navigate("/orderconfirmed");
  //   } catch (error) {
  //     console.error("Error placing order:", error);
  //   }
  // };

  const handlePlaceOrder = async () => {
    try {
      if (isLoading) return;

      const updates = cartItems
        .map((item) => {
          const product = products?.data.find((p: any) => p._id === item._id);
          if (product) {
            return {
              id: product._id,
              quantity: product.quantity - item.cartQuantity,
            };
          }
          return null;
        })
        .filter(Boolean);
      console.log(updates);
      await updateQuantity({ updates });

      swal({
        title: "Order Placed",
        text: "Your order has been placed successfully.",
        icon: "success",
      });

      navigate("/orderconfirmed");
    } catch (error) {
      console.error("Error placing order:", error);
      swal({
        title: "Error",
        text: "There was an error placing your order. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="md:px-12 w-full p-4 mt-12  rounded-md ">
      <div className="md:flex items-start gap-8  ">
        <div className="md:w-1/2  w-full rounded-lg   p-4">
          <div className=" w-full ">
            <div className="flex items-center gap-3">
              <div>
                <FaMapMarkerAlt className="text-[#736100] -mt-4 text-4xl" />
              </div>
              <div>
                <h2 className="text-3xl tracking-widest mb-1 font-bold  ">
                  Deliver Address
                </h2>
                <h2 className=" tracking-widest mb-7  ">
                  We will deliver your order to this address
                </h2>
              </div>
            </div>
            <div className="mt-8">
              <h2>Name*</h2>
              <div className="flex mt-3 justify-center">
                <input
                  name="Enter Name"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                />
              </div>
            </div>
            <div className="mt-5">
              <h2>Email*</h2>
              <div className="flex mt-3 justify-center">
                <input
                  name="Enter Email"
                  type="email"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                />
              </div>
            </div>
            <div className="mt-5">
              <h2>Phone Number*</h2>
              <div className="flex mt-3 justify-center">
                <input
                  name="Enter Phone Number"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                />
              </div>
            </div>
            <div className="mt-5">
              <h2>Delivery Address*</h2>
              <div className="flex mt-3 justify-center">
                <input
                  name="Enter Delivery Address"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                />
              </div>
            </div>
            <div className="mt-5">
              <h2>Payment Method*</h2>
              <div className="flex flex-col mt-2 space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    required
                    value="cashOnDelivery"
                    // checked={true}
                    className="form-radio text-indigo-600"
                  />
                  <span className="text-lg">Cash on Delivery</span>
                </label>
              </div>
            </div>{" "}
            <button
              onClick={handlePlaceOrder}
              className="text-white font-medium text-lg mt-6 mx-auto  px-5 py-2 rounded-lg  bg-[#736100]"
            >
              Place Order{" "}
            </button>
          </div>
        </div>
        <div className="md:w-1/2  w-full rounded-lg  p-4">
          <div className="border md:w-8/12 flex justify-center md:mt-48 items-center border-dashed py-2 mb-4 px-3 mx-auto rounded-md border-[#957c00]">
            <div className=" ">
              <h2 className="rounded-md font-medium text-lg p-2 mb-2 text-center">
                Order Total:{totalOrderPrice.toFixed(2)}
              </h2>
              <h2 className=" rounded-md  p-2 text-base mb-2 text-center">
                Free Shipping on 499 and above. Just <br /> for you.{" "}
                <NavLink to="/products" className={"text-[#957c00]  font-bold"}>
                  View All Products
                </NavLink>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
