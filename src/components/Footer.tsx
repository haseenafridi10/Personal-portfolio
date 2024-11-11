import React from "react";

const Footer = (props:any) => {
  return (
    <div className="mt-16 flex flex-col">
      {/* <!-- Content Section --> */}
      <main className="flex-grow">{/* <!-- Your content goes here --> */}</main>

      {/* <!-- Footer Section --> */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
            </div>
            <div className="flex space-x-6">
              {/* <!-- Facebook Icon --> */}
              <a
                href="https://facebook.com/"
                target="_blank"
                className="text-blue-500 hover:text-blue-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24H12.82v-9.294H9.692V11.06h3.127V8.414c0-3.1 1.893-4.788 4.657-4.788 1.324 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.76v2.309h3.587l-.467 3.646h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0z" />
                </svg>
              </a>

              {/* <!-- Instagram Icon --> */}
              <a
                href="https://instagram.com/"
                target="_blank"
                className="text-pink-500 hover:text-pink-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.063 2.633.343 3.608 1.318.974.974 1.254 2.241 1.318 3.607.058 1.266.068 1.647.068 4.842s-.01 3.576-.068 4.842c-.063 1.366-.343 2.633-1.318 3.608-.974.974-2.241 1.254-3.607 1.318-1.266.058-1.647.068-4.842.068s-3.576-.01-4.842-.068c-1.366-.063-2.633-.343-3.608-1.318-.974-.974-1.254-2.241-1.318-3.607-.058-1.266-.068-1.647-.068-4.842s.01-3.576.068-4.842c.063-1.366.343-2.633 1.318-3.608.974-.974 2.241-1.254 3.607-1.318 1.266-.058 1.647-.068 4.842-.068m0-2.163C8.756 0 8.345.015 7.719.057c-1.759.116-3.298.629-4.5 1.83C1.017 4.096.504 5.635.388 7.394.347 8.02.333 8.431.333 12s.015 3.98.057 4.606c.116 1.759.629 3.298 1.83 4.5 1.203 1.202 2.741 1.715 4.5 1.83.626.042 1.036.057 4.606.057s3.98-.015 4.606-.057c1.759-.116 3.298-.629 4.5-1.83 1.202-1.203 1.715-2.741 1.83-4.5.042-.626.057-1.036.057-4.606s-.015-3.98-.057-4.606c-.116-1.759-.629-3.298-1.83-4.5-1.203-1.202-2.741-1.715-4.5-1.83C16.345.015 15.935 0 12 0zm0 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.163a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.882 1.44 1.44 0 0 0 0 2.882z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Your Name. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
