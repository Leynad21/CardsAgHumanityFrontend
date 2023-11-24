import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 p-4 text-zinc-200 text-center h-16">
            <div className="container mx-auto">
                <p className="text-sm">&copy; {currentYear} Cards Against Universe. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
