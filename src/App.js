import React from 'react';
import maria from './images/IMG_0372.jpeg';
import heroBg from './images/pexels-prasanthinturi-1051838.jpg';
import logoWhite from './images/MARIA-WHITE-LOGO.png';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(180, 159, 204, 0.6) 0%, rgba(255, 255, 255, 1) 100%)',
          }}
        />

        {/* Logo Top-Right */}
        <img
          src={logoWhite}
          alt="Maria's Healing Arts Logo"
          className="absolute top-6 right-6 w-28 md:w-30 lg:w-40 z-20"
        />

        {/* Hero Content */}
        <div className="relative z-10 bg-black bg-opacity-40 p-8 rounded text-center">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4 font-serif">
            Maria's Healing Arts
          </h1>
          <p className="text-lg md:text-xl text-gray-200 italic">
            Empowering Wellness Through Movement & Energy
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-shrink-0">
            <img
              src={maria}
              alt="Maria Hilgert Moore"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-[#b49fcc] shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          <div className="text-lg leading-relaxed max-w-2xl">
            <h2 className="text-3xl font-semibold mb-12 text-center border-b-2 border-[#b49fcc] inline-block pb-2">About Maria</h2>
            <p>
              With a lifelong passion for fitness and wellness, Maria brings a wealth of knowledge and energy to her practice. Certified in numerous disciplines including Pilates, Yoga, and Barre, she also offers dynamic instruction in Mat and Apparatus (Reformer) Pilates.
            </p>
            <p className="mt-4">
              Beyond the physical, Maria is also a skilled Sound Bath Practitioner and Reiki Master, providing holistic healing experiences. Whether you're looking for a challenging workout, therapeutic movement, or a moment of deep relaxation, Maria’s diverse offerings have you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Offerings</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-lg">
            <li>Yoga-Based Movements</li>
            <li>Yoga Therapeutics</li>
            <li>Integrated Mind-Body Practices</li>
            <li>Mat Pilates</li>
            <li>Apparatus Pilates</li>
            <li>Barre</li>
            <li>Sound Bath Healing</li>
            <li>Energy Healing / Quantum Healing</li>
            <li>Meditation & Breath Work</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-2">Email: <a href="mailto:hello@mariashealingarts.com" className="text-purple-600">hello@mariashealingarts.com</a></p>
        <p className="text-lg mb-2">Instagram: <a href="https://www.instagram.com/maria_hilgert_moore" className="text-purple-600" target="_blank" rel="noopener noreferrer">@maria_hilgert_moore</a></p>
        <p className="text-lg">Facebook: <a href="https://www.facebook.com/profile.php?id=100018379862757" className="text-purple-600" target="_blank" rel="noopener noreferrer">Maria Hilgert Moore</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Maria's Healing Arts. All rights reserved. | Designed &amp; Developed by <span><a href='https://lfxmedia.io' target='_blank' className="text-lavender">LFX Media</a></span></p>
      </footer>
    </div>
  );
}
