import { useState } from "react";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import Button from "../components/Button";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Festival de Inverno de Campos do Jordão",
      subtitle: "Música Clássica",
      date: "15 Jul 2024",
      location: "Auditório Claudio Santoro - SP"
    },
    {
      id: 2,
      title: "Espetáculo: O Rei Leão",
      subtitle: "Musical Teatral",
      date: "22 Jul 2024",
      location: "Teatro Renault - SP"
    },
    {
      id: 3,
      title: "Exposição: Arte Contemporânea Brasileira",
      subtitle: "Artes Visuais",
      date: "30 Jul 2024",
      location: "Pinacoteca do Estado - SP"
    },
    {
      id: 4,
      title: "Show: Gilberto Gil",
      subtitle: "MPB",
      date: "05 Ago 2024",
      location: "Espaço das Américas - SP"
    },
    {
      id: 5,
      title: "Peça: Hamlet",
      subtitle: "Teatro Clássico",
      date: "12 Ago 2024",
      location: "Teatro Municipal - SP"
    },
    {
      id: 6,
      title: "Festival de Jazz",
      subtitle: "Música Instrumental",
      date: "18 Ago 2024",
      location: "Blue Note São Paulo - SP"
    }
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: '70px' }}>
      <Navbar />
      
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#38241D' }}>Favoritos</h1>
          <p style={{ color: '#946354' }}>Seus eventos culturais salvos</p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favorites.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                subtitle={event.subtitle}
                date={event.date}
                location={event.location}
                isFavorite={true}
                onFavoriteToggle={() => removeFavorite(event.id)}
                size="medium"
              />
            ))}
          </div>
        ) : (
          <div className="card text-center py-16" style={{ maxWidth: 'none', margin: '0 auto' }}>
            <div className="text-6xl mb-4">💔</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#38241D' }}>
              Nenhum evento favoritado ainda
            </h3>
            <p className="mb-4" style={{ color: '#946354' }}>
              Explore eventos e adicione aos seus favoritos
            </p>
            <Button 
              onClick={() => window.location.href = '/dashboard'}
              className="btn btn-primary"
            >
              Explorar Eventos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;