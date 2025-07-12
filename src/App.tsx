import './App.css'
import { BookingForm } from './components/booking/BookingForm';
import BookingList from './components/booking/BookingList';
import Nav from './components/layout/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<BookingForm />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/bookings" element={<BookingList />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
