import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock event data
  const mockEvent = {
    id: 1,
    title: "Festival de Inverno de Campos do Jordão",
    ticketsUrl: "https://example.com/tickets",
    infoText: `O Festival de Inverno de Campos do Jordão é um dos mais importantes eventos de música clássica do Brasil.

📍 Local: Auditório Claudio Santoro
🗓 Data: 15 de Julho de 2024
⏰ Horário: 20h00
🎫 Tipo: Música Clássica

Este festival reúne os melhores músicos do país e do mundo em apresentações únicas. Uma experiência inesquecível para os amantes da música erudita.

Programação especial com orquestra sinfônica, solistas renomados e repertório clássico e contemporâneo.`
  };

  useEffect(() => {
    const loadEvent = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        setEvent(mockEvent);
        setIsFavorited(false);
      } catch (err) {
        setError("Não foi possível carregar este evento. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };
    loadEvent();
  }, [id]);

  const handleFavoriteToggle = () => {
    if (!isAuthenticated) {
      alert("Faça login para favoritar eventos.");
      return;
    }
    setIsFavorited(!isFavorited);
  };

  const handleTicketsClick = () => {
    if (event?.ticketsUrl) {
      window.open(event.ticketsUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen" style={{ paddingTop: '60px', fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' }}>
        <Navbar />
        <main style={{ background: 'linear-gradient(135deg, #AF897A, #936253)' }} className="min-h-screen fixed inset-0">
          <div className="mx-auto max-w-md px-5 py-8" style={{ marginTop: '60px' }}>
            <div className="bg-white rounded-t-[20px] animate-pulse">
              <div className="w-full bg-gray-300 rounded-t-[20px]" style={{ height: '35vh', aspectRatio: '16/9' }}></div>
              <div className="p-4">
                <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="flex gap-3">
                  <div className="h-11 bg-gray-300 rounded-full flex-1"></div>
                  <div className="h-11 bg-gray-300 rounded-full w-16"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen" style={{ paddingTop: '60px', fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' }}>
        <Navbar />
        <main style={{ background: 'linear-gradient(135deg, #AF897A, #936253)' }} className="min-h-screen fixed inset-0">
          <div className="mx-auto max-w-md px-5 py-8" style={{ marginTop: '60px' }}>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Tentar novamente
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif' }}>
      <Navbar />
      <main style={{ background: 'linear-gradient(135deg, #AF897A, #936253)' }} className="min-h-screen fixed inset-0 overflow-y-auto" style={{ paddingTop: '60px' }}>
        <div className="mx-auto max-w-md px-5 py-8">
          
          {/* Card principal */}
          <div className="bg-white rounded-t-[20px] overflow-hidden">
            
            {/* Imagem do evento */}
            <div className="w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center" style={{ height: '35vh', aspectRatio: '16/9', filter: 'saturate(0.8)' }}>
              <div className="text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Imagem do evento</p>
              </div>
            </div>
            
            {/* Conteúdo do card */}
            <div className="p-4">
              
              {/* Legenda */}
              <p className="text-center text-black text-sm mb-2" style={{ fontWeight: '400' }}>
                TRAÇO CULTURAL
              </p>
              
              {/* Título */}
              <h1 className="text-center text-black mb-3" style={{ fontSize: '22px', fontWeight: '700', lineHeight: '1.2' }}>
                {event.title}
              </h1>
              
              {/* Botões */}
              <div className="flex gap-3 justify-center mb-6">
                <button
                  onClick={handleTicketsClick}
                  className="text-white text-center transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #E8D0C0, #DCC4B0)',
                    borderRadius: '50px',
                    padding: '10px 20px',
                    fontSize: '13px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    minHeight: '40px',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    filter: 'brightness(1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #F0D8C8, #E4CCB8)';
                    e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #E8D0C0, #DCC4B0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  }}
                >
                  VER INGRESSOS
                </button>
                
                <button
                  onClick={handleFavoriteToggle}
                  className="transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
                  style={{
                    background: isFavorited ? 'linear-gradient(135deg, #F4A6A6, #E89999)' : 'linear-gradient(135deg, #E8D0C0, #DCC4B0)',
                    borderRadius: '12px',
                    width: '40px',
                    height: '40px',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = isFavorited ? 'linear-gradient(135deg, #F6B4B4, #EBA7A7)' : 'linear-gradient(135deg, #F0D8C8, #E4CCB8)';
                    e.target.querySelector('svg').style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = isFavorited ? 'linear-gradient(135deg, #F4A6A6, #E89999)' : 'linear-gradient(135deg, #E8D0C0, #DCC4B0)';
                    e.target.querySelector('svg').style.transform = 'scale(1)';
                  }}
                  onMouseDown={(e) => {
                    e.target.querySelector('svg').style.transform = 'scale(1.2)';
                    setTimeout(() => {
                      if (e.target.querySelector('svg')) {
                        e.target.querySelector('svg').style.transform = 'scale(1)';
                      }
                    }, 150);
                  }}
                  title="Favoritar evento"
                >
                  <svg 
                    className="w-5 h-5 transition-transform duration-200" 
                    viewBox="0 0 24 24" 
                    fill={isFavorited ? "#8B4444" : "none"} 
                    stroke="#8B4444" 
                    strokeWidth="2"
                    style={{ color: '#8B4444' }}
                  >
                    <path d="M12 21s-7.5-4.35-9.33-9.42C1.7 7.95 4.2 5 7.5 5c2 0 3.24 1.08 4.5 2.58C13.26 6.08 14.5 5 16.5 5 19.8 5 22.3 7.95 21.33 11.58 19.5 16.65 12 21 12 21z"/>
                  </svg>
                </button>
              </div>
              
            </div>
          </div>
          
          {/* Seção de informações */}
          <div className="bg-white" style={{ marginTop: '24px', padding: '20px', margin: '0 20px 20px 20px', borderRadius: '8px' }}>
            <h2 className="text-black text-center mb-4" style={{ fontSize: '20px', fontWeight: '700', textTransform: 'uppercase' }}>
              INFORMAÇÕES
            </h2>
            
            <div className="text-black text-center" style={{ fontSize: '16px', lineHeight: '1.7', fontFamily: 'Inter, Roboto, Poppins, sans-serif', fontWeight: '400' }}>
              <p className="whitespace-pre-wrap" dangerouslySetInnerHTML={{
                __html: event.infoText
                  .replace(/(📍 Local:|Local:)/g, '<strong style="color: #8B4444;">$1</strong>')
                  .replace(/(🗓 Data:|Data:)/g, '<strong style="color: #8B4444;">$1</strong>')
                  .replace(/(⏰ Horário:|Horário:)/g, '<strong style="color: #8B4444;">$1</strong>')
                  .replace(/(🎫 Tipo:|Tipo:)/g, '<strong style="color: #8B4444;">$1</strong>')
              }}></p>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default EventDetails;