import React, { useState } from 'react';

const destinations = [
    { start: 'Mumbai', end: 'Latur', price: 1000 },
    { start: 'Mumbai', end: 'Solapur', price: 970 },
    { start: 'Mumbai', end: 'Pune', price: 500 },
    { start: 'Pune', end: 'Solapur', price: 1200 },
    { start: 'Pune', end: 'Latur', price: 1600 },
    { start: 'Pune', end: 'Mumbai', price: 500 },
    { start: 'Latur', end: 'Mumbai', price: 970 },
    { start: 'Latur', end: 'Solapur', price: 300 },
    { start: 'Solapur', end: 'Pune', price: 1600 },
    { start: 'Solapur', end: 'Latur', price: 1600 },
];

const DestinationSelection = ({ setSelectedRoute, seatType }) => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleSelect = () => {
        const route = destinations.find((d) => d.start === start && d.end === end);
        if (route) {
            const adjustedPrice = seatType === 'Single' ? route.price * 0.5 : route.price;
            setSelectedRoute({ ...route, price: adjustedPrice });
        }
    };

    return (
        <div >
            <label>Start Destination:</label>
            <select style={{ marginRight: "20px" }} onChange={(e) => setStart(e.target.value)}>
                <option value="">Select Start</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Latur">Latur</option>
                <option value="Solapur">Solapur</option>

            </select>

            <label>End Destination:</label>
            <select style={{ marginRight: "20px" }} onChange={(e) => setEnd(e.target.value)}>
                <option value="">Select End</option>
                <option value="Latur">Latur</option>
                <option value="Solapur">Solapur</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
            </select>

            <button onClick={handleSelect}>Select Route</button>
        </div>
    );
};

export default DestinationSelection;
