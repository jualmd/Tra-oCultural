// Arquivo para gerenciar imagens do projeto
// Substitua os URLs pelos caminhos das suas imagens reais

export const images = {
  // Logos
  tracoLogo: "/src/assets/traco-cultural-logo.png", // Adicione sua logo aqui
  
  // Imagens de eventos
  cristoRedentor: "/src/assets/cristo-redentor.png", // Adicione a imagem do Cristo Redentor
  eventsCollection: "/src/assets/events-collection.jpg", // Imagem genérica de eventos
  actNewEpisode: "/src/assets/act-new-episode.jpg", // Imagem específica do evento
  
  // Placeholders (URLs temporários)
  eventPlaceholder: "https://via.placeholder.com/300x400/936253/FFFFFF?text=Evento+Cultural",
  avatarPlaceholder: "https://via.placeholder.com/100x100/38241D/FFFFFF?text=User",
  logoPlaceholder: "https://via.placeholder.com/200x100/38241D/FFFFFF?text=Traço+Cultural"
};

// Função helper para obter imagem com fallback
export const getImage = (imageName, fallback = null) => {
  return images[imageName] || fallback || images.eventPlaceholder;
};