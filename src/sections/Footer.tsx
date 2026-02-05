import { Instagram, Linkedin, MessageCircle, Heart } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/tu_usuario' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/tu-perfil' },
  { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/34123456789' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Tu Nombre.</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en React
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
