"use client";
import { Button, useDisclosure } from "@heroui/react";
import { Plus } from "lucide-react";
import AddMeal from "./AddMeal";

const Meals = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <Button
        className="bg-[#343A40] text-white text-base font-inter font-medium rounded-[10px]"
        onPress={onOpen}
      >
        <Plus size={18} />
        Add Member
      </Button>
      <AddMeal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default Meals;
