import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import toast from 'react-hot-toast';
import { getProducts } from 'modules/ourProducts/api/productsApi';

import style from './Products.module.scss';
import { icons as sprite } from 'shared/icons';
import { Bars } from 'react-loader-spinner';
import { useMedia } from 'hooks/useMedia';
import clsx from 'clsx';

const Products = ({ currentCategory }) => {
  const [products, setProducts] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isMobile, isDesktop, isTablet } = useMedia();

  useEffect(() => {
    const dataProduct = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        toast.error('Something went wrong :( Please reload the page.');
      } finally {
        setLoading(false);
      }
    };

    dataProduct();
  }, []);

  const filteredProducts =
    currentCategory === 'All'
      ? products
      : products.filter((product) => product.category === currentCategory);

  const sizeProducts = filteredProducts.length;

  const showButtons =
    !(sizeProducts === 1 && (isMobile || isTablet)) &&
    !(sizeProducts <= 3 && isDesktop);

  return (
    <>
      {loading ? (
        <div className={style.containerLoader}>
          <Bars
            height="80"
            width="80"
            color="#FD9222"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div
          className={clsx(style.productSectionMore, {
            [style.productSection]: isMobile,
          })}
        >
          {filteredProducts.length > 0 && (
            <Swiper
              className={style.productList}
              rewind={true}
              onSwiper={setSwiper}
              breakpoints={{
                767: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 22,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {filteredProducts.map((product) => (
                <SwiperSlide key={product._id} className={style.prodactItem}>
                  <img
                    className={style.prodactImg}
                    src={product.photo}
                    alt={product.productName}
                  />
                  <div className={style.productInform}>
                    <h3 className={style.productName}>{product.productName}</h3>
                    <p className={style.productCategory}>{product.category}</p>
                    <p className={style.productPrice}>{product.price}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {showButtons && (
            <>
              <button
                className={style.prevButton}
                onClick={() => swiper && swiper.slidePrev()}
              >
                <svg className={style.iconArrow}>
                  <use xlinkHref={`${sprite}#arrow-left`} />
                </svg>
              </button>

              <button
                className={style.nextButton}
                onClick={() => swiper && swiper.slideNext()}
              >
                <svg className={style.iconArrow}>
                  <use xlinkHref={`${sprite}#arrow-right`} />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Products;
