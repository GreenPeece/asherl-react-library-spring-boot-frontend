/* eslint-disable react-hooks/rules-of-hooks */
import { ActionIcon, Container, createStyles, Group } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { useViewportSize } from '@mantine/hooks';
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 60,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  container: {
    position: 'relative',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  const { height, width } = useViewportSize();
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <Container className={classes.inner}>
          <Link href="/">
            <MantineLogo size={28} />
          </Link>
          <Group spacing={0} className={classes.links} position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandYoutube size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </div>
      ;
    </div>
  );
}
