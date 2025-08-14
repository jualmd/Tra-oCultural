import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, MapPin, ChevronDown } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("SP");
  const [selectedLocation, setSelectedLocation] = useState("São Paulo, SP");
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const states = [
    { code: "SP", name: "São Paulo, SP" },
    { code: "RJ", name: "Rio de Janeiro, RJ" },
    { code: "MG", name: "Belo Horizonte, MG" },
    { code: "RS", name: "Porto Alegre, RS" },
    { code: "PR", name: "Curitiba, PR" },
    { code: "SC", name: "Florianópolis, SC" },
    { code: "BA", name: "Salvador, BA" },
    { code: "GO", name: "Goiânia, GO" },
    { code: "PE", name: "Recife, PE" },
    { code: "CE", name: "Fortaleza, CE" }
  ];

  const eventTypes = [
    { value: "all", label: "Todos" },
    { value: "teatro", label: "Teatro" },
    { value: "musica", label: "Música" },
    { value: "danca", label: "Dança" },
    { value: "cinema", label: "Cinema" },
    { value: "arte", label: "Arte" }
  ];

  const featuredEvents = [
    {
      id: 1,
      title: "Festival de Inverno de Campos do Jordão",
      subtitle: "Música Clássica",
      location: "Auditório Claudio Santoro - SP",
      date: "15 Jul 2024",
      price: "R$ 80,00",
      category: "musica"
    },
    {
      id: 2,
      title: "Espetáculo: O Rei Leão",
      subtitle: "Musical Teatral",
      location: "Teatro Renault - SP",
      date: "22 Jul 2024",
      price: "R$ 120,00",
      category: "teatro"
    },
    {
      id: 3,
      title: "Exposição: Arte Contemporânea Brasileira",
      subtitle: "Artes Visuais",
      location: "Pinacoteca do Estado - SP",
      date: "30 Jul 2024",
      price: "R$ 25,00",
      category: "arte"
    },
    {
      id: 4,
      title: "Show: Gilberto Gil",
      subtitle: "MPB",
      location: "Espaço das Américas - SP",
      date: "05 Ago 2024",
      price: "R$ 150,00",
      category: "musica"
    }
  ];

  const allEvents = [
    {
      id: 5,
      title: "Peça: Hamlet",
      subtitle: "Teatro Clássico",
      location: "Teatro Municipal - SP",
      date: "12 Ago 2024",
      category: "teatro"
    },
    {
      id: 6,
      title: "Festival de Jazz",
      subtitle: "Música Instrumental",
      location: "Blue Note São Paulo - SP",
      date: "18 Ago 2024",
      category: "musica"
    },
    {
      id: 7,
      title: "Balé: O Quebra-Nozes",
      subtitle: "Dança Clássica",
      location: "Theatro São Pedro - SP",
      date: "25 Ago 2024",
      category: "danca"
    }
  ];

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || event.category === selectedType;
    return matchesSearch && matchesType;
  });

  const handleLocationChange = (location) => {
    setSelectedLocation(location.name);
    setSelectedState(location.code);
    setShowLocationDropdown(false);
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: '70px' }}>
      <Navbar />
      
      <div className="container mx-auto p-6">
        {/* Welcome Section */}
        <div className="card mb-8 fade-in" style={{ maxWidth: 'none', margin: '0 auto 2rem' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="mb-2" style={{ color: '#38241D' }}>
                <span className="font-bonello text-5xl font-black">E aí, </span>
                <span className="font-londona text-4xl font-bold">para onde vamos?</span>
              </h1>
              <p style={{ color: '#946354', fontSize: '1.1rem' }}>Olá, {user?.name?.split(' ')[0]}!</p>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                className="flex items-center gap-2 p-3 rounded-lg border-2 transition-all hover:border-primary"
                style={{ color: '#946354', borderColor: 'rgba(147, 98, 83, 0.3)' }}
              >
                <MapPin size={20} />
                <span className="font-medium">{selectedLocation}</span>
                <ChevronDown size={16} />
              </button>
              
              {showLocationDropdown && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border z-50 min-w-48">
                  {states.map((state) => (
                    <button
                      key={state.code}
                      onClick={() => handleLocationChange(state)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      style={{ color: '#38241D' }}
                    >
                      {state.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: '#946354' }} />
                <input
                  type="text"
                  placeholder="Buscar eventos, artistas, locais..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-12"
                />
              </div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="btn btn-outline flex items-center gap-2"
              >
                <Filter size={16} />
                Filtros
              </button>
            </div>

            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>Estado</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="input"
                  >
                    <option value="all">Todos os estados</option>
                    {states.map(state => (
                      <option key={state.code} value={state.code}>{state.code}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>Período</label>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="input"
                  >
                    <option value="all">Qualquer período</option>
                    <option value="week">Esta semana</option>
                    <option value="month">Este mês</option>
                    <option value="year">Este ano</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>Tipo de evento</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="input"
                  >
                    {eventTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Featured Events */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: '#38241D' }}>Eventos em Destaque</h2>
            <span style={{ color: '#946354' }}>Na sua região</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => navigate('/event-detail')}
                className="card cursor-pointer transition-all hover:scale-105"
                style={{ 
                  maxWidth: 'none', 
                  height: '320px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '0',
                  overflow: 'hidden'
                }}
              >
                <div 
                  className="h-48 bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: 'linear-gradient(135deg, #936253, #38241D)' }}
                >
                  {event.category.toUpperCase()}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-2" style={{ color: '#38241D' }}>{event.title}</h3>
                  <p className="text-xs mb-2" style={{ color: '#946354' }}>{event.subtitle}</p>
                  <p className="text-xs mb-1" style={{ color: '#946354' }}>{event.date}</p>
                  <p className="text-xs mb-2" style={{ color: '#946354' }}>{event.location}</p>
                  {event.price && (
                    <p className="font-bold text-sm" style={{ color: '#936253' }}>{event.price}</p>
                  )}
                </div>
              </div>
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
                  setSelectedType("all");
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