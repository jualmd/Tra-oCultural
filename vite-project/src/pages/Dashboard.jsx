import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, MapPin } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("SP");

  const states = [
    "SP", "RJ", "MG", "RS", "PR", "SC", "BA", "GO", "PE", "CE"
  ];

  const featuredEvents = [
    {
      id: 1,
      title: "Teatro Coisa - Principais Estreias",
      subtitle: "Musical",
      location: "Teatro Municipal - SP",
      date: "15 Nov 2024"
    },
    {
      id: 2,
      title: "KANG DANIEL EM SÃO PAULO",
      subtitle: "ACT: NEW EPISODE",
      location: "Allianz Parque - SP",
      date: "28 Set 2024"
    },
    {
      id: 3,
      title: "CHICO&MESTRE",
      subtitle: "Show Musical",
      location: "Casa de Shows - SP",
      date: "20 Nov 2024"
    }
  ];

  const allEvents = [
    {
      id: 4,
      title: "PAPO2000 | Jose 2000 & Caju",
      subtitle: "Música eletrônica",
      location: "Club Aurora - SP",
      date: "12 Dez 2024"
    },
    {
      id: 5,
      title: "DJ CIA Sunset Deep House Party",
      subtitle: "Electronic Music",
      location: "Rooftop Bar - RJ",
      date: "18 Dez 2024"
    },
    {
      id: 6,
      title: "Show de Otayam Tamabitex",
      subtitle: "Música em São Paulo",
      location: "Espaço das Américas - SP",
      date: "25 Dez 2024"
    }
  ];

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "all" || event.location.includes(selectedState);
    return matchesSearch && matchesState;
  });

  return (
    <div className="min-h-screen" style={{ paddingTop: '80px' }}>
      <Navbar />
      
      <div className="container mx-auto p-6">
        {/* Welcome Section */}
        <div className="card mb-8 fade-in" style={{ maxWidth: 'none', margin: '0 auto 2rem' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2" style={{ color: '#38241D' }}>
                Olá, {user?.name?.split(' ')[0]}! 👋
              </h1>
              <p style={{ color: '#946354' }}>Para onde vamos hoje?</p>
            </div>
            <div className="flex items-center gap-2" style={{ color: '#946354' }}>
              <MapPin size={20} />
              <span>{user?.location || "São Paulo, SP"}</span>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-4 h-5 w-5" style={{ color: '#946354' }} />
                <input
                  type="text"
                  placeholder="Buscar eventos, artistas, locais..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input"
                  style={{ paddingLeft: '3rem' }}
                />
              </div>
              <button className="btn btn-outline flex items-center gap-2">
                <Filter size={16} />
                Filtros
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>Estado</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="input"
                >
                  <option value="all">Todos os estados</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>Período</label>
                <select className="input">
                  <option value="all">Qualquer período</option>
                  <option value="week">Esta semana</option>
                  <option value="month">Este mês</option>
                  <option value="year">Este ano</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Events */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: '#38241D' }}>Eventos em Destaque</h2>
            <span style={{ color: '#946354' }}>Na sua região</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                subtitle={event.subtitle}
                location={event.location}
                date={event.date}
                onClick={() => navigate('/event-detail')}
                size="large"
              />
            ))}
          </div>
        </section>

        {/* All Events */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: '#38241D' }}>
              Todos os Eventos
              {filteredEvents.length !== allEvents.length && (
                <span className="text-lg font-normal ml-2" style={{ color: '#946354' }}>
                  ({filteredEvents.length} encontrados)
                </span>
              )}
            </h2>
          </div>
          
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  subtitle={event.subtitle}
                  location={event.location}
                  date={event.date}
                  onClick={() => navigate('/event-detail')}
                  size="medium"
                />
              ))}
            </div>
          ) : (
            <div className="card text-center py-12" style={{ maxWidth: 'none', margin: '0 auto' }}>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#38241D' }}>Nenhum evento encontrado</h3>
              <p className="mb-4" style={{ color: '#946354' }}>
                Tente ajustar os filtros ou buscar por outros termos
              </p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedState("all");
                }}
                className="btn btn-outline"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;