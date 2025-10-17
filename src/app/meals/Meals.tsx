"use client";
import { Button, useDisclosure } from "@heroui/react";
import { Plus } from "lucide-react";
import AddMeal from "./AddMeal";
import Table from "@/components/layout/Table";
import { MealEntry } from "./Types";

interface User {
  id: string;
  name: string;
  email: string;
}

interface MealsProps {
  users: User[];
  meals:MealEntry[];
}

const Meals = ({ users ,meals}: MealsProps) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const columns = [
    { header: "ID", key: "id" },
    { header: "Name", key: "name" },
    { header: "Breakfast", key: "breakfast_count" },
    { header: "Lunch", key: "lunch_count" },
    { header: "Dinner", key: "dinner_count" },
    { header: "Total", key: "total" },
  ];
  return (
    <div>
      <Button
        className="bg-[#343A40] text-white text-base font-inter font-medium rounded-[10px]"
        onPress={onOpen}
      >
        <Plus size={18} />
        Add Meal Entry
      </Button>
       <div className="mb-5">
          <AddMeal
        isOpen={isOpen}
        users={users}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
       </div>
       <Table columns={columns} data={meals} />
    </div>
  );
};

export default Meals;
