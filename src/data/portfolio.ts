import { Project, Skill, Social } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com painel administrativo, pagamentos integrados e gestão de estoque.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações push.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Firebase", "Material-UI", "PWA"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Dashboard interativo para visualização de dados com gráficos dinâmicos e relatórios personalizados.",
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: false
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description: "Aplicativo móvel para serviços bancários com segurança avançada e interface intuitiva.",
    image: "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "TypeScript", "Redux", "Biometric Auth"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: false
  }
];

export const skills: Skill[] = [
  { id: 1, name: "React", level: 95, category: "frontend" },
  { id: 2, name: "TypeScript", level: 90, category: "frontend" },
  { id: 3, name: "Next.js", level: 88, category: "frontend" },
  { id: 4, name: "TailwindCSS", level: 92, category: "frontend" },
  { id: 5, name: "Node.js", level: 85, category: "backend" },
  { id: 6, name: "Python", level: 80, category: "backend" },
  { id: 7, name: "PostgreSQL", level: 82, category: "backend" },
  { id: 8, name: "MongoDB", level: 78, category: "backend" },
  { id: 9, name: "Docker", level: 75, category: "tools" },
  { id: 10, name: "Git", level: 90, category: "tools" },
  { id: 11, name: "AWS", level: 70, category: "tools" },
  { id: 12, name: "Figma", level: 85, category: "design" }
];

export const socials: Social[] = [
  { platform: "GitHub", url: "https://github.com", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { platform: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  { platform: "Instagram", url: "https://instagram.com", icon: "Instagram" }
];