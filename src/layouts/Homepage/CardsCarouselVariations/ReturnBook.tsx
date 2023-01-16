/* eslint-disable unused-imports/no-unused-vars */
import {
  Button,
  Container,
  createStyles,
  Paper,
  Text,
  Title,
} from '@mantine/core';

import type BookModel from '@/models/BookModel';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  author: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

// First implementation of consuming the property
export function ReturnBook({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Container pt={80} pb={80}>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
        <Button variant="white" color="dark">
          Read article {classes.card}
        </Button>
      </Paper>
    </Container>
  );
}

// Second Implementation of consuming the property
// export function ReturnBook1({ image, title, category }: CardProps) {
export const ReturnBook1: React.FC<{ book: BookModel }> = (props) => {
  const { classes } = useStyles();

  return (
    <Container pt={80} pb={80}>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        // sx={{ backgroundImage: `url(${image})` }}
        sx={{ backgroundImage: `url(${props.book.img})` }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs" color={'black'}>
            {props.book.category}
          </Text>
          <Title order={3} className={classes.title}>
            {props.book.title}
          </Title>
          <Text className={classes.author} size="xs" color={'black'}>
            {props.book.author}
          </Text>
        </div>

        <Button variant="white" color="dark">
          Read articles
        </Button>
      </Paper>
    </Container>
  );
};

// using image defined in blob
