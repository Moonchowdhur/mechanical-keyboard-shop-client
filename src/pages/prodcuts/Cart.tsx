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

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const { totalOrderPrice } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleProceedCheckout = () => {
    // Check stock availability
    const outOfStockItems = cartItems.filter((item) => item.quantity <= 0);

    if (outOfStockItems.length > 0) {
      // if any item is out of stock

      swal({
        title: "Out of Stock",
        text: "One or more items in your cart are out of stock.",
        icon: "error",
      });
    } else {
      // Navigate to the checkout page if all items are in stock
      navigate("/checkout");
    }
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
            className="text-white text-lg font-medium mx-auto rounded px-3 py-2  bg-[#736100]"
          >
            Proceed To Checkout{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
