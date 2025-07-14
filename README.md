# React + TypeScript + Vite

This project is for Carpark Booking application using React Typescript and Vite.


## Installation Steps (Frontend)

1. Clone the repository
2. Install dependencies using `npm install`
3. Run the development server using `npm run dev`
4. Open http://localhost:5173 in your browser or the url that is displayed in your terminal


## Installation Steps (Backend)

1. cd into /backend directory
2. Create a .env file in the /backend directory and add the variables for the DB connection:

```
# Local PostgreSQL
DB_HOST=localhost
DB_PORT=5433
DB_USER=postgres
DB_PASSWORD=
DB_NAME=db_carpark

# Server
PORT=3001

```
3. Install dependencies using `npm install`
4. Run the development server using `npm run dev`
5. Backend will be served at: http://localhost:3001


## Testing

1. Run the tests using `npm run test`
2. Run the tests in watch mode using `npm run test:watch`
3. Run the tests in UI mode using `npm run test:ui`


## Project Timeline

- [x] Installed ShadCN UI and TailwindCSS for quickly building UI and Form components 
- [x] Setup the project foler structure and components
- [x] Setup Booking Form component
- [x] Setup Bookings List component
- [x] Setup Postgres Database
- [x] Setup Express app in the /backend directory
- [x] Setup APIs for bookings and fetching bookings
- [x] Update BookingForm component to use the API with axios call
- [x] Update BookingForm component to handle form submission
- [x] Update BookingsList component to use the API with axios call
- [x] Update BookingsList component to display the bookings
- [x] Form Validation
- [x] Error Handling
- [x] Tests with vitest for BookingList component


##Improvements / What can be done?

Based on the time I had, I was mainly focused on preparing a basic application where the backend and frontend works together.

Frontend:
- [ ] Add more Form Validations
- [ ] Time in Date picker
- [ ] Add Tests for form submission and API calls for BookingForm component

Backend:
- [ ] Add Tests for API calls for bookings and fetching bookings
- [ ] Add more error handling
- [ ] Add more logging (like logging on a file or database for API calls to track the usage)
- [ ] Add more security (like authentication and authorization) can use basic JWT authentication.
- [ ] Add more features (like user roles, permissions, etc.), Car management, User management, Parking management

Database:
- [] Data normalization 
Currently the booking table consists of all the user data and the booking data which should be normalized into different tables.
e.g., 
users - id, name, phone
user_cars - id, user_id, licence_plate
bookings - id, user_car_id, parking_id, start_date, end_date
parkings - id, name, address, capacity
roles - id, name
permissions - id, role_id, permission
user_roles - id, user_id, role_id
