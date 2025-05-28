import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { getUserProfile, uploadUserImages, deleteAccount} from '../api/user.ts';

const BASE_URL = "http://localhost:3000";

export default function Profile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [coin, setCoin] = useState(0);
  const [inventoryCount, setInventoryCount] = useState(0);
  const [profilePic, setProfilePic] = useState("/assets/profile/avatar.png");
  const [backgroundImage, setBackgroundImage] = useState("/assets/background/profilebg.png");
  const [inventoryBackgroundImage] = useState("/assets/background/showitemsbg.png");
  const [showEditMode, setShowEditMode] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [inventory, setInventory] = useState([]);

  const profileInputRef = useRef(null);
  const backgroundInputRef = useRef(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      const res = await getUserProfile(storedUsername);
      if (res.success && res.data) {
        const { username, coin, inventory, profilePic, backgroundImage } = res.data;
        setUsername(username);
        setCoin(coin);
        setInventory(inventory);
        setInventoryCount(inventory.filter(item => item.owned && item.quantity > 0).reduce((total, item) => total + item.quantity, 0));
        setProfilePic(profilePic?.startsWith('/uploads') ? `${BASE_URL}${profilePic}` : profilePic || "/assets/profile/avatar.png");
        setBackgroundImage(backgroundImage?.startsWith('/uploads') ? `${BASE_URL}${backgroundImage}` : backgroundImage || "/assets/background/profilebg.png");
      } else {
        alert("Session expired or invalid user. Please log in again.");
        navigate("/login");
      }
    };

    fetchData();
  }, []);

  const handleProfilePicClick = () => profileInputRef.current.click();
  const handleBackgroundClick = () => backgroundInputRef.current.click();

  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => setProfilePic(event.target.result);
    reader.readAsDataURL(file);

    await uploadImageToServer(file, null);
  };

  const handleBackgroundChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => setBackgroundImage(event.target.result);
    reader.readAsDataURL(file);

    await uploadImageToServer(null, file);
  };

  const uploadImageToServer = async (profilePicFile, backgroundImageFile) => {
    const formData = new FormData();
    if (profilePicFile) formData.append('profilePic', profilePicFile);
    if (backgroundImageFile) formData.append('backgroundImage', backgroundImageFile);
    formData.append('username', username);

    try {
      const res = await uploadUserImages(formData);
      if (!res.success) {
        console.error("Failed to upload images:", res.msg);
      }
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  const toggleEditMode = () => {
    setShowEditMode(!showEditMode);
    setShowSettingsMenu(false);
  };

  const toggleSettingsMenu = () => setShowSettingsMenu(!showSettingsMenu);
  const formatMoney = (amount) => (amount ?? 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const handleNavigate = (path) => {
    navigate(path);
    setShowSettingsMenu(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem("username");
    navigate('/login');
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      const res = await deleteAccount(username);
      if (res.success) {
        localStorage.removeItem("username");
        navigate('/login');
      } else {
        alert("Failed to delete account: " + res.msg);
      }
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 font-pixelify pb-6 relative">
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <button onClick={() => navigate('/main')} className="flex items-center text-gray-700">
          <span className="text-2xl mr-2">←</span>
          <span className="font-medium">User</span>
        </button>
        <button onClick={toggleSettingsMenu} className="bg-gray-200 p-2 rounded-full">
          <span className="text-xl">⚙️</span>
        </button>
      </div>

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

      <div className="relative">
        <div className="w-full h-32 sm:h-48 bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})` }}>
          {showEditMode && (
            <button onClick={handleBackgroundClick} className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white p-2 rounded-full">
              📷
            </button>
          )}
          <input type="file" ref={backgroundInputRef} onChange={handleBackgroundChange} accept="image/*" className="hidden" />
        </div>

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
                <img src="/assets/profile/coin.png" alt="Coins" className="w-5 h-5 mr-1" />
                <span className="text-base sm:text-lg font-semibold">{formatMoney(coin)}</span>
              </div>
              <div className="flex items-center mt-1">
                <img src="/assets/profile/bag.png" alt="Inventory" className="w-5 h-5 mr-1" />
                <span className="text-base sm:text-lg font-semibold">{inventoryCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center mb-3">
          <h3 className="text-xl font-bold">Inventory 📦</h3>
        </div>
        <div className="rounded-lg p-4 shadow-inner" style={{ backgroundImage: `url(${inventoryBackgroundImage})`, backgroundSize: 'cover' }}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
            {inventory.map((item) => (
              <div key={item.id} className={`bg-gray-200 rounded-lg p-2 relative ${item.owned ? 'opacity-100' : 'opacity-60'}`}>
                <img src={item.img} alt={item.name} className={`w-full h-16 sm:h-20 object-contain ${!item.owned ? 'grayscale' : ''}`} />
                {item.owned && item.quantity > 0 && (
                  <div className="absolute top-1 right-1 bg-indigo-600 text-white text-xs px-1 rounded-md">
                    x{item.quantity}
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
