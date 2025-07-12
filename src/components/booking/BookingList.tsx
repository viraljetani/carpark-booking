import { Button } from "../ui/button";
import { api } from '@/services/api';
import type { Booking } from '@/types/index';
import { useEffect, useState } from "react";

export default function BookingList() {

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.get('/bookings');
            console.log(response.data);
            setBookings(response.data);
          } catch (err: any) {
            setError(err.response?.data?.error || 'Failed to fetch bookings');
          } finally {
            setLoading(false);
          }
    };
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4 bg-primary/10 text-primary/90 px-4 py-2 rounded-lg">Booking List</h2>

            {loading && (
                <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto"></div>
                </div>
            )} 
            {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}

        {!loading && !error && bookings.length === 0 && (
            <div className="text-center py-8 text-gray-500">
            No bookings found
            </div>
        )}
        {!loading && !error && bookings.length > 0 && (
            <table className="w-full responsive-table border border-gray-200 dark:border-gray-200">
                <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700 bg-indigo-100">
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Phone</th>
                        <th className="px-4 py-3">Licence Plate</th>
                        <th className="px-4 py-3">Start Date</th>
                        <th className="px-4 py-3">End Date</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-3">{booking.name}</td>
                            <td className="px-4 py-3">{booking.phone}</td>
                            <td className="px-4 py-3">{booking.licence_plate}</td>
                            <td className="px-4 py-3">{new Date(booking.start_date).toLocaleDateString()}</td>
                            <td className="px-4 py-3">{new Date(booking.end_date).toLocaleDateString()}</td>
                            <td className="px-4 py-3 flex gap-2">
                                <Button variant="outline" size="sm" className="bg-primary/10 text-primary/90 hover:bg-primary/20 hover:text-primary/10">
                                    Edit
                                </Button>
                                <Button variant="outline" size="sm" className="bg-primary/10 text-primary/90 hover:bg-primary/20 hover:text-primary/10">
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )}
        </div>
    );
}