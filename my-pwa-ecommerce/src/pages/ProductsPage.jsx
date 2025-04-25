
import React from 'react';
import ProductCard from '../components/ ProductCard';


const dummyProducts = [
  {
    id: 1,
    title: 'Smartphone',
    price: 19999,
    description: 'A budget-friendly smartphone with powerful features.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Bluetooth Headphones',
    price: 2999,
    description: 'Wireless headphones with crystal-clear sound.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    title: 'Fitness Band',
    price: 1499,
    description: 'Track your steps, heart rate, and workouts.',
    image: 'https://via.placeholder.com/150'
  }
];

const Productspage = () => {
  return (
    <div className="row">
      {dummyProducts.map(product => (
        <div className="col-md-4 mb-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Productspage;
