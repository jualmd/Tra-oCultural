import { useState } from "react";
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import Button from "../components/Button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "CHICO&MESTRE",
      subtitle: "Show Musical",
      date: "15 Nov 2024",
      location: "Teatro Municipal"
    },
    {
      id: 2,
      title: "QR PARA AMAR SÓ BAGUNÇA",
      subtitle: "Comédia Teatral",
      date: "22 Nov 2024",
      location: "Teatro do Riso"
    },
    {
      id: 3,
      title: "Show de Otayam Tamabitex",
      subtitle: "Música em São Paulo",
      date: "30 Nov 2024",
      location: "Espaço das Américas"
    },
    {
      id: 4,
      title: "KANG DANIEL EM SÃO PAULO",
      subtitle: "ACT: NEW EPISODE",
      date: "28 Set 2024",
      location: "Allianz Parque"
    }
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <div className="min-h-screen bg-cultural-cream">
      <Header showNavigation />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#38241D' }}>Favoritos</h1>
          <p style={{ color: 'rgba(56, 36, 29, 0.7)' }}>Seus eventos culturais salvos</p>
        </div>

        <Tabs defaultValue="eventos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="eventos">
              Eventos
            </TabsTrigger>
            <TabsTrigger value="artistas">
              Artistas
            </TabsTrigger>
            <TabsTrigger value="locais">
              Locais
            </TabsTrigger>
          </TabsList>

          <TabsContent value="eventos">
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
              <div className="text-center py-16">
                <p className="text-lg mb-4" style={{ color: 'rgba(56, 36, 29, 0.5)' }}>
                  Nenhum evento favoritado ainda
                </p>
                <Button 
                  onClick={() => window.location.href = '/dashboard'}
                  style={{ backgroundColor: '#38241D', color: 'white' }}
                >
                  Explorar Eventos
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="artistas">
            <div className="text-center py-16">
              <p className="text-lg mb-4" style={{ color: 'rgba(56, 36, 29, 0.5)' }}>
                Artistas favoritos aparecerão aqui
              </p>
            </div>
          </TabsContent>

          <TabsContent value="locais">
            <div className="text-center py-16">
              <p className="text-lg mb-4" style={{ color: 'rgba(56, 36, 29, 0.5)' }}>
                Locais favoritos aparecerão aqui
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Action buttons flutuantes */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <Button 
            className="rounded-full px-6"
            style={{ backgroundColor: '#936253', color: 'white' }}
          >
            Ver favoritos
          </Button>
          <Button 
            variant="outline"
            className="rounded-full px-6"
            style={{ borderColor: '#38241D', color: '#38241D' }}
          >
            Mais feedbacks
          </Button>
          <Button 
            variant="outline"
            className="rounded-full px-6"
            style={{ borderColor: '#38241D', color: '#38241D' }}
          >
            Sair ou deletar conta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;