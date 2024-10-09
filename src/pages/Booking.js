import React, { useState } from 'react';
import DestinationSelection from '../components/DestinationSelection';
import SeatSelection from '../components/SeatSelection';

const Booking = () => {
    const [selectedRoute, setSelectedRoute] = useState(null);
    const [seatType, setSeatType] = useState('Double');

    return (
        <div>
            <h2>Book Your Tickets</h2>
            <DestinationSelection setSelectedRoute={setSelectedRoute} seatType={seatType} />
            {selectedRoute && (
                <SeatSelection selectedRoute={selectedRoute} seatType={seatType} setSeatType={setSeatType} />
            )}
        </div>
    );
};

export default Booking;
