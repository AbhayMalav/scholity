import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const socialLinks = [
    { href: "https://facebook.com/yourprofile", icon: <FaFacebookF size={32} /> },
    { href: "https://x.com/thedeveloper_03", icon: <FaTwitter size={32} /> },
    { href: "https://www.linkedin.com/in/naman-sharma-a5b979212", icon: <FaLinkedinIn size={32} /> },
    { href: "https://instagram.com/crosin.adv", icon: <FaInstagram size={32} /> }
];

const Social = () => {
    return (
        <div className="mt-15 mr-0">
            <h2 className="text-xl sm:text-lg md:text-2xl lg:text-3xl mt-6 mr-0 tracking-wide bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                Contact
            </h2>

            <div className="flex flex-wrap justify-center mt-12 space-x-6 mb-0">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Social;
