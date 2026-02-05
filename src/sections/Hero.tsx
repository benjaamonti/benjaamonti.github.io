import { MapPin, Mail, Download } from 'lucide-react';
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
            <AvatarImage src="https://avatars.githubusercontent.com/u/150205790" alt="Profile Picture" />
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
              Estudiante Universitario Avanzado
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Tandil, Buenos Aires, Argentina</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              <span>benjamonti@protonmail.com</span>
            </div>
          </div>
                    
          {/* Description */}
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Ingeniero de software en formación continua, con capacidad para transitar desde el diseño de arquitectura (UML) hasta la implementación de bajo nivel en C++. 
            Entiendo el flujo de datos desde los flip-flops y la división de frecuencias hasta las funciones de ventana en SQL. 
            Mi perfil es para equipos que necesitan a alguien que comprenda cómo se mueve cada bit y no tenga miedo de auditar permisos, 
            corregir sintaxis de otros o rediseñar una arquitectura desde cero para que sea escalablema.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
           <Button className="gap-2" size="lg" asChild>
              <a href="/src/media/curriculum.pdf" download="Monti_Benjamin_CV.pdf">
                <Download className="w-4 h-4" />
                Descargar CV
              </a>
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
