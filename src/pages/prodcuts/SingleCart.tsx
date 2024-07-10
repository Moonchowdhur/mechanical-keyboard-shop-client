/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableCell, TableRow } from "@/components/ui/table";
import { RiDeleteBack2Fill } from "react-icons/ri";
import swal from "sweetalert";

import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks/hook";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/features/todoSlice";

export type TTodoCartProps = {
  cart: {
    _id: string;
    image: string;
    title: string;
    brand: string;
    quantity: number;
    price: number;
    rating: number;
    description: string;
    cartQuantity: number;
  };
};

const SingleCart = ({ cart }: TTodoCartProps) => {
  console.log(cart);
  const dispatch = useAppDispatch();

  const handleDelete = (cartId: string) => {
    swal({
      title: "Remove from cart",
      //   text: "Once deleted, you will not be able to recover this product data!",
      icon: "warning",
      // @ts-expect-error: Unreachable code error
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeFromCart(cartId));
        swal("Product has been deleted from cart!", {
          icon: "success",
        });
      } else {
        swal("Product is safe!");
      }
    });
  };

  const handleIncrease = (cartId: string) => {
    dispatch(incrementQuantity(cartId));
  };

  const handleDecrease = (cartId: string) => {
    dispatch(decrementQuantity(cartId));
  };

  return (
    <TableRow key={cart._id}>
      <div className="flex justify-center">
        <TableCell className="text-center text-base">
          <img
            src={cart.image}
            alt={cart.title}
            className="w-24 h-30 object-cover rounded-2xl"
          />
        </TableCell>
      </div>
      <TableCell className="text-center text-base">{cart.title}</TableCell>

      <TableCell className="text-center text-base">
        {cart.cartQuantity}
      </TableCell>

      <TableCell className="text-center text-base">${cart.price}</TableCell>
      <TableCell className="text-center text-base">
        <div className="px-2 py-1 rounded-md flex items-center w-full  border border-[#4A249D]">
          <FaPlusCircle
            onClick={() => handleIncrease(cart?._id)}
            className="text-[#4A249D] mx-1 text-xl"
          />
          <div className="text-[#4A249D]  text-3xl">|</div>
          <FaMinusCircle
            onClick={() => handleDecrease(cart?._id)}
            className="text-[#4A249D] mx-1  text-xl"
          />
        </div>
      </TableCell>

      <TableCell className="text-center   text-base">
        <button
          onClick={() => handleDelete(cart?._id)}
          className="bg-red-600 p-3 rounded-full"
        >
          <RiDeleteBack2Fill className="text-white  text-lg" />
        </button>

        <button></button>
      </TableCell>
    </TableRow>
  );
};

export default SingleCart;
