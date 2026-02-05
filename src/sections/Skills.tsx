import { Code2, Layers, Database, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    id: 1,
    title: 'Frontend',
    icon: Code2,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 80 },
    ],
  },
  {
    id: 2,
    title: 'Backend',
    icon: Database,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    id: 3,
    title: 'DevOps & Cloud',
    icon: Layers,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD', level: 85 },
      { name: 'Kubernetes', level: 70 },
    ],
  },
  {
    id: 4,
    title: 'Herramientas',
    icon: Wrench,
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Figma', level: 80 },
      { name: 'Jest / Testing', level: 85 },
      { name: 'Agile / Scrum', level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
            <Code2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold">Habilidades Técnicas</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id} className="card-hover">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
