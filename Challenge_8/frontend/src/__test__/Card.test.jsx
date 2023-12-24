import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';

describe('<Card />', () => {
  test('should render button correctly in Card component', () => {
    render(<Card />);
    const btnPilihMobil = screen.getByText(/Pilih Mobil/i);
    expect(btnPilihMobil).toBeInTheDocument();
  });
});