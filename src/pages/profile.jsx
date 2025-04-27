import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Michael Kaiser");
  const [money, setMoney] = useState(3000000);
  const [inventoryCount, setInventoryCount] = useState(20);
  const [profilePic, setProfilePic] = useState("../src/assets/profile/avatar.png");
  const [backgroundImage, setBackgroundImage] = useState("../src/assets/background/profilebg.png");
  const [inventoryBackgroundImage, setInventoryBackgroundImage] = useState("../src/assets/background/showitemsbg.png");
  const [showEditMode, setShowEditMode] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  
  const profileInputRef = useRef(null);
  const backgroundInputRef = useRef(null);

  const memeCollection = [
    { id: 1, name: "Pepe", owned: true, count: 11, img: "../src/assets/memeitems/Crycatpng.png" },
    { id: 2, name: "Slime", owned: true, count: 0, img: "../src/assets/memeitems/Mikepng.png" },
    { id: 3, name: "Cat", owned: true, count: 0, img: "../src/assets/memeitems/Nyancatpng.png" },
    { id: 4, name: "Doge", owned: true, count: 0, img: "../src/assets/memeitems/DodgeDogpng.png" },
    { id: 5, name: "Baby Yoda", owned: true, count: 9, img: "../src/assets/memeitems/BossDogpng.png" },
    { id: 6, name: "Kirby", owned: true, count: 0, img: "../src/assets/memeitems/Kirbypng.png" },
    { id: 7, name: "Frog", owned: true, count: 0, img: "../src/assets/memeitems/PepeFrogpng.png" },
    { id: 8, name: "Spongebob", owned: true, count: 0, img: "../src/assets/memeitems/Spongebobpng.png" },
    { id: 9, name: "Robot", owned: true, count: 0, img: "../src/assets/memeitems/Chamberpng.png" },
    { id: 10, name: "Pink Blob", owned: true, count: 0, img: "../src/assets/memeitems/Peterpng.png" },
    { id: 11, name: "Iron Man", owned: true, count: 0, img: "../src/assets/heroitems/DeadPoolpng.png" },
    { id: 12, name: "Spider-Man", owned: true, count: 0, img: "../src/assets/heroitems/RexPlodepng.png" },
    { id: 13, name: "Hulk", owned: true, count: 0, img: "../src/assets/heroitems/iShowSpeedpng.png" },
    { id: 14, name: "Thanos", owned: true, count: 0, img: "../src/assets/heroitems/SinesterMarkpng.png" },
    { id: 15, name: "Black Panther", owned: true, count: 0, img: "../src/assets/heroitems/RedDeathpng.png" },
    { id: 16, name: "Thor", owned: true, count: 0, img: "../src/assets/heroitems/Conquestpng.png" },
    { id: 17, name: "Crab", owned: true, count: 0, img: "../src/assets/heroitems/HomeLanderpng.png" },
    { id: 18, name: "Pikachu", owned: true, count: 0, img: "../src/assets/heroitems/PeaceMakerpng.png" },
    { id: 19, name: "Superman", owned: false, count: 0, img: "../src/assets/heroitems/Omnimanpng.png" },
    { id: 20, name: "Batman", owned: false, count: 0, img: "../src/assets/heroitems/Yamchapng.png" },
  ];

  const handleProfilePicClick = () => profileInputRef.current.click();
  const handleBackgroundClick = () => backgroundInputRef.current.click();

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBackgroundImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEditMode = () => {
    setShowEditMode(!showEditMode);
    setShowSettingsMenu(false);
  };

  const toggleSettingsMenu = () => setShowSettingsMenu(!showSettingsMenu);

  const formatMoney = (amount) => amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const handleNavigate = (path) => {
    navigate(path);
    setShowSettingsMenu(false);
  };

  const handleSignOut = () => navigate('/login');

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 font-pixelify pb-6 relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <button onClick={() => navigate('/main')} className="flex items-center text-gray-700">
          <span className="text-2xl mr-2">←</span>
          <span className="font-medium">User</span>
        </button>

        <button onClick={toggleSettingsMenu} className="bg-gray-200 p-2 rounded-full">
          <span className="text-xl">⚙️</span>
        </button>
      </div>

      {/* Settings Menu */}
      {showSettingsMenu && (
        <div className="absolute right-2 top-16 bg-white shadow-lg rounded-lg z-50 w-48">
          <div className="flex flex-col">
            <button onClick={() => handleNavigate('/main')} className="px-4 py-3 text-left hover:bg-gray-100 flex items-center border-b border-gray-200">
              <span className="mr-2">🏠</span>
              <span>Home</span>
            </button>
            <button onClick={toggleEditMode} className="px-4 py-3 text-left hover:bg-gray-100 flex items-center border-b border-gray-200">
              <span className="mr-2">✏️</span>
              <span>Edit Mode</span>
            </button>
            <button onClick={handleSignOut} className="px-4 py-3 text-left hover:bg-gray-100 flex items-center border-b border-gray-200">
              <span className="mr-2">🚪</span>
              <span>Sign Out</span>
            </button>
            <button onClick={handleDeleteAccount} className="px-4 py-3 text-left hover:bg-red-100 text-red-600 flex items-center">
              <span className="mr-2">⚠️</span>
              <span>Delete Account</span>
            </button>
          </div>
        </div>
      )}

      {/* Profile Header */}
      <div className="relative">
        <div className="w-full h-32 sm:h-48 bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})` }}>
          {showEditMode && (
            <button onClick={handleBackgroundClick} className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white p-2 rounded-full">
              📷
            </button>
          )}
          <input type="file" ref={backgroundInputRef} onChange={handleBackgroundChange} accept="image/*" className="hidden" />
        </div>

        {/* Profile Info */}
        <div className="relative px-4 pb-4 bg-white shadow-md rounded-b-lg">
          <div className="absolute -top-16 left-6">
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-blue-200 p-1.5 relative">
                <img src={profilePic} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-pink-100" />
                {showEditMode && (
                  <button onClick={handleProfilePicClick} className="absolute bottom-0 right-0 bg-black bg-opacity-60 text-white p-1.5 rounded-full">
                    📷
                  </button>
                )}
                <input type="file" ref={profileInputRef} onChange={handleProfilePicChange} accept="image/*" className="hidden" />
              </div>
            </div>
          </div>

          <div className="ml-32 sm:ml-40 pt-2 pb-1">
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <h1 className="text-lg sm:text-2xl font-bold">HI! </h1>
                <h2 className="text-base sm:text-xl ml-1">{username}</h2>
              </div>

              <div className="flex items-center mt-1">
                <img src="../src/assets/profile/coin.png" alt="Coins" className="w-5 h-5 mr-1" />
                <span className="text-base sm:text-lg font-semibold">{formatMoney(money)}</span>
              </div>

              <div className="flex items-center mt-1">
                <img src="../src/assets/profile/bag.png" alt="Inventory" className="w-5 h-5 mr-1" />
                <span className="text-base sm:text-lg font-semibold">{inventoryCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Section */}
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center mb-3">
          <h3 className="text-xl font-bold">Inventory 📦</h3>
        </div>

        <div className="rounded-lg p-4 shadow-inner" style={{ backgroundImage: `url(${inventoryBackgroundImage})`, backgroundSize: 'cover' }}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
            {memeCollection.map((meme) => (
              <div key={meme.id} className={`bg-gray-200 rounded-lg p-2 relative ${meme.owned ? 'opacity-100' : 'opacity-60'}`}>
                <img src={meme.img} alt={meme.name} className={`w-full h-16 sm:h-20 object-contain ${!meme.owned ? 'grayscale' : ''}`} />
                {meme.owned && meme.count >= 0 && (
                  <div className="absolute top-1 right-1 bg-indigo-600 text-white text-xs px-1 rounded-md">
                    x{meme.count}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
