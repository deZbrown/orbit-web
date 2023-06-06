import React from 'react';
import AlarmIcon from '@material-ui/icons/Alarm';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SatelliteAltRoundedIcon from '@mui/icons-material/SatelliteAltRounded';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const ICONS = {
    'alarm': AlarmIcon,
    'account-balance': AccountBalanceIcon,
    'satellite': SatelliteAltRoundedIcon,
    'add-to-queue': AddToQueueIcon,
    'all-inclusive': AllInclusiveIcon,
    // other icons...
};


const Card = ({ iconName, alt, description }) => {

    const IconComponent = ICONS[iconName];

    return (
        <div className="card w-36 h-40 bg-white shadow-lg rounded-lg overflow-hidden text-center p-3 space-y-3">
            <div>
                <IconComponent style={{ fontSize: 50 }} /> {/* Adjust size as per your need */}
            </div>
            <div>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
}

export default Card;
