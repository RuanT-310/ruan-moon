import React from 'react';
import profileImage from '../assets/foto-perfil.jpg';
import profileReport from "../assets/ruan-vieira-curriculo.pdf"
import { ArrowDown, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
      link.href = profileReport; // Ajuste para o nome do seu PDF
      link.download = 'ruan-vieira-curriculo.pdf'; // O nome sugerido para o arquivo baixado
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 rounded-3xl bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 rounded-3xl bg-gradient-to-br from-indigo-400 to-pink-600 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Olá, eu sou
                <span className="block text-blue-600 mt-2">Ruan Vieira</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-6">
                Desenvolvedor Full Stack
              </p>
              <p className="text-lg text-gray-500 mb-8 max-w-2xl">
                Transformo ideias em experiências digitais incríveis. Especializado em React, Node.js e tecnologias modernas para criar aplicações web de alta performance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Mail className="mr-2" size={20} />
                Entre em Contato
              </button>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={profileImage}
                  alt="João Silva - Desenvolvedor Full Stack"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-3xl border-4 border-blue-200 animate-spin-slow opacity-30"></div>
              <div className="absolute -inset-4 rounded-3xl border-2 border-indigo-200 animate-spin-slow opacity-20" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;