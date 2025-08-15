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
    <div className="min-h-screen" style={{ paddingTop: '60px', fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' }}>
      <Navbar />
      
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="mb-2" style={{ 
                color: '#38241D', 
                fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' 
              }}>
                <span style={{ fontWeight: '700', fontSize: '3rem' }}>E aí, </span>
                <span style={{ fontWeight: '700', fontSize: '2.5rem' }}>para onde vamos?</span>
              </h1>
              <p style={{ color: '#946354', fontSize: '1.1rem' }}>Olá, {user?.name?.split(' ')[0]}!</p>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                style={{ 
                  background: 'white',
                  color: '#38241D',
                  borderRadius: '9999px',
                  border: '1px solid rgba(56, 36, 29, 0.15)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  height: '40px',
                  padding: '0 16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'}
                onMouseOut={(e) => e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)'}
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
          <div className="mb-8 flex items-center justify-center gap-6 px-4 md:px-0">
            <div 
              className="flex items-center shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #AF897A, #936253)',
                borderRadius: '12px',
                height: '44px',
                paddingLeft: '12px',
                paddingRight: '12px',
                width: '680px'
              }}
            >
              <Search className="shrink-0 text-white opacity-80" size={16} style={{ marginRight: '12px' }} />
              <input
                type="text"
                placeholder="Buscar eventos, artistas, locais..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ 
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '14px',
                  fontWeight: '400',
                  fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
                }}
                className="search-input"
              />
            </div>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center transition-all hover:brightness-110 shrink-0"
              style={{
                background: '#51382e',
                color: 'white',
                borderRadius: '12px',
                height: '44px',
                width: '44px',
                border: 'none'
              }}
              title="Filtros"
            >
              <Filter size={18} />
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
        <section className="mb-16">
          <div className="mb-6">
            <h2 style={{ 
              color: 'white', 
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif',
              textAlign: 'left'
            }}>
              Eventos em São Paulo, SP
            </h2>
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%' }}></div>
          </div>
          
          <div className="flex overflow-x-auto pb-4" style={{ gap: '24px' }}>
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white overflow-hidden transition-all hover:scale-105 cursor-pointer flex flex-col"
                style={{ 
                  width: '280px',
                  height: '380px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onClick={() => navigate(`/event/${event.id}`)}
              >
                <div 
                  className="flex items-center justify-center text-gray-500 text-sm"
                  style={{ 
                    width: '100%',
                    height: '160px',
                    backgroundColor: '#F3F3F3',
                    borderRadius: '16px 16px 0 0',
                    flexShrink: 0
                  }}
                >
                  Espaço para foto
                </div>
                
                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ 
                      color: '#38241D', 
                      fontSize: '16px', 
                      fontWeight: '700',
                      lineHeight: '1.3',
                      marginBottom: '6px',
                      fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {event.title}
                    </h3>
                    <p style={{ 
                      color: '#666', 
                      fontSize: '13px',
                      fontWeight: '400',
                      marginBottom: '12px',
                      fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
                    }}>
                      {event.subtitle}
                    </p>
                    <div className="flex items-center gap-2" style={{ color: '#51382e', fontSize: '12px', marginBottom: '6px', fontWeight: '500', fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' }}>
                      <span style={{ color: '#936253' }}>📍</span>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: '#51382e', fontSize: '12px', fontWeight: '500', fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' }}>
                      <span style={{ color: '#936253' }}>📅</span>
                      <span>{event.date}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="text-white transition-all hover:brightness-110"
                    style={{ 
                      background: '#936253',
                      borderRadius: '12px',
                      border: 'none',
                      padding: '12px 0',
                      marginTop: '16px',
                      fontWeight: '600',
                      fontSize: '14px',
                      fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif',
                      width: '90%',
                      alignSelf: 'center',
                      height: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
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
          <div className="mb-6">
            <h2 style={{ 
              color: 'white', 
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif',
              textAlign: 'left'
            }}>
              Todos os eventos
            </h2>
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%' }}></div>
          </div>
          
          <div className="flex overflow-x-auto pb-4" style={{ gap: '24px' }}>
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white overflow-hidden transition-all hover:scale-105 cursor-pointer flex flex-col"
                style={{ 
                  width: '280px',
                  height: '380px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onClick={() => navigate(`/event/${event.id}`)}
              >
                <div 
                  className="flex items-center justify-center text-gray-500 text-sm"
                  style={{ 
                    width: '100%',
                    height: '160px',
                    backgroundColor: '#F3F3F3',
                    borderRadius: '16px 16px 0 0',
                    flexShrink: 0
                  }}
                >
                  Espaço para foto
                </div>
                
                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ 
                      color: '#38241D', 
                      fontSize: '16px', 
                      fontWeight: '700',
                      lineHeight: '1.3',
                      marginBottom: '6px',
                      fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {event.title}
                    </h3>
                    <p style={{ 
                      color: '#666', 
                      fontSize: '13px',
                      fontWeight: '400',
                      marginBottom: '12px',
                      fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
                    }}>
                      {event.subtitle}
                    </p>
                    <div className="flex items-center gap-2" style={{ color: '#51382e', fontSize: '12px', marginBottom: '6px', fontWeight: '500', fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' }}>
                      <span style={{ color: '#936253' }}>📍</span>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: '#51382e', fontSize: '12px', fontWeight: '500', fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' }}>
                      <span style={{ color: '#936253' }}>📅</span>
                      <span>{event.date}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="text-white transition-all hover:brightness-110"
                    style={{ 
                      background: '#936253',
                      borderRadius: '12px',
                      border: 'none',
                      padding: '12px 0',
                      marginTop: '16px',
                      fontWeight: '600',
                      fontSize: '14px',
                      fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif',
                      width: '90%',
                      alignSelf: 'center',
                      height: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
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