import React from 'react';
import Card from './Card';
import CTA from './CTA';

const Hero = () => {
    return (
        <section className="hero text-center py-16">
            <h1 className="text-7xl font-bold text-gray-800 mb-4">AI-Powered Line Parameter Analytics</h1>
            <p className="text-4xl font-work-sans">Unleash Better Customer Care with AI Simplified Line Insights</p>
            {/* Add the rest of the content here */}
            <div className="flex flex-wrap justify-center space-x-5">
                <Card image="random-icon1.png" alt="icon1" description="Babysitting of Telecommunication Line" />
                <Card image="random-icon1.png" alt="icon1" description="Telecommunication Line Performance Score" />
                <Card image="random-icon1.png" alt="icon1" description="Predictive Analytics for Telecommunication Line Health" />
                <Card image="random-icon1.png" alt="icon1" description="Sophisticated Optical Network Analysis" />
                <Card image="random-icon1.png" alt="icon1" description="Customer Service Diagnosis" />
                {/* Add more cards as needed */}
            </div>

            <CTA />
        </section>
    );
}

export default Hero;
