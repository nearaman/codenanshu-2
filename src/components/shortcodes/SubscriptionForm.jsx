//In src/components/sub-form.component.js
import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const SubscriptionForm = () => {
    const [status, setStatus] = useState({ result: "" });
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await addToMailchimp(email);
            setStatus(result);
            console.log(result);
        } catch (e) {
            console.error(e);
        }
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        setEmail(value);
    };

    return (
        <section className="text-textWhiteBlue 0 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-textWhite">
                        Join the Newsletter
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        If you've found any of my articles useful, subscribe to
                        receive more quality articles straight to your inbox.
                    </p>
                    {status.result === "success " && (
                        <p
                            className="text-red-400"
                            dangerouslySetInnerHTML={{ __html: status.msg }}
                        />
                    )}
                    {status.result === "error" && (
                        <p
                            className="text-red-400"
                            dangerouslySetInnerHTML={{ __html: status.msg }}
                        />
                    )}
                </div>
                <form
                    className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end"
                    onSubmit={handleSubmit}
                >
                    <div className="relative flex-grow w-full">
                        <label
                            htmlFor="email"
                            className="leading-7 text-sm text-textBlue"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            onChange={handleInputChange}
                            className="w-full bg-secBlack bg-opacity-50 rounded border border-Black focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-textWhiteBlue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SubscriptionForm;
