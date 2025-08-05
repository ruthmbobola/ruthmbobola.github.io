export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">Ruth Chansa</h3>
          <p className="text-gray-400 mb-6">Développeuse Web & Ingénieure Logiciel</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:ruthmbobola@gmail.com" 
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="tel:+243892235022" 
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
            >
              <i className="fas fa-phone"></i>
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          
          <p className="text-gray-500">© 2024 Ruth Chansa. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
