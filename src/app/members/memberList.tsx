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
import toast from "react-hot-toast";
import { auth } from "@/api/ApiClient";
import { addMember } from "./actions/add-member";
import { redirect } from "next/navigation";
import { Oval } from "react-loader-spinner";

interface MemberListProps {
  users: {
    id: number;
    email: string;
  }[];
}

const MemberList = ({ users }: MemberListProps) => {
  const columns = [
    { header: "ID", key: "id" },
    { header: "Name", key: "name" },
    { header: "Email", key: "email" },
    { header: "Action", key: "actions" },
  ];

  const { isOpen, onOpen, onOpenChange, } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Handle form submission logic here
    if (!name || !email) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    const payload = {
      name,
      email,
      password: "defaultPassword123", // Default password
    };

    const res = await addMember(payload);

    if (res.ok) {
      console.log(res);
      toast.success("Meal entry created successfully");

      setLoading(false);
      onOpenChange()
      redirect("/members");
    } else {
      toast.error(res.message || "Failed to create meal entry", {
        duration: 2000,
      });
      onOpenChange()
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[28px] font-inter font-medium">
          Total Members ({users.length})
        </h2>
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
                    Name
                  </label>
                  <input
                    className="border border-[#D0D5DD] focus:outline-0 px-3.5 py-2 rounded-lg"
                    name="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm text-[#344054] font-inter font-medium"
                    htmlFor=""
                  >
                    Email
                  </label>
                  <input
                    className="border border-[#D0D5DD] focus:outline-0 px-3.5 py-2 rounded-lg"
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
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
                >
                  {loading ? (
                    <Oval
                      color="white"
                      width={16}
                      height={16}
                      strokeWidth={3}
                    />
                  ) : (
                    "Submit"
                  )}
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

export default MemberList;
