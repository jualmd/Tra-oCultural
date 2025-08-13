import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FAF3E8' }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#38241D' }}>404</h1>
        <p className="text-xl mb-4" style={{ color: 'rgba(56, 36, 29, 0.7)' }}>Oops! Página não encontrada</p>
        <a 
          href="/" 
          className="hover:underline"
          style={{ color: '#936253' }}
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;