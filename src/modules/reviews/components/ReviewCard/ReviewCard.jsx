import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

import { getReviews } from 'modules/reviews/api/reviewsApi';
// import style from './ReviewCard.module.scss';

const ReviewCard = () => {
  // const [swiper, setSwiper] = useState(null);
  const [reviews, setReviews] = useState(null);

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
      {reviews.length > 0 && (
        <ul>
          {reviews
            .filter((review) => review.published)
            .map((review) => (
              <li key={review._id}>
                <img src={review.photo} alt={review.name} />
                <h3>{review.name}</h3>
                <p>{review.feedback}</p>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default ReviewCard;
