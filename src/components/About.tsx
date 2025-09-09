import React from 'react';
import { Code, Database, Smartphone, Globe } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "Desenvolvimento Frontend",
      description: "Criação de interfaces modernas e responsivas com React, Vue.js e tecnologias de ponta."
    },
    {
      icon: <Database className="text-green-600" size={32} />,
      title: "Desenvolvimento Backend",
      description: "APIs robustas e escaláveis com Node.js, Python e bancos de dados relacionais e NoSQL."
    },
    {
      icon: <Smartphone className="text-purple-600" size={32} />,
      title: "Aplicações Mobile",
      description: "Apps nativos e híbridos para iOS e Android com React Native e Flutter."
    },
    {
      icon: <Globe className="text-orange-600" size={32} />,
      title: "Soluções Full Stack",
      description: "Projetos completos do conceito ao deploy, incluindo DevOps e cloud computing."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Desenvolvedor apaixonado por tecnologia com mais de 3 anos de experiência criando soluções digitais inovadoras.
          </p>
        </div>

        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sou um desenvolvedor Full Stack com forte experiência em tecnologias modernas como React, Node.js, Python e cloud computing. Minha jornada na programação começou há mais de 3 anos, e desde então venho me dedicando a criar soluções digitais que fazem a diferença.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Trabalho tanto com startups quanto empresas estabelecidas, ajudando-as a digitalizar seus processos, criar produtos inovadores e otimizar suas operações através da tecnologia. Sou apaixonado por código limpo, boas práticas de desenvolvimento e sempre busco estar atualizado com as últimas tendências do mercado.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-500">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3+</div>
                <div className="text-sm text-gray-500">Anos Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
                <div className="text-sm text-gray-500">Clientes</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ruan Vieira trabalhando"
                className="w-96 h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Meus Serviços
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;