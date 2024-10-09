import React from 'react';

const SeatLayout = ({ selectedSeats, bookedSeats, handleSeatSelect }) => {
    const seats = Array(12).fill({ type: 'Double', booked: false }).map((seat, index) => {
        return index % 2 === 0 ? { ...seat, type: 'Single' } : seat;
    });

    return (
        <div className="seat-layout">
            {seats.map((seat, index) => (
                <div
                    key={index}
                    onClick={() => !bookedSeats.includes(index) && handleSeatSelect(index, seat.type)} // Pass seat type when selecting
                    style={{
                        border: '1px solid black',
                        margin: '5px',
                        padding: '10px',
                        backgroundColor: bookedSeats.includes(index)
                            ? 'red'
                            : selectedSeats.some(s => s.index === index)
                                ? 'yellow'
                                : seat.type === 'Single'
                                    ? 'lightgreen'
                                    : 'lightblue',
                        cursor: bookedSeats.includes(index) ? 'not-allowed' : 'pointer',
                        width: '50px',
                        height: '50px',
                        textAlign: 'center',
                    }}
                >
                    {bookedSeats.includes(index) ? 'Booked' : `Seat ${index}`}
                </div>
            ))}
        </div>
    );
};

export default SeatLayout;
