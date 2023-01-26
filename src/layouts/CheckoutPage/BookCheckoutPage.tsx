/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

import { Container, Grid, Text } from '@mantine/core';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import type BookModel from '@/models/BookModel';
import type ReviewModel from '@/models/ReviewModel';
import SpinnerLoading from '@/utils/SpinnerLoading';
import { StarsReview } from '@/utils/StarsReview';

import { CheckoutWidget } from './CheckoutWidget';

type Props = {
  book_id: string;
};

export default function BookCheckoutPage({ book_id }: Props) {
  const [book, setBook] = useState<BookModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  // Review state
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [totalStars, setTotalStars] = useState(0);
  const [isLoadingReview, setIsLoadingReview] = useState(true);

  // Book useEffect
  useEffect(() => {
    if (book_id !== undefined && book_id.length > 0) {
      const fetchBooks = async () => {
        const baseUrl: string = `http://localhost:8080/api/books/${book_id}`;
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const responseJson = await response.json();

        const loadedBooks: BookModel = {
          id: responseJson.id,
          title: responseJson.title,
          author: responseJson.author,
          description: responseJson.description,
          copies: responseJson.copies,
          copiesAvailable: responseJson.copiesAvailable,
          category: responseJson.category,
          img: responseJson.img,
        };

        setBook(loadedBooks);
        setIsLoading(false);
      };

      // catch if there are any errors in async
      fetchBooks().catch((error: any) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
      window.scrollTo(0, 0);
    }
  }, [book_id, httpError]); // each time the current page changes, we wanted to recall this hook.

  // Reviews useEffect

  useEffect(() => {
    if (book_id !== undefined && book_id.length > 0) {
      const fetchBookReviews = async () => {
        const reviewUrl: string = `http://localhost:8080/api/reviews/search/findByBookId?bookId=${book_id}`;
        const responseReviews = await fetch(reviewUrl);

        if (!responseReviews.ok) {
          throw new Error('Something went wrong');
        }

        const responseJsonReviews = await responseReviews.json();

        const responseData = responseJsonReviews._embedded.reviews;

        const loadedReviews: ReviewModel[] = [];

        let weightedStarReviews: number = 0;

        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const key in responseData) {
          loadedReviews.push({
            id: responseData[key].id,
            userEmail: responseData[key].userEmail,
            date: responseData[key].date,
            rating: responseData[key].rating,
            bookId: responseData[key].bookId,
            reviewDescription: responseData[key].reviewDescription,
          });
          weightedStarReviews += responseData[key].rating;
        }

        if (loadedReviews) {
          // this gives us random number to the nearest .5
          const round = (
            Math.round((weightedStarReviews / loadedReviews.length) * 2) / 2
          ).toFixed(1);
          setTotalStars(Number(round));
        }

        setReviews(loadedReviews);
        setIsLoadingReview(false);
      };

      fetchBookReviews().catch((error: any) => {
        setIsLoadingReview(false);
        setHttpError(error.message);
      });
    }
  }, []);

  // if (isLoading || isLoadingReview) {
  if (isLoading) {
    return (
      <div>
        <SpinnerLoading />
      </div>
    );
  }
  if (httpError) {
    return (
      <div>
        <p>{httpError}</p>
      </div>
    );
  }
  return (
    <div>
      <Container size={'xl'} p={20}>
        <Grid>
          <Grid.Col span={3}>
            {book?.img !== undefined ? (
              <Image
                src={book?.img}
                alt="ImageTable"
                height="300"
                width="200"
              />
            ) : null}
          </Grid.Col>
          <Grid.Col span={6} pl={0}>
            <Text fw={700}>{book?.title}</Text>
            <Text c="blue">{book?.author}</Text>
            {book?.description}
            <StarsReview rating={2.9} size={16} />
          </Grid.Col>
          <Grid.Col span={3} pl={30}>
            {book && (
              <CheckoutWidget
                copiesAvailable={book?.copiesAvailable}
                id={book?.id}
                title={book?.title}
                description={book?.description}
              />
            )}
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
