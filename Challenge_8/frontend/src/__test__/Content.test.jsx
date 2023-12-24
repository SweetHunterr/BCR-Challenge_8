import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Content from '../components/Content';

describe('<Content />', () => {
  test('should click url and redirect to wanted page', async () => {
    render(<Content />, { wrapper: BrowserRouter });
    const event = userEvent.setup();
    await event.click(screen.getByText('Mulai Sewa Mobil'));
  });
});
