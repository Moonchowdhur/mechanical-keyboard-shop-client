/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCard from "./ProductCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddProduct from "./prodcuts/AddProduct";

type TProduct = {
  _id: string;
  image: string;
  title: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  description: string;
};

const ProductManagement = () => {
  const { data: products, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#4A249D]"></div>
      </div>
    );
  }

  console.log(products);

  return (
    <div className="md:px-12 w-full p-4 mt-28 md:mt-12 rounded-md ">
      <div className="flex justify-between mb-5">
        <AddProduct />
      </div>
      <div className="bg-[#dbd3eb]  w-full h-full space-y-3 rounded-xl p-[5px] ">
        <div className="bg-white rounded-md p-4  space-y-3  w-full h-full ">
          <Table className="">
            <TableHeader>
              <TableRow className="rounded-lg">
                <TableHead className="bg-[#dbd3eb] text-lg w-3/12  text-center">
                  Name
                </TableHead>
                <TableHead className="bg-[#dbd3eb] text-lg w-3/12 text-center">
                  Image
                </TableHead>
                <TableHead className="bg-[#dbd3eb] text-lg w-3/12 text-center">
                  Brand
                </TableHead>
                <TableHead className="bg-[#dbd3eb] text-lg w-3/12 text-center">
                  Price
                </TableHead>
                <TableHead className="bg-[#dbd3eb] text-lg w-3/12 text-center">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.data.length > 0 ? (
                products?.data?.map((product: TProduct) => (
                  <ProductCard product={product} />
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md"
                  >
                    <p>There is no product</p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
