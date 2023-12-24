import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('<Navbar />', () => {
  test('should click url and redirect to wanted page', async () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    const event = userEvent.setup();
    await event.click(screen.getByText('Register'));
  });

  test('should render button correctly in Navbar component', () => {
    render(<Navbar />);
    const btnRegister = screen.getByText(/Register/i);
    expect(btnRegister).toBeInTheDocument();
  });
});
