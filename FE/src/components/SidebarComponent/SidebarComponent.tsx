import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { MinimizeMenuIcon } from "../../assets/icons/custonIcons";
import { menuItems } from "../../data/sidebarLink";

interface SidebarComponentProps {
  isMinimize: boolean;
  setIsMinimize: (isMinimize: boolean) => void;
}

export const SidebarComponent: React.FC<SidebarComponentProps> = ({
  isMinimize,
  setIsMinimize,
}) => {
  const onClose = () => {
    setIsMinimize(!isMinimize);
  };

  return (
    <Drawer
      isOpen={true}
      placement="left"
      onClose={onClose}
      closeOnOverlayClick={false}
      blockScrollOnMount={true}
      variant="alwaysOpen"
    >
      <DrawerOverlay visibility="hidden" />
      <DrawerContent
        bg="grey.900"
        borderTopRightRadius="16px"
        borderBottomRightRadius="16px"
        padding="0"
        width={isMinimize ? "max-content !important" : "auto"}
      >
        <DrawerHeader paddingY="40px" paddingX="32px">
          {isMinimize ? (
            <img src="/img/logo-small.svg" alt="logo" />
          ) : (
            <img src="/img/logo-large.svg" alt="logo" />
          )}
        </DrawerHeader>

        <DrawerBody padding="0" marginTop="24px">
          {menuItems.map((item) => (
            <SidebarItem
              icon={item.icon}
              label={isMinimize ? "" : item.label}
              url={item.url}
              key={item.label}
            />
          ))}
        </DrawerBody>

        <DrawerFooter>
          <ButtonComponent
            type="button"
            variant="ghost"
            label={isMinimize ? "" : "Minimize Menu"}
            onClick={onClose}
            width="100%"
            marginTop={200}
            leftIcon={
              <MinimizeMenuIcon
                color="grey.300"
                transform={isMinimize ? "rotate(180deg)" : "rotate(0deg)"}
              />
            }
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
