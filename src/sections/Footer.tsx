import {Mail, Linkedin, GitHub} from 'lucide-react';

const socialLinks = [
  { name: 'Mail', icon: Mail, url: 'mailto:benjamonti@protonmail.com' },
  { name: 'GitHub', icon: GitHub, url: 'https://github.com/benjaamonti' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/benja-monti-177848220' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Monti Benjamin.</span>
            <span className="flex items-center gap-1">
              Hecho en React.
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
