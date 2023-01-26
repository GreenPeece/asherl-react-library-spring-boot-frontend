import { Button, Container } from '@mantine/core';
import Link from 'next/link';

import type ReviewModel from '@/models/ReviewModel';
import { Review } from '@/utils/Reviews';

export const LatestReview: React.FC<{
  reviews: ReviewModel[];
  bookId: number | undefined;
}> = (props) => {
  return (
    <div>
      Hello world
      <Container>
        {props.reviews.length > 0 ? (
          <>
            {props.reviews.slice(0, 3).map((eachReview) => (
              <Review review={eachReview} key={eachReview.id}></Review>
            ))}

            <div>
              <Link href={'#'}>
                <Button> Read all reviews</Button>
              </Link>
            </div>
          </>
        ) : (
          <div>Currently there are no reviews for this book.</div>
        )}
      </Container>
    </div>
  );
};
