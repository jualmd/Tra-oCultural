# Traço Cultural - Plataforma de Eventos Culturais

Uma plataforma moderna para descobrir e participar de eventos culturais, desenvolvida com React + Vite.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **Lucide React** - Ícones
- **CSS Vanilla** - Estilização customizada

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Header.jsx
│   ├── EventCard.jsx
│   └── Tabs.jsx
├── pages/              # Páginas da aplicação
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── EventDetail.jsx
│   ├── Favorites.jsx
│   ├── Profile.jsx
│   └── NotFound.jsx
├── App.jsx             # Componente principal
├── main.jsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## 🎨 Funcionalidades

### Páginas Principais
- **Home** - Página inicial com call-to-action
- **Login/Cadastro** - Autenticação de usuários
- **Dashboard** - Descoberta de eventos culturais
- **Detalhes do Evento** - Informações completas e preços
- **Favoritos** - Eventos, artistas e locais salvos
- **Perfil** - Gerenciamento de conta e opção para tornar-se criador

### Funcionalidades Especiais
- **Sistema de Favoritos** - Salvar eventos, artistas e locais
- **Busca e Filtros** - Encontrar eventos específicos
- **Perfil de Criador** - Usuários podem se tornar criadores de eventos
- **Design Responsivo** - Funciona em desktop e mobile
- **Animações CSS** - Elementos animados para melhor UX

## 🎯 Como Usar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

## 🎨 Paleta de Cores

- **Marrom Escuro**: `#38241D` - Cor principal
- **Marrom Médio**: `#936253` - Cor de destaque
- **Creme**: `#FAF3E8` - Cor de fundo
- **Branco**: `#FFFFFF` - Contraste

## 📱 Funcionalidades do Perfil

### Usuário Comum
- Visualizar eventos favoritos
- Acompanhar atividade recente
- Estatísticas pessoais

### Criador de Eventos
- Opção para se tornar criador
- Formulário de dados da empresa
- Capacidade de criar eventos (futuro)

## 🔄 Rotas da Aplicação

- `/` - Página inicial
- `/login` - Login
- `/register` - Cadastro
- `/dashboard` - Dashboard principal
- `/event-detail` - Detalhes do evento
- `/favorites` - Favoritos
- `/profile` - Perfil do usuário
- `*` - Página 404

## 🎭 Eventos de Exemplo

O projeto inclui dados de exemplo para:
- Shows musicais
- Peças teatrais
- Festivais
- Eventos eletrônicos
- Apresentações culturais

## 🚀 Próximos Passos

- [ ] Integração com API backend
- [ ] Sistema de autenticação real
- [ ] Criação de eventos para criadores
- [ ] Sistema de pagamento
- [ ] Notificações push
- [ ] Mapa de eventos
- [ ] Reviews e avaliações

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e demonstrativos.