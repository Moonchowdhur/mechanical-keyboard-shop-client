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
import { IoIosArrowDropdown } from "react-icons/io";

const FilterByPriceProduct = ({ onFilterChange }: any) => {
  const [filterPrice, setFilterPrice] = useState("");

  const handleFilterChange = (value: any) => {
    setFilterPrice(value);
    onFilterChange(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-1 items-center  mt-3 mx-3 w-2/12">
          <button className="text-[#4A249D] hover:bg-[#4A249D] hover:text-white text-center border px-3 py-2 font-medium rounded-lg border-[#4A249D] flex items-center justify-center gap-1  text-lg   ">
            <div className="flex items-center gap-2">
              <h2 className=" text-lg  ">Filter By Price</h2>
              <IoIosArrowDropdown className="text-[#4A249D] text-2xl hover:bg-[#4A249D] hover:text-white font-medium" />
            </div>
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Price</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={filterPrice}
          onValueChange={handleFilterChange}
        >
          <DropdownMenuRadioItem value="10-100">$10-$100</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="100-500">
            $100-$500
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="500-1000">
            $500-$1000
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterByPriceProduct;
