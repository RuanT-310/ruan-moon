import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured);

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meus Projetos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Uma seleção dos meus trabalhos mais recentes e impactantes, demonstrando diferentes tecnologias e soluções.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Filter className="inline-block mr-2" size={16} />
              Todos os Projetos
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                filter === 'featured'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Destaques
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleProjectClick(project.githubUrl)}
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      title="Ver código no GitHub"
                    >
                      <Github className="text-gray-800" size={20} />
                    </button>
                    <button
                      onClick={() => handleProjectClick(project.liveUrl)}
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      title="Ver projeto ao vivo"
                    >
                      <ExternalLink className="text-gray-800" size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      Destaque
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                  <button
                    onClick={() => handleProjectClick(project.githubUrl)}
                    className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Código
                  </button>
                  <button
                    onClick={() => handleProjectClick(project.liveUrl)}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;