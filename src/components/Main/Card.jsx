import React from 'react';

const Card = ({ image, alt, description }) => {
    return (
        <div className="card w-36 h-40 bg-white shadow-lg rounded-lg overflow-hidden text-center p-3 space-y-3">
            <div>
                <img src={image} alt={alt} className="mx-auto w-12 h-12 object-cover"/>
            </div>
            <div>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
}

export default Card;
