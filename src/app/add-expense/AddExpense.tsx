"use client";

import { Button } from "@heroui/react";
import { Select, DatePicker, Modal } from "antd";
import type { DatePickerProps } from "antd";
import { Plus } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import AddMeal from "../meals/AddMeal";
import { addExpense } from "./actions/add-expense";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AddExpenseProps {
  users: User[];
}

const AddExpense = ({ users }: AddExpenseProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<string | null>(null);

  const onUserChange = (value: string) => {
    setUserId(value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString as string);
  };

  const handleSubmit = async () => {
    console.log("Submitting with:", { userId });
    if (!userId) {
      toast.error("Please select a user");
      return;
    }
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (date === null) {
      toast.error("Please select a date");
      return;
    }
    setLoading(true);
    const payload = {
      bazar_cost: amount,
      bazar_date: date,
      userId: Number(userId),
    };
    const res = await addExpense(payload);
    if (res.ok) {
      console.log(res);
      toast.success("Meal entry created successfully");

      setLoading(false);
    } else {
      toast.error(res.message || "Failed to create meal entry", {
        duration: 2000,
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        className="bg-[#343A40] text-white text-base font-inter font-medium rounded-[10px]"
        onPress={showModal}
      >
        <Plus size={18} />
        Add Meal Entry
      </Button>

      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="font-inter font-medium text-base text-[#344054] mb-2">
              Select User
            </h2>
            <Select
              showSearch
              className="w-full !h-10"
              placeholder="Select a member"
              optionFilterProp="label"
              onChange={onUserChange}
              options={users.map((user) => ({
                label: user.name,
                value: user.id,
              }))}
            />
          </div>
          <div>
            <h2 className="font-inter font-medium text-base text-[#344054] mb-2">
              Select Bazar Date
            </h2>
            <DatePicker onChange={onDateChange} className="w-full !h-10" />
          </div>
          <div>
            <h2 className="font-inter font-medium text-base text-[#344054] mb-2">
              Amount
            </h2>
            <input
              className="font-inter w-full py-2.5 px-3.5 bg-[#F3F3F5] border border-[#D0D5DD] rounded-lg focus:outline-0 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0"
              type="number"
              min={0}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="Enter amount"
            />
          </div>
        </div>

        <div className="w-full  flex  mt-4 gap-2">
          <Button
            className="flex-1 text-base font-inter font-medium"
            color="danger"
            variant="light"
            onPress={handleCancel}
          >
            Close
          </Button>

          <Button
            className="flex-1 bg-[#343A40] text-white text-base font-inter font-medium rounded-[10px]"
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
        </div>
      </Modal>
    </div>
  );
};

export default AddExpense;
