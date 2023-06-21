import React, { useState } from 'react';

const CTA = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`https://docs.google.com/forms/d/e/1FAIpQLSddKR8pNH1r4iu9qXJJQJLfLN9J_JPfsRiQ6Iwn4BkxwfIpJA/formResponse?entry.351906324=${email}`, {
            method: "POST",
            mode: "no-cors",
            headers: {
                'Accept': 'application/xml, text/xml, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        });

        setEmail(""); // To reset the form after submission
    };



    return (
        <div className="my-24 max-w-lg mx-auto w-full">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <form className="flex gap-1" onSubmit={handleSubmit}>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="font-lato min-w-0 flex-grow rounded-md border-2 border-gray-300 sm:border-1 bg-white px-4 py-4 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-lg sm:leading-6"
                    placeholder="Sign up, to get more info"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    className="rounded-md bg-indigo-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CTA;
