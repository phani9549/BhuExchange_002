
import React from "react";
import dynamic from "next/dynamic";

const VantaGlobe = dynamic(() => import("../components/VantaGlobe"), { ssr: false });

export default function LandingPage() {
  return (
    <div className="min-h-screen text-blue-900 font-sans relative overflow-hidden">
      <VantaGlobe />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10">
        <header className="text-white py-10 text-center shadow-md">
          <h1 className="text-5xl font-bold">BhuExchange</h1>
          <p className="text-lg mt-3">India's First Real-Time Real Estate Exchange Platform</p>
          <div className="mt-6 space-x-4">
            <a href="#" className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-6 rounded-xl shadow-md transition">Get Early Access</a>
            <a href="#" className="bg-white hover:bg-blue-50 text-blue-900 font-semibold py-2 px-6 rounded-xl shadow-md transition">Request Pitch Deck</a>
          </div>
        </header>

        <main className="px-6 py-12 max-w-5xl mx-auto">
          <section className="text-center mb-12 text-white">
            <h2 className="text-3xl font-bold text-green-300 mb-4">Why BhuExchange?</h2>
            <p className="text-lg">We make property buying and selling transparent, secure, and real-time. Just like stocks — but for real estate.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left">
              <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">🔒 Verified Listings</h3>
                <p>Every property is legally vetted and authenticated before being listed.</p>
              </div>
              <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">📈 Live Market Pricing</h3>
                <p>Dynamic bid/ask system shows you real-time value. No hidden costs, no guesswork.</p>
              </div>
              <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">🛡️ Escrow Protection</h3>
                <p>Your money is safe until legal and transaction processes are complete.</p>
              </div>
              <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">⚖️ Legal Title Clarity</h3>
                <p>Automated title check and legal due diligence done in the background.</p>
              </div>
            </div>
          </section>

          <section className="text-center bg-white bg-opacity-95 p-10 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-green-700 mb-3">Our Mission</h2>
            <p className="text-lg mb-4">To empower every Indian to trade land with trust. We’re here to eliminate fraud, middlemen, and uncertainty in property deals.</p>
            <blockquote className="italic text-blue-800">“I was tired of fraud, delays, and shady deals. So I decided to build the solution India deserves.”</blockquote>
            <p className="mt-2 font-semibold">— Phanindra Reddy, Founder & CEO</p>
          </section>

          <section className="text-center text-white mt-16">
            <h2 className="text-2xl font-bold mb-2">🚀 Our Impact</h2>
            <p className="text-lg">🏡 ₹127 Cr worth of properties tokenized</p>
            <p className="text-lg">👥 1,200+ verified early users</p>
          </section>

          <section className="text-center text-white mt-16">
            <h2 className="text-2xl font-bold mb-4">🏆 Featured In</h2>
            <div className="flex flex-wrap justify-center gap-8 opacity-90">
              <img src="/images/etnow.png" alt="ET Now" className="h-10" />
              <img src="/images/yourstory.png" alt="YourStory" className="h-10" />
              <img src="/images/inc42.png" alt="Inc42" className="h-10" />
            </div>
          </section>
        </main>

        <footer className="text-center text-white bg-blue-900 py-4 mt-12">
          <p>© 2025 BhuExchange Technologies Pvt. Ltd. | Built with ❤️ by Manu & Phanindra</p>
        </footer>
      </div>
    </div>
  );
}
