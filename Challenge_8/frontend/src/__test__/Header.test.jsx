import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('<Header />', () => {
  test('should click url and redirect to wanted page', async () => {
    render(<Header />, { wrapper: BrowserRouter });
    const event = userEvent.setup();
    await event.click(screen.getByText('Mulai Sewa Mobil'));
  });
});