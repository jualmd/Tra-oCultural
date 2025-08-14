import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, Edit, Trash2, LogOut, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Modal from '../components/Modal';

const Settings = () => {
  const { user, logout, updateUser } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [showDeletePassword, setShowDeletePassword] = useState(false);
  
  const [editData, setEditData] = useState({
    name: user?.name || '',
    username: user?.username || '',
    email: user?.email || '',
    location: user?.location || ''
  });

  const handleEditProfile = (e) => {
    e.preventDefault();
    updateUser(editData);
    setShowEditModal(false);
  };

  const handleDeleteAccount = () => {
    if (!deletePassword) {
      alert('Por favor, digite sua senha para confirmar');
      return;
    }
    logout();
    navigate('/');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleBecomeCreator = () => {
    updateUser({ isCreator: true });
    navigate('/profile');
  };

  return (
    <div className="min-h-screen">
      <button 
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 z-50"
        style={{ backgroundColor: '#936253' }}
      >
        <ArrowLeft size={20} />
      </button>
      
      <div className="container mx-auto p-6 max-w-4xl" style={{ paddingTop: '5rem' }}>
        <div className="card fade-in" style={{ maxWidth: 'none' }}>
          <h1 className="text-3xl font-bold mb-8" style={{ color: '#38241D' }}>Configurações</h1>

          <div className="space-y-6">
            <div 
              className="flex items-center justify-between p-4 border rounded-lg transition-all hover:shadow-md hover:scale-105"
              style={{ borderColor: 'rgba(147, 98, 83, 0.3)' }}
            >
              <div className="flex items-center gap-4">
                {theme === 'dark' ? <Moon size={24} style={{ color: '#936253' }} /> : <Sun size={24} style={{ color: '#936253' }} />}
                <div>
                  <h3 className="font-semibold" style={{ color: '#38241D' }}>Tema</h3>
                  <p className="text-sm" style={{ color: '#946354' }}>
                    {theme === 'dark' ? 'Modo escuro ativado' : 'Modo claro ativado'}
                  </p>
                </div>
              </div>
              <button 
                onClick={toggleTheme} 
                className="btn btn-outline transition-all hover:scale-105"
                style={{ borderColor: '#936253', color: '#936253' }}
              >
                Alternar
              </button>
            </div>

            <div 
              className="flex items-center justify-between p-4 border rounded-lg transition-all hover:shadow-md hover:scale-105"
              style={{ borderColor: 'rgba(147, 98, 83, 0.3)' }}
            >
              <div className="flex items-center gap-4">
                <Edit size={24} style={{ color: '#936253' }} />
                <div>
                  <h3 className="font-semibold" style={{ color: '#38241D' }}>Editar Perfil</h3>
                  <p className="text-sm" style={{ color: '#946354' }}>
                    Alterar informações pessoais
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setShowEditModal(true)} 
                className="btn btn-outline transition-all hover:scale-105"
                style={{ borderColor: '#936253', color: '#936253' }}
              >
                Editar
              </button>
            </div>

            {!user?.isCreator && (
              <div 
                className="flex items-center justify-between p-4 border rounded-lg transition-all hover:shadow-md hover:scale-105"
                style={{ borderColor: 'rgba(147, 98, 83, 0.3)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: '#936253' }}>
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: '#38241D' }}>Tornar-se Criador</h3>
                    <p className="text-sm" style={{ color: '#946354' }}>
                      Crie e gerencie seus próprios eventos
                    </p>
                  </div>
                </div>
                <button 
                  onClick={handleBecomeCreator} 
                  className="btn btn-secondary transition-all hover:scale-105"
                >
                  Ativar
                </button>
              </div>
            )}

            <div 
              className="flex items-center justify-between p-4 border rounded-lg transition-all hover:shadow-md hover:scale-105"
              style={{ borderColor: 'rgba(147, 98, 83, 0.3)' }}
            >
              <div className="flex items-center gap-4">
                <LogOut size={24} style={{ color: '#936253' }} />
                <div>
                  <h3 className="font-semibold" style={{ color: '#38241D' }}>Sair da Conta</h3>
                  <p className="text-sm" style={{ color: '#946354' }}>
                    Fazer logout da sua conta
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowLogoutModal(true)}
                className="btn btn-outline transition-all hover:scale-105"
                style={{ borderColor: '#936253', color: '#936253' }}
              >
                Sair
              </button>
            </div>

            <div 
              className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50 transition-all hover:shadow-md hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <Trash2 size={24} className="text-red-600" />
                <div>
                  <h3 className="font-semibold text-red-800">Deletar Conta</h3>
                  <p className="text-sm text-red-600">
                    Esta ação não pode ser desfeita
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="btn bg-red-600 text-white hover:bg-red-700 transition-all hover:scale-105"
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)} title="Editar Perfil">
        <form onSubmit={handleEditProfile} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>Nome</label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) => setEditData({...editData, name: e.target.value})}
              className="input"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>Nome de usuário</label>
            <input
              type="text"
              value={editData.username}
              onChange={(e) => setEditData({...editData, username: e.target.value})}
              className="input"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>E-mail</label>
            <input
              type="email"
              value={editData.email}
              onChange={(e) => setEditData({...editData, email: e.target.value})}
              className="input"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#38241D' }}>Localização</label>
            <input
              type="text"
              value={editData.location}
              onChange={(e) => setEditData({...editData, location: e.target.value})}
              className="input"
              placeholder="Cidade, Estado"
            />
          </div>
          <div className="flex gap-4 mt-6">
            <button type="submit" className="btn btn-secondary flex-1">Salvar</button>
            <button type="button" onClick={() => setShowEditModal(false)} className="btn btn-outline flex-1">Cancelar</button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={showLogoutModal} onClose={() => setShowLogoutModal(false)} title="Confirmar saída">
        <p className="mb-6">Tem certeza que deseja sair da sua conta?</p>
        <div className="flex gap-4">
          <button onClick={handleLogout} className="btn btn-secondary flex-1">Sim, sair</button>
          <button onClick={() => setShowLogoutModal(false)} className="btn btn-outline flex-1">Cancelar</button>
        </div>
      </Modal>

      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} title="Deletar Conta">
        <div className="space-y-4">
          <p className="text-red-600 font-medium">⚠️ Esta ação é irreversível!</p>
          <p>Todos os seus dados, favoritos e atividades serão permanentemente removidos.</p>
          <div className="relative">
            <input
              type={showDeletePassword ? "text" : "password"}
              placeholder="Digite sua senha para confirmar"
              value={deletePassword}
              onChange={(e) => setDeletePassword(e.target.value)}
              className="input pr-12"
            />
            <button
              type="button"
              onClick={() => setShowDeletePassword(!showDeletePassword)}
              className="absolute right-4 top-4 text-gray-400"
            >
              {showDeletePassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={handleDeleteAccount} className="btn bg-red-600 text-white hover:bg-red-700 flex-1">Deletar Conta</button>
            <button onClick={() => setShowDeleteModal(false)} className="btn btn-outline flex-1">Cancelar</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Settings;