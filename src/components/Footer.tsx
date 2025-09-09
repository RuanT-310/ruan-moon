import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { socials } from '../data/portfolio';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">João Silva</h3>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras e experiências de usuário excepcionais.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Projetos', 'Skills', 'Contato'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-400">
                <span className="font-medium">Email:</span> joao.silva@email.com
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Telefone:</span> +55 (11) 99999-9999
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Localização:</span> São Paulo, Brasil
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 group"
                  title={social.platform}
                >
                  <div className="w-5 h-5 bg-gray-400 group-hover:bg-white transition-colors rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Feito com</span>
              <Heart className="text-red-500 mx-2" size={16} fill="currentColor" />
              <span>por João Silva • {new Date().getFullYear()}</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              <span>Desenvolvido com React, TypeScript & TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
        title="Voltar ao topo"
      >
        <ArrowUp size={20} className="group-hover:scale-110 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;