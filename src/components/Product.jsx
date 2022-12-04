const Product = ({ product }) => {
  return (
    <div className="border border-red-800">
      <div className=" border py-4 border-black flex justify-center items-center">
        <img className="outline w-[12rem] h-[14rem]" src={product.image} alt="product" />
      </div>
      <div className="p-4">
        <p className="font-bold text-2xl mb-4 leading-[2rem]">{product.title}</p>
        <p className="mb-4 text-xl font-medium">${product.price}</p>
        <button className="text-white text-2xl bg-black w-[100%] py-4 font-bold ">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
