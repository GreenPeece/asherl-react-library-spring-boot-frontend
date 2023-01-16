/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import {
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  Input,
  Select,
} from '@mantine/core';
import { useEffect, useState } from 'react';

import type BookModel from '@/models/BookModel';
import { PaginationUtil } from '@/utils/PaginationUtil';

import SpinnerLoading from '../../utils/SpinnerLoading';
import { SearchBook } from './components/SearchBook';

export default function SearchBooksPage() {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);
  const [totalAmountBooks, setTotalAmountBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const [searchUrl, setSearchUrl] = useState('');
  const [category, setCategory] = useState('Book Category');

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = 'http://localhost:8080/api/books';
      let url: string = '';
      if (searchUrl === '') {
        url = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;
      } else {
        url = baseUrl + searchUrl;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const responseJson = await response.json();

      const responseData = responseJson._embedded.books;

      setTotalAmountBooks(responseJson.page.totalElements);
      setTotalPages(responseJson.page.totalPages);

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
    window.scrollTo(0, 0);
  }, [currentPage, searchUrl]); // each time the current page changes, we wanted to recall this hook.

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

  // Handle all search handling changes
  const searchHandleChange = () => {
    if (search === '') {
      setSearchUrl('');
    } else {
      setSearchUrl(
        `/search/findByTitleContaining?title=${search}&page=0&size=5`
      );
    }
  };

  const categoryField = (value: string) => {
    if (
      value.toLowerCase() === 'fe' ||
      value.toLowerCase() === 'be' ||
      value.toLowerCase() === 'data' ||
      value.toLowerCase() === 'devops'
    ) {
      setCategory(value);
      setSearchUrl(
        `/search/findByCategoryContaining?category=${value}&page=0&size=${booksPerPage}`
      );
    } else {
      setCategory('All');
      setSearchUrl(`?page=0&size=${booksPerPage}`);
    }
  };

  const handleKeypress = (e: any) => {
    // it triggers by pressing the enter key
    if (e.key === 'Enter') {
      searchHandleChange();
    }
  };

  const indexOfLastBook: number = currentPage * booksPerPage;
  const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
  const lastItem =
    booksPerPage * currentPage <= totalAmountBooks
      ? booksPerPage * currentPage
      : totalAmountBooks;
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <Container size="lg">
          <Center>
            <Group position="center" grow pb="xl" px="md" py={20}>
              <Grid>
                <Grid.Col span={6}>
                  <Input
                    placeholder="Search books"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={handleKeypress}
                  />
                </Grid.Col>
                <Grid.Col span={3}>
                  <Select
                    placeholder="Category"
                    onChange={(e) => categoryField(e || '')}
                    data={[
                      { value: 'All', label: 'All' },
                      { value: 'FE', label: 'Frontend' },
                      { value: 'BE', label: 'Backend' },
                      { value: 'DevOps', label: 'DevOps' },
                      { value: 'Data', label: 'Data' },
                    ]}
                  />
                </Grid.Col>
                <Grid.Col span={1}>
                  <Button onClick={() => searchHandleChange()}>Search</Button>
                </Grid.Col>
              </Grid>
            </Group>
          </Center>
        </Container>
        <Container size={1300} px={20}>
          {totalAmountBooks > 0 ? (
            <>
              <h5> Number of results = ({totalAmountBooks})</h5>
              <p>
                {' '}
                {indexOfFirstBook + 1} to {lastItem} of {totalAmountBooks}{' '}
                items:
              </p>

              {books.map((book) => (
                <SearchBook book={book} key={book.id} />
              ))}
              <Center>
                {totalPages > 1 && (
                  <PaginationUtil
                    currentPage={currentPage}
                    totalPages={totalPages}
                    paginate={paginate}
                  />
                )}
              </Center>
            </>
          ) : (
            <div>
              No available books as of the moment. Please come back again soon!
              <Flex pt={10}>
                <Button> Contact Support </Button>
              </Flex>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}
