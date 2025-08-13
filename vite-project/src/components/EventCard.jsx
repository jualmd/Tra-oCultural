import { useState } from "react";
import { Heart, MapPin, Calendar } from "lucide-react";

const EventCard = ({ 
  title, 
  subtitle, 
  image, 
  date, 
  location, 
  isFavorite = false, 
  onFavoriteToggle, 
  onClick, 
  size = "medium" 
}) => {
  const [isLiked, setIsLiked] = useState(isFavorite);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    onFavoriteToggle?.();
  };

  const sizeClasses = {
    small: "w-40 h-32",
    medium: "w-60 h-80",
    large: "w-full h-96"
  };

  return (
    <div 
      className={`${sizeClasses[size]} card relative cursor-pointer group hover:shadow-cultural transition-all duration-300 hover:scale-105`}
      onClick={onClick}
    >
      <div className="relative h-full">
        <img
          src={image || "https://via.placeholder.com/300x400?text=Evento"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }} />
        
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 p-2 rounded-full transition-colors"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <Heart 
            size={16} 
            className={`${isLiked ? 'text-red-500' : 'text-white'} transition-colors`}
            fill={isLiked ? '#ef4444' : 'none'}
          />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-bold text-sm mb-1">{title}</h3>
          {subtitle && <p className="text-xs opacity-90 mb-2">{subtitle}</p>}
          
          {date && (
            <div className="flex items-center gap-1 text-xs opacity-75 mb-1">
              <Calendar size={12} />
              <span>{date}</span>
            </div>
          )}
          
          {location && (
            <div className="flex items-center gap-1 text-xs opacity-75">
              <MapPin size={12} />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;