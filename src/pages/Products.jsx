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
      <div className="col-lg-3">
        <div key={product.reference} className="card mx-auto my-3 my-lg-0">
          <Product product={product}></Product>
        </div>
      </div>
    )
  })

  return (
    <>
      <Menu />
      <div id="products">
        <h2 className="py-3">Productos</h2>
        <div className="container">
          <div className="row h-50">
            {displayProducts}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
