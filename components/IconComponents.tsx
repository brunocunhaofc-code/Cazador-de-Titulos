import React from 'react';

export const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.0002 2.00002C6.4773 2.00002 2.00024 6.47708 2.00024 12C2.00024 17.5228 6.4773 22 12.0002 22C17.5231 22 22.0002 17.5228 22.0002 12C22.0002 6.47708 17.5231 2.00002 12.0002 2.00002ZM9.51525 15.582V8.41802L15.4853 12L9.51525 15.582Z"></path>
  </svg>
);

export const MouseClickIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.415 14.832a1 1 0 0 1-1.415-1.415l3.587-3.586a1 1 0 0 1 1.414 1.414l-3.586 3.587zM14.5 19a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm-5-10.5a1 1 0 0 1 1-1h1V4.5a1 1 0 1 1 2 0V7h.5a1 1 0 1 1 0 2H13v1.5a1 1 0 1 1-2 0V9h-1a1 1 0 0 1-1-1zM7 21a5 5 0 0 1-4.79-7.113l4.33-8.66a5 5 0 0 1 8.942 4.471l-1.34 2.68a5.5 5.5 0 0 1-7.028 7.028L7 21z"></path>
  </svg>
);

export const ListIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
  </svg>
);