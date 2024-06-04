import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import toast from 'react-hot-toast';
import { getProducts } from 'modules/ourProducts/api/productsApi';

import style from './Products.module.scss';
import { icons as sprite } from 'shared/icons';

const Products = ({ currentCategory }) => {
  const [products, setProducts] = useState([]);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const dataProduct = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        toast.error('Something went wrong :( Please reload the page.');
      }
    };

    dataProduct();
  }, []);

  const filteredProducts =
    currentCategory === 'All'
      ? products
      : products.filter((product) => product.category === currentCategory);

  return (
    <>
      <button
        className={style.prevButton}
        onClick={() => swiper && swiper.slidePrev()}
      >
        <svg className={style.iconArrow}>
          <use xlinkHref={`${sprite}#arrow-left`} />
        </svg>
      </button>

      {filteredProducts.length > 0 && (
        <Swiper
          className={style.productsList}
          rewind={true}
          onSwiper={setSwiper}
          breakpoints={{
            767: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product._id}>
              <img src={product.photo} alt={product.productName} />
              <h3>{product.productName}</h3>
              <p>{product.category}</p>
              <p>{product.price}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <button
        className={style.nextButton}
        onClick={() => swiper && swiper.slideNext()}
      >
        <svg className={style.iconArrow}>
          <use xlinkHref={`${sprite}#arrow-right`} />
        </svg>
      </button>
    </>
  );
};

export default Products;
