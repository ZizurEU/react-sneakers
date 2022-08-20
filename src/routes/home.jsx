import React from 'react';
import Card from '../components/Card';


export default function Home({items, searchValue, setSearchValue, onAddToCart, onAddToFavorite, cartItems, isLoading}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  }

    return (
        <div className="content p-40">
          <div className='d-flex align-center justify-between mb-40'>
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
            <div className="search-block">
              <img src="/img/search.svg" alt="search" width={15} height={15}/>
              <input onChange={(event) => setSearchValue(event.target.value)} value={searchValue} placeholder='Поиск...' />
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {renderItems()}
          </div>
        </div>
    );
}