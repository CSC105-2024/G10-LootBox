import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getUserProfile } from '../api/user';
import { sellItem } from '../api/shop';

export default function Selling() {
  const navigate = useNavigate()

  const BASE_URL = "http://localhost:3000";

  const [quantity, setQuantity] = useState({
    cryCat: 0,
    boss: 0
  });

  const pricePerItem = {
    cryCat: 500,
    boss: 1275
  };

  const storedUsername = localStorage.getItem("username");

  const [username, setUsername] = useState("");
  const [userMoney, setUserMoney] = useState(0);
  const [userBag, setUserBag] = useState(0);
  const [profilePic, setProfilePic] = useState("/assets/profile/avatar.png");
  const [userInventory, setUserInventory] = useState({
    cryCat: 0,
    boss: 0
  });

  const fetchData = async () => {
        const res = await getUserProfile(storedUsername);
        if (res.success && res.data) {
          const { username, coin, inventory, profilePic } = res.data;
          setUsername(username);
          setUserMoney(coin);
          setUserBag(inventory.filter(item => item.owned && item.quantity > 0).reduce((total, item) => total + item.quantity, 0));
          setProfilePic(profilePic?.startsWith('/uploads') ? `${BASE_URL}${profilePic}` : profilePic || "/assets/profile/avatar.png");
          console.log("User inventory:", inventory);
          const cryCat = inventory.find(item => item.name === 'Cry Cat')?.quantity || 0;
          const boss = inventory.find(item => item.name === 'Boss Suit')?.quantity || 0;
          setUserInventory({ cryCat, boss });
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

  const [showAnimation, setShowAnimation] = useState(false);
  const [animationMessage, setAnimationMessage] = useState("");

  const handleIncrement = (itemType) => {
    if (quantity[itemType] < userInventory[itemType]) {
      setQuantity(prev => ({
        ...prev,
        [itemType]: prev[itemType] + 1
      }));
    }
  };

  const handleDecrement = (itemType) => {
    if (quantity[itemType] > 0) {
      setQuantity(prev => ({
        ...prev,
        [itemType]: prev[itemType] - 1
      }));
    }
  };

  const totalItems = quantity.cryCat + quantity.boss;
  const totalPrice = (quantity.cryCat * pricePerItem.cryCat) + (quantity.boss * pricePerItem.boss);
  
  useEffect(() => {
    let timer;
    if (showAnimation) {
      timer = setTimeout(() => {
        setShowAnimation(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showAnimation]);
  
  const handleCloseAnimation = () => {
    setShowAnimation(false);
  };
  
  const handleSell = async () => {
  if (totalItems > 0) {
    let success = true;

    if (quantity.cryCat > 0) {
      const res = await sellItem(username, 1, quantity.cryCat);
      if (!res.success) success = false;
    }

    if (quantity.boss > 0) {
      const res = await sellItem(username, 7, quantity.boss);
      if (!res.success) success = false;
    }

    if (success) {
      fetchData();
      setAnimationMessage("Sell successful!");
    } else {
      setAnimationMessage("Some items could not be sold. Please try again.");
    }
  } else {
    setAnimationMessage("Please select at least one item to sell.");
  }
  setShowAnimation(true);
};
  
  const textStrokeStyle = {
    WebkitTextStroke: '0.5px black',
    textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
  };
  
  const headingStrokeStyle = {
    WebkitTextStroke: '0.5px black',
    textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
  };

  const desktopHeadingStrokeStyle = {
    WebkitTextStroke: '1px black',
    textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
  };
  
  const sellingTitleStrokeStyle = {
    WebkitTextStroke: '2px black',
    textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
  };
  
  const desktopSellingTitleStrokeStyle = {
    WebkitTextStroke: '4px black',
    textShadow: '3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000'
  };

  const mobileMessageStrokeStyle = {
    WebkitTextStroke: '0.5px black',
    textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
  };
  
  const desktopMessageStrokeStyle = {
    WebkitTextStroke: '1px black',
    textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
  };
  
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  return (
    <div className="min-h-screen flex justify-center items-center p-0 bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: "url('../public/assets/background/shopbg.png')" }}>
      <div className="relative w-full h-screen">
        {/* Animation Overlay - With click to close functionality */}
        {showAnimation && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md cursor-pointer"
            onClick={handleCloseAnimation}
          >
            <div className="px-10 py-6 rounded-xl">
              <p className="md:hidden text-white font-pixelify text-3xl text-center" style={mobileMessageStrokeStyle}>
                {animationMessage}
              </p>
              <p className="hidden md:block text-white font-pixelify text-5xl font-bold text-center" style={desktopMessageStrokeStyle}>
                {animationMessage}
              </p>
            </div>
          </div>
        )}
        
        <div className="absolute top-8 right-16 z-10">
          <div className="flex items-center bg-white px-6 py-1 rounded-full md:px-8 md:py-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden md:w-20 md:h-20">
                <img src={profilePic} onClick={() => navigate("/profile")} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="ml-3 md:ml-5">
              <div className="font-bold text-black font-pixelify text-lg md:text-2xl">{username}</div>
              <div className="text-yellow-500 font-bold font-pixelify text-lg md:text-2xl flex items-center">
                <img src="../public/assets/profile/coin.png" alt="Coin" className="w-5 h-5 mr-2 md:w-8 md:h-8" />
                {formatNumber(userMoney)}
              </div>
              <div className="text-black font-pixelify text-lg md:text-2xl flex items-center">
                <img src="../public/assets/profile/bag.png" alt="Bag" className="w-5 h-5 mr-2 md:w-8 md:h-8" />
                {userBag}
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:hidden flex flex-col items-center justify-center h-full px-4 pt-24">
          <div className="w-full flex justify-center mb-2 mt-8 z-20 relative">
            <h1 className="text-[#00DA62] font-pixelify text-6xl font-semibold"
                style={sellingTitleStrokeStyle}>
              SELLING
            </h1>
          </div>
          
          <div className="w-full max-w-xs bg-center bg-no-repeat bg-contain p-6" 
               style={{ backgroundImage: "url('../public/assets/shop/shopitemsbg.png')", backgroundSize: "100% 100%" }}>
            <div className="mb-6">
              <div className="text-white mb-3 font-pixelify font-semibold text-xl text-left pl-2" style={textStrokeStyle}>
                CryCat (Owned: {userInventory.cryCat})
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="w-16 h-12">
                  <img src="../public/assets/memeitems/CryCatpng.png" alt="CryCat" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleIncrement('cryCat')} 
                    className="w-8 h-8 flex items-center justify-center mx-1"
                  >
                    <img src="../public/assets/shop/+.png" alt="Plus" className="w-full h-full object-contain" />
                  </button>
                  <div className="text-green-500 text-xl w-8 text-center font-pixelify font-semibold mx-2" style={textStrokeStyle}>{quantity.cryCat}</div>
                  <button 
                    onClick={() => handleDecrement('cryCat')} 
                    className="w-8 h-8 flex items-center justify-center mx-1"
                  >
                    <img src="../public/assets/shop/-.png" alt="Minus" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-white mb-3 font-pixelify font-semibold text-xl text-left pl-2" style={textStrokeStyle}>
                Boss (Owned: {userInventory.boss})
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="w-16 h-12">
                  <img src="../public/assets/memeitems/BossDogpng.png" alt="Boss" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleIncrement('boss')} 
                    className="w-8 h-8 flex items-center justify-center mx-1"
                  >
                    <img src="../public/assets/shop/+.png" alt="Plus" className="w-full h-full object-contain" />
                  </button>
                  <div className="text-green-500 text-xl w-8 text-center font-pixelify font-semibold mx-2" style={textStrokeStyle}>{quantity.boss}</div>
                  <button 
                    onClick={() => handleDecrement('boss')} 
                    className="w-8 h-8 flex items-center justify-center mx-1"
                  >
                    <img src="../public/assets/shop/-.png" alt="Minus" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-xs flex justify-start">
            <img src="../public/assets/arrow/arrowtopage.png" onClick={() => navigate("/shop/buy")} alt="Back" className="w-8 h-8 transform rotate-180"/>
          </div>
          
          <div className="w-full max-w-xs flex flex-col items-center mb-4">
            <div className="text-white font-pixelify text-3xl mt-1 mb-1 font-semibold text-center">
              <span style={headingStrokeStyle}>Price: 
                <img src="../public/assets/profile/coin.png" alt="Coin" className="w-5 h-5 inline mx-1" />
                <span className="text-yellow-500">{formatNumber(totalPrice)}</span>
              </span>
            </div>
            <div className="text-white font-pixelify text-3xl mb-1 font-semibold text-center">
              <span style={headingStrokeStyle}>Totals: <span className="text-[#D30404]">{totalItems}</span></span>
            </div>
          </div>  
          
          <div className="w-full max-w-xs flex justify-center">
            <button 
              className="w-full border-0 border-black"
              onClick={handleSell}
            >
              <img src="../public/assets/shop/sellbutton.png" alt="Sell" className="w-full object-contain"/>
            </button>
          </div>
        </div>
        
        <div className="hidden md:block h-full w-full relative">
          <div className="absolute top-16 left-32
                        w-5/12 h-auto flex flex-col justify-start items-start bg-no-repeat bg-contain"
               style={{ 
                 backgroundImage: "url('../public/assets/shop/shopitemsbg.png')",
                 backgroundSize: "100% 100%",
                 paddingTop: "3.5rem",
                 paddingBottom: "3.5rem"
               }}>
            <div className="w-full pl-16 pr-16 mb-8">
              <div className="text-white mb-3 font-pixelify font-bold text-4xl" 
                   style={desktopHeadingStrokeStyle}>
                   CryCat (Owned: {userInventory.cryCat})
              </div>
              <div className="flex items-center justify-between">
                <div className="w-32 h-24">
                  <img src="../public/assets/memeitems/CryCatpng.png" alt="CryCat" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleIncrement('cryCat')} 
                    className="w-16 h-16"
                  >
                    <img src="../public/assets/shop/+.png" alt="Plus" className="w-full h-full object-contain" />
                  </button>
                  <div className="text-green-500 text-5xl w-16 text-center font-pixelify font-bold mx-4" 
                       style={desktopHeadingStrokeStyle}>{quantity.cryCat}</div>
                  <button 
                    onClick={() => handleDecrement('cryCat')} 
                    className="w-16 h-16"
                  >
                    <img src="../public/assets/shop/-.png" alt="Minus" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="w-full pl-16 pr-16">
              <div className="text-white mb-3 font-pixelify font-bold text-4xl" 
                   style={desktopHeadingStrokeStyle}>
                   Boss (Owned: {userInventory.boss})
              </div>
              <div className="flex items-center justify-between">
                <div className="w-32 h-24 flex items-center">
                  <img src="../public/assets/memeitems/BossDogpng.png" alt="Boss" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleIncrement('boss')} 
                    className="w-16 h-16"
                  >
                    <img src="../public/assets/shop/+.png" alt="Plus" className="w-full h-full object-contain" />
                  </button>
                  <div className="text-green-500 text-5xl w-16 text-center font-pixelify font-bold mx-4" 
                       style={desktopHeadingStrokeStyle}>{quantity.boss}</div>
                  <button 
                    onClick={() => handleDecrement('boss')} 
                    className="w-16 h-16"
                  >
                    <img src="../public/assets/shop/-.png" alt="Minus" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-32 left-32 w-5/12 flex justify-center">
            <h1 className="text-[#00DA62] font-pixelify text-8xl font-bold"
                style={desktopSellingTitleStrokeStyle}>
              SELLING
            </h1>
          </div>
          
          <div className="absolute right-32 bottom-32">
            <div className="flex justify-end">
              <div className="text-white text-5xl font-pixelify font-bold mb-4" style={desktopHeadingStrokeStyle}>
                Price: 
                <img src="../public/assets/profile/coin.png" alt="Coin" className="w-10 h-10 inline mx-2" />
                <span className="text-yellow-500">{formatNumber(totalPrice)}</span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="text-white text-5xl font-pixelify font-bold mb-8" style={desktopHeadingStrokeStyle}>
                Totals: <span className="text-[#D30404]">{totalItems}</span>
              </div>
            </div>
            
            <div className="flex justify-end mt-2">
              <button 
                className="border-0"
                onClick={handleSell}
              >
                <img src="../public/assets/shop/sellbutton.png" alt="Sell" className="w-64 object-contain"/>
              </button>
            </div>
          </div>
        
          <div className="absolute left-8 top-1/2 transform -translat.e-y-1/2">
            <img src="../public/assets/arrow/arrowtopage.png" onClick={() => navigate("/shop/buy")} alt="Back" className="w-16 h-16 transform rotate-180"/>
          </div>
        </div>
      </div>
    </div>
  );
}