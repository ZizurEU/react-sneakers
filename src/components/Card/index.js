import React from 'react';
import styles from './Card.module.scss';

function Card({title, imageUrl, price, onClickFavorite, onPlus}) {
    const [isAdded, setIsAdded] = React.useState();

    const onClickPlus = ()  => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <img className={styles.favorite} onClick={onClickFavorite} src="/img/heart-unliked.svg" alt="heart-unliked" />
            <img width={133} height={112} src={imageUrl} alt="sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>{price} руб.</b>
                </div>
                  <img className={styles.btn_plus} onClick={onClickPlus} width={32} height={32} src={isAdded ? "/img/btn-cheked.svg" : "img/btn-plus.svg"} alt="Plus"/>
            </div>
        </div>
    );
}

export default Card;