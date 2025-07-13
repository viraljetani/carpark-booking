import { render, screen } from '@testing-library/react';
import { vi, describe, test, expect } from 'vitest';
import BookingList from '../BookingList';
import { api } from '../../../services/api';

// Mock the API
vi.mock('../../../services/api');

describe('BookingList', () => {
   test('renders empty state when no bookings', async () => {
    // Mock API response with empty array
    vi.spyOn(api, 'get').mockResolvedValue({ data: [] });
    
    render(<BookingList />);
    
    // Wait for loading to complete
    await screen.findByText('No bookings found');
    
    // Verify empty state message
    expect(screen.getByText('No bookings found')).toBeInTheDocument();
  });

  test('renders booking list with data', async () => {
    // Mock API response with sample data
    const mockBookings = [
      {
        id: 1,
        name: 'John Doe',
        phone: '1234567890',
        licence_plate: 'ABC123',
        start_date: '2025-07-13T10:00:00.000Z',
        end_date: '2025-07-13T12:00:00.000Z'
      }
    ];
    
    vi.spyOn(api, 'get').mockResolvedValue({ data: mockBookings });
    
    render(<BookingList />);
    
    // Wait for loading to complete and data to render
    await screen.findByText('John Doe');
    
    // Verify booking data is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('ABC123')).toBeInTheDocument();
    
    // Verify edit and delete buttons
    expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });
});
