/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

import { Container, Grid, Text } from '@mantine/core';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import type BookModel from '@/models/BookModel';
import SpinnerLoading from '@/utils/SpinnerLoading';

type Props = {
  book_id: string;
};

export default function BookCheckoutPage({ book_id }: Props) {
  const [book, setBook] = useState<BookModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = `http://localhost:8080/api/books/${book_id}/hello`;

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
  }, []); // each time the current page changes, we wanted to recall this hook.

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
      <h1> Value of data is {book_id}</h1>
      <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
        <Grid.Col span={4}>1</Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
        <Grid.Col span={4}>3</Grid.Col>
      </Grid>
      <Container size={'xl'} p={20}>
        <Grid>
          <Grid.Col span={3}>
            <Image src={book?.img} alt="ImageTable" height="300" width="200" />
          </Grid.Col>
          <Grid.Col span={7} pl={150}>
            <Text fw={700}>{book?.title}</Text>
            <Text c="blue">{book?.author}</Text>
            {book?.description}
          </Grid.Col>
          <Grid.Col span={2}>____</Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
