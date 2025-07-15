import React from 'react';
import { Github } from 'lucide-react';
import animesBlog from '../assets/mock/animesBlog.png';
import topspots from '../assets/mock/topspots.png';
import pomodoro from '../assets/mock/pomodoro.png';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.animeBlog.title'),
      description: t('projects.animeBlog.description'),
      image: animesBlog,
      tags: ['Angular', 'Typescript'],
      githubUrl: 'https://github.com/GiuliannaRibeiro/Animes-Blog',
      liveUrl: '',
    },
    {
      title: t('projects.topSpots.title'),
      description: t('projects.topSpots.description'),
      image: topspots,
      tags: ['Angular', 'TypeScript', 'Dockerfile', 'OAuth2', 'Google Login', 'JSON Server', 'TailwindCSS'],
      githubUrl: 'https://github.com/GiuliannaRibeiro/topSpots',
      liveUrl: '',
    },
    {
      title: t('projects.PomodoroStudies.title'),
      description: t('projects.PomodoroStudies.description'),
      image: pomodoro,
      tags: ['React', 'TypeScript'],
      githubUrl: 'https://github.com/GiuliannaRibeiro/Pomodoro-Studies',
      liveUrl: '',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          {t('projects.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <Github size={20} />
          <span>
            {t('projects.viewCode')}
          </span>
        </a>
        {/* <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <ExternalLink size={20} />
          <span>
            {t('projects.viewDemo')}
          </span>
        </a> */}
      </div>
    </div>
  </div>
);

export default Projects;