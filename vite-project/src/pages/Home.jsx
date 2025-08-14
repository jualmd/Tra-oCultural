import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8" style={{ marginTop: '8rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 fade-in">
            <h1 className="leading-tight" style={{ fontSize: '10rem', fontWeight: '900' }}>
              <span className="font-bonello">E aí?</span>
            </h1>
            <h2 className="leading-relaxed" style={{ fontSize: '4.5rem', fontWeight: '800' }}>
              <span className="font-londona">Para onde<br />vamos hoje?</span>
            </h2>
            
            <button
              onClick={() => navigate('/login')}
              className="btn btn-primary text-xl px-12 py-4 mt-8"
            >
              Entrar ou Cadastrar-se
            </button>
          </div>

          {/* Image placeholder - LINHA 40 */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div 
                className="w-80 h-96 rounded-3xl flex items-center justify-center text-white text-lg font-light bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20"
              >
                {/* Adicione sua imagem aqui na linha 40 */}
                <p className="text-center opacity-70">
                  Adicionar imagem<br />
                  grande aqui<br />
                  (linha 40)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-white rounded-full opacity-50" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default Home;