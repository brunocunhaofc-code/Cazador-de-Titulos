import React from 'react';

interface PurchaseButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export const PurchaseButton: React.FC<PurchaseButtonProps> = ({ href, children, className = '' }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                inline-block px-12 py-4 font-bold text-white text-lg md:text-xl
                bg-gradient-to-r from-red-600 to-red-800
                rounded-lg shadow-lg shadow-red-500/30
                transform transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-xl hover:shadow-red-500/50
                focus:outline-none focus:ring-4 focus:ring-red-500/50
                active:scale-95
                ${className}
            `}
        >
            {children}
        </a>
    );
};