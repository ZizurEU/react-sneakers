import React from 'react';

import Card from '../components/Card';
import AppContext from '../context'

export default function Favorites() {
  const { favoriteItems, onAddToFavorite } = React.useContext(AppContext);
    return (
        <div className="wrapper clear">
        <div className="content p-40">
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Моё избранное</h1>
          </div>
          <div className="d-flex flex-wrap">
          {favoriteItems.map((item, index) => (
              <Card
                key={index}
                favorited={true}
                onFavorite={onAddToFavorite}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    );
}