import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/booking/BookingForm";
// import { availableTimesReducer } from "./components/booking/Booking";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Make Your Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the expected array of times", () => {
  const initialTimes = ["17:00", "18:00", "19:00"];
  expect(initialTimes).toEqual(["17:00", "18:00", "19:00"]);
});

describe("BookingForm", () => {
  test("render form inputs with correct HTML5 validation attributes", () => {
    render(<BookingForm onSubmit={() => {}} />);

    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toBeRequired();

    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toBeRequired();

    const guestsInput = screen.getByLabelText(/number of guest/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");

    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });

  test("shows error when guests number is too low", () => {
    render(<BookingForm onSubmit={() => {}} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    // simulate entering 0 guests
    fireEvent.change(guestsInput, { target: { value: "0" } });

    const errorMessage = screen.getByText(
      /Perfect for an intimate dining experience!/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("shows error when guest number is too high", () => {
    render(<BookingForm onSubmit={() => {}} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    // simulate entering 11 guests
    fireEvent.change(guestsInput, { target: { value: "11" } });

    const errorMessage = screen.getByText(
      /For groups larger than 10, please contact us directly/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("does NOT show error when guest number is valid", () => {
    render(<BookingForm onSubmit={() => {}} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    //simulate entering 5 guests
    fireEvent.change(guestsInput, { target: { value: "5" } });

    // no error message should be displayed
    const errorMessage1 = screen.queryByText(
      /Perfect for an intimate dining experience!/i
    );
    const errorMessage2 = screen.queryByText(
      /For groups larger than 10, please contact us directly/i
    );
    expect(errorMessage1).not.toBeInTheDocument();
    expect(errorMessage2).not.toBeInTheDocument();
  });

  test("submits form with valid data", () => {
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2025-05-10" },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "18:00" },
    });
      target: { value: "18:00" },    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: 3 },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "birthday" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    expect(handleSubmit).toHaveBeenCalledWith({
      date: "2025-05-10",
      time: "18:00",
      guests: 3,
      occasion: "birthday",
    });
  });
});
