import './Product.css'

function Product(props) {
  const { product } = props;

  return (
    <div className="product">
      <div className="image"><img src={"img/" + product.reference + ".png"} alt="Missing file" /></div>
      <div className="description">
        <p>Referencia {product.reference}</p>
        <p>{product.description}</p>
        <p>Dimensiones: {product.talla}</p>
        <p>{product.price.toString()} €</p>
      </div>
    </div>
  )
}

export default Product
