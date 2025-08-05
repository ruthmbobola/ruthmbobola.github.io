import useTypewriter from "@/hooks/useTypewriter";

export default function Hero() {
  const typewriterText = useTypewriter("Je suis Développeuse Web.", 100, 2000);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Professional photo */}
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
            alt="Ruth Chansa - Développeuse Web" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 object-cover shadow-2xl border-4 border-white"
          />
          
          <div className="text-lg md:text-xl text-gray-600 mb-4">
            <span className="typing-animation inline-block min-h-[1.5em]">
              {typewriterText}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bonjour, je suis <span className="gradient-text">Ruth Chansa</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ingénieure logiciel passionnée, basée en République Démocratique du Congo. 
            Je transforme vos idées en solutions digitales innovantes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              En Savoir Plus
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Contactez-moi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
