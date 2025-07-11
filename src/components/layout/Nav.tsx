import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4 items-center align-center">
        <li><Link to="/booking">New Booking</Link></li>
        <li><Link to="/bookings">Booking List</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;