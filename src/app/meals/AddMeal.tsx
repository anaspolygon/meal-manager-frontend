"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  DatePicker,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@heroui/react";
import AddMealField from "./AddMealField";
import { useState } from "react";
import { Select } from "antd";
interface AddMealProps {
  isOpen: boolean;
  onOpenChange: () => void;
}
const AddMeal = ({ isOpen, onOpenChange }: AddMealProps) => {
  const [breakfast, setBreakfast] = useState(0);
  const [lunch, setLunch] = useState(1);
  const [dinner, setDinner] = useState(2);
  const handleIncrement = (mealType: string) => {
    if (mealType === "breakfast") {
      setBreakfast(breakfast + 1);
    }
    if (mealType === "lunch") {
      setLunch(lunch + 1);
    }
    if (mealType === "dinner") {
      setDinner(dinner + 1);
    }
  };
  const handleDecrement = (mealType: string) => {
    if (mealType === "breakfast" && breakfast > 0) {
      setBreakfast(breakfast - 1);
    }
    if (mealType === "lunch" && lunch > 0) {
      setLunch(lunch - 1);
    }
    if (mealType === "dinner" && dinner > 0) {
      setDinner(dinner - 1);
    }
  };

  const options = [
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "tom",
      label: "Tom",
    },
  ];
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-inter font-medium text-lg">
              Add Meal Entry
            </ModalHeader>
            <ModalBody>
              <div onClick={(e) => e.stopPropagation()}>
                <Select
                  showSearch
                  className="w-full !h-10 "
                  placeholder="Select a person"
                  optionFilterProp="label"
                  onChange={onChange}
                  onSearch={onSearch}
                  options={options}
                  getPopupContainer={(triggerNode) => triggerNode.parentNode}
                />
              </div>
              <AddMealField
                title="Breakfast"
                mealType="breakfast"
                value={breakfast}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
              <AddMealField
                title="Lunch"
                mealType="lunch"
                value={lunch}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
              <AddMealField
                title="Dinner"
                mealType="dinner"
                value={dinner}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                className="flex-1 text-base font-inter font-medium"
                color="danger"
                variant="light"
                onPress={onClose}
              >
                Close
              </Button>
              <Button
                className="flex-1 bg-[#343A40] text-white text-base font-inter font-medium rounded-[10px"
                color="primary"
                onPress={onClose}
              >
                Submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddMeal;
