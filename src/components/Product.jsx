import './Product.css'

function Product(props) {
  const { product } = props;

  return (
    <>
      <div className="row">
        <img className="card-img-top" src={"img/" + product.reference + ".png"} alt="Missing file" />
      </div>

      <div className="row">
        <div className="card-body">
          <h5 className="card-title text-info">Referencia {product.reference}</h5>
          <p className="card-text">
            {product.description}<br />
            Dimensiones: {product.talla}<br />
          </p>
          <p className="card-text bg-warning fw-bold">
            Precio: {product.price.toString()} €
          </p>
        </div>
      </div>
    </>
  )
}

export default Product
