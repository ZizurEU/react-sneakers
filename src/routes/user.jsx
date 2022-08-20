import React from 'react';
import axios from 'axios';
import Card from '../components/Card';
import AppContext from '../context';

export default function User() {
  const [orders, setOrders] = React.useState([]);
  const {  isLoading } = React.useContext(AppContext);

  React.useEffect(() => {
    async function OrderData () {
      try {
        const { data } = await axios.get('https://62f64d45612c13062b4b33e6.mockapi.io/orders');
        setOrders(data.map((obj) => obj.items).flat());
      } catch (error) {
        alert("Ошибка при получении списка заказов");
        console.log(error);
      }
    }
    OrderData();
  }, []);
  
    return (
        <div className="wrapper clear">
        <div className="content p-40">
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Мои заказы</h1>
          </div>
          <div className="d-flex flex-wrap">
          {isLoading ? [...Array(8)] : orders.map((item, index) => (
              <Card
                key={index}
                loading={isLoading}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    );
}