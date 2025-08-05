import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`sticky-nav fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => handleNavClick('home')}>
          Ruth Chansa
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {[
            { id: 'home', label: 'Accueil' },
            { id: 'about', label: 'À Propos' },
            { id: 'services', label: 'Services' },
            { id: 'portfolio', label: 'Portfolio' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`nav-link hover:text-primary transition-colors ${
                  activeSection === item.id ? 'text-primary font-semibold' : ''
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-2xl"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden mt-4 pb-4 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 text-center">
          {[
            { id: 'home', label: 'Accueil' },
            { id: 'about', label: 'À Propos' },
            { id: 'services', label: 'Services' },
            { id: 'portfolio', label: 'Portfolio' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`block py-2 hover:text-primary transition-colors ${
                  activeSection === item.id ? 'text-primary font-semibold' : ''
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
