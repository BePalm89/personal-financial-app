import { Box } from "@chakra-ui/react";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { menuItems } from "../../data/sidebarLink";

interface SidebarSmallScreenComponent {
  size: 'sm' | 'md' | 'lg';
}

export const SidebarSmallScreenComponent: React.FC<SidebarSmallScreenComponent> = ({ size }) => {
  return (
    <Box
      position="absolute"
      bottom="0"
      left="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      backgroundColor="grey.900"
      borderTopRightRadius="8px"
      borderTopLeftRadius="8px"
      paddingTop="16px"
    >
      {menuItems.map((item) => (
        <SidebarItem
          icon={item.icon}
          label={size === 'md' ? item.label : ''}
          url={item.url}
          key={item.label}
          direction="column"
          variant="menuItemSmall"
          width={size === 'md' ? '120px' : '68px'}
        />
      ))}
    </Box>
  );
};
