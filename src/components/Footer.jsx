import React from "react";
import Logo from "./../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-white py-8 w-full">
      <div className="max-w-screen px-4 mx-auto">
        <img src={Logo} alt="ShariaLabs" className="mx-auto mb-4" />
        <div className="flex justify-center gap-4 mb-4">
          <a href="#" className="text-gray-600 hover:text-yellow-500">
            LinkedIn
          </a>
          <a href="#" className="text-gray-600 hover:text-yellow-500">
            Instagram
          </a>
        </div>
        <p className="text-gray-600 text-center">
          © 2025 ShariaLabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
