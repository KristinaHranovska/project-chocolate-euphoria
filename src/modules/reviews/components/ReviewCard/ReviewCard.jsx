import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { getReviews } from 'modules/reviews/api/reviewsApi';
import { Bars } from 'react-loader-spinner';

import style from './ReviewCard.module.scss';
import { icons as sprite } from 'shared/icons';

const ReviewCard = () => {
  const [swiper, setSwiper] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataReviews = async () => {
      try {
        const res = await getReviews();
        setReviews(res);
      } catch (error) {
        toast.error('Something went wrong :( Please reload the page.');
      } finally {
        setLoading(false);
      }
    };

    getDataReviews();
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
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
        <div className={style.card}>
          <button
            className={style.prevButton}
            onClick={() => swiper && swiper.slidePrev()}
            aria-label="Previous slide"
          >
            <svg className={style.iconArrow}>
              <use xlinkHref={`${sprite}#arrow-left`} />
            </svg>
          </button>

          {reviews && reviews.length > 0 && (
            <Swiper
              className={style.mainSwiper}
              rewind={true}
              onSwiper={setSwiper}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {reviews
                .filter((review) => review.published)
                .map((review) => (
                  <SwiperSlide key={review._id}>
                    <div className={style.reviewItem}>
                      <div className={style.thumbImgCircle}>
                        <div className={style.reviewCircle}></div>
                        <img
                          src={review.photo}
                          alt={review.name}
                          className={style.reviewImg}
                        />
                      </div>

                      <div className={style.reviweThumb}>
                        <h3 className={style.reviewName}>{review.name}</h3>
                        <p className={style.review}>{review.feedback}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}

          <button
            className={style.nextButton}
            onClick={() => swiper && swiper.slideNext()}
            aria-label="Next slide"
          >
            <svg className={style.iconArrow}>
              <use xlinkHref={`${sprite}#arrow-right`} />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
