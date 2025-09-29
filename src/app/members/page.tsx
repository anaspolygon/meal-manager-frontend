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
import { Plus } from "lucide-react";
import Table from "@/components/layout/Table";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const columns = [
    { header: "ID", key: "id" },
    { header: "Name", key: "name" },
    { header: "Age", key: "age" },
    { header: "Action", key: "actions" },
  ];

  const users = [
    { id: 1, name: "Sajid", age: 22 },
    { id: 2, name: "Anas", age: 24 },
    { id: 3, name: "Rafiq", age: 28 },
  ];

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    // resolver: zodResolver(userSchema),
    defaultValues: {
      name: "xyz",
      email: "",
      age: undefined,
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[28px] font-inter font-medium">Members List</h2>
        <Button
          className="bg-[#343A40] text-white text-base font-inter font-medium rounded-[10px]"
          onPress={onOpen}
        >
          <Plus size={18} />
          Add Member
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-inter font-medium text-lg">
                Add Member
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm text-[#344054] font-inter font-medium"
                    htmlFor=""
                  >
                    First name
                  </label>
                  <input
                    className="border border-[#D0D5DD] focus:outline-0 px-3.5 py-2 rounded-lg"
                    // name="name"
                    type="text"
                    {...register("name")}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm text-[#344054] font-inter font-medium"
                    htmlFor=""
                  >
                    Last name
                  </label>
                  <input
                    className="border border-[#D0D5DD] focus:outline-0 px-3.5 py-2 rounded-lg"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm text-[#344054] font-inter font-medium"
                    htmlFor=""
                  >
                    Mobile
                  </label>
                  <input
                    className="border border-[#D0D5DD] focus:outline-0 px-3.5 py-2 rounded-lg"
                    name="mobile"
                    type="number"
                    min={0}
                  />
                </div>

                <RadioGroup label="Select your favorite city">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </RadioGroup>

                <DatePicker />
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
      <Table columns={columns} data={users} />
    </>
  );
};

export default Page;
