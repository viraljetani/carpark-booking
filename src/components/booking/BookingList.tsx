import { Button } from "../ui/button";

export default function BookingList() {

    const bookings = [
        {
            id: 1,
            name: "John Doe",
            phone: "1234567890",
            licencePlate: "ABC123",
            startDate: "2023-01-01",
            endDate: "2023-01-02"
        },
        {
            id: 2,
            name: "Jane Doe",
            phone: "0987654321",
            licencePlate: "DEF456",
            startDate: "2023-01-02",
            endDate: "2023-01-03"
        },
        {
            id: 3,
            name: "John Jane Doe",
            phone: "1234567890",
            licencePlate: "ABC123",
            startDate: "2023-01-01",
            endDate: "2023-01-02"
        }
    ];
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4 bg-primary/10 text-primary/90 px-4 py-2 rounded-lg">Booking List</h2>
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
                            <td className="px-4 py-3">{booking.licencePlate}</td>
                            <td className="px-4 py-3">{new Date(booking.startDate).toLocaleDateString()}</td>
                            <td className="px-4 py-3">{new Date(booking.endDate).toLocaleDateString()}</td>
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
        </div>
    );
}