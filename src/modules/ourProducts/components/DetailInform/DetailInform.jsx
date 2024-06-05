import { useState } from 'react';

import DetailedQuantity from '../DetailedQuantity/DetailedQuantity';
import TotalAndAdd from '../TotalAndAdd/TotalAndAdd';
import style from './DetailInform.module.scss';

const DetailInform = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;
  const price = parseFloat(product.price);

  return (
    <div className={style.detailInfrom}>
      <img
        className={style.detailImage}
        src={product.photo}
        alt={product.productName}
      />

      <div className={style.detailInfromAboutProduct}>
        <h2>{product.productName}</h2>
        <p>{product.category}</p>
        <p className={style.detailDescription}>{product.description}</p>
        <h3>Compound</h3>
        <ul>
          {product.compound.map((compound, index) => (
            <li key={index}>
              <p>{compound}</p>
            </li>
          ))}
        </ul>
        <DetailedQuantity quantity={quantity} setQuantity={setQuantity} />
        <TotalAndAdd quantity={quantity} price={price} />
      </div>
    </div>
  );
};

export default DetailInform;
