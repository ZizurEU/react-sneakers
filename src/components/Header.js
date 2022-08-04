function Header() {
    return (
        <header className='d-flex justify-between align-center p-40'>
          <div className="d-flex align-center">
            <img src="/img/logo.png" alt="logo" width={40} height={40} className="mr-15"/>
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className="d-flex">
            <li className="mr-30">
              <img src="/img/cart.svg" alt="cart" width={18} height={18} className="mr-10"/>
              <span>1205 руб.</span>
            </li>
            <li className="mr-30">
              <img src="/img/heart.svg" alt="heart" width={20} height={19}/>
            </li>
            <li>
              <img src="/img/user.svg" alt="user" width={20} height={20}/>
            </li>
          </ul>
        </header>
    );
}

export default Header;