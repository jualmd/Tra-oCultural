import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Calendar, MapPin, Clock, Users, Star } from "lucide-react";
import Navbar from "../components/Navbar";

const EventDetail = () => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen" style={{ paddingTop: '70px' }}>
      <Navbar />
      
      <div className="container mx-auto p-6 max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-white bg-primary rounded-full px-4 py-2 transition-all hover:scale-105"
          style={{ backgroundColor: '#936253' }}
        >
          <ArrowLeft size={20} />
          Voltar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Image */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden mb-6">
              <div 
                className="w-full h-80 flex items-center justify-center text-white text-3xl font-bold"
                style={{ background: 'linear-gradient(135deg, #936253, #38241D)' }}
              >
                FESTIVAL DE INVERNO
              </div>
              
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-3 rounded-full transition-all hover:scale-110"
                  style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                >
                  <Heart
                    size={20}
                    className={`${isFavorite ? 'text-red-500' : 'text-white'} transition-colors`}
                    fill={isFavorite ? '#ef4444' : 'none'}
                  />
                </button>
                <button 
                  className="p-3 rounded-full transition-all hover:scale-110"
                  style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                >
                  <Share2 size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Event Description */}
            <div className="card" style={{ maxWidth: 'none', background: 'rgba(255, 255, 255, 0.95)' }}>
              <h1 className="text-3xl font-bold mb-4" style={{ color: '#38241D' }}>
                Festival de Inverno de Campos do Jordão 2024
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={16} className="text-yellow-400" fill="currentColor" />
                  ))}
                  <span className="ml-2 text-sm" style={{ color: '#946354' }}>4.8 (324 avaliações)</span>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6" style={{ color: '#38241D' }}>
                O Festival de Inverno de Campos do Jordão é um dos mais importantes eventos de música clássica do Brasil. 
                Durante três semanas, a cidade se transforma em um grande palco para apresentações de orquestras, 
                solistas e grupos de câmara nacionais e internacionais.
              </p>

              <p className="leading-relaxed" style={{ color: '#946354' }}>
                Este ano, o festival conta com a participação especial da Orquestra Sinfônica do Estado de São Paulo, 
                regida pelo maestro Marin Alsop, e apresentações solo do pianista Nelson Freire. 
                Uma experiência única para os amantes da música clássica.
              </p>
            </div>
          </div>

          {/* Event Info Sidebar */}
          <div className="space-y-6">
            {/* Event Details Card */}
            <div className="card" style={{ maxWidth: 'none', background: 'rgba(175, 137, 122, 0.95)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#38241D' }}>Detalhes do Evento</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar size={20} style={{ color: '#936253' }} />
                  <div>
                    <p className="font-medium" style={{ color: '#38241D' }}>Data</p>
                    <p className="text-sm" style={{ color: '#946354' }}>15 de Julho, 2024</p>
                    <p className="text-sm" style={{ color: '#946354' }}>Sábado</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={20} style={{ color: '#936253' }} />
                  <div>
                    <p className="font-medium" style={{ color: '#38241D' }}>Horário</p>
                    <p className="text-sm" style={{ color: '#946354' }}>20:00 - 22:30</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} style={{ color: '#936253' }} />
                  <div>
                    <p className="font-medium" style={{ color: '#38241D' }}>Local</p>
                    <p className="text-sm" style={{ color: '#946354' }}>Auditório Claudio Santoro</p>
                    <p className="text-sm" style={{ color: '#946354' }}>Campos do Jordão, SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users size={20} style={{ color: '#936253' }} />
                  <div>
                    <p className="font-medium" style={{ color: '#38241D' }}>Capacidade</p>
                    <p className="text-sm" style={{ color: '#946354' }}>800 pessoas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ticket Options */}
            <div className="card" style={{ maxWidth: 'none', background: 'rgba(255, 255, 255, 0.95)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#38241D' }}>Ingressos</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-medium" style={{ color: '#38241D' }}>Plateia Premium</p>
                    <p className="text-sm" style={{ color: '#946354' }}>Melhores lugares</p>
                  </div>
                  <p className="font-bold text-lg" style={{ color: '#936253' }}>R$ 120,00</p>
                </div>
                
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-medium" style={{ color: '#38241D' }}>Plateia</p>
                    <p className="text-sm" style={{ color: '#946354' }}>Vista padrão</p>
                  </div>
                  <p className="font-bold text-lg" style={{ color: '#936253' }}>R$ 80,00</p>
                </div>

                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-medium" style={{ color: '#38241D' }}>Balcão</p>
                    <p className="text-sm" style={{ color: '#946354' }}>Vista elevada</p>
                  </div>
                  <p className="font-bold text-lg" style={{ color: '#936253' }}>R$ 50,00</p>
                </div>
              </div>

              <button 
                className="btn btn-primary w-full mt-6"
                style={{ backgroundColor: '#936253' }}
              >
                Comprar Ingressos
              </button>
            </div>

            {/* Organizer Info */}
            <div className="card" style={{ maxWidth: 'none', background: 'rgba(175, 137, 122, 0.95)' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#38241D' }}>Organizador</h3>
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ background: '#936253' }}
                >
                  FI
                </div>
                <div>
                  <p className="font-medium" style={{ color: '#38241D' }}>Festival de Inverno</p>
                  <p className="text-sm" style={{ color: '#946354' }}>Organizador verificado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;