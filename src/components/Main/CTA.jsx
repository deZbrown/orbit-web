import React from 'react';

const CTA = () => {
    return (
        <div className="my-24 flex max-w-lg gap-1 justify-center mx-auto">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-2 border-gray-300 sm:border-1 bg-white px-4 py-4 text-lg text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
            />
            <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Subscribe
            </button>
        </div>

    );
}

export default CTA;
