import React from 'react';
import ContentLoader from "react-content-loader";
import styles from './Card.module.scss';
import AppContext from '../../context';


function Card({
            id, 
            title, 
            imageUrl, 
            price, 
            onFavorite, 
            onPlus, 
            favorited = false, 
            loading = false}) 
            {
    const { isItemAdded, isItemFavorited } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = { title, imageUrl, price, id, parentId: id };
    const onClickPlus = ()  => {
        onPlus(obj);
    };

    const onClickFavorite = ()  => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader 
                speed={2}
                width={150}
                height={187}
                viewBox="0 0 150 187"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                // {...props}
              >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
                <rect x="0" y="126" rx="3" ry="3" width="93" height="15" /> 
                <rect x="0" y="163" rx="8" ry="8" width="80" height="24" /> 
                <rect x="118" y="155" rx="8" ry="8" width="32" height="32" /> 
                <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
              </ContentLoader> : <>
                {onFavorite && <img 
                    className={styles.favorite} 
                    onClick={onClickFavorite} 
                    src={
                        isItemFavorited(id) ? "/img/heart-liked.svg" :"/img/heart-unliked.svg"
                        } 
                    alt="heart-unliked" />}
                <img width={133} height={112} src={imageUrl} alt="sneakers" />
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                    </div>
                    {onPlus && <img 
                        className={styles.btn_plus} 
                        onClick={onClickPlus} 
                        width={32} 
                        height={32} 
                        src={isItemAdded(id) ? "/img/btn-cheked.svg" : "img/btn-plus.svg"} 
                        alt="Plus"/>}
                </div>
              </>
            }
        </div>
    );
}

export default Card;