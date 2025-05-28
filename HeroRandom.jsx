import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { summonItem } from '../api/summon';

export default function HeroRandom() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = localStorage.getItem("username") || "";
  const [isOpening, setIsOpening] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [resultItem, setResultItem] = useState(null);
  const [animation, setAnimation] = useState('animate-shake');
  const [errorMessage, setErrorMessage] = useState("");
  const [remainingKeys, setRemainingKeys] = useState(1);
  
  const boxRef = useRef(null);
  const previousPage = location.state?.from || "/superhero";

  useEffect(() => {
    if (!username) {
      navigate('/login');
    }
  }, []);

  const rarityStyles = {
    common: { color: "text-green-500", glow: "0 0 10px #10B981", bg: "from-green-900 to-green-700" },
    rare: { color: "text-blue-500", glow: "0 0 15px #3B82F6", bg: "from-blue-900 to-blue-700" },
    epic: { color: "text-purple-500", glow: "0 0 20px #8B5CF6", bg: "from-purple-900 to-purple-700" },
    legendary: { color: "text-yellow-500", glow: "0 0 25px #F59E0B", bg: "from-yellow-900 to-yellow-700" },
    unreal: { color: "text-orange-500", glow: "0 0 25px #F97316", bg: "from-orange-900 to-orange-700" }
  };

  const textStrokeStyle = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  };

  const playAnimationAndSummon = async () => {
    setShowResult(false);
    setIsOpening(true);
    setResultItem(null);
    setAnimation('animate-shake');

    setTimeout(() => {
      setAnimation('animate-glow');

      setTimeout(async () => {
        const res = await summonItem(username, "Superhero");
        if (res.success && res.data) {
          setResultItem(res.data);
          setRemainingKeys(res.data.remainingKeys || 0);
        } else {
          setErrorMessage(res.msg || "Summon failed");
        }

        setShowResult(true);
        setIsOpening(false);
        setAnimation('');
      }, 2000);
    }, 1500);
  };

  useEffect(() => {
    playAnimationAndSummon();
  }, []);

  const handlePlayAgain = () => {
    playAnimationAndSummon();
  };

  const handleBack = () => {
    navigate(previousPage);
  };

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
      .animate-shake { animation: shake 1.5s ease-in-out; }
      .animate-glow { animation: glow 2s infinite; }
      .animate-reveal { animation: reveal 0.5s ease-out forwards; }
      @keyframes reveal {
        0% { transform: scale(0.8); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      .animate-float { animation: float 2s ease-in-out infinite; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 font-pixelify p-4">
      {!showResult ? (
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-6 sm:mb-8 text-center" style={textStrokeStyle}>
            Who is that Superhero!?
          </h1>
          <div 
            ref={boxRef}
            className={`relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-2xl flex items-center justify-center mb-8 sm:mb-12 ${animation}`}
          >
            <img 
              src="/assets/chest/Chest2.png"
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
      ) : errorMessage ? (
        <div className="text-center text-white max-w-md flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-500" style={textStrokeStyle}>
            {errorMessage.includes("not enough") ? "Not Enough Keys!" : "Summon Failed"}
          </h2>
          <p className="text-gray-300 mb-6">{errorMessage}</p>
          <button 
            onClick={handleBack}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Back
          </button>
        </div>
      ) : resultItem ? (
        <div className="flex flex-col items-center justify-center w-full max-w-md animate-reveal">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4 sm:mb-6 text-center" style={textStrokeStyle}>
            He is
          </h1>
          <div className={`bg-gradient-to-b ${rarityStyles[resultItem.rarity]?.bg || "from-gray-900 to-gray-800"} border-4 border-gray-700 rounded-lg p-6 w-full flex flex-col items-center`}>
            <div 
              className="mb-4 p-4 rounded-lg animate-float"
              style={{ 
                boxShadow: rarityStyles[resultItem.rarity].glow,
                transition: 'all 0.3s ease'
              }}
            >
              <img 
                src={resultItem.img} 
                alt={resultItem.name}
                className="h-32 sm:h-40 md:h-48 object-contain"
              />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
              {resultItem.name}
            </h2>
            <div 
              className={`${rarityStyles[resultItem.rarity].color} font-bold text-base sm:text-lg md:text-xl mb-3`}
              style={textStrokeStyle}
            >
              {resultItem.rarity.toUpperCase()}
            </div>
            <p className="text-gray-300 text-center text-sm sm:text-base mb-6">
              {resultItem.message}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              {remainingKeys > 0 ? (
                <>
                  <button 
                    onClick={handlePlayAgain}
                    className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 
                    text-white font-bold py-2 px-4 rounded-lg text-sm sm:text-base transition-colors w-full"
                  >
                    Play Again ({remainingKeys} keys)
                  </button>
                  <button 
                    onClick={handleBack}
                    className="bg-gray-600 hover:bg-gray-700 active:bg-gray-800
                    text-white font-bold py-2 px-4 rounded-lg text-sm sm:text-base transition-colors w-full"
                  >
                    Back
                  </button>
                </>
              ) : (
                <button 
                  onClick={handleBack}
                  className="bg-gray-600 hover:bg-gray-700 active:bg-gray-800
                  text-white font-bold py-2 px-4 rounded-lg text-sm sm:text-base transition-colors w-full"
                >
                  Back
                </button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}