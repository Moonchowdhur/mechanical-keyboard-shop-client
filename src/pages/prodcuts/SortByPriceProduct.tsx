/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const SortByPriceProduct = ({ onSortChange }: any) => {
  const [sortPrice, setSortPrice] = useState("priceLowToHigh");

  const handleSortChange = (value: any) => {
    setSortPrice(value);
    onSortChange(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="border md:w-2/12 px-4 py-2 mt-3 rounded-lg hover:bg-[#4A249D] hover:text-white border-[#4A249D] text-lg font-medium ">
          Sort By Price
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Price</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={sortPrice}
          onValueChange={handleSortChange}
        >
          <DropdownMenuRadioItem value="priceHighToLow">
            High To Low
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="priceLowToHigh">
            Low To High
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortByPriceProduct;
