import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

export default function MemeRandom() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpening, setIsOpening] = useState(true); // Start with opening state
  const [showResult, setShowResult] = useState(false);
  const [resultMeme, setResultMeme] = useState(null);
  const [animation, setAnimation] = useState('animate-shake');
  const boxRef = useRef(null);
  

  const previousPage = location.state?.from || "/main";

  // Memes array with rarity data
  const memes = [
    { id: 1, name: "Cry Cat", rarity: "common", img: "./public/assets/memeitems/CryCatpng.png", description: "I'm crying rn", chance:13.33 },
    { id: 2, name: "Dodge", rarity: "rare", img: "../public/assets/memeitems/BossDogpng.png", description: "Dog with sunglasses", chance:15 },
    { id: 3, name: "Kirby with Knife", rarity: "rare", img: "./public/assets/memeitems/Kirbypng.png", description: "Pink Kirby holding a knife", chance:15 },
    { id: 4, name: "Spongebob", rarity: "epic", img: "./public/assets/memeitems/SpongeBobpng.png", description: "Distressed Spongebob", chance:7 },
    { id: 5, name: "Pepe Frog", rarity: "epic", img: "./public/assets/memeitems/PepeFrogpng.png", description: "Green frog character", chance:7 },
    { id: 6, name: "Nyan Cat", rarity: "common", img: "./public/assets/memeitems/NyanCatpng.png", description: "Cat with pop-tart body", chance:13.33 },
    { id: 7, name: "Boss Suit", rarity: "rare", img: "./public/assets/memeitems/DodgeDogpng.png", description: "Dog in a business suit", chance:15 },
    { id: 8, name: "Mike", rarity: "common", img: "../public/assets/memeitems/Mikepng.png", description: "Mike..", chance:13.33 },
    { id: 9, name: "Chamber", rarity: "legendary", img: "./public/assets/memeitems/Chamberpng.png", description: "HeadShot king!", chance:1},
    { id: 10, name: "Peter", rarity: "legendary", img: "./public/assets/memeitems/Peterpng.png", description: "Just Peter", chance:0.01},
  ];

  // Maps rarity to text color and glow
  const rarityStyles = {
    common: { color: "text-green-500", glow: "0 0 10px #10B981" },
    rare: { color: "text-blue-500", glow: "0 0 15px #3B82F6" },
    epic: { color: "text-purple-500", glow: "0 0 20px #8B5CF6" },
    legendary: { color: "text-yellow-500", glow: "0 0 25px #F59E0B" }
  };

  const textStrokeStyle = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  };

  // Function to randomly select a meme based on rarity chances
  const getRandomMeme = () => {
    const totalChance = memes.reduce((sum, meme) => sum + meme.chance, 0);
    let random = Math.random() * totalChance;
    
    for (const meme of memes) {
      random -= meme.chance;
      if (random <= 0) {
        return meme;
      }
    }
    
    // Fallback in case of rounding errors
    return memes[0];
  };

  // Start animation sequence
  const startOpeningAnimation = () => {
    // Reset states
    setShowResult(false);
    setIsOpening(true);
    setResultMeme(null);
    
    // Start with shake animation
    setAnimation('animate-shake');
    
    // After shake, change to glow
    setTimeout(() => {
      setAnimation('animate-glow');
      
      // After glowing, show result
      setTimeout(() => {
        const randomMeme = getRandomMeme();
        setResultMeme(randomMeme);
        setShowResult(true);
        setIsOpening(false);
        
        // Reset animation classes
        setAnimation('');
      }, 2000);
    }, 1500);
  };

  // Auto-start animation sequence when component mounts
  useEffect(() => {
    startOpeningAnimation();
  }, []);

  const handleBackToPrevious = () => {
    navigate(previousPage);
  };

  const handlePlayAgain = () => {
    // Restart the opening animation
    startOpeningAnimation();
  };

  // Define animation keyframes
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shake {
        0% { transform: translate(0, 0) rotate(0); }
        20% { transform: translate(-10px, 0) rotate(-5deg); }
        40% { transform: translate(10px, 0) rotate(5deg); }
        60% { transform: translate(-10px, 0) rotate(-5deg); }
        80% { transform: translate(10px, 0) rotate(5deg); }
        100% { transform: translate(0, 0) rotate(0); }
      }
      
      @keyframes glow {
        0% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
        50% { box-shadow: 0 0 30px rgba(255, 215, 0, 1); }
        100% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
      }
      
      .animate-shake {
        animation: shake 1.5s ease-in-out;
      }
      
      .animate-glow {
        animation: glow 2s infinite;
      }

      .animate-reveal {
        animation: reveal 0.5s ease-out forwards;
      }
      
      @keyframes reveal {
        0% { transform: scale(0.8); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 font-pixelify p-4">
      {!showResult ? (
        // Auto-playing loot box animation
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-6 sm:mb-8 text-center" style={textStrokeStyle}>
            Opening Meme Box!
          </h1>
          
          <div 
            ref={boxRef}
            className={`relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-transparent to-transparent rounded-2xl flex items-center justify-center mb-8 sm:mb-12 ${animation}`}
          >
            <img 
              src="../public/assets/chest/chest1.png" 
              alt="Mystery Loot Box" 
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-contain"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold animate-bounce">
                Opening...
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Result screen with reveal animation
        <div className="flex flex-col items-center justify-center w-full max-w-md animate-reveal">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4 sm:mb-6 text-center" style={textStrokeStyle}>
            You Got a New Meme!
          </h1>
          
          <div className="bg-gray-900 border-4 border-gray-700 rounded-lg p-6 w-full flex flex-col items-center">
            {resultMeme && (
              <>
                <div 
                  className="mb-4 p-4 rounded-lg"
                  style={{ 
                    boxShadow: rarityStyles[resultMeme.rarity].glow,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <img 
                    src={resultMeme.img} 
                    alt={resultMeme.name}
                    className="h-32 sm:h-40 md:h-48 object-contain"
                  />
                </div>
                
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  {resultMeme.name}
                </h2>
                
                <div 
                  className={`${rarityStyles[resultMeme.rarity].color} font-bold text-base sm:text-lg md:text-xl mb-3`}
                  style={textStrokeStyle}
                >
                  {resultMeme.rarity.toUpperCase()}
                </div>
                
                <p className="text-gray-300 text-center text-sm sm:text-base mb-6">
                  {resultMeme.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <button 
                    onClick={handlePlayAgain}
                    className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg text-sm sm:text-base transition-colors w-full"
                  >
                    Play Again
                  </button>
                  
                  <button 
                    onClick={handleBackToPrevious}
                    className="bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg text-sm sm:text-base transition-colors w-full"
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}