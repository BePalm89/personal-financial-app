import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { TextComponent } from "../../components/TextComponent/TextComponent";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { FinancialToolsModal } from "../../components/FinancialToolsModal/FinancialToolsModal";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { useForm } from "react-hook-form";

interface FormData {
  recipient: string;
  category: string;
  date: string;
  amount: number;
}
export const Transaction: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "all" });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createNewTransaction = () => {
    console.log("Create new transaction");
  };
  return (
    <Box marginTop={300}>
      <Flex justifyContent="space-between">
        <TextComponent text="Transactions" variant="heading1" />
        <ButtonComponent
          label="+ Add New Transaction"
          onClick={openModal}
          type="button"
        />
      </Flex>
      <FinancialToolsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={{
          text: "Add New Transaction",
          variant: "heading1",
        }}
        description={{
          text: "Create a new transactions to keep track of your financial situation",
          variant: "heading4Reg",
        }}
        button={{
          label: "Add Transaction",
          onClick: createNewTransaction,
          type: "button",
          width: "100%",
        }}
      >
        <Box marginTop={250}>
          <form noValidate onSubmit={createNewTransaction}></form>
          <InputComponent
            name="recipient"
            label="Recipient/Sender"
            type="text"
            isRequired={true}
            register={register}
            errors={errors.recipient}
          />
        </Box>
      </FinancialToolsModal>
    </Box>
  );
};
