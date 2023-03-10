import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const products = [
  // {
  //   id: 1,
  //   name: 'Benjamin',
  //   desc: 'the banana',
  //   href: "#",
  //   price: "€ -.30",
  //   imageSrc:
  //     "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
  // },
  {
    id: 1,
    name: 'Cheryl & Charlie',
    desc: 'the cherries',
    href: "#",
    price: "2€ / kg",
    imageSrc:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
  },
  {
    id: 2,
    name: 'Paul',
    desc: 'the papaya',
    href: "#",
    price: "4€ / kg",
    imageSrc:
      "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 3,
    name: 'Olivia',
    desc: 'the orange',
    href: "#",
    price: "2€ / kg",
    imageSrc:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
  },
  {
    id: 4,
    name: 'Samantha',
    desc: 'the strawberry',
    href: "#",
    price: "6€ / kg",
    imageSrc:
      "https://images.unsplash.com/photo-1554118879-e459bb1fe1ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=824&q=80"
  }
]

function ProductCard({product, setCount, count}) {
  return (
    <div className="product-card">
      <img src={product.imageSrc}/>
      <div className='product-info'>
        <p>{product.name}</p>
        <p>{product.desc}</p>
        <p className='product-price'>{product.price}</p>
      </div>
      <div id='basket-button'>
        <button onClick={() => setCount(count + 1)}>Put in basket</button>
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='header'>
        <h1>JUICY JOY</h1>
        <h2>🧺 Basket: {count}</h2>
      </div>
      <div className="products-list">
        {products.map((product) => <ProductCard product={product} setCount={setCount} count={count} key={product.id}/>)}
      </div>
    </div>
  )
}

export default App
