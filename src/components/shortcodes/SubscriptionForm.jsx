//In src/components/sub-form.component.js
import React, { useState } from 'react';

const SubscriptionForm = () => {
    const [status, setStatus] = useState(null);
    const [email, setEmail] = useState('');

    //FORM_URL should be the same as the form action url pointed out above
    const FORM_URL = `https://app.convertkit.com/forms/2852412/subscriptions`; // real
    // const FORM_URL = `https://app.convertkit.com/forms/1417892/subscriptions`; //test

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        try {
            await fetch(FORM_URL, {
                method: "POST",
                body: data,
                headers: {
                    accept: "application/json",
                }
            }).then(res => res.json().then(responce => {
                setStatus(responce.status)
                console.log(responce)
                setEmail("")
            }))
        } catch (e) {
            console.error(e)
        }
    };

    const handleInputChange = event => {
        const {value} = event.target;
        setEmail(value);
    }

    return (
        <section className="text-textWhiteBlue 0 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-textWhite">
        Join the Newsletter
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        If you've found any of my articles useful, subscribe to receive more quality articles straight to your inbox.
      </p>
      {status === 'success' && <p className="text-green-400">Please go confirm your subscription!</p>}
      {status === 'failed' && <p className="text-red-400">Oops, Something went wrong! try again.</p>}
    </div>
    <form className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end" onSubmit={handleSubmit} action={FORM_URL}>
      <div className="relative flex-grow w-full">
        <label htmlFor="email" className="leading-7 text-sm text-textBlue">
          Email
        </label>
        <input
          type="email"
          id="email_address"
          name="email_address"
          onChange={handleInputChange}
          className="w-full bg-secBlack bg-opacity-50 rounded border border-Black focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-textWhiteBlue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button type="submit" className="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Subscribe
      </button>
    </form>
  </div>
</section>

    );
};

export default SubscriptionForm