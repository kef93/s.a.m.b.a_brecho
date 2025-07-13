import { useState } from 'react';
import { Filter, Heart, ShoppingBag } from 'lucide-react';
import vintagePieces from '@/assets/vintage-pieces.jpg';

const CollectionSection = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Vintage', 'Minimalista', 'Artístico', 'Acessórios'];

  const pieces = [
    {
      id: 1,
      name: "Blazer Vintage 80s",
      category: "Vintage",
      price: "R$ 120",
      description: "Blazer de alfaiataria com ombreiras marcadas. Perfeito para um look executivo com personalidade.",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      curator: "Ana"
    },
    {
      id: 2,
      name: "Vestido Midi Fluido",
      category: "Minimalista",
      price: "R$ 85",
      description: "Corte minimalista em tecido fluido. Elegância atemporal para qualquer ocasião.",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
      curator: "Beatriz"
    },
    {
      id: 3,
      name: "Jaqueta Estampada",
      category: "Artístico",
      price: "R$ 95",
      description: "Peça única com estampa artística exclusiva. Para quem não tem medo de ousar.",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      curator: "Clara"
    },
    {
      id: 4,
      name: "Calça Wide Leg",
      category: "Minimalista",
      price: "R$ 75",
      description: "Modelagem ampla e confortável. O básico sofisticado que não pode faltar no guarda-roupa.",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      curator: "Beatriz"
    },
    {
      id: 5,
      name: "Bolsa Vintage Couro",
      category: "Acessórios",
      price: "R$ 65",
      description: "Bolsa de couro legítimo com patina natural. História e estilo em cada detalhe.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
      curator: "Ana"
    },
    {
      id: 6,
      name: "Camisa Estampada",
      category: "Artístico",
      price: "R$ 55",
      description: "Estampa exclusiva criada por artista local. Moda e arte se encontram nesta peça especial.",
      image: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=400&h=500&fit=crop",
      curator: "Clara"
    }
  ];

  const filteredPieces = activeFilter === 'Todos' 
    ? pieces 
    : pieces.filter(piece => piece.category === activeFilter);

  return (
    <section id="acervo" className="section-padding bg-muted/30">
      <div className="container-samba">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
            Nosso Acervo
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Peças selecionadas com curadoria afetiva. Cada item conta uma história e está pronto para criar a sua.
          </p>

          {/* Featured Image */}
          <div className="relative mb-12 max-w-4xl mx-auto">
            <img 
              src={vintagePieces}
              alt="Peças vintage selecionadas"
              className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-playfair text-xl font-medium">Curadoria com alma e propósito</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center text-muted-foreground mr-4">
            <Filter className="w-4 h-4 mr-2" />
            <span className="font-poppins text-sm">Filtrar por:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-poppins text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-warm'
                  : 'bg-card text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Pieces Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPieces.map((piece, index) => (
            <div 
              key={piece.id}
              className="group bg-card rounded-2xl overflow-hidden card-hover border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={piece.image}
                  alt={piece.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300">
                    <Heart className="w-5 h-5 text-primary" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Por {piece.curator}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-playfair text-xl font-bold text-foreground">
                    {piece.name}
                  </h3>
                  <span className="font-poppins text-lg font-bold text-primary">
                    {piece.price}
                  </span>
                </div>
                
                <p className="font-poppins text-sm text-muted-foreground mb-4 leading-relaxed">
                  {piece.description}
                </p>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-poppins text-sm font-medium hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Ver detalhes
                  </button>
                  <button className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-muted transition-colors duration-300">
                    <Heart className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-poppins text-muted-foreground mb-6">
            Quer ver mais peças exclusivas? Entre em contato conosco!
          </p>
          <button className="btn-samba">
            Ver coleção completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;