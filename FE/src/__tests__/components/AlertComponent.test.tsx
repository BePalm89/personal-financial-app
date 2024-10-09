import "@testing-library/jest-dom";
import { AlertComponent } from "../../components/AlertComponent/AlertComponent";
import { render, screen, waitFor } from "@testing-library/react";

describe("AlertComponent", () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  const mockOnClose = jest.fn();

  const cases: [
    status: "error" | "info" | "success" | "warning",
    title: string,
    message: string
  ][] = [
    ["error", "Error", "This is an error message"],
    ["info", "Info", "This is an info message"],
    ["success", "Success", "This is a success message"],
    ["warning", "Warning", "This is a warning message"],
  ];
  test.each(cases)(
    "renders correctly for status: %s",
    (status, title, message) => {
      render(
        <AlertComponent
          status={status}
          title={title}
          message={message}
          onClose={mockOnClose}
        />
      );

      const titleElement = screen.getByText(title);
      const messageElement = screen.getByText(message);
      const statusElement = screen.getByRole("alert");

      expect(titleElement).toBeInTheDocument();
      expect(messageElement).toBeInTheDocument();
      expect(statusElement).toHaveAttribute("data-status", status);
    }
  );

  test("calls onClose when the close button is clicked", () => {
    render(
      <AlertComponent
        status="info"
        title="Info"
        message="info message"
        onClose={mockOnClose}
      />
    );

    const closeButton = screen.getByRole("button");
    closeButton.click();

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose after 5 seconds", async () => {
    jest.useFakeTimers();

    render(
      <AlertComponent
        status="info"
        title="Info"
        message="info message"
        onClose={mockOnClose}
      />
    );

    jest.advanceTimersByTime(5000);

    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    jest.useRealTimers();
  });
});
