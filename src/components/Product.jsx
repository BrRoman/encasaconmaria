import './Product.css'

function Product(props) {
  const { product } = props;

  return (
    <>
      <div className="image"><img src={"img/" + product.reference + ".png"} alt="Missing file" /></div>
      <div className="description">
        <p>Referencia {product.reference}</p>
        <p>{product.description}</p>
        <p>Dimensiones: {product.talla}</p>
        <p>Precio: {product.price.toString()} €</p>
      </div>
    </>
  )
}

export default Product
