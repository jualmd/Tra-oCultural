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
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full animate-ping" />
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-white rounded-full animate-bounce" />
      </div>
      
      {/* Header */}
      <div className="relative z-10 p-8">
        <div className="logo">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold" style={{ color: '#2F1B14' }}>TC</span>
          </div>
          <span>Traço Cultural</span>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 fade-in">
            <h1 className="text-9xl font-light leading-tight">
              <span className="italic font-serif">E aí?</span>
            </h1>
            <h2 className="text-6xl font-light leading-relaxed">
              Para onde<br />
              vamos hoje?
            </h2>
            
            <button
              onClick={() => navigate('/login')}
              className="btn btn-primary text-xl px-12 py-4 mt-8"
            >
              Entrar ou Cadastrar-se
            </button>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div 
                className="w-80 h-96 rounded-3xl flex items-center justify-center text-white text-2xl font-light bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🏛️</div>
                  <p>Cultura Brasileira</p>
                </div>
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