/* eslint-disable @typescript-eslint/no-explicit-any */
import swal from "sweetalert";
import { useEffect } from "react";
import MaInLayout from "./components/layout/MaInLayout";
import { useAppSelector } from "./redux/hooks/hook";

const App = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      if (cartItems.length > 0) {
        event.preventDefault();
        event.returnValue = ""; // Chrome requires returnValue to be set
        swal({
          title: "Are you sure?",
          text: "You have items in your cart. Are you sure you want to leave?",
          icon: "warning",
          buttons: ["Cancel", "Reload"],
          dangerMode: true,
        }).then((willLeave) => {
          if (willLeave) {
            swal("Your cart items is blank, please add!", {
              icon: "success",
            }).then(() => {
              window.removeEventListener("beforeunload", handleBeforeUnload);
              window.location.reload(); // Proceed with reload
            });
          } else {
            swal("Your cart items are safe!");
          }
        });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);

  return (
    <div>
      <MaInLayout />
    </div>
  );
};

export default App;
