import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4 items-center align-center">
        <li><Link to="/booking-form" className="text-indigo-900 hover:text-indigo-400" aria-current="page">New Booking</Link></li>
        <li><Link to="/bookings" className="text-indigo-900 hover:text-indigo-400" aria-current="page">Booking List</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;