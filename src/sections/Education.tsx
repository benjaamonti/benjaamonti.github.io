import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const education = [
  {
    id: 1,
    degree: 'Máster en Ingeniería de Software',
    school: 'Universidad Politécnica',
    location: 'Madrid, España',
    period: '2017 - 2018',
    description: 'Especialización en arquitectura de software y desarrollo de aplicaciones empresariales.',
  },
  {
    id: 2,
    degree: 'Grado en Ingeniería Informática',
    school: 'Universidad de Valencia',
    location: 'Valencia, España',
    period: '2013 - 2017',
    description: 'Formación integral en programación, bases de datos, redes y sistemas operativos.',
  },
];

const certifications = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2023',
  },
  {
    id: 2,
    name: 'Google Cloud Professional Developer',
    issuer: 'Google',
    year: '2022',
  },
  {
    id: 3,
    name: 'Scrum Master Certified',
    issuer: 'Scrum Alliance',
    year: '2021',
  },
];

export function Education() {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
            <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-3xl font-bold">Educación</h2>
        </div>
        
        <div className="space-y-6 mb-10">
          {education.map((edu) => (
            <Card key={edu.id} className="card-hover border-l-4 border-l-indigo-500">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school} • {edu.location}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-background px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
            <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <h2 className="text-2xl font-bold">Certificaciones</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <Card key={cert.id} className="card-hover">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
