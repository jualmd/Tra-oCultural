import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    const userData = {
      id: 1,
      name: "Usuário Cultural",
      username: "usuario_cultural",
      email: formData.email,
      avatar: null,
      location: "São Paulo, SP",
      isCreator: false
    };

    login(userData);
    navigate('/dashboard');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  return (
    <div className="auth-container">
      <div className="auth-card fade-in">
        <div className="auth-header">
          <h1 className="auth-title">Bem-vindo de volta!</h1>
          <p className="auth-subtitle">Entre na sua conta para continuar</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Mail className="form-icon" size={20} />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <Lock className="form-icon" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Sua senha"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="form-input"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button type="submit" className="auth-button">
            Entrar
          </button>
        </form>

        <div className="auth-links">
          <p style={{ color: '#946354', marginBottom: '1rem' }}>
            <Link to="/forgot-password" className="auth-link">
              Esqueceu sua senha?
            </Link>
          </p>
          <p style={{ color: '#946354' }}>
            Não tem uma conta?{' '}
            <Link to="/register" className="auth-link">
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;