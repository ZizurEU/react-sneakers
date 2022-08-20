import React from 'react';
import {Link} from "react-router-dom";
import {useCart} from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

    return (
        <header className='d-flex justify-between align-center p-40'>
           <Link to="/">
            <div className="d-flex align-center">
              <img src="/img/logo.png" alt="logo" width={40} height={40} className="mr-15"/>
              <div>
                <h3 className="text-uppercase">React Sneakers</h3>
                <p className="opacity-5">Магазин лучших кроссовок</p>
              </div>
            </div>
          </Link>
          <ul className="d-flex">
            <li onClick={props.onClickCart} className="mr-30 cu-p">
              <img src="/img/cart.svg" alt="cart" width={18} height={18} className="mr-10"/>
              <span>{totalPrice} руб.</span>
            </li>
            <li className="mr-30 cu-p">
              <Link to="/favorites"><img src="/img/heart.svg" alt="heart" width={20} height={19}/></Link>
            </li>
            <li className="cu-p">
              <Link to="/user"><img src="/img/user.svg" alt="user" width={20} height={20}/></Link>
            </li>
          </ul>
        </header>
    );
}

export default Header;