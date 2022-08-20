import React from 'react';
import styles from './Drawer/Drawer.module.scss'
import AppContext from '../context';

export const Info = ({ image, title, description }) => {
    const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className={styles.cartEmpty}>
        <img className="mb-20" src={image} alt="cart empty" />
        <h2>{ title }</h2>
        <p className="opacity-6">{ description }</p>
        <button className='greenButton' onClick={() => setCartOpened(false)}>
            <img src='img/arrowRight.svg' alt='Arrow' />
            Вернуться назад
        </button>
    </div>
  )
}

export default Info