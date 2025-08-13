import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Calendar, MapPin, Clock, Users } from "lucide-react";
import Header from "../components/Header";
import Button from "../components/Button";

const EventDetail = () => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen bg-cultural-cream">
      <Header showNavigation />
      
      <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 hover:text-cultural-accent mb-6 transition-colors"
          style={{ color: '#38241D' }}
        >
          <ArrowLeft size={20} />
          Voltar
        </button>

        <div className="bg-white rounded-2xl shadow-cultural overflow-hidden">
          {/* Event Image */}
          <div className="relative h-80">
            <div 
              className="w-full h-full flex items-center justify-center text-white text-2xl"
              style={{ backgroundColor: '#936253' }}
            >
              ACT: NEW EPISODE
            </div>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
            
            {/* Action buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-3 rounded-full transition-colors"
                style={{ backgroundColor: 'rgba(56, 36, 29, 0.5)' }}
              >
                <Heart
                  size={20}
                  className={`${isFavorite ? 'text-red-500' : 'text-white'} transition-colors`}
                  fill={isFavorite ? '#ef4444' : 'none'}
                />
              </button>
              <button 
                className="p-3 rounded-full transition-colors"
                style={{ backgroundColor: 'rgba(56, 36, 29, 0.5)' }}
              >
                <Share2 size={20} className="text-white" />
              </button>
            </div>

            {/* Event title overlay */}
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm opacity-90 mb-1">2024 & KANG DANIEL LATIN TOUR</p>
              <h1 className="text-3xl font-bold mb-2">ACT:</h1>
              <h2 className="text-2xl font-light">NEW EPISODE</h2>
            </div>
          </div>

          {/* Event Details */}
          <div className="p-6 space-y-6">
            {/* Date and Time */}
            <div className="flex items-start gap-4 p-4 text-white rounded-lg" style={{ backgroundColor: '#38241D' }}>
              <div>
                <p className="text-sm opacity-90">28 de Setembro de 2024 - Sábado às 20h30 (Início Carlos Henrique - NATAL)</p>
                <p className="text-sm opacity-75 mt-1">Evento 48h mais tarde na Suíça (GMT+2)</p>
              </div>
            </div>

            {/* Event Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="text-cultural-accent" size={20} />
                <div>
                  <p className="font-medium">Data</p>
                  <p className="text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>28 de Setembro, 2024</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-cultural-accent" size={20} />
                <div>
                  <p className="font-medium">Horário</p>
                  <p className="text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>20:30 - 23:00</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-cultural-accent" size={20} />
                <div>
                  <p className="font-medium">Local</p>
                  <p className="text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>Allianz Parque, São Paulo</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="text-cultural-accent" size={20} />
                <div>
                  <p className="font-medium">Capacidade</p>
                  <p className="text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>15.000 pessoas</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Sobre o Evento</h3>
              <p style={{ color: 'rgba(0,0,0,0.6)' }} className="leading-relaxed">
                Considerado o retorno da turnê mundial "ACT: NEW EPISODE", o evento promete uma experiência 
                única com tecnologia de ponta, cenografia inovadora e a energia inconfundível de Kang Daniel. 
                Preparados para uma noite inesquecível de música e performance artística.
              </p>
            </div>

            {/* Ticket Options */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Mais Detalhes</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">VIP FRONT STAGE</p>
                    <p className="text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>Inclui meet & greet</p>
                  </div>
                  <p className="font-bold text-cultural-accent">R$ 450,00</p>
                </div>
                
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">PISTA PREMIUM</p>
                    <p className="text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>Área VIP com bar</p>
                  </div>
                  <p className="font-bold text-cultural-accent">R$ 280,00</p>
                </div>

                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">ARQUIBANCADA</p>
                    <p className="text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>Vista privilegiada</p>
                  </div>
                  <p className="font-bold text-cultural-accent">R$ 120,00</p>
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