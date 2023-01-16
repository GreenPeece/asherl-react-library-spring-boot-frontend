import {
  Button,
  Container,
  createStyles,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import Link from 'next/link';

import image from '../../../public/assets/blue-book-svgrepo-com.svg';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
    // backgroundColor:  '#6a994e',
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default function HeroVersion1() {
  const { classes } = useStyles();
  return (
    <div>
      <Container pt={80} pb={150}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              An online <span className={classes.highlight}>React</span>
              <br /> fullstack library
            </Title>
            <Text color="dimmed" mt="md">
              Build a fully functional accessible library application using
              React, Next.js, Typescript and Mantine.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you
                can use this
              </List.Item>
              <List.Item>
                <b>Fully functional features</b> – Security, Admin Dashboards,
                Checkout and Order - you name it
              </List.Item>
            </List>

            <Group mt={30}>
              <Link href="/search">
                <Button radius="xl" size="md" className={classes.control}>
                  Explore Top Books
                </Button>
              </Link>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} alt="svg" />
        </div>
      </Container>
    </div>
  );
}
