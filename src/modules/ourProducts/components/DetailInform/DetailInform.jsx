import { useState } from 'react';

import DetailedQuantity from '../DetailedQuantity/DetailedQuantity';
import TotalAndAdd from '../TotalAndAdd/TotalAndAdd';
import style from './DetailInform.module.scss';
import CustomScrollWrapper from 'shared/components/CustomScrollWrapper/CustomScrollWrapper';

const DetailInform = ({ product, closeModal }) => {
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
        <div>
          <h2 className={style.detailTitle}>{product.productName}</h2>
          <p className={style.detailCategory}>{product.category}</p>
          <CustomScrollWrapper wrapClassName={style.scroll}>
            <div className={style.detailInfoThumb}>
              <p className={style.detailDescription}>{product.description}</p>
              <h3 className={style.detailCompound}>Compound</h3>
              <ul>
                {product.compound.map((compound, index) => (
                  <li key={index}>
                    <p className={style.detailDescription}>{compound}</p>
                  </li>
                ))}
              </ul>
            </div>
          </CustomScrollWrapper>
        </div>
        <div>
          <DetailedQuantity quantity={quantity} setQuantity={setQuantity} />
          <TotalAndAdd
            quantity={quantity}
            price={price}
            product={product}
            close={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailInform;
