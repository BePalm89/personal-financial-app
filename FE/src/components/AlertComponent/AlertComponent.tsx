import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import "./AlertComponent.scss";

interface AlertComponentProps {
  status: "error" | "info" | "success" | "warning";
  title: string;
  message: string;
  onClose: () => void;
}
export const AlertComponent: React.FC<AlertComponentProps> = ({
  status,
  title,
  message,
  onClose,
}) => {
  return (
    <Alert status={status} className="alert">
      <div className="alert__info" >
        <AlertIcon />
        <div>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
        </div>
      </div>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  );
};
