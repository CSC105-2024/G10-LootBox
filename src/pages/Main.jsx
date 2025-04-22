import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [timeRemaining, setTimeRemaining] = useState(180);
<<<<<<< HEAD
  const [selectedBox, setSelectedBox] = useState('Main');
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
  
  // Handle box selection change
  const handleBoxChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedBox(selectedValue);
    
    // Navigate to superhero page when Superhero Box is selected
    if (selectedValue === "Superhero Box") {
      navigate("/superhero");
    }
  };
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Default text stroke style (black)
  const textStrokeStyle = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  };
  
  // White text stroke style for drop rates
  const whiteStrokeStyle = {
    textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
  };
  
  return (
    <div 
      className="font-pixelify min-h-screen relative bg-[url('..\src\assets\background\memebg.png')] bg-cover bg-center"
    >
      {/* Top section with profile, logo, and settings in the same row */}
      <div className="flex justify-between items-center p-6">
        {/* Profile - Left */}
        <div className="bg-white rounded-full p-3 flex items-center">
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

        {/* Logo - Center, same y-level as profile */}
        <div className="flex justify-center items-center">
          <img src="..\src\icon\logo.png" alt="LootBox" className="h-24" />
        </div>

        {/* Settings - Right */}
        <div className="relative">
          <button 
            className="text-3xl p-3"
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
      
      {/* Box Selection - Center */}
      <div className="flex justify-center mb-8 mt-6">
        <select 
          value={selectedBox}
          onChange={handleBoxChange}
          className="font-pixelify bg-white px-4 py-2 rounded-md border border-gray-300 w-48"
        >
          <option>Meme Box </option>
          <option value="Superhero Box">Superhero Box </option>
        </select>
      </div>
  
      {/* Main Content */}
      <div className="flex">
        {/* Drop Rates - Left side */}
        <div className="w-1/3 text-left px-4">
          <h3 className="font-pixelify text-5xl mb-4 font-bold" style={whiteStrokeStyle}>Drop rates</h3>
          <p className="font-pixelify text-[#00DA62] text-4xl mb-2" style={textStrokeStyle}>common 40%</p>
          <p className="font-pixelify text-[#0CC2FF] text-4xl mb-2" style={textStrokeStyle}>uncommon 39.9%</p>
          <p className="font-pixelify text-[#9C4BFF] text-4xl mb-2" style={textStrokeStyle}>epic 10%</p>
          <p className="font-pixelify text-[#EAB70F] text-4xl mb-2" style={textStrokeStyle}>legendary 5%</p>
        </div>
  
        {/* Loot Box Display - Center */}
        <div className="w-1/3 flex flex-col items-center justify-center">
          {/* Loot Box Image */}
          <div className="mb-4 flex justify-center">
            <img src="..\src\assets\chest\Chest1.png" alt="Loot Box" className="w-64" />
          </div>
            
          {/* Key Status - Now with dynamic color based on keys count */}
          <div className="flex items-center justify-center mb-4">
            <img src="..\src\assets\key\key1.png" alt="Key" className="w-6 h-6 mr-2" />
            <span 
              className={`font-pixelify text-lg ${keys > 0 ? 'text-[#00DA62]' : 'text-red-600'}`} 
              style={textStrokeStyle}
            >
              Key remaining {keys}
            </span>
          </div>
  
          {/* Play Button - Using image with hover effect */}
          <div className="flex justify-center mb-6 w-full">
            <button 
              onClick={() => {
                if (keys > 0) {
                  setKeys(keys - 1);
                  // Logic to open the loot box
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
            
          {/* Timer */}
          <div className="font-pixelify text-center mb-4">
            <span className="text-[#00DA62]" style={textStrokeStyle}>3 </span>
            <span className="text-white" style={textStrokeStyle}>Free keys in </span>
            <span className="text-red-600" style={textStrokeStyle}>{formatTime(timeRemaining)}</span>
            <span className="text-white" style={textStrokeStyle}> minutes</span>
          </div>
        </div>
        
        {/* Right section for spacing */}
        <div className="w-1/3"></div>
      </div>
  
      {/* Shop Button - Right */} 
      <div className="absolute bottom-4 right-4">
        <button 
          type="button"
          onClick={() => navigate("/shop/buy")}
          className="font-pixelify bg-green-500 text-black px-8 py-2 text-2xl rounded font-bold"
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
=======
    const [selectedBox, setSelectedBox] = useState('Main');
    const [showSettings, setShowSettings] = useState(false);
    const [keys, setKeys] = useState(0);
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
  
    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
  
    // Text stroke style for pixel art text
    const textStrokeStyle = {
      textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    };
  
    return (
      <div 
        className="font-pixelify min-h-screen relative bg-[url('..\src\assets\background\memebg.png')] bg-cover bg-center"
      >
        
        {/* Top Navigation */}
        <div className="flex justify-between items-center p-4">
          {/* Profile */}
          <div className="bg-white rounded-full p-2 flex items-center">
            <div className="mr-2">
              <img src="..\src\assets\profile\avatar.png" alt="Profile" className="w-12 h-12 rounded-full" />
            </div>
            <div>
              <h2 className="text-lg">Michael Kaiser</h2>
              <div className="flex items-center">
                <img src="..\src\assets\profile\coin.png" alt="Coin" className="w-5 h-5 mr-1" />
                <span className="text-yellow-500">5,000,000</span>
              </div>
              <div className="flex items-center">
                <img src="..\src\assets\profile\bag.png" alt="Bag" className="w-5 h-5 mr-1" />
                <span>20</span>
              </div>
            </div>
          </div>
  
          {/* Settings */}
          <div className="relative">
            <button 
              className="text-2xl p-2"
              onClick={() => setShowSettings(!showSettings)}
            >
              ⚙️
            </button>
            
            {showSettings && (
              <div className="absolute right-0 top-10 bg-white rounded-md shadow-lg p-2 w-32 z-10">
                <ul className="text-sm">
                  <li className="py-1 hover:bg-gray-100 cursor-pointer">Home</li>
                  <li className="py-1 hover:bg-gray-100 cursor-pointer">Account</li>
                  <li className="py-1 hover:bg-gray-100 cursor-pointer border-t border-gray-200 mt-1 pt-1">Sign out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
  
        {/* Logo */}
        <div className="flex justify-center mb-8 mt-2">
          <img src="..\src\icon\logo.png" alt="LootBox" className="h-16" />
        </div>
  
        {/* Box Selection */}
        <div className="flex justify-center mb-8">
          <select 
            value={selectedBox}
            onChange={(e) => setSelectedBox(e.target.value)}
            className="font-pixelify bg-white px-4 py-2 rounded-md border border-gray-300 w-48"
          >
            <option>Meme Box </option>
            <option value="Superhero Box">Superhero Box </option>

          </select>
        </div>
  
        {/* Main Content */}
        <div className="flex px-4">
          {/* Drop Rates */}
          <div className="w-2/1 text-left px-4 ">
            <h3 className="font-pixelify text-5xl mb-4 font-bold" style={textStrokeStyle}>Drop rates</h3>
            <p className="font-pixelify text-green-400 text-4xl mb-2" style={textStrokeStyle}>common 40%</p>
            <p className="font-pixelify text-blue-400 text-4xl mb-2" style={textStrokeStyle}>uncommon 39.9%</p>
            <p className="font-pixelify text-purple-600 text-4xl mb-2" style={textStrokeStyle}>epic 10%</p>
            <p className="font-pixelify text-yellow-500 text-4xl mb-2" style={textStrokeStyle}>legendary 5%</p>
            <p className="font-pixelify text-yellow-300 text-4xl mb-2" style={textStrokeStyle}>secret 1%</p>
            <p className="font-pixelify text-orange-500 text-4xl mb-2" style={textStrokeStyle}>unreal 0.1%</p>
          </div>
  
          {/* Loot Box Display */}
          <div className="w-2xl flex flex-col items-center justify-normal">
            {/* Loot Box Image */}
            <div className="mb-4 flex justify-center">
              <img src="..\src\assets\chest\Chest1.png" alt="Loot Box" className="w-64" />
            </div>
            
            {/* Key Status */}
            <div className="flex items-center justify-center mb-4">
              <img src="..\src\assets\key\key1.png" alt="Key" className="w-6 h-6 mr-2" />
              <span className="font-pixelify text-red-600 text-lg" style={textStrokeStyle}>Key remaining {keys}</span>
            </div>
  
            {/* Play Button */}
            <div className="flex justify-center mb-6 w-full">
              <button 
                className="font-pixelify bg-green-500 text-black px-16 py-3 text-3xl rounded font-bold"
                style={{
                  boxShadow: '0 4px 0 #1b7e1e',
                  textShadow: '1px 1px 0 #fff'
                }}
                onClick={() => {
                  if (keys > 0) {
                    setKeys(keys - 1);
                    // Logic to open the loot box
                  }
                }}
              >
                PLAY
              </button>
            </div>
            
            {/* Timer */}
            <div className="font-pixelify text-center mb-4">
              <span style={textStrokeStyle}>3 Free keys in </span>
              <span className="text-red-600" style={textStrokeStyle}>{formatTime(timeRemaining)}</span>
              <span style={textStrokeStyle}> minutes</span>
            </div>
          </div>
        </div>
  
        {/* Shop Button */} 
        <div className="absolute bottom-4 right-4">
          <button 
          type ="button"
          onClick={() => navigate("/shop/buy")}
          className="font-pixelify bg-green-500 text-black px-8 py-2 text-2xl rounded font-bold"
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

>>>>>>> 12ae39e2881156b240e94501f061dcd9a829711a
