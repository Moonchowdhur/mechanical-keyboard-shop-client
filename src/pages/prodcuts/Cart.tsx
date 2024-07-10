/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "@/redux/hooks/hook";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SingleCart from "./SingleCart";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const { data: products, isLoading } = useGetProductsQuery(undefined);
  const { totalOrderPrice } = useAppSelector((state) => state.cart);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;

    // Check stock availability
    const outOfStockItems = cartItems.filter((cartItem) => {
      const product = products.data.find(
        (item: any) => item._id === cartItem._id
      );
      return product ? cartItem.quantity > product.quantity : true;
    });

    setIsButtonDisabled(outOfStockItems.length > 0);
  }, [cartItems, products, isLoading]);

  const handleProceedCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="md:px-12 w-full p-4 mt-12  rounded-md ">
      <div>
        {cartItems.length > 0 && (
          <h2 className="text-3xl tracking-widest mb-7 font-bold text-center">
            My Bag <span className="text-[#4A249D]"> </span>
          </h2>
        )}

        {cartItems?.length > 0 ? (
          <div className="bg-[#dbd3eb]  w-full h-full space-y-3 rounded-xl p-[5px] ">
            <div className="bg-white rounded-md p-4  space-y-3  w-full h-full ">
              <Table className="">
                <TableHeader>
                  <TableRow className="rounded-lg">
                    <TableHead className="bg-[#dbd3eb] text-lg w-3/12 text-center">
                      Image
                    </TableHead>
                    <TableHead className="bg-[#dbd3eb] text-lg w-3/12  text-center">
                      Title
                    </TableHead>
                    <TableHead className="bg-[#dbd3eb] text-lg w-3/12 text-center">
                      Qty
                    </TableHead>
                    <TableHead className="bg-[#dbd3eb] text-lg w-3/12 text-center">
                      Price
                    </TableHead>
                    <TableHead className="bg-[#dbd3eb] text-lg w-3/12 text-center">
                      Actions
                    </TableHead>
                    <TableHead className="bg-[#dbd3eb] text-lg w-3/12 text-center"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems?.length > 0 &&
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    cartItems?.map((cart: any) => <SingleCart cart={cart} />)}
                </TableBody>
              </Table>
            </div>
            <div>
              <h2 className=" text-end mx-12 text-lg font-medium">
                Total Price: ${totalOrderPrice.toFixed(2)}
              </h2>
            </div>
          </div>
        ) : (
          <h2 className="text-3xl text-[#4A249D] mb-7 font-bold text-center">
            There is no cart items.
          </h2>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="text-end mx-auto mt-4">
          <button
            onClick={handleProceedCheckout}
            className={`text-white text-lg font-medium mx-auto rounded px-3 py-2 bg-[#736100] ${
              isButtonDisabled
                ? "opacity-50 bg-gray-300 cursor-not-allowed"
                : ""
            }`}
            disabled={isButtonDisabled ? true : false}
          >
            Proceed To Checkout{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
