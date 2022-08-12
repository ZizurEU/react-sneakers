import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  
  React.useEffect(() => {
    fetch('https://62f64d45612c13062b4b33e6.mockapi.io/items').then((response) => {
      return response.json();
    }).then((json) => {
      setItems(json)
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  console.log(cartItems);

  return (
      <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} />}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content p-40">
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Все кроссовки</h1>
            <div className="search-block">
              <img src="/img/search.svg" alt="search" width={15} height={15}/>
              <input placeholder='Поиск...' />
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {items.map((item) => (
              <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavorite={() => console.log('Добавили в закладки')}
              onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;
