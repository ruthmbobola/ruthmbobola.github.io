import { useEffect, useState } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useCounter from "@/hooks/useCounter";

export default function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const projectsCount = useCounter(hasAnimated ? 50 : 0, 2000);
  const clientsCount = useCounter(hasAnimated ? 25 : 0, 2000);
  const experienceCount = useCounter(hasAnimated ? 3 : 0, 2000);
  const satisfactionCount = useCounter(hasAnimated ? 98 : 0, 2000);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">À Propos de Moi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Salut, je suis Ruth Chansa — Un Développeur Web avec une Expertise Créative & des Années d'Expérience.
            </h3>
            
            <blockquote className="text-lg text-primary font-medium mb-6 italic border-l-4 border-primary pl-4">
              "Livrer un travail dans les délais et le budget qui répond aux exigences du client est ma devise."
            </blockquote>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Je vous aide à construire une marque pour votre entreprise à un prix abordable. 
              Des milliers de clients ont obtenu des résultats exceptionnels en travaillant avec moi. 
              Diplômée en génie logiciel, je me spécialise dans le développement web moderne et les solutions digitales innovantes.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope text-primary"></i>
                <span className="text-gray-600">ruthmbobola@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone text-primary"></i>
                <span className="text-gray-600">+243 89 2235022</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl card-hover">
              <div className="text-4xl font-bold text-primary mb-2">{projectsCount}+</div>
              <div className="text-gray-600 font-medium">Projets</div>
              <div className="text-gray-500 text-sm">Livrés</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl card-hover">
              <div className="text-4xl font-bold text-accent mb-2">{clientsCount}+</div>
              <div className="text-gray-600 font-medium">Clients</div>
              <div className="text-gray-500 text-sm">Satisfaits</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl card-hover">
              <div className="text-4xl font-bold text-purple-600 mb-2">{experienceCount}+</div>
              <div className="text-gray-600 font-medium">Années</div>
              <div className="text-gray-500 text-sm">d'Expérience</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl card-hover">
              <div className="text-4xl font-bold text-orange-600 mb-2">{satisfactionCount}%</div>
              <div className="text-gray-600 font-medium">Satisfaction</div>
              <div className="text-gray-500 text-sm">Client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
