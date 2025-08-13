import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Modal from './Modal';

const Navbar = () => {
  const { user, logout } = useAuth();
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
        className="navbar"
        style={{
          background: 'rgba(175, 137, 122, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(147, 98, 83, 0.2)',
          boxShadow: '0 2px 20px rgba(56, 36, 29, 0.1)'
        }}
      >
        <div className="container">
          <Link 
            to="/dashboard" 
            className="logo"
            style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              color: '#38241D',
              textDecoration: 'none',
              letterSpacing: '0.5px'
            }}
          >
            TRAÇO CULTURAL
          </Link>

          {/* Desktop Menu */}
          <ul className="nav-links">
            <li>
              <Link 
                to="/dashboard"
                style={{
                  color: '#38241D',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(56, 36, 29, 0.08)';
                  e.target.style.color = '#936253';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#38241D';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Início
              </Link>
            </li>
            <li>
              <Link 
                to="/favorites"
                style={{
                  color: '#38241D',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(56, 36, 29, 0.08)';
                  e.target.style.color = '#936253';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#38241D';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Favoritos
              </Link>
            </li>
            <li>
              <Link 
                to="/profile"
                style={{
                  color: '#38241D',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(56, 36, 29, 0.08)';
                  e.target.style.color = '#936253';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#38241D';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link 
                to="/settings"
                style={{
                  color: '#38241D',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(56, 36, 29, 0.08)';
                  e.target.style.color = '#936253';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#38241D';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Configurações
              </Link>
            </li>
            <li>
              <button 
                onClick={() => setShowLogoutModal(true)}
                style={{ 
                  background: 'linear-gradient(135deg, #936253, #946354)',
                  border: 'none', 
                  color: 'white',
                  cursor: 'pointer',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  fontSize: '1rem',
                  boxShadow: '0 2px 8px rgba(147, 98, 83, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(147, 98, 83, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 8px rgba(147, 98, 83, 0.3)';
                }}
              >
                Sair
              </button>
            </li>
          </ul>
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