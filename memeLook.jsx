import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function MemeLook() {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredMeme, setHoveredMeme] = useState(null);
  const [selectedMeme, setSelectedMeme] = useState(null);

  // Memes array with actual images from the provided screenshot
  const memes = [
    { id: 1, name: "Cry Cat", rarity: "common", img: "../public/assets/memeitems/CryCatpng.png", description: "I'm crying rn", chance:13.33 },
    { id: 2, name: "Dodge", rarity: "rare", img: "../public/assets/memeitems/DodgeDogpng.png", description: "Dog with sunglasses", chance:15 },
    { id: 3, name: "Kirby with Knife", rarity: "rare", img: "../public/assets/memeitems/Kirbypng.png", description: "Pink Kirby holding a knife", chance:15 },
    { id: 4, name: "Spongebob", rarity: "epic", img: "../public/assets/memeitems/SpongeBobpng.png", description: "Distressed Spongebob", chance:7 },
    { id: 5, name: "Pepe Frog", rarity: "epic", img: "../public/assets/memeitems/PepeFrogpng.png", description: "Green frog character", chance:7 },
    { id: 6, name: "Nyan Cat", rarity: "common", img: "../public/assets/memeitems/NyanCatpng.png", description: "Cat with pop-tart body", chance:13.33 },
    { id: 7, name: "Boss Suit", rarity: "rare", img: "../public/assets/memeitems/BossDogpng.png", description: "Dog in a business suit", chance:15 },
    { id: 8, name: "Mike", rarity: "common", img: "../public/assets/memeitems/Mikepng.png", description: "Mike..", chance:13.33 },
  ];

  // Maps rarity to text color
  const rarityColors = {
    common: "text-green-500",
    rare: "text-blue-500",
    epic: "text-purple-500",
    legendary: "text-yellow-500"
  };

  const handleMemeClick = (id) => {
    setSelectedMeme(id);
    setShowOverlay(true);
  };

  const handleClose = () => {
    navigate("/main");
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400 font-pixelify">
      {/* Main content container */}
      <div className="flex-1 w-full max-w-4x2 py-4 px-2 sm:py-8 sm:px-4 relative flex flex-col justify-center">
        {/* Meme Grid - responsive layout (2 columns on mobile, 4 on larger screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12 lg:gap-24 mx-auto">
          {memes.map((meme) => (
            <div 
              key={meme.id}
              className="cursor-pointer transition-transform duration-200 active:scale-95"
              style={{ transform: hoveredMeme === meme.id ? 'scale(1.05)' : 'scale(1)' }}
              onClick={() => handleMemeClick(meme.id)}
              onMouseEnter={() => setHoveredMeme(meme.id)}
              onMouseLeave={() => setHoveredMeme(null)}
              onTouchStart={() => setHoveredMeme(meme.id)}
              onTouchEnd={() => setHoveredMeme(null)}
            >
              <div className="flex flex-col items-center">
                <img 
                  src={meme.img} 
                  alt={meme.name} 
                  className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto object-contain" 
                />
                <div 
                  className={`${rarityColors[meme.rarity]} font-bold text-sm sm:text-base md:text-lg mt-1 sm:mt-2`}
                  style={textStrokeStyle}
                >
                  {meme.rarity}
                </div>
              </div>
            </div>
          ))}
        </div>
        
          {/* Next page arrow - right side */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <img src="../public/assets/arrow/arrowtopage.png" onClick={() => navigate("/memeLook2")} alt="Next" className="w-16 h-16"/>
          </div>

      
       
      </div>

      {/* Close Button at bottom */}
      <div 
        className="mb-4 sm:mb-6 cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95"
        onClick={handleClose}
      >
        <div 
          className="text-red-600 font-bold text-xl sm:text-2xl md:text-3xl"
          style={textStrokeStyle}
        >
          Close
        </div>
      </div>

      {/* Meme details overlay when a meme is clicked */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 p-4">
          <div className="bg-gray-800 border-4 border-gray-600 rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-md">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Meme Details</h2>
              <button 
                onClick={() => setShowOverlay(false)}
                className="text-red-500 hover:text-red-300 text-xl sm:text-2xl"
              >
                ✕
              </button>
            </div>
            
            {selectedMeme && (
              <div className="flex flex-col items-center">
                <img 
                  src={memes.find(m => m.id === selectedMeme)?.img} 
                  alt={memes.find(m => m.id === selectedMeme)?.name}
                  className="h-32 sm:h-40 md:h-48 object-contain mb-3 sm:mb-4" 
                />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                  {memes.find(m => m.id === selectedMeme)?.name}
                </h3>
                <div className={`${rarityColors[memes.find(m => m.id === selectedMeme)?.rarity]} font-bold text-base sm:text-lg mb-2 sm:mb-3`}>
                  {memes.find(m => m.id === selectedMeme)?.rarity.toUpperCase()}
                </div>
                <p className="text-gray-300 text-center text-sm sm:text-base">
                  {memes.find(m => m.id === selectedMeme)?.description}
                </p>
              </div>
            )}
            
            <div className="mt-4 sm:mt-6 flex justify-center">
              <button 
                onClick={() => setShowOverlay(false)}
                className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-1.5 sm:py-2 px-4 sm:px-6 rounded-lg text-sm sm:text-base"
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