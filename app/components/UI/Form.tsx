function Form() {
    return (
        <form>
            <div id="contact" className="contact px-4 mx-auto max-w-sm py-24 lg:py-24 flex flex-col space-y-4">
                <div>
                    <input type="email" id="email" className="bg-gray-50 border text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                </div>
                <div className="mb-6">
                    <textarea id="message" rows={4} className="bg-gray-50 border text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message"></textarea>
                </div>
                <div style={{margin: "40px auto 0"}}>
                    <button type="submit" className="text-gray-600 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-lime-600 dark:hover:text-white dark:focus:ring-blue-800">CONTACT US</button>
                </div>
            </div>

        </form>
    );
}

export default Form;