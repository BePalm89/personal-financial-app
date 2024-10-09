import React from "react";
import { ScreenSize, useScreenSize } from "../../hooks/useScreenSize";

interface ResponsiveComponentProps {
  children: (props: { size: ScreenSize }) => React.ReactNode;
}

export const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({
  children,
}) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};
