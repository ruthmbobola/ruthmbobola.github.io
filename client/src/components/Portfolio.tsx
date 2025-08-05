import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Plateforme E-commerce",
      category: "web",
      categoryLabel: "Développement Web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "text-primary"
    },
    {
      id: 2,
      title: "Site Web Corporate",
      category: "web",
      categoryLabel: "Développement Web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "text-primary"
    },
    {
      id: 3,
      title: "Plateforme LMS",
      category: "web",
      categoryLabel: "Éducation Digitale",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "text-primary"
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      category: "web",
      categoryLabel: "Développement Web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "text-primary"
    },
    {
      id: 5,
      title: "API Backend",
      category: "backend",
      categoryLabel: "Solutions Backend",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "text-red-600"
    },
    {
      id: 6,
      title: "Base de Données",
      category: "backend",
      categoryLabel: "Solutions Backend",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "text-red-600"
    }
  ];

  const filters = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web" },
    { id: "backend", label: "Backend" }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openModal = (image: string) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary font-semibold mb-2">Mon Travail</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projets</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        {/* Portfolio Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`portfolio-filter px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'active'
                  : 'bg-gray-100 hover:bg-primary hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item card-hover bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => openModal(item.image)}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className={`font-medium ${item.categoryColor}`}>{item.categoryLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="modal show" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Portfolio Item" className="w-full h-auto" />
          </div>
        </div>
      )}
    </section>
  );
}
