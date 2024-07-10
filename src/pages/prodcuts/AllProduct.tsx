/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import SortByPriceProduct from "./SortByPriceProduct";
import FilterByPriceProduct from "./FilterByPriceProduct";
import { useState } from "react";

const AllProduct = () => {
  const [filterPrice, setFilterPrice] = useState("");
  const [sort, setSort] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm, sort, filterPrice);

  const filters = {
    searchTerm,
    sort,
    // priceRange: filterPrice,
  };
  const { data, isLoading } = useGetProductsQuery(filters);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#4A249D]"></div>
      </div>
    );
  }

  console.log(data);

  return (
    <div className="md:px-12 w-full p-4 mt-12 rounded-md ">
      {/* search item */}
      <div className=" pb-10  flex justify-end ">
        <div className="flex rounded-2xl p-1 w-3/12 items-center bg-[#dbd3eb]  border-[#4A249D]">
          {!searchTerm && <FaSearch className="text-xl mt-1" />}
          <Input
            type="text"
            placeholder="Search here "
            className="font-medium text-lg bg-transparent border-0  outline-none focus:ring-0 "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {/* title */}
      {data?.data.length > 0 && (
        <h2 className="text-3xl mb-2 font-medium tracking-widest text-center ">
          KEY<span className="text-[#4A249D]">BO</span>ARDS
        </h2>
      )}
      {/* filter */}
      <div className="border px-4 justify-between border-[#4A249D] md:flex border-l-0 border-r-0 mt-6 bg-[#ede9f5] pb-6">
        <div className="w-9/12 flex items-center gap-5">
          <button
            className="border px-4 py-2 mt-3 rounded-lg hover:bg-[#4A249D] hover:text-white border-[#4A249D] text-lg font-medium "
            onClick={() => {
              setFilterPrice("");
              setSort("");
              setSearchTerm("");
            }}
          >
            Reset
          </button>
          <SortByPriceProduct onSortChange={setSort} />
          <FilterByPriceProduct onFilterChange={setFilterPrice} />
        </div>
        <h2 className="mt-6 mx-4 font-medium text-lg">
          {data?.data.length} Products found
        </h2>
      </div>
      {data?.data.length > 0 ? (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5  justify-between items-center mt-16 rounded-lg">
          {/* card */}

          {data?.data.length > 0 &&
            data?.data.map((product: any) => {
              return (
                <div
                  key={product._id}
                  className="border-gray-200  bg-[#dbd3eb]  border p-4 rounded-lg"
                >
                  <Badge className="relative hover:text-white left-80 top-8 text-lg m-2 rounded-full text-black bg-[#F0D133]  ">
                    ${product?.price}
                  </Badge>
                  <img
                    src={product?.image}
                    className="h-[400px] w-[500px] rounded-xl mb-4"
                    alt=""
                  />

                  <div className="flex p-1 mb-2 items-center justify-between text-[#34196e]">
                    <h2 className="text-center font-medium text-xl">
                      {product?.brand}
                    </h2>
                    <div className="flex items-center gap-1">
                      {/* @ts-expect-error: Type issue with Rating component */}
                      <Rating
                        initialRating={product?.rating}
                        emptySymbol={<FaStar className="text-gray-300 " />}
                        fullSymbol={<FaStar className="text-[#34196e]" />}
                        fractions={2}
                        readonly
                      />
                    </div>
                  </div>
                  <h2 className=" mb-1 text-[#34196e] font-normal text-left text-lg">
                    {product?.title}
                  </h2>
                  <div className="flex items-center justify-between">
                    <h2 className="text-[#34196e] font-normal text-left text-lg">
                      Quantity:
                      <span className="text-[#34196e] font-medium">
                        {" "}
                        {product?.quantity}
                      </span>
                    </h2>
                    <NavLink
                      to={`/product/${product?._id}`}
                      className="bg-[#F0D133]  hover:text-white hover:bg-[#4A249D] text-lg  font-medium px-3 py-2 rounded-lg"
                    >
                      Details
                    </NavLink>
                  </div>
                </div>
              );
            })}
          {/* card end */}
        </div>
      ) : (
        <h2 className="text-3xl mb-2 font-medium text-center mt-16  ">
          No Product Found
        </h2>
      )}
    </div>
  );
};

export default AllProduct;
