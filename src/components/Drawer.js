function Drawer () {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer d-flex flex-column">
            <div className='d-flex justify-between align-center mb-30'>
              <h2>Корзина</h2>
              <img className='cu-p' src="img/btn-remove.svg" alt="remove" />
            </div>
            


            <div className="items">
              <div className="cartItem d-flex align-center mb-20">
                <img className="sneakers mr-20" srcwidth={70} height={70} src="img/1.jpg" alt="sneakers" />
                <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className='removeBtn' src="img/btn-remove.svg" alt="remove" />
              </div>

              <div className="cartItem d-flex align-center mb-20">
                <img className="sneakers mr-20" srcwidth={70} height={70} src="img/1.jpg" alt="sneakers" />
                <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className='removeBtn' src="img/btn-remove.svg" alt="remove" />
              </div>

              <div className="cartItem d-flex align-center mb-20">
                <img className="sneakers mr-20" srcwidth={70} height={70} src="img/1.jpg" alt="sneakers" />
                <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className='removeBtn' src="img/btn-remove.svg" alt="remove" />
              </div>
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li className='d-flex justify-between mb-20'>
                  <span>Итого:</span>
                  <div className='dash'></div>
                  <b>21 498 руб.</b>
                </li>
                <li className='d-flex justify-between mb-20'>
                  <span>Налог 5%:</span>
                  <div className='dash'></div>
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