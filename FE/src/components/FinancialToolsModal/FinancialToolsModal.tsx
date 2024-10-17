import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { FinancialToolsProps } from "../../types";
import { TextComponent } from "../TextComponent/TextComponent";
import { CloseModalIcon } from "../../assets/icons/customIcons";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

export const FinancialToolsModal: React.FC<FinancialToolsProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  button,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width="560px">
        <Flex justifyContent="space-between" padding={400} alignItems="center">
          <ModalHeader flex={1} padding="0">
            <TextComponent {...title} />
          </ModalHeader>
          <CloseModalIcon boxSize="24px" onClick={onClose} cursor="pointer" />
        </Flex>
        <ModalBody>
          <TextComponent {...description} />
          {children}
        </ModalBody>

        <ModalFooter>
          <ButtonComponent {...button} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
