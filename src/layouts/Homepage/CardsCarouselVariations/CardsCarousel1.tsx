import { Carousel } from '@mantine/carousel';
import { Container, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';

import SpinnerLoading from '@/utils/SpinnerLoading';
import type BookModel from '@/models/BookModel';

import { ReturnBook, ReturnBook1 } from './ReturnBook';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

export default function CardsCarousel1() {
  // type Array
  const [books, setBooks] = useState<BookModel[]>([]);
  // type Boolean
  const [isLoading, setIsLoading] = useState(true);
  // type Boolean
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = 'http://localhost:8080/api/books';
      const url: string = `${baseUrl}?page=0&size=9`;

      // Create a variable that is equal to whatever we fetch here.
      const response = await fetch(url);

      // Check if response is ok, else keep going
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      // get response json
      const responseJson = await response.json();

      // the final data are in responseData
      // eslint-disable-next-line no-underscore-dangle
      const responseData = responseJson._embedded.books;

      // create a new variabled called loadedBooks to push all the new data in
      const loadedBooks: BookModel[] = [];

      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const key in responseData) {
        loadedBooks.push({
          id: responseData[key].id,
          title: responseData[key].title,
          author: responseData[key].author,
          description: responseData[key].description,
          copies: responseData[key].copies,
          copiesAvailable: responseData[key].copiesAvailable,
          category: responseData[key].category,
          img: responseData[key].img,
        });
      }

      setBooks(loadedBooks);
      setIsLoading(false);
    };

    // catch if there are any errors in async
    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

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

  // using ...item
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <ReturnBook {...item} />
    </Carousel.Slide>
  ));

  // // using book={item}
  // const slides1 = books.map((item) => (
  //   <Carousel.Slide key={item.title}>
  //     <ReturnBook1 book={item} />
  //   </Carousel.Slide>
  // ));

  // using book={item}
  const slides1 = books.map((item) => (
    // eslint-disable-next-line react/jsx-key

    <Carousel.Slide key={item.title}>
      <ReturnBook1 book={item} key={item.title} />
    </Carousel.Slide>
  ));

  // <Slider {...settings}>
  //    {this.items.map(item => (
  //       <div>
  //         <CarouselItem item={item}>
  //       </CarouselItem>
  //       <div> )
  //         )}
  // </Slider>

  return (
    <Container size={1000} px={50} pb={50}>
      {slides.length > 0 && (
        <Carousel
          slideSize="50%"
          breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
          slideGap="xl"
          align="start"
          slidesToScroll={mobile ? 1 : 2}
        >
          {slides}
        </Carousel>
      )}

      {slides1.length > 0 && (
        <Carousel
          slideSize="50%"
          breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
          slideGap="xl"
          align="start"
          slidesToScroll={mobile ? 1 : 2}
        >
          {slides1}
        </Carousel>
      )}
    </Container>
  );
}
