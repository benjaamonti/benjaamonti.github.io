import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="inicio">
          <Hero />
        </div>
        <div id="experiencia">
          <Experience />
        </div>
        <div id="educacion">
          <Education />
        </div>
        <div id="habilidades">
          <Skills />
        </div>
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
