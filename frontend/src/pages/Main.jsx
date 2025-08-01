import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { getUserProfile } from '../api/user';

const Main = () => {
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:3000";

  const [timeRemaining, setTimeRemaining] = useState(180);
  const [selectedBox, setSelectedBox] = useState('Meme Box');
  const [showSettings, setShowSettings] = useState(false);
  const [isChestButtonHovered, setIsChestButtonHovered] = useState(false);
  const [isPlayButtonHovered, setIsPlayButtonHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);
  
  const [showMusicControls, setShowMusicControls] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState(0);
  
  const audioRef = useRef(new Audio());

  const [username, setUsername] = useState("");
  const [userMoney, setUserMoney] = useState(0);
  const [userBag, setUserBag] = useState(0);
  const [profilePic, setProfilePic] = useState("/assets/profile/avatar.png");

  const [memeKeys, setMemeKeys] = useState(0);
  const [nextMemeKeyTime, setNextMemeKeyTime] = useState(null);

  const storedUsername = localStorage.getItem("username");

  const fetchData = async () => {
    const res = await getUserProfile(storedUsername);
    if (res.success && res.data) {
      const { username, coin, profilePic, inventory, keys } = res.data;
      setUsername(username);
      setUserMoney(coin);
      setUserBag(inventory.filter(item => item.owned && item.quantity > 0).reduce((sum, item) => sum + item.quantity, 0));
      setProfilePic(profilePic?.startsWith("/uploads") ? `${BASE_URL}${profilePic}` : profilePic || "/assets/profile/avatar.png");

      const memeKey = keys.find(key => key.keyType === "Meme");
      setMemeKeys(memeKey?.count || 0);
      setNextMemeKeyTime(memeKey?.nextRegenerateTime || null);
    } else {
      alert("Session expired or invalid user. Please log in again.");
      navigate("/login");
    }
  };

   useEffect(() => {
    if (!storedUsername) {
      navigate("/login");
      return;
    }
    fetchData();
  }, []);

  
  const songs = [
    { title: "Phonk", src: "../public/assets/music/AmorNaPraia.mp3" },
    { title: "Serious Bacon", src: "../public/assets/music/wangwong.mp3" },
    { title: "Birds of feather", src: "../public/assets/music/BirdsOfFeather.mp3" },
    { title: "Pokemon Theme", src: "../public/assets/music/PokemonTheme.mp3" }
  ];
  
  useEffect(() => {
    const audio = audioRef.current;
    audio.src = songs[currentSong].src;
    audio.loop = true;
    audio.volume = volume / 100;
    
    if (isPlaying) {
      audio.play().catch(error => {
        console.log("Audio autoplay was prevented:", error);
        setIsPlaying(false);
      });
    }
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [currentSong]);
  
  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);
  
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(e => console.log("Playback error:", e));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  
  const handleBoxChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedBox(selectedValue);
    
    if (selectedValue === "Superhero Box") {
      navigate("/superhero");
    }
  };

  useEffect(() => {
  if (!nextMemeKeyTime) return;

  const interval = setInterval(() => {
    const now = new Date();
    const target = new Date(nextMemeKeyTime);
    const diff = Math.floor((target - now) / 1000);
    setTimeRemaining(diff > 0 ? diff : 0);
  }, 1000);

  return () => clearInterval(interval);
}, [nextMemeKeyTime]);

  const formatTime = (seconds) => {
  if (seconds <= 0) return "Ready!";
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
};
  
  const changeSong = (direction) => {
    let newIndex = currentSong;
    if (direction === 'next') {
      newIndex = (currentSong + 1) % songs.length;
    } else {
      newIndex = (currentSong - 1 + songs.length) % songs.length;
    }
    setCurrentSong(newIndex);
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
  
  const navigateToProfile = () => {
    navigate("/profile");
  };
  
  return (
    <div 
      className="font-pixelify min-h-screen relative bg-[url('../public/assets/background/memebg.png')] bg-cover bg-center flex flex-col"
    >
      <div className="absolute top-4 right-4 z-20">
        <button 
          onClick={() => setShowMusicControls(!showMusicControls)}
          className="bg-black bg-opacity-50 text-white rounded-full p-2 text-lg hover:bg-opacity-70"
        >
          {isPlaying ? "🔊" : "🔇"}
        </button>
      </div>
      
      {/* Music Controls Panel */}
      {showMusicControls && (
        <div className="absolute top-14 right-4 bg-black bg-opacity-70 rounded-lg p-3 z-20 w-64">
          <div className="text-white font-bold mb-2 flex justify-between items-center">
            <span>Music Player</span>
            <button 
              onClick={() => setShowMusicControls(false)} 
              className="text-white hover:text-red-400"
            >
              ✕
            </button>
          </div>
          
          <div className="flex items-center justify-between mb-3 text-white">
            <button onClick={() => changeSong('prev')} className="text-xl hover:text-yellow-300">⏮</button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)} 
              className="text-2xl hover:text-yellow-300"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button onClick={() => changeSong('next')} className="text-xl hover:text-yellow-300">⏭</button>
          </div>
          
          <div className="text-white text-sm text-center mb-2 truncate">
            Now Playing: {songs[currentSong].title}
          </div>
          
          <div className="flex items-center text-white">
            <span className="mr-2 text-sm">🔈</span>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none bg-gray-300 cursor-pointer"
            />
            <span className="ml-2 text-sm">{volume}%</span>
          </div>
          
          <div className="mt-3">
            <select 
              className="w-full bg-gray-800 text-white rounded p-1 text-sm"
              value={currentSong}
              onChange={(e) => setCurrentSong(parseInt(e.target.value))}
            >
              {songs.map((song, index) => (
                <option key={index} value={index}>
                  {song.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      
      {!isMobile ? (
        <>
          <div className="flex justify-between items-center pt-6 px-6 pb-2">
            <div className={`bg-white rounded-full py-2.5 px-7 flex items-center cursor-pointer 
            hover:bg-gray-300 transition-colors ${isProfileHovered ? 'transform scale-105' : ''}`}
            onClick={navigateToProfile}
            onMouseEnter={() => setIsProfileHovered(true)}
            onMouseLeave={() => setIsProfileHovered(false)}
            style={{ transition: 'transform 0.1s ease' }}>
              <div className="mr-3">
                <img src={profilePic} alt="Profile" className="w-16 h-16 rounded-full" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Welcome, {username}</h2>
                <div className="flex items-center">
                    <img src="../public/assets\profile\coin.png" alt="Coin" className="w-6 h-6 mr-2" />
                    <span className="text-yellow-500 text-lg">{userMoney}</span>
                </div>
                <div className="flex items-center">
                    <img src="../public/assets\profile\bag.png" alt="Bag" className="w-6 h-6 mr-2" />
                    <span className="text-lg">{userBag}</span>
                </div>
              </div>
          </div>
            <div className="flex justify-center items-center -ml-48">
              <img src="..\src\icon\logo.png" alt="LootBox" className="h-24" />
            </div>

      
            <div className="relative">
              <button 
                className="text-3xl p-4"
                onClick={() => setShowSettings(!showSettings)}
              >
                ⚙️
              </button>
                
              {showSettings && (
                <div className="absolute right-0 top-12 bg-white rounded-md shadow-lg p-3 w-40 z-10">
                  <ul className="text-base">
                    <li onClick={() => navigate("/main")} className="py-2 hover:bg-gray-100 cursor-pointer">Home</li>
                    <li onClick={() => navigate("/profile")} className="py-2 hover:bg-gray-100 cursor-pointer">Account</li>
                    <li onClick={() => navigate("/login")} className="py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-200 mt-1 pt-1">Sign out</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center p-3 mt-9">
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
                <div className="absolute right-0 top-10 bg-white rounded-md shadow-lg p-3 w-40 z-10">
                  <ul className="text-base">
                    <li onClick={() => navigate("/main")} className="py-2 hover:bg-gray-100 cursor-pointer">Home</li>
                    <li onClick={() => navigate("/profile")} className="py-2 hover:bg-gray-100 cursor-pointer">Account</li>
                    <li onClick={() => navigate("/login")} className="py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-200 mt-1 pt-1">Sign out</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          <div 
            className={`flex justify-center items-center mt-2 mb-4 ${isProfileHovered ? 'transform scale-105' : ''}`}
            onClick={navigateToProfile}
            onMouseEnter={() => setIsProfileHovered(true)}
            onMouseLeave={() => setIsProfileHovered(false)}
            style={{ transition: 'transform 0.2s ease' }}
          >
            <div className="bg-white rounded-full py-1 px-6 flex items-center w-4/5 cursor-pointer hover:bg-gray-100">
              <div className="mr-3">
                <img src={profilePic} alt="Profile" className="w-14 h-14 rounded-full" />
              </div>
              <div>
                <h2 className="text-lg font-bold mb-0">Welcome, {username}</h2>
                <div className="flex items-center">
                  <img src="../public/assets\profile\coin.png" alt="Coin" className="w-5 h-5 mr-1" />
                  <span className="text-yellow-500 text-sm">{userMoney}</span>
                </div>
                <div className="flex items-center">
                  <img src="../public/assets\profile\bag.png" alt="Bag" className="w-5 h-5 mr-1" />
                  <span className="text-sm">{userBag}</span>
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
            <p className="font-pixelify text-[#00DA62] text-4xl mb-2" style={textStrokeStyle}>common 50%</p>
            <p className="font-pixelify text-[#0CC2FF] text-4xl mb-2" style={textStrokeStyle}>rare 35%</p>
            <p className="font-pixelify text-[#9C4BFF] text-4xl mb-2" style={textStrokeStyle}>epic 10%</p>
            <p className="font-pixelify text-[#EAB70F] text-4xl mb-2" style={textStrokeStyle}>legendary 5%</p>
          </div>
          
          <div className="w-1/3 flex flex-col items-center justify-center">
            <div className="mb-4 flex justify-center">
              <button 
                onClick={() => { 
                  navigate("/memeLook");
                }}
                onMouseEnter={() => setIsChestButtonHovered(true)}
                onMouseLeave={() => setIsChestButtonHovered(false)}
                className="focus:outline-none transition-transform duration-200 hover:scale-105"
              >
                <img 
                  src={isChestButtonHovered ? '../public/assets/chest/chestOnhold.png' : '../public/assets/chest/Chest1.png'} 
                  alt="Hero Box" 
                  className="w-64"
                />
              </button>
            </div>
           
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center">
                <img 
                  src="../public/assets\key\key1.png"
                  alt="Key"
                  className="h-5"
                  style={{ transform: 'rotate(270deg)' }} 
                />
              </div>
              <span 
                className={`font-pixelify text-lg ${memeKeys > 0 ? 'text-[#00DA62]' : 'text-red-600'}`} 
                style={textStrokeStyle}
              >
                Key remaining {memeKeys}
              </span>
            </div>
  
            <div className="flex justify-center mb-6 w-full">
              <button 
                onClick={() => {
                  if (memeKeys > 0) {
                    navigate("/memeRandom");
                    const openSound = new Audio('../public/assets/music/click.mp3');
                    openSound.volume = volume / 100;
                    openSound.play();
                  }
                }}
                onMouseEnter={() => setIsPlayButtonHovered(true)}
                onMouseLeave={() => setIsPlayButtonHovered(false)}
                className="focus:outline-none transition-transform duration-200 hover:scale-105"
              >
                <img 
                  src={isPlayButtonHovered ? '../public/assets/lbGadget/playbuttonCapicity35.png' : '../public/assets/lbGadget/playbutton.png'} 
                  alt="Play Button" 
                  className="w-48"
                />
              </button>
            </div>
              
            <div className="font-pixelify text-center mb-4">
              <span className="text-[#00DA62]" style={textStrokeStyle}>1 </span>
              <span className="text-white" style={textStrokeStyle}>Free keys in </span>
              <span className="text-red-600" style={textStrokeStyle}>{formatTime(timeRemaining)}</span>

            </div>
          </div>
          
          <div className="w-1/3"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center flex-1">
          <div className="flex flex-col items-center justify-center mt-3">
            <button
              onClick={() => { 
                navigate("/memeLook");
              }}
              onMouseEnter={() => setIsChestButtonHovered(true)}
              onMouseLeave={() => setIsChestButtonHovered(false)}
              className="focus:outline-none"
            >
              <img 
                src={isChestButtonHovered ? '../public/assets/chest/chestOnhold.png' : '../public/assets/chest/Chest1.png'} 
                alt="Loot Box" 
                className="w-40 mb-2" 
              />
            </button>
          </div>
          
          <div className="flex items-center justify-center mb-2">
            <div className="flex items-center justify-center">
              <img 
                src="./public/assets\key\key1.png" 
                alt="Key"
                className="h-3"
                style={{ transform: 'rotate(270deg)' }} 
              />
            </div>
            <span 
              className={`font-pixelify text-sm ${memeKeys > 0 ? 'text-[#00DA62]' : 'text-red-600'}`} 
              style={textStrokeStyle}
            >
              Key remaining {memeKeys}
            </span>
          </div>
          
          <div className="flex justify-center mb-3">
            <button 
              onClick={() => { 
                if (keys > 0) {
                  navigate("/memeRandom");
                  const openSound = new Audio('../public/assets/music/click.mp3');
                  openSound.volume = volume / 100;
                  openSound.play();
                }
              }}
              onMouseEnter={() => setIsPlayButtonHovered(true)}
              onMouseLeave={() => setIsPlayButtonHovered(false)}
              className="focus:outline-none"
            >
              <img 
                src={isPlayButtonHovered ? '../public/assets/lbGadget/playbuttonCapicity35.png' : '../public/assets/lbGadget/playbutton.png'} 
                alt="Play Button" 
                className="w-32"
              />
            </button>
          </div>
          
          <div className="font-pixelify text-center text-sm mb-3">
            <span className="text-[#00DA62]" style={textStrokeStyle}>1 </span>
            <span className="text-white" style={textStrokeStyle}>Free keys in </span>
            <span className="text-red-600" style={textStrokeStyle}>{formatTime(timeRemaining)}</span>
            <span className="text-white" style={textStrokeStyle}> minutes</span>
          </div>
          
          <div className="text-center mt-3 mb-16">
            <h3 className="font-pixelify text-2xl mb-1 font-bold" style={whiteStrokeStyle}>Rate Drops</h3>
            <p className="font-pixelify text-[#00DA62] text-xl mb-1" style={textStrokeStyle}>common 40%</p>
            <p className="font-pixelify text-[#0CC2FF] text-xl mb-1" style={textStrokeStyle}>rare 39.9%</p>
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
          onClick={() => { 
            navigate("/shop/buy");
          }}
          onMouseEnter={() => setIsShopHovered(true)}
          onMouseLeave={() => setIsShopHovered(false)}
          className="focus:outline-none transition-transform duration-200 hover:scale-110"
        >
          <img 
            src="../public/assets/shop/shopbutton.png"
            alt="Shop button" 
            className="w-20"
          />
        </button>
      </div>
    </div>
  );
};
  
export default Main;