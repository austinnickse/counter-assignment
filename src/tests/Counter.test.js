import { render, screen, fireEvent } from '@testing-library/react'; //learn about firing events from https://testing-library.com/docs/dom-testing-library/api-events/#fireevent
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const initalVal = screen.getByText(/Counter/i);
  expect(initalVal).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initalVal = screen.getByText("0");
  expect(initalVal).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText("+"))
  const initalVal = screen.getByText("1");
  expect(initalVal).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText("-"))
  const initalVal = screen.getByText("-1");
  expect(initalVal).toBeInTheDocument();
});
