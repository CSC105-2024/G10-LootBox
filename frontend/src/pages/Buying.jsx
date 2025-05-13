import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getUserProfile } from '../api/user';
import { buyKey } from '../api/shop';

export default function Buying() {
  const navigate = useNavigate();
  
  const BASE_URL = "http://localhost:3000";

  const pricePerKey = {
    memeBox: 250,
    superheroBox: 850
  };

  const [quantity, setQuantity] = useState({
    memeBox: 0,
    superheroBox: 0
  });

  const [username, setUsername] = useState("");
  const [userMoney, setUserMoney] = useState(0);
  const [userBag, setUserBag] = useState(0);
  const [profilePic, setProfilePic] = useState("/assets/profile/avatar.png");
  
  
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationMessage, setAnimationMessage] = useState("");

  const storedUsername = localStorage.getItem("username");

  const fetchData = async () => {
      const res = await getUserProfile(storedUsername);
      if (res.success && res.data) {
        const { username, coin, inventory, profilePic } = res.data;
        setUsername(username);
        setUserMoney(coin);
        setUserBag(inventory.filter(item => item.owned && item.quantity > 0).reduce((total, item) => total + item.quantity, 0));
        setProfilePic(profilePic?.startsWith('/uploads') ? `${BASE_URL}${profilePic}` : profilePic || "../public/assets/profile/avatar.png");
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
  },[]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);


  const handleIncrement = (keyType) => {
    setQuantity(prev => ({
      ...prev,
      [keyType]: prev[keyType] + 1
    }));
  };

  const handleDecrement = (keyType) => {
    if (quantity[keyType] > 0) {
      setQuantity(prev => ({
        ...prev,
        [keyType]: prev[keyType] - 1
      }));
    }
  };

  const totalKeys = quantity.memeBox + quantity.superheroBox;
  const totalPrice = (quantity.memeBox * pricePerKey.memeBox) + (quantity.superheroBox * pricePerKey.superheroBox);
  
  useEffect(() => {
    let timer;
    if (showAnimation) {
      timer = setTimeout(() => {
        setShowAnimation(false);
      }, 2000); 
    }
    return () => clearTimeout(timer);
  }, [showAnimation]);

  const handleBuy = async () => {
  if (totalKeys <= 0) {
    setAnimationMessage("Please select at least one key to purchase.");
    setShowAnimation(true);
    return;
  }

  if (userMoney < totalPrice) {
    setAnimationMessage("Not enough coins for this purchase!");
    setShowAnimation(true);
    return;
  }

  let success = true;

  if (quantity.memeBox > 0) {
    const res = await buyKey(username, 'Meme', quantity.memeBox);
    if (!res.success) success = false;
  }

  if (quantity.superheroBox > 0) {
    const res = await buyKey(username, 'Superhero', quantity.superheroBox);
    if (!res.success) success = false;
  }

  if (success) {
    fetchData();
    setQuantity({ memeBox: 0, superheroBox: 0 });
    setAnimationMessage("Purchase successful!");
  } else {
    setAnimationMessage("Purchase failed. Please try again.");
  }
  setShowAnimation(true);
};

