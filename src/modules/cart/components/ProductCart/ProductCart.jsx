import DetailedQuantity from 'modules/ourProducts/components/DetailedQuantity/DetailedQuantity';

const ProductCart = ({ products }) => {
  return (
    <>
      {products.map((item, index) => (
        <div key={index}>
          <p>{item.product.productName}</p>
          <DetailedQuantity quantity={item.quantity} />
          <p>Total: {parseFloat(item.product.price) * item.quantity} UAH</p>
        </div>
      ))}
    </>
  );
};

export default ProductCart;
