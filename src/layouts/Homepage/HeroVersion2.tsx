import {
  Button,
  Center,
  Container,
  Grid,
  Image,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import { MdOutlineArrowDownward } from 'react-icons/md';
import { Link } from 'react-scroll';

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function HeroVersion2({}: Props) {
  return (
    <div>
      {/* {'First Hero '} */}
      <section id="section-three">
        <Container>
          <Grid justify="space-around" align="center" columns={2}>
            <Grid.Col span={1}>
              <Image
                src={'/assets/ReadingPerson.gif'}
                alt={'sample2'}
                style={{ width: '100%' }}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Container style={{ marginBottom: 20 }} size="sm">
                <Text color="black">
                  <Title order={1}>Read technical books</Title>
                  Dennis Farina is unique among thespians in that he was one of
                  the few to achieve success as a &quot; late-bloomer &quot; He
                  did not start acting until he was 37 years old, after stints
                  in the military and 18 years on the Chicago Police Department.
                </Text>
              </Container>

              <Center p={20}>
                <Link to="Hero" smooth duration={500}>
                  <Button
                    color="blue"
                    rightIcon={<MdOutlineArrowDownward size={16} />}
                    radius="lg"
                    size="md"
                  >
                    View more
                  </Button>
                </Link>
              </Center>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </div>
  );
}
