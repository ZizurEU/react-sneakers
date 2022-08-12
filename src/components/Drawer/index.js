import React from 'react';
import styles from './Drawer.module.scss';

function Drawer ({onClickClose, items = []}) {
    return (
        <div className="overlay">
        <div className={styles.drawer}>
            <div className='d-flex justify-between align-center mb-30'>
              <h2>Корзина</h2>
              <img onClick={onClickClose} className='cu-p' src="img/btn-remove.svg" alt="remove" />
            </div>
            


            <div className={styles.items}>
              {items.map((obj) => (
                <div className={styles.cartItem}>
                  <img className="sneakers mr-20" srcwidth={70} height={70} src={obj.imageUrl} alt="sneakers" />
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img className='removeBtn' src="img/btn-remove.svg" alt="remove" />
                </div>
              ))}
            </div>

            <div className={styles.cartTotalBlock}>
              <ul>
                <li className='d-flex justify-between mb-20'>
                  <span>Итого:</span>
                  <div className={styles.dash}></div>
                  <b>21 498 руб.</b>
                </li>
                <li className='d-flex justify-between mb-20'>
                  <span>Налог 5%:</span>
                  <div className={styles.dash}></div>
                  <b>1074 руб.</b>
                </li>
              </ul>

              <button className='greenButton'>
                  Оформить заказ
                  <img src='img/arrowRight.svg' alt='Arrow' />
              </button>
            </div>

          </div>
          </div>
    );
}

export default Drawer;