"use client";
import { Button, useDisclosure } from "@heroui/react";
import { Plus } from "lucide-react";
import AddMeal from "./AddMeal";

interface User {
  id: string;
  name: string;
  email: string;
}

interface MealsProps {
  users: User[];
}

const Meals = ({ users }: MealsProps) => {
  const { isOpen, onOpen, onOpenChange ,onClose } = useDisclosure();
  return (
    <div>
      <Button
        className="bg-[#343A40] text-white text-base font-inter font-medium rounded-[10px]"
        onPress={onOpen}
      >
        <Plus size={18} />
        Add Meal Entry
      </Button>
      <AddMeal isOpen={isOpen} users={users} onClose={onClose} onOpenChange={onOpenChange} />
    </div>
  );
};

export default Meals;
