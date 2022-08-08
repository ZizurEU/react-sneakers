import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    imageUrl: '/img/2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: '/img/3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: '/img/4.jpg',
  },
  {
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: 15199,
    imageUrl: '/img/5.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Kyrie 7',
    price: 11299,
    imageUrl: '/img/6.jpg',
  },
  {
    title: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: 10799,
    imageUrl: '/img/7.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 16499,
    imageUrl: '/img/8.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: 13999,
    imageUrl: '/img/9.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: '/img/1.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: '/img/4.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: 11299,
    imageUrl: '/img/10.jpg',
  },
];

function App() {
  return (
      <div className="wrapper clear">
        <Drawer />
        <Header />
        <div className="content p-40">
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Все кроссовки</h1>
            <div className="search-block">
              <img src="/img/search.svg" alt="search" width={15} height={15}/>
              <input placeholder='Поиск...' />
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {arr.map((Object) => (
              <Card
              title={Object.title}
              price={Object.price}
              imageUrl={Object.imageUrl}
              onClick={() => console.log(Object)}
              />
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;
