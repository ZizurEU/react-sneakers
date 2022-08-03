import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <>
      <div className="wrapper clear">
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
        <div className="content p-40">
          <h1 className="mb-40">Все кроссовки</h1>
          
          <div className="d-flex justify-between">
            <div className="card">
              <img width={133} height={112} src="/img/1.jpg" alt="sneakers" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
              </div>
            </div>

            <div className="card">
              <img width={133} height={112} src="/img/2.jpg" alt="sneakers" />
              <h5>Мужские Кроссовки Nike Air Max 270</h5>
              <div className="d-flex justify-between align-center">
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
              </div>
            </div>

            <div className="card">
              <img width={133} height={112} src="/img/3.jpg" alt="sneakers" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
              </div>
            </div>

            <div className="card">
              <img width={133} height={112} src="/img/4.jpg" alt="sneakers" />
              <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
              <div className="d-flex justify-between align-center">
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
