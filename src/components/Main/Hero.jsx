import React from 'react';
import Card from './Card';
import CTA from './CTA';
import DiagnosisAndPredictiveCapabilities from './SVP/DiagnosisAndPredictiveCapabilities';
import ReducedOperatingCosts from "./SVP/ReducedOperatingCosts";
import ImprovedServiceAgentEfficiency from "./SVP/ImprovedServiceAgentEfficiency";
import ScalableAndAdaptableSolution from "./SVP/ScalableAndAdaptableSolution";

const Hero = () => {
    return (
        <section className="hero text-center py-16">

            <h1 className="text-7xl font-bold text-gray-800 mb-4">AI-Powered Line Parameter Analytics</h1>
            <p className="text-4xl font-work-sans mb-16">Unleash Better Customer Care with AI Simplified Line Insights</p>

            <div className="flex flex-wrap justify-center space-x-5 mb-16">
                <Card iconName="alarm" description="Babysitting of Telecommunication Line" />
                <Card iconName="account-balance" description="Telecommunication Line Performance Score" />
                <Card iconName="alarm" description="Predictive Analytics for Telecommunication Line Health" />
                <Card iconName="add-to-queue" description="Sophisticated Optical Network Analysis" />
                <Card iconName="all-inclusive" description="Customer Service Diagnosis" />
            </div>

            <CTA />

            <DiagnosisAndPredictiveCapabilities />

            <ReducedOperatingCosts />

            <ImprovedServiceAgentEfficiency />

            <ScalableAndAdaptableSolution />

        </section>
    );
}

export default Hero;