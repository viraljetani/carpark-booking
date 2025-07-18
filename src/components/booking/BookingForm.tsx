import { Input } from "../ui/input";
import { useState } from 'react';
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { api } from '@/services/api'

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    licencePlate: '',
    startDate: '',
    endDate: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      //Validation
      if (!formData.name || !formData.phone || !formData.licencePlate || !formData.startDate || !formData.endDate) {
        setError('All fields are required');
        setLoading(false);
        return;
      }

      const bookingData = {
        ...formData,
        start_date: new Date(formData.startDate).toISOString(),
        end_date: new Date(formData.endDate).toISOString(),
      };

      await api.post('/bookings', bookingData);
      alert('Booking submitted successfully!');

      setFormData({
        name: '',
        phone: '',
        licencePlate: '',
        startDate: '',
        endDate: ''
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setError('Failed to submit form');
      setLoading(false);
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8 bg-white rounded-lg border border-gray-200 shadow-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Book a Car Spot</h2>
          <p className="text-gray-600">Please fill in your details to book a car parking</p>
        </div>

        {/* Name and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="your phone number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Dates Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
              Start Date
            </Label>
            <div className="relative">
              <Input
                id="startDate"
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-gray-500 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
              End Date
            </Label>
            <div className="relative">
              <Input
                id="endDate"
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-gray-500 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Licence Plate Row */}
        <div>
          <Label htmlFor="licencePlate" className="block text-sm font-medium text-gray-700 mb-2">
            Licence Plate Number
          </Label>
          <Input
            id="licencePlate"
            type="text"
            name="licencePlate"
            value={formData.licencePlate}
            onChange={handleChange}
            required
            placeholder="Your licence plate number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-8">
          <Button
            type="submit"
            variant="default"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            {loading ? 'Booking...' : 'Book Now'}
          </Button>
        </div>
      </form>
    </div>
  );
};