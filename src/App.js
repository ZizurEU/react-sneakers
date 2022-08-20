import React from 'react';
import {Routes, Route} from "react-router-dom";
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './routes/home';
import Favorites from './routes/favorites';
import User from './routes/user';
import AppContext from './context';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    async function fetchData(){
      const [cartRespons, favoriteRespons, itemsResponse] = await Promise.all([
        axios.get('https://62f64d45612c13062b4b33e6.mockapi.io/cart'), 
        axios.get('https://62f64d45612c13062b4b33e6.mockapi.io/favorite'), 
        axios.get('https://62f64d45612c13062b4b33e6.mockapi.io/items')]);
      setIsLoading(false);
      setItems(itemsResponse.data);
      setCartItems(cartRespons.data);
      setFavoriteItems(favoriteRespons.data);
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
        await axios.delete(`https://62f64d45612c13062b4b33e6.mockapi.io/cart/${obj.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        await axios.post('https://62f64d45612c13062b4b33e6.mockapi.io/cart', obj);
      }
    } catch (error) {
      alert("Ошибка при добавлении товара в корзину");
      console.log(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favoriteItems.find((item) => Number(item.id) === Number(obj.id))) {
        setFavoriteItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        axios.delete(`https://62f64d45612c13062b4b33e6.mockapi.io/favorite/${obj.id}`);
      } else {
        setFavoriteItems((prev) => [...prev, obj]);
        await axios.post('https://62f64d45612c13062b4b33e6.mockapi.io/favorite', obj);
        console.log(obj, favoriteItems);
      }
    } catch (error) {
      alert("Ошибка при добавлении товара в избранное");
      console.log(error);
    }
  };

  const onRemoveItem = async (id) => {
    try {
      setCartItems((prev) => prev.filter(item => item.id !== id));
      await axios.delete(`https://62f64d45612c13062b4b33e6.mockapi.io/cart/${id}`);
    } catch (error) {
      alert("Ошибка при удалении товара из корзины");
      console.log(error);
    }
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  }
  
  const isItemFavorited = (id) => {
    return favoriteItems.some((obj) => Number(obj.parentId) === Number(id));
  }


  return (
    <AppContext.Provider value={{ items, cartItems, favoriteItems, isItemAdded, onAddToFavorite, setCartOpened, setCartItems, onAddToCart, isItemFavorited }}>
      <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route path="/" element={
            <Home
              items={items}
              searchValue={searchValue} 
              setSearchValue={setSearchValue} 
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              isLoading={isLoading}
            />
            } />
          <Route path="favorites" element={<Favorites />} />
          <Route path="user" element={<User />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;