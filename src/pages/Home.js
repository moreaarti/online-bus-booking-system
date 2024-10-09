import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Welcome to the Bus Ticket Booking System</h2>
            <p>Select your destination, choose seats, and book tickets easily!</p>
            <Link to="/booking">Start Booking</Link>
        </div>
    );
};

export default Home;
