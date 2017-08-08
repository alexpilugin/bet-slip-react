import React from 'react';
import './styles/BetSlip.css';

const BetSlip = ({ value, title }) => {
    return (
        <div className="BetSlip">
            <span>{value}</span>
            <span>{title}</span>
        </div>
    );
}

export default BetSlip;