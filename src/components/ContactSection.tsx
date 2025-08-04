import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigada por escolher o SAMBA! 💚"
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    title: "E-mail",
    content: "contato@sambabrecho.com.br",
    link: "mailto:contato@sambabrecho.com.br"
  }, {
    icon: Phone,
    title: "WhatsApp",
    content: "(48) 99999-9999",
    link: "https://wa.me/5511999999999"
  }, {
    icon: MapPin,
    title: "Localização",
    content: "Florianópolis, SC",
    link: "Rua Anita Garibaldi 159 Centro, Florianópolis, Santa Catarina 88010500"
  }, {
    icon: Instagram,
    title: "Instagram",
    content: "@sambabrechocolaborativo",
    link: "https://instagram.com/sambabrechocolaborativo"
  }];
  return <section id="contato" className="section-padding bg-gradient-subtle">
      <div className="container-samba">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
            Vamos conversar?
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Quer saber mais sobre uma peça? Tem uma dúvida? Ou simplesmente quer bater um papo sobre moda sustentável? 
            Estamos aqui para você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Outras formas de contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return <a key={index} href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''} className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-poppins font-medium text-foreground">
                          {info.title}
                        </h4>
                        <p className="font-poppins text-muted-foreground">
                          {info.content}
                        </p>
                      </div>
                    </a>;
              })}
              </div>
            </div>

            {/* Instagram Feed Placeholder */}
            <div className="bg-card rounded-3xl p-8 border border-border/50">
              <h4 className="font-playfair text-xl font-bold text-foreground mb-4 flex items-center">
                <Instagram className="w-5 h-5 mr-2 text-primary" />
                Siga nosso Instagram
              </h4>
              <p className="font-poppins text-muted-foreground mb-4">
                Acompanhe as novidades, bastidores e muito estilo no @sambabreu
              </p>
              
              {/* Instagram Grid Mockup */}
              <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => <div key={i} className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-primary/50" />
                  </div>)}
              </div>
              
              <a href="https://instagram.com/sambabreu" target="_blank" rel="noopener noreferrer" className="block w-full mt-4 btn-samba-outline text-center">
                Seguir @sambabreu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
