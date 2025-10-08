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
interface AddMealProps {
  isOpen: boolean;
  onOpenChange: () => void;
}
const AddMeal = ({ isOpen, onOpenChange }: AddMealProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-inter font-medium text-lg">
              Add Meal Entry
            </ModalHeader>
            <ModalBody></ModalBody>
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