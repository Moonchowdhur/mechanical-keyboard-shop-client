/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import MaInLayout from "./components/layout/MaInLayout";

const App = () => {
  // prevent cart data
  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      // Cancel the event
      event.preventDefault();
      // Chrome requires returnValue to be set
      event.returnValue = "";

      // Show SweetAlert
      swal({
        title: "Are you sure?",
        text: "You may lose your cart data if you reload the page.",
        icon: "warning",
        buttons: ["Cancel", "Reload Anyway"],
        dangerMode: true,
      }).then((willReload) => {
        if (willReload) {
          // User clicked "Reload Anyway", allow reload
          window.location.reload();
        }
      });
      return "";
    };
    // Attach event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <MaInLayout />
    </div>
  );
};

export default App;
