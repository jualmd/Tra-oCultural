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
        <div className="flex items-center gap-8">
          <div className="text-white space-y-6 fade-in" style={{ flex: '0 0 40%' }}>
            <h1 className="leading-none" style={{ fontSize: '8rem', fontFamily: 'Arial Black, sans-serif', fontWeight: '900' }}>
              E aí?
            </h1>
            <h2 style={{ fontSize: '4rem', fontFamily: 'Verdana, sans-serif', fontWeight: '600', lineHeight: '0.8' }}>
              Para onde<br />vamos hoje?
            </h2>
            
            <button
              onClick={() => navigate('/login')}
              className="btn btn-primary text-lg px-8 py-3 mt-6"
            >
              Entrar ou Cadastrar-se
            </button>
          </div>

          {/* Image */}
          <div style={{ flex: '0 0 60%' }}>
            <img 
              src="/images/CRISTORD.png" 
              alt="Cristo Redentor"
              className="w-full h-[1000px] object-cover rounded-3xl"
            />
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