import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.username || !formData.email || !formData.password) {
      setError("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    if (formData.password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    const userData = {
      id: Date.now(),
      name: formData.name,
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
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
          <h1 className="auth-title">Criar conta</h1>
          <p className="auth-subtitle">Junte-se à nossa comunidade cultural</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <User className="form-icon" size={20} />
            <input
              type="text"
              placeholder="Nome completo"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <User className="form-icon" size={20} />
            <input
              type="text"
              placeholder="Nome de usuário"
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className="form-input"
              required
            />
          </div>

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
            <Phone className="form-icon" size={20} />
            <input
              type="tel"
              placeholder="Telefone (opcional)"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <Lock className="form-icon" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
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

          <div className="form-group">
            <Lock className="form-icon" size={20} />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmar senha"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="form-input"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="toggle-password"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button type="submit" className="auth-button">
            Criar conta
          </button>
        </form>

        <div className="auth-links">
          <p style={{ color: '#946354' }}>
            Já tem uma conta?{' '}
            <Link to="/login" className="auth-link">
              Entre aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;