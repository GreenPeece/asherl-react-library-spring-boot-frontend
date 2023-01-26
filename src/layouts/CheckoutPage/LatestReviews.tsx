import { Button, Container } from '@mantine/core';
import Link from 'next/link';

import type ReviewModel from '@/models/ReviewModel';
import { Review } from '@/utils/Review';

export const LatestReview: React.FC<{
  reviews: ReviewModel[];
  bookId: number;
}> = (props) => {
  return (
    <div>
      <Container>
        {props.reviews.length > 0 ? (
          <>
            {props.reviews.slice(0, 3).map((eachReview) => (
              <Review review={eachReview} key={eachReview.id}></Review>
            ))}
            {console.log(`review length is 1: ${props.reviews.length}`)}
            <div>
              <Link href={'#'}>
                <Button> Read all reviews</Button>
              </Link>
            </div>
          </>
        ) : (
          <div>
            Currently there are no reviews for this book.
            {console.log(`review length is 2: ${props.reviews.length}`)}
          </div>
        )}
      </Container>
    </div>
  );
};

//   bookId: number | undefined;
