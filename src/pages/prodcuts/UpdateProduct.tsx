/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateSingleProductMutation } from "@/redux/api/baseApi";
import swal from "sweetalert";
import { useState } from "react";
import { FaPen } from "react-icons/fa";

const UpdateProduct = ({ product }: any) => {
  const [updateProduct, { data, error, isSuccess, isLoading }] =
    useUpdateSingleProductMutation();

  const {
    _id,
    title: ttl,
    image: img,
    brand: brandy,
    quantity: quanti,
    price: pri,
    rating: rati,
    description: desc,
  } = product;

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  console.log({ data, error, isSuccess, isLoading });
  let errorMessage: string | null = null;
  // @ts-expect-error: Unreachable code error
  if (error?.data?.message) {
    // @ts-expect-error: Unreachable code error
    errorMessage = error.data.message;
  }

  console.log({ errorMessage });

  const onSubmit = async (e: any) => {
    e.preventDefault();

    // Clear the input fields
    setTitle("");
    setImage("");
    setBrand("");
    setQuantity("");
    setPrice("");
    setRating("");
    setDescription("");

    const quan = parseFloat(quantity);
    const priceValue = parseFloat(price);
    const rate = parseFloat(rating);
    // const description = e.target.description.value;

    const data = {
      title: title ? title : ttl,
      image: image ? image : img,
      brand: brand ? brand : brandy,
      quantity: quan ? quan : quanti,
      price: priceValue ? priceValue : pri,
      rating: rate ? rate : rati,
      description: description ? description : desc,
    };
    const options = {
      id: _id,
      data,
    };

    // console.log(data);
    // updateProduct(options);

    try {
      const response = await updateProduct(options).unwrap();

      console.log(response);

      if (response?.success === true) {
        swal({
          title: "Product Updated",
          text: "Successfull",
          icon: "success",
          // @ts-expect-error: Unreachable code error
          button: "Done",
        });
      }
    } catch (error) {
      console.error("Failed to update product", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-[#4A249D] p-3 rounded-full">
          <FaPen className="text-white  text-xl" />
        </button>
      </DialogTrigger>
      <div className="flex mx-1 justify-center ">
        {errorMessage && (
          <h2 className="text-center text-base font-medium text-red-600">
            Error:{errorMessage}, Please give valid input
          </h2>
        )}
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            Update Product that you want to Update.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title:
              </Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id="title"
                defaultValue={ttl}
                className="col-span-3"
                name="title"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image Url :
              </Label>
              <Input
                onBlur={(e) => setImage(e.target.value)}
                id="image"
                className="col-span-3"
                name="image"
                defaultValue={img}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="text-right">
                Brand:
              </Label>
              <Input
                onBlur={(e) => setBrand(e.target.value)}
                id="brand"
                className="col-span-3"
                name="brand"
                defaultValue={brandy}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity:
              </Label>
              <Input
                onBlur={(e) => setQuantity(e.target.value)}
                id="quantity"
                className="col-span-3"
                name="quantity"
                defaultValue={quanti}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price:
              </Label>
              <Input
                onBlur={(e) => setPrice(e.target.value)}
                id="price"
                className="col-span-3"
                name="price"
                defaultValue={pri}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating:
              </Label>
              <Input
                onBlur={(e) => setRating(e.target.value)}
                id="rating"
                className="col-span-3"
                name="rating"
                defaultValue={rati}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description:
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
                name="description"
                defaultValue={desc}
              />
            </div>
          </div>

          <div className="flex  justify-end">
            <DialogClose asChild>
              <button
                className="bg-[#736100] px-3 py-2 rounded-md  text-white "
                type="submit"
              >
                Update{" "}
              </button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
