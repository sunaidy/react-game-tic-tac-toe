import { useState } from 'react';

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
  export default function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
        <>
        <h1>Lista de productos</h1>
        <ul>{listItems}</ul>
        <MyButton></MyButton>
        </>
    );
  }

  function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
      alert('You clicked me!');
      setCount(count+1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }