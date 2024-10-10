import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { MinimizeMenuIcon } from "../SidebarItem/custonIcons";

export const SidebarComponent: React.FC = () => {
  const [isMinimize, setIsMinimize] = useState<boolean>(false);

  const onClose = () => {
    setIsMinimize(!isMinimize);
  };

  const menuItems: { icon: string; label: string; url: string }[] = [
    { icon: "overview", label: "overview", url: "/overview" },
    { icon: "transactions", label: "transactions", url: "/transactions" },
    { icon: "budgets", label: "budgets", url: "/budgets" },
    { icon: "pots", label: "pots", url: "/pots" },
    { icon: "bills", label: "bills", url: "/bills" },
  ];

  return (
    <Drawer isOpen={true} placement="left" onClose={onClose}>
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
