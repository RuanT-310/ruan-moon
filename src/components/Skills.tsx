import React from 'react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const skillCategories = {
    frontend: { name: 'Frontend', color: 'bg-blue-500', textColor: 'text-blue-600', bgColor: 'bg-blue-50' },
    backend: { name: 'Backend', color: 'bg-green-500', textColor: 'text-green-600', bgColor: 'bg-green-50' },
    tools: { name: 'Tools & DevOps', color: 'bg-purple-500', textColor: 'text-purple-600', bgColor: 'bg-purple-50' },
    design: { name: 'Design', color: 'bg-orange-500', textColor: 'text-orange-600', bgColor: 'bg-orange-50' }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Minhas Habilidades
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 rounded-full ${skillCategories[category as keyof typeof skillCategories].color} mr-3`}></div>
                <h3 className="text-xl font-bold text-gray-900">
                  {skillCategories[category as keyof typeof skillCategories].name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.id}
                    className={`px-3 py-2 ${skillCategories[skill.category].bgColor} ${skillCategories[skill.category].textColor} rounded-lg font-medium text-sm hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sempre Aprendendo
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A tecnologia evolui constantemente, e eu me mantenho atualizado através de cursos, projetos pessoais e contribuições para a comunidade open source. Atualmente estou aprofundando conhecimentos em inteligência artificial, arquitetura de microsserviços e desenvolvimento mobile.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['GraphQL', 'Docker', 'Kubernetes', 'Machine Learning', 'Flutter', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm font-medium border border-gray-100 hover:scale-105 transition-transform duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;