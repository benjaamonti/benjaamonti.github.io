import {Linkedin, Github, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const socialLinks = [
  {
    id: 1,
    name: 'Email',
    username: 'benjamonti@protonmail.com',
    icon: Mail,
    url: 'mailto:benjamonti@protonmail.com',
    color: 'from-violet-600 to-indigo-600', 
    bgColor: 'bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    id: 2,
    name: 'GitHub',
    username: 'benjaamonti',
    icon: Github,
    url: 'https://github.com/benjaamonti',
    color: 'from-slate-700 to-slate-900',
    bgColor: 'bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/30 dark:to-slate-800/30',
    iconColor: 'text-slate-700 dark:text-slate-400',
  },
  {
    id: 3,
    name: 'LinkedIn',
    username: 'benja-monti',
    icon: Linkedin,
    url: 'https://linkedin.com/in/benja-monti-177848220',
    color: 'from-blue-600 to-blue-700',
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
];

export function Contact() {
  return (
    <section id="contacto" className="py-16 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? 
            No dudes en contactarme a través de cualquiera de estos canales.
          </p>
        </div>
        
        {/* Grid adjusted for 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className={`card-hover h-full ${social.bgColor} border-0`}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{social.name}</h3>
                  <p className={`text-sm ${social.iconColor} font-medium`}>
                    {social.username}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${social.color} text-white`}>
                      {social.name === 'Email' ? 'Enviar correo →' : 'Visitar perfil →'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
