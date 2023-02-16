import AboutMe from './components/AboutMe/AboutMe';
import Contacts from './components/Contacts/Contacts';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Status from './components/Status/Status';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-primary max-w-[1500px] mx-auto">
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Status />
        <Portfolio />
        <Contacts />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
