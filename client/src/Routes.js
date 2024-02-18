import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Kids from "./components/Kids/Kids";
import LifeStyle from "./components/LifeStyle/LifeStyle";
import ProductBrowser from "./components/ProductsBrowser/ProductsBrowser";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Orders from "./components/Orders/Orders";
import Search from './components/Search/Search';

function RoutesList({userName, setUserName, selectedId, setSelectedId}) {
  return (
    <>
      <Routes>
        {/*Routes for Home, Login, Register, Cart, */}
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route
          path="/Login"
          element={<Login userName={userName} setUserName={setUserName} />}
        />
        <Route
          path="/Register"
          element={<Register userName={userName} setUserName={setUserName} />}
        />
        <Route
          path="/Cart"
          element={
            <Cart selectedId={selectedId} setSelectedId={setSelectedId} />
          }
        />
        <Route path="/Orders" element={<Orders />} />

        {/* Shop By Category Routes */}

        <Route path="/TopWear" element={<ProductBrowser title="TopWear" />} />
        <Route path="/TopWear/:id" element={<ProductDetails />} />
        <Route
          path="/Western Wear"
          element={<ProductBrowser title="Western Wear" />}
        />
        <Route path="/Western Wear/:id" element={<ProductDetails />} />

        <Route
          path="/ActiveWear"
          element={<ProductBrowser title="ActiveWear" />}
        />
        <Route path="/ActiveWear/:id" element={<ProductDetails />} />

        <Route
          path="/BottomWear"
          element={<ProductBrowser title="BottomWear" />}
        />
        <Route path="/BottomWear/:id" element={<ProductDetails />} />

        <Route path="/FootWear" element={<ProductBrowser title="FootWear" />} />
        <Route path="/FootWear/:id" element={<ProductDetails />} />

        <Route
          path="/Men/T-Shirts"
          element={<ProductBrowser title="T-Shirts" group="men" />}
        />
        <Route path="/Men/T-Shirts/:id" element={<ProductDetails />} />

        <Route
          path="/Men/Casual Shirts"
          element={<ProductBrowser title="Casual Shirts" group="men" />}
        />
        <Route path="/Men/Casual Shirts/:id" element={<ProductDetails />} />

        <Route
          path="/Men/Formal Shirts"
          element={<ProductBrowser title="Formal Shirts" group="men" />}
        />
        <Route path="/Men/Formal Shirts/:id" element={<ProductDetails />} />

        <Route
          path="/Men/Jeans"
          element={<ProductBrowser title="Jeans" group="men" />}
        />
        <Route path="/Men/Jeans/:id" element={<ProductDetails />} />

        <Route
          path="/Men/Casual Trousers"
          element={<ProductBrowser title="Casual Trousers" group="men" />}
        />
        <Route path="/Men/Casual Trousers/:id" element={<ProductDetails />} />

        <Route
          path="/Women/Sarees"
          element={<ProductBrowser title="Sarees" group="women" />}
        />
        <Route path="/Women/Sarees/:id" element={<ProductDetails />} />

        <Route
          path="/Women/Dresses"
          element={<ProductBrowser title="Dresses" group="women" />}
        />
        <Route path="/Women/Dresses/:id" element={<ProductDetails />} />

        <Route
          path="/Women/Tops"
          element={<ProductBrowser title="Tops" group="women" />}
        />
        <Route path="/Women/Tops/:id" element={<ProductDetails />} />

        <Route
          path="/Women/T-Shirts"
          element={<ProductBrowser title="T-Shirts" group="women" />}
        />
        <Route path="/Women/T-Shirts/:id" element={<ProductDetails />} />

        <Route
          path="/Women/Heels"
          element={<ProductBrowser title="Heels" group="women" />}
        />
        <Route path="/Women/Heels/:id" element={<ProductDetails />} />

        <Route
          path="/Kids/T-Shirts"
          element={<ProductBrowser title="T-Shirts" group="kids" />}
        />
        <Route path="/Kids/T-Shirts/:id" element={<ProductDetails />} />

        <Route
          path="/Kids/Shorts"
          element={<ProductBrowser title="Shorts" group="kids" />}
        />
        <Route path="/Kids/Shorts/:id" element={<ProductDetails />} />

        <Route
          path="/Kids/Tops"
          element={<ProductBrowser title="Tops" group="kids" />}
        />
        <Route path="/Kids/Tops/:id" element={<ProductDetails />} />

        <Route
          path="/Kids/Flip Flops"
          element={<ProductBrowser title="Flip Flops" group="kids" />}
        />
        <Route path="/Kids/Flip Flops/:id" element={<ProductDetails />} />

        <Route
          path="/Kids/Bodysuits"
          element={<ProductBrowser title="Bodysuits" group="kids" />}
        />
        <Route path="/Kids/Bodysuits/:id" element={<ProductDetails />} />

        <Route
          path="/Lifestyle/Beach Towels"
          element={<ProductBrowser title="Beach Towels" group="lifestyle" />}
        />
        <Route
          path="/Lifestyle/Beach Towels/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/Lifestyle/Table Lamps"
          element={<ProductBrowser title="Table Lamps" group="lifestyle" />}
        />
        <Route path="/Lifestyle/Table Lamps/:id" element={<ProductDetails />} />

        <Route
          path="/Lifestyle/Bedsheets"
          element={<ProductBrowser title="Bedsheets" group="lifestyle" />}
        />
        <Route path="/Lifestyle/Bedsheets/:id" element={<ProductDetails />} />

        <Route
          path="/Lifestyle/Bath Towels"
          element={<ProductBrowser title="Bath Towels" group="lifestyle" />}
        />
        <Route path="/Lifestyle/Bath Towels/:id" element={<ProductDetails />} />

        <Route
          path="/Lifestyle/Clocks"
          element={<ProductBrowser title="Clocks" group="lifestyle" />}
        />
        <Route
          path="/Lifestyle/Clocks/:id"
          element={<ProductDetails />}
        />

        {/* Deals Routes */}

        <Route path="/Dresses" element={<ProductBrowser title="Dresses" />} />
        <Route path="/" />

        {/* Product Details through Search */}
        <Route path="/Search/:id" element={<ProductDetails />} />

        <Route
          path="/End of Season Sale"
          element={<ProductBrowser title="" EoSSheading="End of Season Sale" EoSS={true} />}
        />
        <Route
          path="/End of Season Sale/Men"
          element={<ProductBrowser title="men" EoSS={true} />}
        />
        <Route
          path="/End of Season Sale/Women"
          element={<ProductBrowser title="women" EoSS={true} />}
        />
        <Route
          path="/End of Season Sale/Kids"
          element={<ProductBrowser title="kids" EoSS={true} />}
        />
        <Route
          path="/End of Season Sale/Lifestyle"
          element={<ProductBrowser title="lifestyle" EoSS={true} />}
        />

        {/* Men Routes */}
        <Route path="/Men" element={<Men />} />
        <Route
          path="/Men/TopWear/T-Shirts"
          element={
            <ProductBrowser
              title="T-Shirts"
              subCategory="TopWear"
              group="men"
            />
          }
        />
        <Route path="/Men/TopWear/T-Shirts/:id" element={<ProductDetails />} />
        <Route
          path="/Men/TopWear/Casual Shirts"
          element={
            <ProductBrowser
              title="Casual Shirts"
              subCategory="TopWear"
              group="men"
            />
          }
        />
        <Route
          path="/Men/TopWear/Casual Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/TopWear/Formal Shirts"
          element={
            <ProductBrowser
              title="Formal Shirts"
              subCategory="TopWear"
              group="men"
            />
          }
        />
        <Route
          path="/Men/TopWear/Formal Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/BottomWear/Jeans"
          element={
            <ProductBrowser
              title="Jeans"
              subCategory="BottomWear"
              group="men"
            />
          }
        />
        <Route path="/Men/BottomWear/Jeans/:id" element={<ProductDetails />} />
        <Route
          path="/Men/BottomWear/Casual Trousers"
          element={
            <ProductBrowser
              title="Casual Trousers"
              subCategory="BottomWear"
              group="men"
            />
          }
        />
        <Route
          path="/Men/BottomWear/Casual Trousers/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/BottomWear/Formal Trousers"
          element={
            <ProductBrowser
              title="Formal Trousers"
              subCategory="BottomWear"
              group="men"
            />
          }
        />
        <Route
          path="/Men/BottomWear/Formal Trousers/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/FootWear/Casual Shoes"
          element={
            <ProductBrowser
              title="Casual Shoes"
              subCategory="FootWear"
              group="men"
            />
          }
        />
        <Route
          path="/Men/FootWear/Casual Shoes/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/FootWear/Sports Shoes"
          element={
            <ProductBrowser
              title="Sports Shoes"
              subCategory="FootWear"
              group="men"
            />
          }
        />
        <Route
          path="/Men/FootWear/Sports Shoes/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/FootWear/Formal Shoes"
          element={
            <ProductBrowser
              title="Formal Shoes"
              subCategory="FootWear"
              group="men"
            />
          }
        />
        <Route
          path="/Men/FootWear/Formal Shoes/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/ActiveWear/Active T-Shirts"
          element={
            <ProductBrowser
              title="Active T-Shirts"
              subCategory="ActiveWear"
              group="men"
            />
          }
        />
        <Route
          path="/Men/ActiveWear/Active T-Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/ActiveWear/Track Pants & Shorts"
          element={
            <ProductBrowser
              title="Track Pants & Shorts"
              subCategory="ActiveWear"
              group="men"
            />
          }
        />
        <Route
          path="/Men/ActiveWear/Track Pants and Shorts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/ActiveWear/Tracksuits"
          element={
            <ProductBrowser
              title="Tracksuits"
              subCategory="ActiveWear"
              group="men"
            />
          }
        />
        <Route
          path="/Men/ActiveWear/Tracksuits/:id"
          element={<ProductDetails />}
        />

        {/* Women Routes */}
        <Route
          path="/Women/Indian & Fusion Wear/Kurtas & Suits"
          element={
            <ProductBrowser
              title="Kurtas & Suits"
              subCategory="Indian & Fusion wear"
              group="women"
            />
          }
        />
        <Route
          path="/Women/Indian & Fusion Wear/Kurtas & Suits/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Indian & Fusion Wear/Kurtis, TUnics & Tops"
          element={
            <ProductBrowser
              title="Kurtis, Tunics & Tops"
              subCategory="Indian & Fusion wear"
              group="women"
            />
          }
        />
        <Route
          path="/Women/Indian & Fusion Wear/Kurtis, TUnics & Tops/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Indian & Fusion Wear/Sarees"
          element={
            <ProductBrowser
              title="Sarees"
              subCategory="Indian & Fusion wear"
              group="women"
            />
          }
        />
        <Route
          path="/Women/Indian & Fusion Wear/Sarees/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Western Wear/Dresses"
          element={
            <ProductBrowser
              title="Dresses"
              subCategory="Western Wear"
              group="women"
            />
          }
        />
        <Route
          path="/Women/Western Wear/Dresses/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Western Wear/Tops"
          element={
            <ProductBrowser
              title="Tops"
              subCategory="Western Wear"
              group="women"
            />
          }
        />
        <Route
          path="/Women/Western Wear/Tops/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Western Wear/T-Shirts"
          element={
            <ProductBrowser
              title="T-Shirts"
              subCategory="Western Wear"
              group="women"
            />
          }
        />
        <Route
          path="/Women/Western Wear/T-Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/FootWear/Flats"
          element={
            <ProductBrowser
              title="Flats"
              subCategory="FootWear"
              group="women"
            />
          }
        />
        <Route path="/Women/FootWear/Flats/:id" element={<ProductDetails />} />
        <Route
          path="/Women/FootWear/Casual Shoes"
          element={
            <ProductBrowser
              title="Casual Shoes"
              subCategory="FootWear"
              group="women"
            />
          }
        />
        <Route
          path="/Women/FootWear/Casual Shoes/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/FootWear/Heels"
          element={
            <ProductBrowser
              title="Heels"
              subCategory="FootWear"
              group="women"
            />
          }
        />
        <Route path="/Women/FootWear/Heels/:id" element={<ProductDetails />} />
        <Route
          path="/Women/Sports & ActiveWear/Clothing"
          element={
            <ProductBrowser
              title="Clothing"
              subCategory="Sports & ActiveWear"
              group="women"
            />
          }
        />
        <Route
          path="/Women/Sports & ActiveWear/Clothing/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Sports & ActiveWear/Footwear"
          element={
            <ProductBrowser
              title="Footwear"
              subCategory="Sports & ActiveWear"
              group="women"
            />
          }
        />
        <Route
          path="/Women/Sports & ActiveWear/Footwear/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Sports & ActiveWear/Sports Accessories"
          element={
            <ProductBrowser
              title="Sports Accessories"
              subCategory="Sports & ActiveWear"
              group="women"
            />
          }
        />
        <Route
          path="/Women/Sports & ActiveWear/Sports Accessories/:id"
          element={<ProductDetails />}
        />

        {/* Kids Routes */}
        <Route
          path="/Kids/Boys Clothing/T-Shirts"
          element={
            <ProductBrowser
              title="T-Shirts"
              subCategory="Boys Clothing"
              group="kids"
            />
          }
        />
        <Route
          path="/Kids/Boys Clothing/T-Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Boys Clothing/Shirts"
          element={
            <ProductBrowser
              title="Shirts"
              subCategory="Boys Clothing"
              group="kids"
            />
          }
        />
        <Route
          path="/Kids/Boys Clothing/Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Boys Clothing/Shorts"
          element={
            <ProductBrowser
              title="Shorts"
              subCategory="Boys Clothing"
              group="kids"
            />
          }
        />
        <Route
          path="/Kids/Boys Clothing/Shorts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Girls Clothing/Dresses"
          element={
            <ProductBrowser
              title="Dresses"
              subCategory="Girls Clothing"
              group="kids"
            />
          }
        />
        <Route
          path="/Kids/Girls Clothing/Dresses/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Girls Clothing/Tops"
          element={
            <ProductBrowser
              title="Tops"
              subCategory="Girls Clothing"
              group="kids"
            />
          }
        />
        <Route
          path="/Kids/Girls Clothing/Tops/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Girls Clothing/T-Shirts"
          element={
            <ProductBrowser
              title="T-Shirts"
              subCategory="Girls Clothing"
              group="kids"
            />
          }
        />
        <Route
          path="/Kids/Girls Clothing/T-Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/FootWear/Flip Flops"
          element={
            <ProductBrowser
              title="Flip Flops"
              subCategory="FootWear"
              group="kids"
            />
          }
        />
        <Route
          path="/Kids/FootWear/Flip Flops/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/FootWear/Casual Shoes"
          element={
            <ProductBrowser
              title="Casual Shoes"
              subCategory="FootWear"
              group="kids"
            />
          }
        />
        <Route
          path="/Kids/FootWear/Casual Shoes/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/FootWear/Sports Shoes"
          element={
            <ProductBrowser
              title="Sports Shoes"
              subCategory="FootWear"
              group="kids"
            />
          }
        />
        <Route
          path="/Kids/FootWear/Sports Shoes/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Infants/Bodysuits"
          element={
            <ProductBrowser
              title="Bodysuits"
              subCategory="Infants"
              group="kids"
            />
          }
        />
        <Route
          path="/Kids/Infants/Bodysuits/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Infants/Rompers & Sleepsuits"
          element={
            <ProductBrowser
              title="Rompers & Sleepsuits"
              subCategory="Infants"
              group="kids"
            />
          }
        />
        <Route
          path="/Kids/Infants/Rompers & Sleepsuits/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Infants/Clothing Sets"
          element={
            <ProductBrowser
              title="Clothing Sets"
              subCategory="Infants"
              group="kids"
            />
          }
        />
        <Route
          path="/Kids/Infants/Clothing Sets/:id"
          element={<ProductDetails />}
        />

        {/* Lifestyle */}
        <Route
          path="/Lifestyle/Bed Linen & Furnishing/Bed Runners"
          element={
            <ProductBrowser
              title="Bed Runners"
              subCategory="Bed Linen & Furnishing"
              group="lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Bed Linen & Furnishing/Bed Runners/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Bed Linen & Furnishing/Bedsheets"
          element={
            <ProductBrowser
              title="Bedsheets"
              subCategory="Bed Linen & Furnishing"
              group="lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Bed Linen & Furnishing/Bedsheets/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Bed Linen & Furnishing/Mattress Protectors"
          element={
            <ProductBrowser
              title="Mattress Protectors"
              subCategory="Bed Linen & Furnishing"
              group="lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Bed Linen & Furnishing/Mattress Protectors/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Bath/Bath Towels"
          element={
            <ProductBrowser
              title="Bath Towels"
              subCategory="Bath"
              group="lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Bath/Bath Towels/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Bath/Hand & Face Towels"
          element={
            <ProductBrowser
              title="Hand & Face Towels"
              subCategory="Bath"
              group="lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Bath/Hand & Face Towels/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Bath/Beach Towels"
          element={
            <ProductBrowser
              title="Beach Towels"
              subCategory="Bath"
              group="lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Bath/Beach Towels/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Lamps & Lighting/Floor Lamps"
          element={
            <ProductBrowser
              title="Floor Lamps"
              subCategory="Lamps & Lighting"
              group="lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Lamps & Lighting/Floor Lamps/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Lamps & Lighting/Ceiling Lamps"
          element={
            <ProductBrowser
              title="Ceiling Lamps"
              subCategory="Lamps & Lighting"
              group="lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Lamps & Lighting/Ceiling Lamps/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Lamps & Lighting/Table Lamps"
          element={
            <ProductBrowser
              title="Table Lamps"
              subCategory="Lamps & Lighting"
              group="lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Lamps & Lighting/Table Lamps/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Home Décor/Plants & Planters"
          element={
            <ProductBrowser
              title="Plants & Planters"
              subCategory="Home Décor"
              group="lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Home Décor/Plants & Planters/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Home Décor/Aromas & Candles"
          element={
            <ProductBrowser
              title="Aromas & Candles"
              subCategory="Home Décor"
              group="lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Home Décor/Aromas & Candles/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Home Décor/Clocks"
          element={
            <ProductBrowser
              title="Clocks"
              subCategory="Home Décor"
              group="lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Home Décor/Clocks/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/Men/ActiveWear/Active T-Shirts"
          element={<ProductBrowser title="Active T-Shirts" />}
        />
        <Route
          path="/Men/Casual Shoes"
          element={<ProductBrowser title="Casual Shoes" />}
        />
        <Route
          path="/Men/Casual Trousers"
          element={<ProductBrowser title="Causal Trousers" />}
        />
        <Route
          path="/Men/Formal Shoes"
          element={<ProductBrowser title="Formal Shoes" />}
        />
        <Route
          path="/Men/Formal Trousers"
          element={<ProductBrowser title="FormalTrousers" />}
        />
        <Route path="/Men/Jeans" element={<ProductBrowser title="Jeans" />} />
        <Route
          path="/Men/Sports Shoes"
          element={<ProductBrowser title="Sport Shoes" />}
        />
        <Route
          path="/Men/Track Pants and Shorts"
          element={<ProductBrowser title="Track Pants and Shorts" />}
        />
        <Route
          path="/Men/Track Suits"
          element={<ProductBrowser title="Track Suits" />}
        />
        <Route path="/Women" element={<Women />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/LifeStyle" element={<LifeStyle />} />
      </Routes>
    </>
  );
}

export default RoutesList