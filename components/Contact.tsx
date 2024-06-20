import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="relative bg-cover bg-fixed bg-top h-96 w-full z-10 rounded-[40px]" style={{ backgroundImage: "url('/images/ctabg.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h2 className="text-4xl font-bold mb-4">Get in Touch with Us</h2>
                <p className="mb-6 max-w-lg">
                    Have any questions or need more information? Feel free to reach out. We are here to help you.
                </p>
                <a href="#contact-us" className="px-8 py-3 bg-lime-400 rounded-3xl text-black text-lg hover:text-lime-400 hover:bg-black transition duration-300">
                    Contact Us
                </a>
            </div>
        </div>
    );
}

export default Contact;
