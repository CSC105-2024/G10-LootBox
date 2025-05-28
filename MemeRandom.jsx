import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { summonItem } from '../api/summon';

export default function MemeRandom() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = localStorage.getItem('username'); 
  const [isOpening, setIsOpening] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [resultItem, setResultItem] = useState(null);
  const [animation, setAnimation] = useState('animate-shake');
  const previousPage = location.state?.from || "/main";
  const [remainingKeys, setRemainingKeys] = useState(1);

  useEffect(() => {
    if (!username) {
      navigate('/login');
    }
  }, []);

  const rarityStyles = {
    common: { color: "text-green-500", glow: "0 0 10px #10B981" },
    rare: { color: "text-blue-500", glow: "0 0 15px #3B82F6" },
    epic: { color: "text-purple-500", glow: "0 0 20px #8B5CF6" },
    legendary: { color: "text-yellow-500", glow: "0 0 25px #F59E0B" }
  };

  const textStrokeStyle = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  };

  const playAnimationAndSummon = async () => {
  setShowResult(false);
  setResultItem(null);

  const res = await summonItem(username, "Meme");

  if (!res.success || !res.data) {
    setIsOpening(false);
    setShowResult(true);
    setRemainingKeys(0);
    setResultItem({
      name: "No Key",
      rarity: "common",
      img: "public/assets/memeitems/error.png",
      message: res.msg || "You don’t have enough Meme Keys.",
    });
    setAnimation('');
    return;
  }

  setIsOpening(true);
  setAnimation('animate-shake');

  setTimeout(() => {
    setAnimation('animate-glow');

    setTimeout(() => {
      setResultItem(res.data);
      setRemainingKeys(typeof res.data.remainingKeys === 'number' ? res.data.remainingKeys : 0);
      setIsOpening(false);
      setShowResult(true);
      setAnimation('');
    }, 2000);
  }, 1500);
};

  useEffect(() => {
    playAnimationAndSummon();
  }, []);


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

  const handlePlayAgain = () => {
    playAnimationAndSummon();
  };

  const handleBack = () => {
    navigate(previousPage);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 font-pixelify p-4">
      {!showResult ? (
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-3xl text-white font-bold mb-6 text-center" style={textStrokeStyle}>
            Opening Meme Box!
          </h1>
          <div className={`relative w-64 h-64 rounded-2xl flex items-center justify-center mb-12 ${animation}`}>
            <img 
              src="public/assets/chest/chest1.png" 
              alt="Meme Box" 
              className="w-56 h-56 object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-xl font-bold animate-bounce">
                Opening...
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full max-w-md animate-reveal">
          <h1 className="text-3xl text-white font-bold mb-4 text-center" style={textStrokeStyle}>
            You Got a Meme!
          </h1>
          <div className="bg-gray-900 border-4 border-gray-700 rounded-lg p-6 w-full flex flex-col items-center">
            {resultItem && (
              <>
                <div 
                  className="mb-4 p-4 rounded-lg"
                  style={{ boxShadow: rarityStyles[resultItem.rarity]?.glow }}
                >
                  <img 
                    src={resultItem.img} 
                    alt={resultItem.name}
                    className="h-40 object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{resultItem.name}</h2>
                <div 
                  className={`${rarityStyles[resultItem.rarity]?.color} font-bold text-xl mb-3`}
                  style={textStrokeStyle}
                >
                  {resultItem.rarity.toUpperCase()}
                </div>
                <p className="text-gray-300 text-center text-base mb-6">{resultItem.message}</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  {remainingKeys > 0 && (
                    <button 
                    onClick={handlePlayAgain}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
                    >
                      Play Again ({remainingKeys} keys)
                      </button>
                    )}
                  <button 
                    onClick={handleBack}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg w-full"
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
