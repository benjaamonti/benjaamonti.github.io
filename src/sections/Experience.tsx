import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const experiences = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Empresa Tecnológica S.L.',
    location: 'Madrid, España',
    period: '2022 - Presente',
    description: 'Desarrollo de aplicaciones web escalables usando React, TypeScript y Next.js. Liderazgo técnico de un equipo de 5 desarrolladores. Implementación de CI/CD y mejores prácticas de código.',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Startup Innovadora',
    location: 'Barcelona, España',
    period: '2020 - 2022',
    description: 'Desarrollo end-to-end de productos digitales. Colaboración estrecha con equipos de diseño y producto. Optimización de rendimiento y experiencia de usuario.',
    skills: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 3,
    title: 'Junior Web Developer',
    company: 'Agencia Digital',
    location: 'Valencia, España',
    period: '2018 - 2020',
    description: 'Desarrollo de sitios web y aplicaciones para diversos clientes. Mantenimiento y actualización de proyectos existentes. Aprendizaje de metodologías ágiles.',
    skills: ['JavaScript', 'HTML/CSS', 'PHP', 'WordPress', 'jQuery'],
  },
];

export function Experience() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold">Experiencia Laboral</h2>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id} className="card-hover border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company} • {exp.location}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
