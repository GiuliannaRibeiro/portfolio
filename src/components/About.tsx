import React from 'react';
import { Code, Globe, Server } from 'lucide-react';
import GiuliannaPhoto from '../assets/mock/me.jpeg';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">            
          {t('about.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={GiuliannaPhoto}
              alt="Giulianna's Photo"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              {t('about.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard
                icon={<Code size={24} />}
                title="Frontend"
                skills={['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'SCSS']}
              />
              <SkillCard
                icon={<Server size={24} />}
                title="Backend"
                skills={['Node.js', 'Express.js', 'PostgreSQL', 'RESTful APIs']}
              />
              <SkillCard
                icon={<Globe size={24} />}
                title={t('about.skills.other')}
                skills={['Git', 'Docker', 'Azure']}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) => (
  <div className="p-6 bg-gray-50 rounded-lg">
    <div className="flex items-center mb-4">
      <span className="text-indigo-600 mr-3">{icon}</span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-gray-600">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default About;