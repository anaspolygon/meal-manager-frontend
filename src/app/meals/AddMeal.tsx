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
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { createMeal } from "./actions/create-meal";
import { redirect } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AddMealProps {
  isOpen: boolean;
  users: User[];
  onClose: () => void;
  onOpenChange: () => void;
}

const AddMeal = ({ isOpen, users, onClose, onOpenChange }: AddMealProps) => {
  const [breakfast, setBreakfast] = useState(0);
  const [lunch, setLunch] = useState(0);
  const [dinner, setDinner] = useState(0);
  const [userId, setUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
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

  const onChange = (value: number) => {
    setUserId(value);
  };

  const resetAll = () => {
    setBreakfast(0);
    setLunch(0);
    setDinner(0);
    setUserId(null);
  };

  const handleSubmit = async () => {
    if (!userId) {
      toast.error("Please select a user");
      return;
    }
    setLoading(true);
    const payload = {
      breakfast_count: breakfast,
      lunch_count: lunch,
      dinner_count: dinner,
      total: breakfast + lunch + dinner,
      userId: userId,
    };
    const res = await createMeal(payload);
    if (res.ok) {
      console.log(res);
      toast.success("Meal entry created successfully");
      resetAll();
      setLoading(false);
      onClose();
      redirect("/meals");
    } else {
      toast.error(res.message || "Failed to create meal entry",{ duration: 2000 });
      setLoading(false);
      onClose();
      resetAll();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={() => {
        onOpenChange();
        resetAll();
      }}
    >
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
                  defaultValue={null}
                  className="w-full !h-10 "
                  placeholder="Select a member"
                  optionFilterProp="label"
                  onChange={onChange}
                  options={users.map((user) => ({
                    label: user.name,
                    value: user.id,
                  }))}
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
                onPress={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <Oval color="white" width={16} height={16} strokeWidth={3} />
                ) : (
                  "Submit"
                )}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddMeal;
