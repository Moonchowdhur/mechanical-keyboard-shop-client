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
import swal from "sweetalert";
import { Label } from "@/components/ui/label";
import { useAddProductMutation } from "@/redux/api/baseApi";
import { useState } from "react";

const AddProduct = () => {
  const [addProduct, { data, error, isSuccess, isLoading }] =
    useAddProductMutation();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  console.log({ data, error, isSuccess, isLoading });

  const onSubmit = (e: any) => {
    e.preventDefault();

    const quan = parseFloat(quantity);
    const priceValue = parseFloat(price);
    const rate = parseFloat(rating);
    // const description = e.target.description.value;

    const data = {
      title,
      image,
      brand,
      quantity: quan,
      price: priceValue,
      rating: rate,
      description,
    };

    console.log(data);
    addProduct(data);
    if (data) {
      swal({
        title: "Product added!",
        text: "Successfull",
        icon: "success",
        // @ts-expect-error: Unreachable code error
        button: "Done",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-[#736100] text-white px-3 py-2 rounded-lg text-xl font-semibold">
          Add todo
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Add Product that you want to add.
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
              />
            </div>
          </div>

          <div className="flex  justify-end">
            <DialogClose asChild>
              <button
                className="bg-[#736100] px-3 py-2 rounded-md  text-white "
                type="submit"
              >
                Save{" "}
              </button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
