import { useState } from 'react';

function Form() {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <div className="flex justify-center items-center flex-col text-gray-500 p-20">
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </div>
        );
    }
    return (
        <form onSubmit={handleSubmit} action={process.env.NEXT_PUBLIC_FORM_ENDPOINT} method="post" acceptCharset="UTF-8">
            <div id="contact" className="contact px-4 mx-auto max-w-sm py-4 pb-10 flex flex-col space-y-4">
                <div>
                    <input type="email" name="email" id="email" className="bg-gray-50 border text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 placeholder-gray-700 dark:text-black-100 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                </div>
                <div className="mb-6">
                    <textarea id="message" name="message" rows={4} className="bg-gray-50 border text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 placeholder-gray-700 dark:text-black-100 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message"></textarea>
                </div>
                <div style={{ margin: "40px auto 0" }}>
                    <button type="submit" className="text-gray-600 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-lime-600 dark:hover:text-gray dark:focus:ring-blue-800">CONTACT US</button>
                </div>
            </div>
        </form>
    );
}

export default Form;