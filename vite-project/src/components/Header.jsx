import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ showNavigation = false, userName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full text-white p-4" style={{ background: 'linear-gradient(to right, #936253, #38241D)' }}>
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-cultural-brown-dark">TC</span>
          </div>
          {userName && (
            <span className="text-lg font-bold opacity-80">Olá, {userName}</span>
          )}
        </div>

        {showNavigation && (
          <>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="/dashboard"
                className="hover:text-cultural-accent transition-colors font-bold text-lg"
              >
                Início
              </a>
              <a
                href="/profile"
                className="hover:text-cultural-accent transition-colors font-bold text-lg"
              >
                Ver Perfil
              </a>
              <a
                href="/favorites"
                className="hover:text-cultural-accent transition-colors font-bold text-lg"
              >
                Favoritos
              </a>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-cultural-brown-dark p-4 md:hidden">
                <nav className="flex flex-col gap-4">
                  <a
                    href="/dashboard"
                    className="hover:text-cultural-accent transition-colors font-bold text-lg"
                  >
                    Início
                  </a>
                  <a
                    href="/profile"
                    className="hover:text-cultural-accent transition-colors font-bold text-lg"
                  >
                    Ver Perfil
                  </a>
                  <a
                    href="/favorites"
                    className="hover:text-cultural-accent transition-colors font-bold text-lg"
                  >
                    Favoritos
                  </a>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;