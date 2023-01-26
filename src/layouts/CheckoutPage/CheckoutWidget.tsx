import {
  Badge,
  Button,
  Card,
  Center,
  createStyles,
  Group,
  Text,
} from '@mantine/core';
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from '@tabler/icons';

import type BookModel from '@/models/BookModel';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: 'best seller', icon: IconUsers },
  { label: 'fast checkout', icon: IconGauge },
  { label: 'e-book', icon: IconManualGearbox },
  { label: 'moneyback-guranteed', icon: IconGasStation },
];

export function CheckoutWidget({ copiesAvailable }: BookModel) {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Text size="md" color="dimmed">
          0/5 books checked out
        </Text>
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text weight={500}>Available</Text>
          <Text size="xs" color="dimmed">
            The item&apos;s availability may be subject to change.
          </Text>
        </div>
        <Badge variant="outline">N copies available</Badge>
        <Text size="xs" color="dimmed">
          Total copies: {copiesAvailable}
        </Text>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              $168.00
            </Text>
            <Text
              size="sm"
              color="dimmed"
              weight={500}
              sx={{ lineHeight: 1 }}
              mt={3}
            >
              per day
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            Sign In
          </Button>
        </Group>
      </Card.Section>
      <Group position="apart" mt="md">
        <Text size="xs" color="dimmed">
          Sign in to be able to leave a review
        </Text>
      </Group>
    </Card>
  );
}
