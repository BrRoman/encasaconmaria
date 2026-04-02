import { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import Product from '../components/Product'
import data from '../../public/data.json'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [])

  const displayProducts = products.map((product) => {
    return (
      <div key={product.reference}>
        <Product product={product}></Product>
      </div>
    )
  })

  return (
    <>
      <Menu />
      <div id="products">
        <h2>Productos</h2>
        <div id="body">{displayProducts}</div>
      </div>
    </>
  )
}

export default Products
