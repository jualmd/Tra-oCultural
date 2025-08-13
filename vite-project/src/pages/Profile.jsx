import { useState, useRef } from "react";
import { Camera, MapPin, Calendar, Settings, Edit } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

const Profile = () => {
  const { user, updateUser } = useAuth();
  const fileInputRef = useRef(null);
  const [showCreatorModal, setShowCreatorModal] = useState(false);
  const [creatorData, setCreatorData] = useState({
    companyName: "",
    description: "",
    phone: "",
    website: "",
    cnpj: ""
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateUser({ avatar: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBecomeCreator = (e) => {
    e.preventDefault();
    updateUser({ 
      isCreator: true,
      creatorData: creatorData,
      name: creatorData.companyName || user.name
    });
    setShowCreatorModal(false);
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: '70px' }}>
      <Navbar />
      
      <div className="container mx-auto p-6 max-w-6xl">
        {/* Profile Header Card */}
        <div className="card mb-8 fade-in" style={{ maxWidth: 'none', background: 'rgba(175, 137, 122, 0.95)' }}>
          <div className="flex flex-col items-center text-center mb-8">
            {/* Avatar - Maior e Quadrado */}
            <div className="relative mb-6">
              <div 
                className="w-48 h-48 flex items-center justify-center text-white text-4xl font-bold overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #936253, #38241D)',
                  borderRadius: '24px'
                }}
              >
                {user?.avatar ? (
                  <img src={user.avatar} alt={user?.name} className="w-full h-full object-cover" />
                ) : (
                  <span>{user?.name?.slice(0, 2).toUpperCase()}</span>
                )}
              </div>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                style={{ background: '#936253', boxShadow: '0 4px 12px rgba(147, 98, 83, 0.3)' }}
              >
                <Camera size={20} />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </div>

            {/* User Info */}
            <h1 className="text-3xl font-bold mb-2" style={{ color: '#38241D' }}>{user?.name}</h1>
            <p className="text-lg mb-4" style={{ color: '#946354' }}>@{user?.username}</p>
            
            {user?.isCreator && (
              <span 
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ background: 'rgba(56, 36, 29, 0.1)', color: '#38241D' }}
              >
                🎨 Criador de Eventos
              </span>
            )}

            <div className="flex items-center gap-6 text-sm mb-6" style={{ color: '#946354' }}>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{user?.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Membro desde Mar 2024</span>
              </div>
            </div>

            <a 
              href="/settings"
              className="btn btn-outline flex items-center gap-2"
            >
              <Settings size={16} />
              Configurações
            </a>
          </div>
        </div>

        {/* Stats Grid - 4 Cards Horizontais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card text-center" style={{ background: 'rgba(255, 255, 255, 0.95)', maxWidth: 'none' }}>
            <div className="text-3xl mb-3">❤️</div>
            <h3 className="text-lg font-bold mb-1" style={{ color: '#38241D' }}>Favoritos</h3>
            <p className="text-2xl font-bold mb-1" style={{ color: '#936253' }}>24</p>
            <p className="text-sm" style={{ color: '#946354' }}>eventos salvos</p>
          </div>

          <div className="card text-center" style={{ background: 'rgba(255, 255, 255, 0.95)', maxWidth: 'none' }}>
            <div className="text-3xl mb-3">📅</div>
            <h3 className="text-lg font-bold mb-1" style={{ color: '#38241D' }}>Próximos</h3>
            <p className="text-2xl font-bold mb-1" style={{ color: '#936253' }}>3</p>
            <p className="text-sm" style={{ color: '#946354' }}>eventos confirmados</p>
          </div>

          <div className="card text-center" style={{ background: 'rgba(255, 255, 255, 0.95)', maxWidth: 'none' }}>
            <div className="text-3xl mb-3">🗺️</div>
            <h3 className="text-lg font-bold mb-1" style={{ color: '#38241D' }}>Explorados</h3>
            <p className="text-2xl font-bold mb-1" style={{ color: '#936253' }}>7</p>
            <p className="text-sm" style={{ color: '#946354' }}>locais visitados</p>
          </div>

          <div className="card text-center" style={{ background: 'rgba(255, 255, 255, 0.95)', maxWidth: 'none' }}>
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="text-lg font-bold mb-1" style={{ color: '#38241D' }}>Reviews</h3>
            <p className="text-2xl font-bold mb-1" style={{ color: '#936253' }}>8</p>
            <p className="text-sm" style={{ color: '#946354' }}>avaliações feitas</p>
          </div>
        </div>

        {/* Become Creator CTA */}
        {!user?.isCreator && (
          <div 
            className="card mb-8"
            style={{ 
              background: 'linear-gradient(135deg, rgba(147, 98, 83, 0.1), rgba(175, 137, 122, 0.2))',
              border: '2px solid rgba(147, 98, 83, 0.3)',
              maxWidth: 'none'
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#38241D' }}>
                  🎨 Torne-se um Criador de Eventos
                </h3>
                <p style={{ color: '#946354' }}>
                  Crie e gerencie seus próprios eventos culturais. Alcance mais pessoas e compartilhe sua paixão pela cultura.
                </p>
              </div>
              <button
                onClick={() => setShowCreatorModal(true)}
                className="btn btn-primary ml-4"
              >
                Começar
              </button>
            </div>
          </div>
        )}

        {/* Recent Activity */}
        <div className="card" style={{ maxWidth: 'none', background: 'rgba(255, 255, 255, 0.95)' }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#38241D' }}>Atividade Recente</h2>
          <div className="space-y-4">
            {[
              { id: 1, type: "attended", event: "ACT: NEW EPISODE", date: "28 Set 2024", icon: "🎭" },
              { id: 2, type: "favorited", event: "CHICO&MESTRE", date: "15 Nov 2024", icon: "❤️" },
              { id: 3, type: "reviewed", event: "QR PARA AMAR", date: "22 Nov 2024", icon: "⭐" }
            ].map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 rounded-lg transition-all hover:scale-105"
                style={{ background: 'rgba(175, 137, 122, 0.1)' }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{activity.icon}</span>
                  <div>
                    <p className="font-medium" style={{ color: '#38241D' }}>
                      {activity.type === "attended" && "Participou de"}
                      {activity.type === "favorited" && "Favoritou"}
                      {activity.type === "reviewed" && "Avaliou"}
                      <span className="font-bold"> {activity.event}</span>
                    </p>
                    <p className="text-sm" style={{ color: '#946354' }}>{activity.date}</p>
                  </div>
                </div>
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ background: 'rgba(147, 98, 83, 0.2)', color: '#38241D' }}
                >
                  {activity.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Creator Modal */}
      <Modal
        isOpen={showCreatorModal}
        onClose={() => setShowCreatorModal(false)}
        title="Tornar-se Criador de Eventos"
      >
        <form onSubmit={handleBecomeCreator} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>Nome da Empresa/Organização</label>
            <input
              type="text"
              className="input"
              value={creatorData.companyName}
              onChange={(e) => setCreatorData({...creatorData, companyName: e.target.value})}
              placeholder="Nome que aparecerá nos eventos"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>Descrição</label>
            <textarea
              className="input"
              rows="3"
              value={creatorData.description}
              onChange={(e) => setCreatorData({...creatorData, description: e.target.value})}
              placeholder="Descreva sua empresa e tipo de eventos"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>Telefone</label>
              <input
                type="tel"
                className="input"
                value={creatorData.phone}
                onChange={(e) => setCreatorData({...creatorData, phone: e.target.value})}
                placeholder="(11) 99999-9999"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>CNPJ (opcional)</label>
              <input
                type="text"
                className="input"
                value={creatorData.cnpj}
                onChange={(e) => setCreatorData({...creatorData, cnpj: e.target.value})}
                placeholder="00.000.000/0001-00"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>Website (opcional)</label>
            <input
              type="url"
              className="input"
              value={creatorData.website}
              onChange={(e) => setCreatorData({...creatorData, website: e.target.value})}
              placeholder="https://seusite.com"
            />
          </div>
          
          <div className="flex gap-4 mt-6">
            <button type="submit" className="btn btn-secondary flex-1">
              Tornar-se Criador
            </button>
            <button 
              type="button"
              onClick={() => setShowCreatorModal(false)}
              className="btn btn-outline flex-1"
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Profile;