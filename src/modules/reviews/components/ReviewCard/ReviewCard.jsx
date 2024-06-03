import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { getReviews } from 'modules/reviews/api/reviewsApi';
import style from './ReviewCard.module.scss';
import { icons as sprite } from 'shared/icons';

const ReviewCard = () => {
  const [swiper, setSwiper] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getDataReviews = async () => {
      try {
        const res = await getReviews();
        setReviews(res);
      } catch (error) {
        toast.error('Something went wrong :( Please reload the page.');
      }
    };

    getDataReviews();
  }, []);

  return (
    <>
      <button
        className={style.prevButton}
        onClick={() => swiper && swiper.slidePrev()}
      >
        <svg className={style.svg} width="48" height="48">
          <use xlinkHref={`${sprite}#arrow-left`} />
        </svg>
      </button>

      {reviews && reviews.length > 0 && (
        <Swiper
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
                <img src={review.photo} alt={review.name} />
                <h3>{review.name}</h3>
                <p>{review.feedback}</p>
              </SwiperSlide>
            ))}
        </Swiper>
      )}

      <button
        className={style.nextButton}
        onClick={() => swiper && swiper.slideNext()}
      >
        <svg className={style.svg} width="48" height="48">
          <use xlinkHref={`${sprite}#arrow-right`} />
        </svg>
      </button>
    </>
  );
};

export default ReviewCard;
