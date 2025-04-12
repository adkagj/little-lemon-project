import { render, screen } from "@testing-library/react";
import BookingForm from "./components/booking/BookingForm";
import { availableTimesReducer } from "./components/booking/Booking";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Make Your Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the expected array of times", () => {
  const initialTimes = ["17:00", "18:00", "19:00"];
  expect(initialTimes).toEqual(["17:00", "18:00", "19:00"]);
});

test("updateTimes returns the same value that is provided in state", () => {
  const state = ["17:00", "18:00", "19:00"];
  const action = { type: "ADD_TIME", payload: "20:00" };
  const newState = availableTimesReducer(state, action);
  expect(newState).toEqual([...state, "20:00"]);
});
