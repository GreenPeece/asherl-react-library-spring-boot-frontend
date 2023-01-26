import type ReviewModel from '@/models/ReviewModel';

import { StarsReview } from './StarsReview';

export const Review: React.FC<{ review: ReviewModel }> = (props) => {
  const date = new Date(props.review.date);
  const longMonth = date.toLocaleString('en-us', { month: 'long' });
  const dateDay = date.getDate();
  const dateYear = date.getFullYear();

  const dateRender = `${longMonth}  ${dateDay}  ${dateYear}`;
  return (
    <div>
      <p>{props.review.userEmail}</p>
      <div>{dateRender}</div>
      <div>
        <StarsReview rating={22.8} size={16} />
      </div>
      <div>
        <p>{props.review.reviewDescription}</p>
      </div>
    </div>
  );
};
