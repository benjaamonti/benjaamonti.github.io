import { Instagram, Linkedin, MessageCircle, Mail, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const socialLinks = [
  {
    id: 1,
    name: 'Instagram',
    username: '@tu_usuario',
    icon: Instagram,
    url: 'https://instagram.com/tu_usuario',
    color: 'from-purple-500 via-pink-500 to-orange-400',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
  {
    id: 2,
    name: 'WhatsApp',
    username: '+34 123 456 789',
    icon: MessageCircle,
    url: 'https://wa.me/34123456789',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    id: 3,
    name: 'LinkedIn',
    username: '/in/tu-perfil',
    icon: Linkedin,
    url: 'https://linkedin.com/in/tu-perfil',
    color: 'from-blue-600 to-blue-700',
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
];

export function Contact() {
  return (
    <section id="contacto" className="py-16 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? 
            No dudes en contactarme a través de cualquiera de estos canales.
          </p>
        </div>
        
        {/* Social Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
                      Visitar perfil →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        
        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Envíame un mensaje</h3>
            </div>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="¿De qué trata tu mensaje?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea 
                  id="message" 
                  placeholder="Escribe tu mensaje aquí..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full gap-2" size="lg">
                <Send className="w-4 h-4" />
                Enviar mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
