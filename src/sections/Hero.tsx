import { MapPin, Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center gap-6">
          {/* Avatar */}
          <Avatar className="w-32 h-32 border-4 border-white dark:border-slate-700 shadow-xl">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
            <AvatarFallback className="text-3xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              TU
            </AvatarFallback>
          </Avatar>
          
          {/* Name and Title */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Benjamin Monti</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Desarrollador Web Full Stack
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Tu Ciudad, País</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              <span>tu.email@ejemplo.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              <span>+34 123 456 789</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Apasionado desarrollador web con experiencia en crear aplicaciones modernas y escalables. 
            Especializado en React, TypeScript y Node.js. Siempre en busca de nuevos desafíos y 
            oportunidades para aprender y crecer profesionalmente.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="gap-2" size="lg">
              <Download className="w-4 h-4" />
              Descargar CV
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contacto">Contactar</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
