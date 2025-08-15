import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Modal from './Modal';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowLogoutModal(false);
  };

  if (!user) return null;

  return (
    <>
      <nav 
        style={{
          background: 'rgba(175, 137, 122, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(147, 98, 83, 0.2)',
          boxShadow: '0 2px 20px rgba(56, 36, 29, 0.1)',
          height: '60px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          fontFamily: 'Inter, Roboto, "Nunito Sans", sans-serif'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <Link 
            to="/dashboard"
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#38241D',
              textDecoration: 'none',
              letterSpacing: '0.5px',
              display: 'flex',
              alignItems: 'center',
              height: '100%'
            }}
          >
            TRAÇO CULTURAL
          </Link>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: '24px', marginLeft: '32px' }}>
            <Link 
              to="/dashboard"
              style={{
                color: '#38241D',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1rem',
                padding: '0 16px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#936253'}
              onMouseOut={(e) => e.target.style.color = '#38241D'}
            >
              Início
            </Link>
            
            <Link 
              to="/favorites"
              style={{
                color: '#38241D',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1rem',
                padding: '0 16px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#936253'}
              onMouseOut={(e) => e.target.style.color = '#38241D'}
            >
              Favoritos
            </Link>
            
            <Link 
              to="/profile"
              style={{
                color: '#38241D',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1rem',
                padding: '0 16px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#936253'}
              onMouseOut={(e) => e.target.style.color = '#38241D'}
            >
              Perfil
            </Link>
            
            <Link 
              to="/settings"
              style={{
                color: '#38241D',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1rem',
                padding: '0 16px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#936253'}
              onMouseOut={(e) => e.target.style.color = '#38241D'}
            >
              Configurações
            </Link>
            
            <button 
              onClick={toggleTheme}
              style={{ 
                background: 'none',
                border: 'none',
                color: theme === 'dark' ? '#AF897A' : '#38241D',
                cursor: 'pointer',
                padding: 0,
                height: '24px',
                width: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => {
                const currentColor = theme === 'dark' ? '#AF897A' : '#38241D';
                const lighterColor = theme === 'dark' ? '#C4A691' : '#4A2F23';
                e.target.style.color = lighterColor;
              }}
              onMouseOut={(e) => {
                e.target.style.color = theme === 'dark' ? '#AF897A' : '#38241D';
              }}
              title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            
            <button 
              onClick={() => setShowLogoutModal(true)}
              style={{ 
                background: 'linear-gradient(135deg, #936253, #946354)',
                border: 'none', 
                color: 'white',
                cursor: 'pointer',
                padding: '0 16px',
                borderRadius: '6px',
                transition: 'all 0.2s ease',
                fontWeight: '500',
                fontSize: '1rem',
                height: '36px',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.9'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              Sair
            </button>
          </div>
        </div>
      </nav>

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
    </>
  );
};

export default Navbar;