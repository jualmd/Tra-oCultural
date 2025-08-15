import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, MapPin, ChevronDown } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

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
    { code: "AC", name: "Acre" },
    { code: "AL", name: "Alagoas" },
    { code: "AP", name: "Amapá" },
    { code: "AM", name: "Amazonas" },
    { code: "BA", name: "Bahia" },
    { code: "CE", name: "Ceará" },
    { code: "DF", name: "Distrito Federal" },
    { code: "ES", name: "Espírito Santo" },
    { code: "GO", name: "Goiás" },
    { code: "MA", name: "Maranhão" },
    { code: "MT", name: "Mato Grosso" },
    { code: "MS", name: "Mato Grosso do Sul" },
    { code: "MG", name: "Minas Gerais" },
    { code: "PA", name: "Pará" },
    { code: "PB", name: "Paraíba" },
    { code: "PR", name: "Paraná" },
    { code: "PE", name: "Pernambuco" },
    { code: "PI", name: "Piauí" },
    { code: "RJ", name: "Rio de Janeiro" },
    { code: "RN", name: "Rio Grande do Norte" },
    { code: "RS", name: "Rio Grande do Sul" },
    { code: "RO", name: "Rondônia" },
    { code: "RR", name: "Roraima" },
    { code: "SC", name: "Santa Catarina" },
    { code: "SP", name: "São Paulo" },
    { code: "SE", name: "Sergipe" },
    { code: "TO", name: "Tocantins" }
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
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="mb-2" style={{ color: '#38241D', fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' }}>
                <span style={{ fontWeight: '700', fontSize: '3rem' }}>E aí, </span>
                <span style={{ fontWeight: '700', fontSize: '2.5rem' }}>para onde vamos?</span>
              </h1>
              <p style={{ color: '#946354', fontSize: '1.1rem' }}>Olá, {user?.name?.split(' ')[0]}!</p>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                className="inline-flex items-center gap-2 h-10 px-4 transition-all hover:shadow active:scale-98 focus:outline-none focus:ring-2"
                style={{ 
                  background: 'white',
                  color: '#38241D',
                  borderRadius: '9999px',
                  border: '1px solid rgba(56, 36, 29, 0.15)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  focusRingColor: '#38241D'
                }}
              >
                <MapPin size={16} style={{ opacity: '0.9' }} />
                <span className="font-medium">São Paulo, SP</span>
                <ChevronDown size={14} style={{ opacity: '0.7' }} />
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

          {/* Search Bar */}
          <div className="mb-8 flex flex-col md:flex-row items-center gap-2 justify-center px-4 md:px-0" style={{ fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' }}>
            <div 
              className="flex items-center shadow-lg w-full md:w-3/5"
              style={{
                background: 'linear-gradient(90deg, #AF897A, #936253)',
                borderRadius: '12px',
                height: '44px',
                paddingLeft: '12px',
                paddingRight: '12px'
              }}
            >
              <Search className="shrink-0 text-white opacity-80" size={16} style={{ marginRight: '12px' }} />
              <input
                type="text"
                placeholder="Buscar eventos, artistas, locais..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent text-white focus:outline-none"
                style={{ 
                  fontSize: '14px',
                  fontWeight: '400',
                  fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif',
                  color: 'white'
                }}
              />
            </div>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 font-medium transition-all hover:brightness-110"
              style={{
                background: '#51382e',
                color: 'white',
                borderRadius: '12px',
                height: '44px',
                border: 'none',
                marginLeft: '8px',
                fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
              }}
            >
              <Filter size={16} />
              Filtros
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-6">
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

        {/* Local Events */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 style={{ 
              color: 'white', 
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
            }}>
              Eventos em São Paulo, SP
            </h2>
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px', fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' }}>
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white overflow-hidden transition-all hover:scale-102 cursor-pointer flex flex-col"
                style={{ 
                  width: '100%',
                  maxWidth: '260px',
                  height: '340px',
                  borderRadius: '12px',
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.15)'
                }}
                onClick={() => navigate(`/event/${event.id}`)}
              >
                {/* Image Area */}
                <div 
                  className="w-full flex items-center justify-center text-gray-500 text-sm"
                  style={{ 
                    height: '160px',
                    backgroundColor: '#F3F3F3',
                    borderRadius: '12px 12px 0 0'
                  }}
                >
                  Espaço para foto
                </div>
                
                {/* Event Info */}
                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ 
                      color: '#38241D', 
                      fontSize: '16px', 
                      fontWeight: '600',
                      lineHeight: '1.2',
                      marginBottom: '4px',
                      fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
                    }}>
                      {event.title}
                    </h3>
                    <p style={{ 
                      color: '#666', 
                      fontSize: '12px',
                      fontWeight: '400',
                      marginBottom: '8px',
                      fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
                    }}>
                      {event.subtitle}
                    </p>
                    <div className="flex items-center gap-2" style={{ color: '#666', fontSize: '12px', marginBottom: '4px' }}>
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: '#666', fontSize: '12px' }}>
                      <span>📅</span>
                      <span>{event.date}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="w-full text-white transition-all hover:brightness-105"
                    style={{ 
                      background: '#936253',
                      borderRadius: '0 0 12px 12px',
                      border: 'none',
                      padding: '12px 0',
                      marginTop: '16px',
                      fontWeight: '500',
                      fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/event/${event.id}`);
                    }}
                  >
                    Ver mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Events */}
        <section>
          <div className="mb-4">
            <h2 style={{ 
              color: 'white', 
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
            }}>
              Todos os eventos
            </h2>
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px', fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' }}>
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white overflow-hidden transition-all hover:scale-102 cursor-pointer flex flex-col"
                style={{ 
                  width: '100%',
                  maxWidth: '260px',
                  height: '340px',
                  borderRadius: '12px',
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.15)'
                }}
                onClick={() => navigate(`/event/${event.id}`)}
              >
                {/* Image Area */}
                <div 
                  className="w-full flex items-center justify-center text-gray-500 text-sm"
                  style={{ 
                    height: '160px',
                    backgroundColor: '#F3F3F3',
                    borderRadius: '12px 12px 0 0'
                  }}
                >
                  Espaço para foto
                </div>
                
                {/* Event Info */}
                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ 
                      color: '#38241D', 
                      fontSize: '16px', 
                      fontWeight: '600',
                      lineHeight: '1.2',
                      marginBottom: '4px',
                      fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
                    }}>
                      {event.title}
                    </h3>
                    <p style={{ 
                      color: '#666', 
                      fontSize: '12px',
                      fontWeight: '400',
                      marginBottom: '8px',
                      fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
                    }}>
                      {event.subtitle}
                    </p>
                    <div className="flex items-center gap-2" style={{ color: '#666', fontSize: '12px', marginBottom: '4px' }}>
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: '#666', fontSize: '12px' }}>
                      <span>📅</span>
                      <span>{event.date}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="w-full text-white transition-all hover:brightness-105"
                    style={{ 
                      background: '#936253',
                      borderRadius: '0 0 12px 12px',
                      border: 'none',
                      padding: '12px 0',
                      marginTop: '16px',
                      fontWeight: '500',
                      fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/event/${event.id}`);
                    }}
                  >
                    Ver mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;