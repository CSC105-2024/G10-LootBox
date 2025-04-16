import { useState } from 'react';

export default function Buying() {
  // Set individual prices for each key type
  const pricePerKey = {
    memeBox: 250,
    superheroBox: 850
  };

  const [quantity, setQuantity] = useState({
    memeBox: 0,
    superheroBox: 0
  });

  // Add state for user's money and bag
  const [userMoney, setUserMoney] = useState(4999000);
  const [userBag, setUserBag] = useState(20);

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

  // Calculate total keys and total price
  const totalKeys = quantity.memeBox + quantity.superheroBox;
  const totalPrice = (quantity.memeBox * pricePerKey.memeBox) + (quantity.superheroBox * pricePerKey.superheroBox);
  
  // Handle the buy button click
  const handleBuy = () => {
    // Check if user has enough money
    if (userMoney >= totalPrice && totalKeys > 0) {
      // Deduct money
      setUserMoney(prevMoney => prevMoney - totalPrice);
      // Add keys to bag
      setUserBag(prevBag => prevBag + totalKeys);
      // Reset quantities
      setQuantity({
        memeBox: 0,
        superheroBox: 0
      });
      // Could add a success message or animation here
      alert("Purchase successful!");
    } else if (totalKeys <= 0) {
      alert("Please select at least one key to purchase.");
    } else {
      alert("Not enough coins for this purchase!");
    }
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
  
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  return (
    <div className="min-h-screen flex justify-center items-center p-0 bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: "url('../src/assets/background/shopbg.png')" }}>
      <div className="relative w-full h-screen">
        <div className="absolute top-4 left-4 z-10">
          <button>
            <img src="../src/assets/arrow/arrow_back.png" alt="Back" className="h-6 w-6 md:h-10 md:w-10" />
          </button>
        </div>
        
        <div className="absolute top-8 right-16 z-10">
          <div className="flex items-center bg-white px-6 py-1 rounded-full md:px-8 md:py-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden md:w-20 md:h-20">
                <img src="../src/assets/profile/avatar.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="ml-3 md:ml-5">
              <div className="font-bold text-black font-pixelify text-lg md:text-2xl">Michael Kaiser</div>
              <div className="text-yellow-500 font-bold font-pixelify text-lg md:text-2xl flex items-center">
                <img src="../src/assets/profile/coin.png" alt="Coin" className="w-5 h-5 mr-2 md:w-8 md:h-8" />
                {formatNumber(userMoney)}
              </div>
              <div className="text-black font-pixelify text-lg md:text-2xl flex items-center">
                <img src="../src/assets/profile/bag.png" alt="Bag" className="w-5 h-5 mr-2 md:w-8 md:h-8" />
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
               style={{ backgroundImage: "url('../src/assets/shop/shopitemsbg.png')", backgroundSize: "100% 100%" }}>
            <div className="mb-6">
              <div className="text-white mb-3 font-pixelify font-semibold text-xl text-left pl-2" style={textStrokeStyle}>MemeBox keys</div>
              <div className="flex items-center justify-between px-2">
                <div className="w-16 h-12">
                  <img src="../src/assets/key/key1.png" alt="MemeBox key" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleIncrement('memeBox')} 
                    className="w-8 h-8 flex items-center justify-center mx-1"
                  >
                    <img src="../src/assets/shop/+.png" alt="Plus" className="w-full h-full object-contain" />
                  </button>
                  <div className="text-green-500 text-xl w-8 text-center font-pixelify font-semibold mx-2" style={textStrokeStyle}>{quantity.memeBox}</div>
                  <button 
                    onClick={() => handleDecrement('memeBox')} 
                    className="w-8 h-8 flex items-center justify-center mx-1"
                  >
                    <img src="../src/assets/shop/-.png" alt="Minus" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-white mb-3 font-pixelify font-semibold text-xl text-left pl-2" style={textStrokeStyle}>Superhero Box keys</div>
              <div className="flex items-center justify-between px-2">
                <div className="w-16 h-12">
                  <img src="../src/assets/key/key2.png" alt="SuperheroBox key" className="rotate-90 w-full h-full object-contain" />
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleIncrement('superheroBox')} 
                    className="w-8 h-8 flex items-center justify-center mx-1"
                  >
                    <img src="../src/assets/shop/+.png" alt="Plus" className="w-full h-full object-contain" />
                  </button>
                  <div className="text-green-500 text-xl w-8 text-center font-pixelify font-semibold mx-2" style={textStrokeStyle}>{quantity.superheroBox}</div>
                  <button 
                    onClick={() => handleDecrement('superheroBox')} 
                    className="w-8 h-8 flex items-center justify-center mx-1"
                  >
                    <img src="../src/assets/shop/-.png" alt="Minus" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-xs flex justify-end">
            <img src="../src/assets/arrow/arrowtopage.png" alt="Next" className="w-8 h-8"/>
          </div>
          
          <div className="w-full max-w-xs flex flex-col items-center mb-4">
            <div className="text-white font-pixelify text-3xl mt-1 mb-1 font-semibold text-center">
              <span style={headingStrokeStyle}>Price: 
                <img src="../src/assets/profile/coin.png" alt="Coin" className="w-5 h-5 inline mx-1" />
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
              <img src="../src/assets/shop/buybutton.png" alt="Buy" className="w-full object-contain"/>
            </button>
          </div>
        </div>
        
        <div className="hidden md:block h-full w-full relative">
          <div className="absolute top-16 left-16
                        w-5/12 h-auto flex flex-col justify-start items-start bg-no-repeat bg-contain"
               style={{ 
                 backgroundImage: "url('../src/assets/shop/shopitemsbg.png')",
                 backgroundSize: "100% 100%",
                 paddingTop: "3.5rem",
                 paddingBottom: "3.5rem"
               }}>
            <div className="w-full pl-16 pr-16 mb-8">
              <div className="text-white mb-3 font-pixelify font-bold text-4xl" 
                   style={desktopHeadingStrokeStyle}>MemeBox keys</div>
              <div className="flex items-center justify-between">
                <div className="w-32 h-24">
                  <img src="../src/assets/key/key1.png" alt="MemeBox key" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleIncrement('memeBox')} 
                    className="w-16 h-16"
                  >
                    <img src="../src/assets/shop/+.png" alt="Plus" className="w-full h-full object-contain" />
                  </button>
                  <div className="text-green-500 text-5xl w-16 text-center font-pixelify font-bold mx-4" 
                       style={desktopHeadingStrokeStyle}>{quantity.memeBox}</div>
                  <button 
                    onClick={() => handleDecrement('memeBox')} 
                    className="w-16 h-16"
                  >
                    <img src="../src/assets/shop/-.png" alt="Minus" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="w-full pl-16 pr-16">
              <div className="text-white mb-3 font-pixelify font-bold text-4xl" 
                   style={desktopHeadingStrokeStyle}>Superhero Box keys</div>
              <div className="flex items-center justify-between">
                <div className="w-32 h-24 flex items-center">
                  <img src="../src/assets/key/key2.png" alt="SuperheroBox key" className="rotate-90 w-full h-full object-contain" />
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleIncrement('superheroBox')} 
                    className="w-16 h-16"
                  >
                    <img src="../src/assets/shop/+.png" alt="Plus" className="w-full h-full object-contain" />
                  </button>
                  <div className="text-green-500 text-5xl w-16 text-center font-pixelify font-bold mx-4" 
                       style={desktopHeadingStrokeStyle}>{quantity.superheroBox}</div>
                  <button 
                    onClick={() => handleDecrement('superheroBox')} 
                    className="w-16 h-16"
                  >
                    <img src="../src/assets/shop/-.png" alt="Minus" className="w-full h-full object-contain" />
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
                <img src="../src/assets/profile/coin.png" alt="Coin" className="w-10 h-10 inline mx-2" />
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
                <img src="../src/assets/shop/buybutton.png" alt="Buy" className="w-64 object-contain"/>
              </button>
            </div>
          </div>
        
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <img src="../src/assets/arrow/arrowtopage.png" alt="Next" className="w-16 h-16"/>
          </div>
        </div>
      </div>
    </div>
  );
}