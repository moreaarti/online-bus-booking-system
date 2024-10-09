import React, { useState, useEffect } from 'react';
import SeatLayout from './SeatLayout';

const SeatSelection = ({ selectedRoute }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookedSeats, setBookedSeats] = useState([]); // Track permanently booked sea
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Calculate total price based on selected seats
        const calculatedPrice = selectedSeats.reduce((acc, seat) => {
            return acc + (seat.type === 'Double' ? selectedRoute.price * 2 : selectedRoute.price);
        }, 0);
        setTotalPrice(calculatedPrice);
    }, [selectedSeats, selectedRoute.price]);

    // Handle seat selection (but don't allow booking already booked seats)
    const handleSeatSelect = (seatIndex, seatType) => {
        if (!selectedSeats.some(seat => seat.index === seatIndex) && !bookedSeats.includes(seatIndex)) {
            setSelectedSeats([...selectedSeats, { index: seatIndex, type: seatType }]);
        } else {
            // If seat is already selected, deselect it
            setSelectedSeats(selectedSeats.filter(seat => seat.index !== seatIndex));
        }
    };

    // Confirm booking and mark selected seats as permanently booked
    const confirmBooking = () => {
        setBookedSeats([...bookedSeats, ...selectedSeats.map(seat => seat.index)]); // Add selected seat indices to bookedSeats
        setSelectedSeats([]); // Reset selected seats after confirmation
        alert('Booking Confirmed!');
    };

    return (
        <div>
            <h3>Selected Route: {selectedRoute.start} to {selectedRoute.end}</h3>
            <p>Total Price: ₹{totalPrice}</p>

            {/* Styled booked seats indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                <div style={{ backgroundColor: "red", width: "40px", height: "20px", borderRadius: "5px" }} />
                <label>Booked Seats</label>
                <div style={{ backgroundColor: "lightgreen", width: "40px", height: "20px", borderRadius: "5px" }} />
                <label>Single Seat</label>
                <div style={{ backgroundColor: "lightblue", width: "40px", height: "20px", borderRadius: "5px" }} />
                <label>Double Seats</label>

                <div style={{ backgroundColor: "yellow", width: "40px", height: "20px", borderRadius: "5px" }} />
                <label>Selected Seats</label>
            </div>

            {/* Seat Layout component */}
            <SeatLayout
                selectedSeats={selectedSeats}
                bookedSeats={bookedSeats} // Pass booked seats to the SeatLayout
                handleSeatSelect={handleSeatSelect}
            />

            <h3>Selected Seats: {selectedSeats.map(seat => `Seat ${seat.index}`).join(', ')}</h3>
            <button onClick={confirmBooking} disabled={selectedSeats.length === 0}>
                Confirm Booking
            </button>
        </div>
    );
};

export default SeatSelection;
