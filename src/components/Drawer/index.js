import React from 'react';
import styles from './Drawer.module.scss';
import Info from '../info';
import axios from 'axios';
import {useCart} from '../../hooks/useCart';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer ({onClickClose, onRemove, items = []}) {
  const { cartItems, setCartItems, totalPrice} = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const onClickOrder = async () => {
    try {
      const {data} = await axios.post('https://62f64d45612c13062b4b33e6.mockapi.io/orders', {
        items: cartItems
      });
      
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        console.log(item);
        await axios.delete(`https://62f64d45612c13062b4b33e6.mockapi.io/cart/${item.id}`);
        await delay(300);
      }

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      alert('Ошибка при создании заказа :(');
      console.log(error);
    }
  }
    return (
        <div className="overlay">
          <div className={styles.drawer}>
              <div className='d-flex justify-between align-center mb-30'>
                <h2>Корзина</h2>
                <img onClick={onClickClose} className='cu-p' src="img/btn-remove.svg" alt="remove" />
              </div>
              {items.length > 0 ? <div>
                  <div className={styles.items}>
                    {items.map((obj, index) => (
                      <div key={obj.id} className={styles.cartItem}>
                        <img className="sneakers mr-20" srcwidth={70} height={70} src={obj.imageUrl} alt="sneakers" />
                        <div className="mr-20">
                          <p className="mb-5">{obj.title}</p>
                          <b>{obj.price} руб.</b>
                        </div>
                        <img className={styles.removeBtn} src="img/btn-remove.svg" alt="remove" onClick={() => onRemove(obj.id)} />
                      </div>
                    ))}
                  </div>
                  <div className={styles.cartTotalBlock}>
                    <ul>
                      <li className='d-flex justify-between mb-20'>
                        <span>Итого:</span>
                        <div className={styles.dash}></div>
                        <b>{totalPrice} руб.</b>
                      </li>
                      <li className='d-flex justify-between mb-20'>
                        <span>Налог 5%:</span>
                        <div className={styles.dash}></div>
                        <b>{Math.round(totalPrice / 100 * 5)} руб.</b>
                      </li>
                    </ul>
                    <button className='greenButton' onClick={onClickOrder}>
                        Оформить заказ
                        <img src='img/arrowRight.svg' alt='Arrow' />
                    </button>
                  </div>
                </div> : <Info 
                          image={isOrderComplete ? "/img/orderPlaced.jpg" : "/img/cartEmpty.png"} 
                          title={isOrderComplete ? "Заказ оформлен!" : "Корзина пуста"}
                          description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` :"Добавьте хотябы одну пару кроссовок, чтобы сделать заказ."}
                          />
              }
            </div>
          </div>
    );
}

export default Drawer;