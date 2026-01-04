import React from "react";

const VirtualRealityPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-blue-800 p-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center bg-black rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Text Content */}
        <div className="p-10 text-white md:w-1/2 flex flex-col items-start">
          <img src="https://via.placeholder.com/150" alt="Logo" className="mb-4" />
          <h2 className="text-6xl font-extrabold uppercase leading-tight">
            Virtual <span className="text-purple-400">Reality</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Experience the next generation of virtual interaction with cutting-edge VR technology. Dive into immersive experiences like never before.
          </p>
          <div className="mt-6">
            <a
              href="https://www.goldenarc.com"
              className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-300 transition"
            >
              www.goldenarc.com
            </a>
          </div>
        </div>

        {/* Right Side - Image Content */}
        <div className="md:w-1/2 flex items-center justify-center p-10 relative">
          <img
            src="https://via.placeholder.com/500x300"
            alt="VR Headset"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Floating Cube"
            className="absolute top-10 right-10 w-16 h-16 opacity-75 animate-bounce"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Floating Cube"
            className="absolute bottom-10 left-10 w-16 h-16 opacity-75 animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualRealityPage;