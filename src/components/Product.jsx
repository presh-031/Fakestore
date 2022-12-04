const Product = ({ product }) => {
  return (
    <div>
      <div>
        <img src={product.image} alt="product" />
      </div>
      <div>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
