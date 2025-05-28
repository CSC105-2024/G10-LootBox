import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function HeroLook() {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredHero, setHoveredHero] = useState(null);
  const [selectedHero, setSelectedHero] = useState(null);

  // Heroes array with placeholder image paths
  const heroes = [
    { id: 1, name: "Deadpool", rarity: "common", img: "../public/assets/heroitems/DeadPoolpng.png", description: "Stop talking bro" ,chance: 35 },
    { id: 2, name: "Conquest", rarity: "legendary", img: "../public/assets/heroitems/Conquestpng.png", description: "Where is mark" ,chance: 5 },
    { id: 3, name: "Home Lander", rarity: "legendary", img: "../public/assets/heroitems/HomeLanderpng.png", description: "I'm Homesick" ,chance: 3},
    { id: 4, name: "Atens", rarity: "rare", img: "../public/assets/heroitems/iShowSpeedpng.png", description: "I'm Steve" ,chance: 15},
    { id: 5, name: "Sinester Mark", rarity: "epic", img: "../public/assets/heroitems/SinesterMarkpng.png", description: "Oh oh.. poor Armstrong" ,chance: 8 },
    { id: 6, name: "Peace Maker", rarity: "epic", img: "../public/assets/heroitems/PeaceMakerpng.png", description: "Taralelo Tralala" ,chance: 8},
    { id: 7, name: "Rex Plode", rarity: "rare", img: "../public/assets/heroitems/RexPlodepng.png", description: "Boom!"  ,chance: 15},
    { id: 8, name: "Red Death", rarity: "epic", img: "../public/assets/heroitems/RedDeathpng.png", description: "I want to live" ,chance: 8 },
   
  ];

  // Maps rarity to text color
  const rarityColors = {
    common: "text-green-500",
    rare: "text-blue-500",
    epic: "text-purple-500",
    legendary: "text-yellow-500"
  };

  const handleHeroClick = (id) => {
    setSelectedHero(id);
    setShowOverlay(true);
  };

  const handleClose = () => {
    navigate("/superhero");
  };

  const handleNextPage = () => {
    // Logic for handling "next page" arrow click
    // For now just a placeholder that could be used in a multi-page implementation
    setCurrentPage(prev => prev + 1);
  };

  const textStrokeStyle = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 font-pixelify">
      {/* Main content container */}
      <div className="flex-1 w-full max-w-4x2 py-4 px-2 sm:py-8 sm:px-4 relative flex flex-col justify-center">
        {/* Page Title */}
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white mb-6" style={textStrokeStyle}>
          HERO COLLECTION
        </h1>
        
        {/* Hero Grid - responsive layout (2 columns on mobile, 4 on larger screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12 lg:gap-24 mx-auto">
          {heroes.map((hero) => (
            <div 
              key={hero.id}
              className="cursor-pointer transition-transform duration-200 active:scale-95"
              style={{ transform: hoveredHero === hero.id ? 'scale(1.05)' : 'scale(1)' }}
              onClick={() => handleHeroClick(hero.id)}
              onMouseEnter={() => setHoveredHero(hero.id)}
              onMouseLeave={() => setHoveredHero(null)}
              onTouchStart={() => setHoveredHero(hero.id)}
              onTouchEnd={() => setHoveredHero(null)}
            >
              <div className="flex flex-col items-center bg-gray-700 p-2 rounded-lg border-2 border-gray-600">
                <img 
                  src={hero.img} 
                  alt={hero.name} 
                  className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto object-contain" 
                />
                <div className="text-white font-bold text-sm sm:text-base md:text-lg mt-1">
                  {hero.name}
                </div>
                <div 
                  className={`${rarityColors[hero.rarity]} font-bold text-sm sm:text-base mt-1`}
                  style={textStrokeStyle}
                >
                  {hero.rarity.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Next page arrow - right side */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <img 
            src="../public/assets/arrow/arrowtopage.png" 
            onClick={() => navigate("/heroLook2")} 
            alt="Next" 
            className="w-16 h-16 cursor-pointer hover:opacity-80"
          />
        </div>
      </div>

      {/* Close Button at bottom */}
      <div 
        className="mb-4 sm:mb-6 cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95"
        onClick={handleClose}
      >
        <div 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg"
          style={textStrokeStyle}
        >
          Close
        </div>
      </div>

      {/* Hero details overlay when a hero is clicked */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 p-4">
          <div className="bg-gray-800 border-4 border-gray-600 rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-md">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Hero Details</h2>
              <button 
                onClick={() => setShowOverlay(false)}
                className="text-red-500 hover:text-red-300 text-xl sm:text-2xl"
              >
                ✕
              </button>
            </div>
            
            {selectedHero && (
              <div className="flex flex-col items-center">
                <img 
                  src={heroes.find(h => h.id === selectedHero)?.img} 
                  alt={heroes.find(h => h.id === selectedHero)?.name}
                  className="h-32 sm:h-40 md:h-48 object-contain mb-3 sm:mb-4" 
                />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                  {heroes.find(h => h.id === selectedHero)?.name}
                </h3>
                <div className={`${rarityColors[heroes.find(h => h.id === selectedHero)?.rarity]} font-bold text-base sm:text-lg mb-2 sm:mb-3`}>
                  {heroes.find(h => h.id === selectedHero)?.rarity.toUpperCase()}
                </div>
                <p className="text-gray-300 text-center text-sm sm:text-base">
                  {heroes.find(h => h.id === selectedHero)?.description}
                </p>
                
                {/* Added stats section */}
                
              </div>
            )}
            
            <div className="mt-6 flex justify-center space-x-4">
              <button 
                onClick={() => setShowOverlay(false)}
                className="bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg text-sm sm:text-base"
              >
                Close
              </button>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}