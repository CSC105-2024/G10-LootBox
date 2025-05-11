import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

export default function HeroRandom() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpening, setIsOpening] = useState(true); // Start with opening state
  const [showResult, setShowResult] = useState(false);
  const [resultHero, setResultHero] = useState(null);
  const [animation, setAnimation] = useState('animate-shake');
  const boxRef = useRef(null);
  
  // Get the previous page from location state or default to main
  const previousPage = location.state?.from || "/main";

  // Heroes array with rarity data
  const heroes = [
    { id: 1, name: "Deadpool", rarity: "common", img: "../public/assets/heroitems/DeadPoolpng.png", description: "Stop talking bro" ,chance: 35 },
    { id: 2, name: "Conquest", rarity: "legendary", img: "../public/assets/heroitems/Conquestpng.png", description: "Where is mark" ,chance: 5 },
    { id: 3, name: "Home Lander", rarity: "legendary", img: "../public/assets/heroitems/HomeLanderpng.png", description: "I'm Homesick" ,chance: 3},
    { id: 4, name: "Atens", rarity: "rare", img: ".../public/assets/heroitems/iShowSpeedpng.png", description: "I'm Steve" ,chance: 15},
    { id: 5, name: "Sinester Mark", rarity: "epic", img: "../public/assets/heroitems/SinesterMarkpng.png", description: "Oh oh.. poor Armstrong" ,chance: 8 },
    { id: 6, name: "Peace Maker", rarity: "epic", img: "../public/assets/heroitems/PeaceMakerpng.png", description: "Taralelo Tralala" ,chance: 8},
    { id: 7, name: "Rex Plode", rarity: "rare", img: "../public/assets/heroitems/RexPlodepng.png", description: "Boom!"  ,chance: 15},
    { id: 8, name: "Red Death", rarity: "epic", img: "../public/assets/heroitems/RedDeathpng.png", description: "I want to live" ,chance: 8 },
    { id: 9, name: "Omniman", rarity: "unreal", img: "../public/assets/heroitems/Omnimanpng.png", description: "Are you sure?" ,chance: 1.5},
    { id: 10, name: "YamCha", rarity: "unreal", img: "../public/assets/heroitems/YamChapng.png", description: "I hate Vegita",chance: 1.5 }
      
  ];  
  const rarityStyles = {
    common: { color: "text-green-500", glow: "0 0 10px #10B981", bg: "from-green-900 to-green-700" },
    rare: { color: "text-blue-500", glow: "0 0 15px #3B82F6", bg: "from-blue-900 to-blue-700" },
    epic: { color: "text-purple-500", glow: "0 0 20px #8B5CF6", bg: "from-purple-900 to-purple-700" },
    legendary: { color: "text-yellow-500", glow: "0 0 25px #F59E0B", bg: "from-yellow-900 to-yellow-700" },
    unreal: { color: "text-orange-500", glow: "0 0 25px #F59E0B", bg: "from-orange-900 to-orange-700" }
  };
  const textStrokeStyle = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  };

  // Function to randomly select a hero based on rarity chances
  const getRandomHero = () => {
    const totalChance = heroes.reduce((sum, hero) => sum + hero.chance, 0);
    let random = Math.random() * totalChance;
    
    for (const hero of heroes) {
      random -= hero.chance;
      if (random <= 0) {
        return hero;
      }
    }
    
    // Fallback in case of rounding errors
    return heroes[0];
  };

  // Start animation sequence
  const startOpeningAnimation = () => {
    // Reset states
    setShowResult(false);
    setIsOpening(true);
    setResultHero(null);
    
    // Start with shake animation
    setAnimation('animate-shake');
    
    // After shake, change to glow
    setTimeout(() => {
      setAnimation('animate-glow');
      
      // After glowing, show result
      setTimeout(() => {
        const randomHero = getRandomHero();
        setResultHero(randomHero);
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
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-float {
        animation: float 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Function to render stat bars
  const renderStatBar = (value, maxValue = 100, color = "bg-blue-500") => {
    const percentage = (value / maxValue) * 100;
    return (
      <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
        <div 
          className={`${color} h-4 rounded-full`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 font-pixelify p-4">
      {!showResult ? (
        // Auto-playing hero chest animation
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-6 sm:mb-8 text-center" style={textStrokeStyle}>
            Who is that Superhero!?
          </h1>
          
          <div 
            ref={boxRef}
            className={`relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-2xl flex items-center justify-center mb-8 sm:mb-12 ${animation}`}
          >
            <img 
              src=".../public/assets/chest/chest1.png" 
              alt="Hero Summoning Crystal"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-contain"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold animate-pulse">
                He is coming...
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Result screen with reveal animation
        <div className="flex flex-col items-center justify-center w-full max-w-md animate-reveal">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4 sm:mb-6 text-center" style={textStrokeStyle}>
            He is
          </h1>
          
          <div className={`bg-gradient-to-b ${rarityStyles[resultHero?.rarity]?.bg || "from-gray-900 to-gray-800"} border-4 border-gray-700 rounded-lg p-6 w-full flex flex-col items-center`}>
            {resultHero && (
              <>
                <div 
                  className="mb-4 p-4 rounded-lg animate-float"
                  style={{ 
                    boxShadow: rarityStyles[resultHero.rarity].glow,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <img 
                    src={resultHero.img} 
                    alt={resultHero.name}
                    className="h-32 sm:h-40 md:h-48 object-contain"
                  />
                </div>
                
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  {resultHero.name}
                </h2>
                
                <div 
                  className={`${rarityStyles[resultHero.rarity].color} font-bold text-base sm:text-lg md:text-xl mb-3`}
                  style={textStrokeStyle}
                >
                  {resultHero.rarity.toUpperCase()}
                </div>
                
                <p className="text-gray-300 text-center text-sm sm:text-base mb-6">
                  {resultHero.description}
                </p>
                
               
                
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <button 
                    onClick={handlePlayAgain}
                    className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg text-sm sm:text-base transition-colors w-full"
                  >
                    Play Again
                  </button>
                  
                  <button 
                     onClick={() => {  navigate("/superhero");}}
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