export default function Services() {
  const services = [
    {
      id: "01",
      title: "Développement Web",
      description: "Création d'applications web modernes et responsives avec les dernières technologies. Solutions sur mesure pour vos besoins spécifiques.",
      icon: "fas fa-code",
      bgColor: "bg-blue-100",
      iconColor: "text-primary"
    },
    {
      id: "02",
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles cross-platform pour iOS et Android. Interface utilisateur intuitive et performance optimisée.",
      icon: "fas fa-mobile-alt",
      bgColor: "bg-green-100",
      iconColor: "text-accent"
    },
    {
      id: "03",
      title: "UI/UX Design",
      description: "Conception d'interfaces utilisateur attrayantes et expériences utilisateur optimales. Design centré sur l'utilisateur et les meilleures pratiques.",
      icon: "fas fa-palette",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: "04",
      title: "Solutions Backend",
      description: "Développement d'APIs robustes et architecture backend scalable. Gestion de bases de données et sécurité des applications.",
      icon: "fas fa-database",
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      id: "05",
      title: "Maintenance & Support",
      description: "Support technique continu et maintenance préventive de vos applications. Mises à jour régulières et optimisation des performances.",
      icon: "fas fa-cogs",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      id: "06",
      title: "Consulting Tech",
      description: "Conseil en stratégie technologique et architecture logicielle. Accompagnement dans vos projets de transformation digitale.",
      icon: "fas fa-rocket",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary font-semibold mb-2">Que fais-je ?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                  <i className={`${service.icon} service-icon ${service.iconColor} text-xl`}></i>
                </div>
                <span className="text-2xl font-bold text-gray-400">{service.id}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
