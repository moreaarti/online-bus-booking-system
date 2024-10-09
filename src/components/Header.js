import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const headerStyle = {
        backgroundColor: '#333',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
    };

    const navStyle = {
        marginTop: '10px',
    };

    const linkStyle = {
        margin: '0 15px',
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold',
        display: 'inline-block',

        textDecoration: 'none',
        fontSize: '18px',
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <header style={headerStyle}>
            <h1>Online Bus Ticket Booking</h1>
            <nav style={navStyle}>
                <span
                    style={linkStyle}
                    onClick={() => handleNavigation('/')}
                >
                    Home
                </span>
                <span
                    style={linkStyle}
                    onClick={() => handleNavigation('/booking')}
                >
                    Booking
                </span>
            </nav>
        </header>
    );
};

export default Header;
