import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ruth from "@/assets/ruth.jpeg"; // en haut du fichier
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - in a real app, this would send to a backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message envoyé avec succès!",
        description: "Je vous répondrai bientôt.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Avez-vous des Questions ?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">N'hésitez pas à me contacter pour discuter de vos projets</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">ruthmbobola@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Téléphone</p>
                  <p className="text-gray-600">+243 89 2235022</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Localisation</p>
                  <p className="text-gray-600">République Démocratique du Congo</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <img
                  src={ruth}
                  alt="Ruth Chansa au travail"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom Complet</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
