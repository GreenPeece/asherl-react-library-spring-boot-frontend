import { Button, Center, Container, Grid, Paper, Text } from '@mantine/core';
import { IconDatabase } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';

import type BookModel from '@/models/BookModel';

export const SearchBook: React.FC<{ book: BookModel }> = (props) => {
  return (
    <Container py={5} size="xl">
      <Paper shadow="lg" withBorder radius="xl" p="lg">
        <Grid columns={24}>
          <Grid.Col span={6}>
            <Image src={props.book.img} alt="image" height="300" width="200" />
          </Grid.Col>
          <Grid.Col span={12}>
            <Text> {props.book.author}</Text>
            <Text>{props.book.title}</Text>
            <Text>Description: {props.book.description}</Text>
          </Grid.Col>
          <Center mt="auto" mb="auto">
            <Grid.Col span={6}>
              <Text>
                <Link href={`/checkout/${props.book.id}`}>
                  <Button leftIcon={<IconDatabase size={14} />}>
                    View more Details
                  </Button>
                </Link>
              </Text>
            </Grid.Col>
          </Center>
        </Grid>
      </Paper>
    </Container>
  );
};
