import { MinusIcon, PlusIcon } from "lucide-react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";

interface AddMealFieldProps {
  title: string;
  mealType: string;
  value: number;
  handleIncrement: (mealType: string) => void;
  handleDecrement: (mealType: string) => void;
}

const AddMealField = ({
  title,
  mealType,
  value,
  handleIncrement,
  handleDecrement,
}: AddMealFieldProps) => {
  return (
    <div>
      <h2 className="font-inter font-medium text-base text-[#344054] mb-4">
        {title}
      </h2>

      <div className="flex items-center gap-4">
        <button
          onClick={() => handleDecrement(mealType)}
          className="w-10 h-10  bg-[#DC3545] rounded-lg flex items-center justify-center cursor-pointer"
        >
          <MinusIcon color="white" />
        </button>
        <input
          className="font-inter flex-1 py-2.5 px-3.5 bg-[#F3F3F5] border border-[#D0D5DD] rounded-lg focus:outline-0 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0"
          type="number"
          min={0}
          value={value}
          placeholder="Enter Number"
        />
        <button
          onClick={() => handleIncrement(mealType)}
          className="w-10 h-10  bg-[#198754] rounded-lg flex items-center justify-center cursor-pointer"
        >
          <PlusIcon color="white" />
        </button>
      </div>
    </div>
  );
};

export default AddMealField;