const handleCloseAnimation = () => {
  setShowAnimation(false);
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
  
  const buyingTitleStrokeStyle = {
    WebkitTextStroke: '2px black',
    textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
  };
  
  const desktopBuyingTitleStrokeStyle = {
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
        {showAnimation && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md cursor-pointer"
            onClick={handleCloseAnimation}
          >
            <div className="px-10 py-6 rounded-xl">
              {/* Mobile size */}
              <p className="md:hidden text-white font-pixelify text-3xl text-center" style={mobileMessageStrokeStyle}>
                {animationMessage}
              </p>
              {/* Desktop size - matches Price and Total text */}
              <p className="hidden md:block text-white font-pixelify text-5xl font-bold text-center" style={desktopMessageStrokeStyle}>
                {animationMessage}
              </p>
            </div>
          </div>
        )}
      
        <div className="absolute top-4 left-4 z-10">
          <button type ="button" onClick={() => navigate("/main")}>
            <img src="../public/assets/arrow/arrow_back.png" alt="Back" className="h-6 w-6 md:h-10 md:w-10" />
          </button>
        </div>
        
        <div className="absolute top-8 right-16 z-10">
          <div className="flex items-center bg-white px-6 py-1 rounded-full md:px-8 md:py-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden md:w-20 md:h-20">
                <img src={profilePic} alt="Profile" onClick={() => navigate("/profile")} className="w-full h-full object-cover" />
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
            <h1 className="text-yellow-500 font-pixelify text-6xl font-semibold"
                style={buyingTitleStrokeStyle}>
              BUYING
            </h1>
          </div>
          
          <div className="w-full max-w-xs bg-center bg-no-repeat bg-contain p-6" 
               style={{ backgroundImage: "url('../public/assets/shop/shopitemsbg.png')", backgroundSize: "100% 100%" }}>
            <div className="mb-6">
              <div className="text-white mb-3 font-pixelify font-semibold text-xl text-left pl-2" style={textStrokeStyle}>MemeBox keys</div>
              <div className="flex items-center justify-between px-2">
                <div className="w-16 h-12">
                  <img src="../public/assets/key/key1.png" alt="MemeBox key" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleIncrement('memeBox')} 
                    className="w-8 h-8 flex items-center justify-center mx-1"
                  >
                    <img src="../public/assets/shop/+.png" alt="Plus" className="w-full h-full object-contain" />
                  </button>
                  <div className="text-green-500 text-xl w-8 text-center font-pixelify font-semibold mx-2" style={textStrokeStyle}>{quantity.memeBox}</div>
                  <button 
                    onClick={() => handleDecrement('memeBox')} 
                    className="w-8 h-8 flex items-center justify-center mx-1"
                  >
                    <img src="../public/assets/shop/-.png" alt="Minus" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-white mb-3 font-pixelify font-semibold text-xl text-left pl-2" style={textStrokeStyle}>Superhero Box keys</div>
              <div className="flex items-center justify-between px-2">
                <div className="w-16 h-12">
                  <img src="../public/assets/key/key2.png" alt="SuperheroBox key" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleIncrement('superheroBox')} 
                    className="w-8 h-8 flex items-center justify-center mx-1"
                  >
                    <img src="../public/assets/shop/+.png" alt="Plus" className="w-full h-full object-contain" />
                  </button>
                  <div className="text-green-500 text-xl w-8 text-center font-pixelify font-semibold mx-2" style={textStrokeStyle}>{quantity.superheroBox}</div>
                  <button 
                    onClick={() => handleDecrement('superheroBox')} 
                    className="w-8 h-8 flex items-center justify-center mx-1"
                  >
                    <img src="../public/assets/shop/-.png" alt="Minus" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-xs flex justify-end">
            <img src="../public/assets/arrow/arrowtopage.png" onClick={() => navigate("/shop/sell")} alt="Next" className="w-8 h-8"/>
          </div>
          
          <div className="w-full max-w-xs flex flex-col items-center mb-4">
            <div className="text-white font-pixelify text-3xl mt-1 mb-1 font-semibold text-center">
              <span style={headingStrokeStyle}>Price: 
                <img src="../public/assets/profile/coin.png" alt="Coin" className="w-5 h-5 inline mx-1" />
                <span className="text-yellow-500">{formatNumber(totalPrice)}</span>
              </span>
            </div>
            <div className="text-white font-pixelify text-3xl mb-1 font-semibold text-center">
              <span style={headingStrokeStyle}>Totals: <span className="text-green-500">{totalKeys}</span></span>
            </div>
          </div>  
          
          <div className="w-full max-w-xs flex justify-center">
            <button 
              className="w-full border-0 border-black"
              onClick={handleBuy}
            >
              <img src="../public/assets/shop/buybutton.png" alt="Buy" className="w-full object-contain"/>
            </button>
          </div>
        </div>
        
        <div className="hidden md:block h-full w-full relative">
          <div className="absolute top-16 left-16
                        w-5/12 h-auto flex flex-col justify-start items-start bg-no-repeat bg-contain"
               style={{ 
                 backgroundImage: "url('../public/assets/shop/shopitemsbg.png')",
                 backgroundSize: "100% 100%",
                 paddingTop: "3.5rem",
                 paddingBottom: "3.5rem"
               }}>
            <div className="w-full pl-16 pr-16 mb-8">
              <div className="text-white mb-3 font-pixelify font-bold text-4xl" 
                   style={desktopHeadingStrokeStyle}>MemeBox keys</div>
              <div className="flex items-center justify-between">
                <div className="w-32 h-24">
                  <img src="../public/assets/key/key1.png" alt="MemeBox key" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleIncrement('memeBox')} 
                    className="w-16 h-16"
                  >
                    <img src="../public/assets/shop/+.png" alt="Plus" className="w-full h-full object-contain" />
                  </button>
                  <div className="text-green-500 text-5xl w-16 text-center font-pixelify font-bold mx-4" 
                       style={desktopHeadingStrokeStyle}>{quantity.memeBox}</div>
                  <button 
                    onClick={() => handleDecrement('memeBox')} 
                    className="w-16 h-16"
                  >
                    <img src="../public/assets/shop/-.png" alt="Minus" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="w-full pl-16 pr-16">
              <div className="text-white mb-3 font-pixelify font-bold text-4xl" 
                   style={desktopHeadingStrokeStyle}>Superhero Box keys</div>
              <div className="flex items-center justify-between">
                <div className="w-32 h-24 flex items-center">
                  <img src="../public/assets/key/key2.png" alt="SuperheroBox key" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleIncrement('superheroBox')} 
                    className="w-16 h-16"
                  >
                    <img src="../public/assets/shop/+.png" alt="Plus" className="w-full h-full object-contain" />
                  </button>
                  <div className="text-green-500 text-5xl w-16 text-center font-pixelify font-bold mx-4" 
                       style={desktopHeadingStrokeStyle}>{quantity.superheroBox}</div>
                  <button 
                    onClick={() => handleDecrement('superheroBox')} 
                    className="w-16 h-16"
                  >
                    <img src="../public/assets/shop/-.png" alt="Minus" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-32 left-16 w-5/12 flex justify-center">
            <h1 className="text-yellow-500 font-pixelify text-8xl font-bold"
                style={desktopBuyingTitleStrokeStyle}>
              BUYING
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
                Totals: <span className="text-green-500">{totalKeys}</span>
              </div>
            </div>
            
            <div className="flex justify-end mt-2">
              <button 
                className="border-0"
                onClick={handleBuy}
              >
                <img src="../public/assets/shop/buybutton.png" alt="Buy" className="w-64 object-contain"/>
              </button>
            </div>
          </div>
        
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <img src="../public/assets/arrow/arrowtopage.png" onClick={() => navigate("/shop/sell")} alt="Next" className="w-16 h-16"/>
          </div>
        </div>
      </div>
    </div>
  );
}