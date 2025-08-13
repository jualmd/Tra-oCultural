import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, Edit, Trash2, LogOut, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
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
    // Simular verificação de senha
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
    <div className="min-h-screen" style={{ paddingTop: '80px' }}>
      <Navbar />
      
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="card fade-in">
          <h1 className="text-3xl font-bold mb-8">Configurações</h1>

          {/* Theme Toggle */}
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
                <div>
                  <h3 className="font-semibold">Tema</h3>
                  <p className="text-sm text-gray-600">
                    {theme === 'dark' ? 'Modo escuro ativado' : 'Modo claro ativado'}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleTheme}
                className="btn btn-outline"
              >
                Alternar
              </button>
            </div>

            {/* Edit Profile */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <Edit size={24} />
                <div>
                  <h3 className="font-semibold">Editar Perfil</h3>
                  <p className="text-sm text-gray-600">
                    Alterar informações pessoais
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowEditModal(true)}
                className="btn btn-outline"
              >
                Editar
              </button>
            </div>

            {/* Become Creator */}
            {!user?.isCreator && (
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Tornar-se Criador</h3>
                    <p className="text-sm text-gray-600">
                      Crie e gerencie seus próprios eventos
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleBecomeCreator}
                  className="btn btn-secondary"
                >
                  Ativar
                </button>
              </div>
            )}

            {/* Logout */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <LogOut size={24} className="text-orange-600" />
                <div>
                  <h3 className="font-semibold">Sair da Conta</h3>
                  <p className="text-sm text-gray-600">
                    Fazer logout da sua conta
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowLogoutModal(true)}
                className="btn btn-outline text-orange-600 border-orange-600"
              >
                Sair
              </button>
            </div>

            {/* Delete Account */}
            <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
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
                className="btn bg-red-600 text-white hover:bg-red-700"
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Editar Perfil"
      >
        <form onSubmit={handleEditProfile} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nome</label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) => setEditData({...editData, name: e.target.value})}
              className="input"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Nome de usuário</label>
            <input
              type="text"
              value={editData.username}
              onChange={(e) => setEditData({...editData, username: e.target.value})}
              className="input"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">E-mail</label>
            <input
              type="email"
              value={editData.email}
              onChange={(e) => setEditData({...editData, email: e.target.value})}
              className="input"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Localização</label>
            <input
              type="text"
              value={editData.location}
              onChange={(e) => setEditData({...editData, location: e.target.value})}
              className="input"
              placeholder="Cidade, Estado"
            />
          </div>
          <div className="flex gap-4 mt-6">
            <button type="submit" className="btn btn-secondary flex-1">
              Salvar
            </button>
            <button 
              type="button"
              onClick={() => setShowEditModal(false)}
              className="btn btn-outline flex-1"
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>

      {/* Logout Modal */}
      <Modal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        title="Confirmar saída"
      >
        <p className="mb-6">Tem certeza que deseja sair da sua conta?</p>
        <div className="flex gap-4">
          <button 
            onClick={handleLogout}
            className="btn btn-secondary flex-1"
          >
            Sim, sair
          </button>
          <button 
            onClick={() => setShowLogoutModal(false)}
            className="btn btn-outline flex-1"
          >
            Cancelar
          </button>
        </div>
      </Modal>

      {/* Delete Account Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Deletar Conta"
      >
        <div className="space-y-4">
          <p className="text-red-600 font-medium">
            ⚠️ Esta ação é irreversível!
          </p>
          <p>
            Todos os seus dados, favoritos e atividades serão permanentemente removidos.
          </p>
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
            <button 
              onClick={handleDeleteAccount}
              className="btn bg-red-600 text-white hover:bg-red-700 flex-1"
            >
              Deletar Conta
            </button>
            <button 
              onClick={() => setShowDeleteModal(false)}
              className="btn btn-outline flex-1"
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Settings;