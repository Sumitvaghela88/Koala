import { useState } from 'react';

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsOpen(!isOpen);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="relative w-14 h-14 bg-[#8ea149]  text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed"
        aria-label={isOpen ? "Close live chat window" : "Open live chat window"}
      >
        {/* Screen reader text */}
        <span className="sr-only">
          {isOpen ? "Close live chat window" : "Open live chat window"}
        </span>

        {/* Chat Icon (when closed) */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className={`w-6 h-6 absolute inset-0 m-auto transition-all duration-200 ${
            isOpen ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'
          } ${isLoading ? 'opacity-0' : ''}`}
          aria-hidden="true"
        >
          <mask id="mask0_1_10" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <path d="M24 0H0V24H24V0Z" fill="white"></path>
          </mask>
          <g mask="url(#mask0_1_10)">
            <path 
              d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24H19.392V21.456C22.2 19.248 24 15.84 24 12C24 5.376 18.624 0 12 0ZM7.68 13.08C7.08 13.08 6.6 12.6 6.6 12C6.6 11.4 7.08 10.92 7.68 10.92C8.28 10.92 8.76 11.4 8.76 12C8.76 12.6 8.28 13.08 7.68 13.08ZM12 13.08C11.4 13.08 10.92 12.6 10.92 12C10.92 11.4 11.4 10.92 12 10.92C12.6 10.92 13.08 11.4 13.08 12C13.08 12.6 12.6 13.08 12 13.08ZM16.32 13.08C15.72 13.08 15.24 12.6 15.24 12C15.24 11.4 15.72 10.92 16.32 10.92C16.92 10.92 17.4 11.4 17.4 12C17.4 12.6 16.92 13.08 16.32 13.08Z" 
              fill="currentColor"
            />
          </g>
        </svg>

        {/* Close Icon (when open) */}
        <svg 
          viewBox="0 0 28 28" 
          fill="none" 
          className={`w-6 h-6 absolute inset-0 m-auto transition-all duration-200 ${
            isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-45 scale-75'
          } ${isLoading ? 'opacity-0' : ''}`}
          aria-hidden="true"
        >
          <path 
            d="M21.35 6.66166C20.895 6.20666 20.16 6.20666 19.705 6.66166L14 12.355L8.295 6.65C7.84 6.195 7.105 6.195 6.65 6.65C6.195 7.105 6.195 7.84 6.65 8.295L12.355 14L6.65 19.705C6.195 20.16 6.195 20.895 6.65 21.35C7.105 21.805 7.84 21.805 8.295 21.35L14 15.645L19.705 21.35C20.16 21.805 20.895 21.805 21.35 21.35C21.805 20.895 21.805 20.16 21.35 19.705L15.645 14L21.35 8.295C21.7933 7.85166 21.7933 7.105 21.35 6.66166Z" 
            fill="currentColor"
          />
        </svg>

 
      
      </button>

      {/* Optional: Chat window mockup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          <div className="bg-[#8ea149]  text-white p-4 rounded-t-lg ">
            <h3 className="font-semibold">Live Chat</h3>
            <p className="text-sm opacity-90">We're here to help!</p>
          </div>
          <div className="flex-1 p-4 bg-gray-50">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
              <p className="text-sm text-gray-600">Hello! How can we help you today?</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-950 text-sm"
              />
              <button className="bg-[#75930b]  text-white px-4 py-2 rounded-lg hover:bg-[#8ea149]  transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}