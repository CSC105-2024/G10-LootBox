import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [timeRemaining, setTimeRemaining] = useState(180);
  const [selectedBox, setSelectedBox] = useState('Meme Box');
  const [showSettings, setShowSettings] = useState(false);
  const [keys, setKeys] = useState(0);
  const [isPlayButtonHovered, setIsPlayButtonHovered] = useState(false);
  const navigate = useNavigate();
    
  const RESET_TIME = 180;
  const FREE_KEYS = 3;
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          setKeys(prevKeys => prevKeys + FREE_KEYS);
          return RESET_TIME;
        }
        return prevTime - 1;
      });
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);
  
  const handleBoxChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedBox(selectedValue);
    
    if (selectedValue === "Superhero Box") {
      navigate("/superhero");
    }
  };
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const textStrokeStyle = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  };
  
  const whiteStrokeStyle = {
    textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
  };
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  return (
    <div 
      className="font-pixelify min-h-screen relative bg-[url('..\src\assets\background\memebg.png')] bg-cover bg-center flex flex-col"
    >
      {!isMobile ? (
        <>
          <div className="absolute top-6 left-0 right-0 flex justify-center items-center z-10">
            <img src="..\src\icon\logo.png" alt="LootBox" className="h-24" />
          </div>
          
          <div className="flex justify-between items-center pt-6 px-6 pb-2">
            <div className="bg-white rounded-full py-2 px-8 flex items-center">
              <div className="mr-3">
                <img src="..\src\assets\profile\avatar.png" alt="Profile" className="w-16 h-16 rounded-full" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Michael Kaiser</h2>
                <div className="flex items-center">
                  <img src="..\src\assets\profile\coin.png" alt="Coin" className="w-6 h-6 mr-2" />
                  <span className="text-yellow-500 text-lg">5,000,000</span>
                </div>
                <div className="flex items-center">
                  <img src="..\src\assets\profile\bag.png" alt="Bag" className="w-6 h-6 mr-2" />
                  <span className="text-lg">20</span>
                </div>
              </div>
            </div>

            <div className="w-24"></div>

            <div className="relative">
              <button 
                className="text-3xl p-2"
                onClick={() => setShowSettings(!showSettings)}
              >
                ⚙️
              </button>
                
              {showSettings && (
                <div className="absolute right-0 top-12 bg-white rounded-md shadow-lg p-3 w-40 z-10">
                  <ul className="text-base">
                    <li onClick={() => navigate("/main")} className="py-2 hover:bg-gray-100 cursor-pointer">Home</li>
                    <li className="py-2 hover:bg-gray-100 cursor-pointer">Account</li>
                    <li onClick={() => navigate("/login")} className="py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-200 mt-1 pt-1">Sign out</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center p-3 mt-4">
            <div className="w-8"></div>
            <div className="flex justify-center items-center">
              <img src="..\src\icon\logo.png" alt="LootBox" className="h-16" />
            </div>
            <div className="relative">
              <button 
                className="text-xl p-2"
                onClick={() => setShowSettings(!showSettings)}
              >
                ⚙️
              </button>
                
              {showSettings && (
                <div className="absolute right-0 top-12 bg-white rounded-md shadow-lg p-3 w-40 z-10">
                  <ul className="text-base">
                    <li onClick={() => navigate("/main")} className="py-2 hover:bg-gray-100 cursor-pointer">Home</li>
                    <li className="py-2 hover:bg-gray-100 cursor-pointer">Account</li>
                    <li onClick={() => navigate("/login")} className="py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-200 mt-1 pt-1">Sign out</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-2 mb-4">
            <div className="bg-white rounded-full py-1 px-6 flex items-center w-4/5">
              <div className="mr-3">
                <img src="..\src\assets\profile\avatar.png" alt="Profile" className="w-14 h-14 rounded-full" />
              </div>
              <div>
                <h2 className="text-lg font-bold mb-0">Michael Kaiser</h2>
                <div className="flex items-center">
                  <img src="..\src\assets\profile\coin.png" alt="Coin" className="w-5 h-5 mr-1" />
                  <span className="text-yellow-500 text-sm">5,000,000</span>
                </div>
                <div className="flex items-center">
                  <img src="..\src\assets\profile\bag.png" alt="Bag" className="w-5 h-5 mr-1" />
                  <span className="text-sm">20</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      <div className="flex justify-center my-2">
        <select 
          value={selectedBox}
          onChange={handleBoxChange}
          className={`font-pixelify bg-white px-4 py-2 rounded-md border border-gray-300 ${isMobile ? 'w-40 text-sm' : 'w-48'}`}
        >
          <option>Meme Box </option>
          <option value="Superhero Box">Superhero Box </option>
        </select>
      </div>
  
      {!isMobile ? (
        <div className="flex flex-1">
          <div className="w-1/12"></div>
          
          <div className="w-1/4 text-left px-4 pt-16">
            <h3 className="font-pixelify text-5xl mb-4 font-bold" style={whiteStrokeStyle}>Drop rates</h3>
            <p className="font-pixelify text-[#00DA62] text-4xl mb-2" style={textStrokeStyle}>common 40%</p>
            <p className="font-pixelify text-[#0CC2FF] text-4xl mb-2" style={textStrokeStyle}>uncommon 39.9%</p>
            <p className="font-pixelify text-[#9C4BFF] text-4xl mb-2" style={textStrokeStyle}>epic 10%</p>
            <p className="font-pixelify text-[#EAB70F] text-4xl mb-2" style={textStrokeStyle}>legendary 5%</p>
          </div>
    
          <div className="w-1/3 flex flex-col items-center justify-center">
            <div className="mb-4 flex justify-center">
              <img src="..\src\assets\chest\Chest1.png" alt="Loot Box" className="w-64" />
            </div>
              
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center">
                <img 
                  src="..\src\assets\key\key1.png" 
                  alt="Key"
                  className="h-5"
                  style={{ transform: 'rotate(270deg)' }} 
                />
              </div>
              <span 
                className={`font-pixelify text-lg ${keys > 0 ? 'text-[#00DA62]' : 'text-red-600'}`} 
                style={textStrokeStyle}
              >
                Key remaining {keys}
              </span>
            </div>
    
            <div className="flex justify-center mb-6 w-full">
              <button 
                onClick={() => {
                  if (keys > 0) {
                    setKeys(keys - 1);
                  }
                }}
                onMouseEnter={() => setIsPlayButtonHovered(true)}
                onMouseLeave={() => setIsPlayButtonHovered(false)}
                className="focus:outline-none"
              >
                <img 
                  src={isPlayButtonHovered ? '../src/assets/main/playbuttonCapicity35.png' : '../src/assets/main/playbutton.png'} 
                  alt="Play Button" 
                  className="w-48"
                />
              </button>
            </div>
              
            <div className="font-pixelify text-center mb-4">
              <span className="text-[#00DA62]" style={textStrokeStyle}>3 </span>
              <span className="text-white" style={textStrokeStyle}>Free keys in </span>
              <span className="text-red-600" style={textStrokeStyle}>{formatTime(timeRemaining)}</span>
              <span className="text-white" style={textStrokeStyle}> minutes</span>
            </div>
          </div>
          
          <div className="w-1/3"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center flex-1">
          <div className="flex flex-col items-center justify-center mt-3">
            <img src="..\src\assets\chest\Chest1.png" alt="Loot Box" className="w-40 mb-2" />
          </div>
          
          <div className="flex items-center justify-center mb-2">
            <div className="flex items-center justify-center">
              <img 
                src="..\src\assets\key\key1.png" 
                alt="Key"
                className="h-3"
                style={{ transform: 'rotate(270deg)' }} 
              />
            </div>
            <span 
              className={`font-pixelify text-sm ${keys > 0 ? 'text-[#00DA62]' : 'text-red-600'}`} 
              style={textStrokeStyle}
            >
              Key remaining {keys}
            </span>
          </div>
          
          <div className="flex justify-center mb-3">
            <button 
              onClick={() => {
                if (keys > 0) {
                  setKeys(keys - 1);
                }
              }}
              className="focus:outline-none"
            >
              <img 
                src="../src/assets/main/playbutton.png" 
                alt="Play Button" 
                className="w-32"
              />
            </button>
          </div>
          
          <div className="font-pixelify text-center text-sm mb-3">
            <span className="text-[#00DA62]" style={textStrokeStyle}>3 </span>
            <span className="text-white" style={textStrokeStyle}>Free keys in </span>
            <span className="text-red-600" style={textStrokeStyle}>{formatTime(timeRemaining)}</span>
            <span className="text-white" style={textStrokeStyle}> minutes</span>
          </div>
          
          <div className="text-center mt-3 mb-16">
            <h3 className="font-pixelify text-2xl mb-1 font-bold" style={whiteStrokeStyle}>Rate Drops</h3>
            <p className="font-pixelify text-[#00DA62] text-xl mb-1" style={textStrokeStyle}>common 40%</p>
            <p className="font-pixelify text-[#0CC2FF] text-xl mb-1" style={textStrokeStyle}>uncommon 39.9%</p>
            <p className="font-pixelify text-[#9C4BFF] text-xl mb-1" style={textStrokeStyle}>epic 10%</p>
            <p className="font-pixelify text-[#EAB70F] text-xl mb-1" style={textStrokeStyle}>legendary 5%</p>
          </div>
        </div>
      )}
  
      <div className={isMobile 
        ? "absolute bottom-4 left-1/2 transform -translate-x-1/2" 
        : "absolute bottom-4 right-4"
      }>
        <button 
          type="button"
          onClick={() => navigate("/shop/buy")}
          className={`font-pixelify bg-green-500 text-black ${isMobile ? 'px-6 py-1 text-xl' : 'px-8 py-2 text-2xl'} rounded font-bold`}
          style={{
            boxShadow: '0 4px 0 #1b7e1e',
            textShadow: '1px 1px 0 #fff'
          }}>
          SHOP
        </button>
      </div>
    </div>
  );
};
  
export default Main;