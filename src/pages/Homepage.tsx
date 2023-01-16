import React from 'react';

import { CardsCarousel } from '@/layouts/Homepage/CardsCarouselVariations/CardsCarousel';
import CardsCarousel1 from '@/layouts/Homepage/CardsCarouselVariations/CardsCarousel1';
import HeroVersion1 from '@/layouts/Homepage/HeroVersion1';
import HeroVersion2 from '@/layouts/Homepage/HeroVersion2';
import HeroVersion3 from '@/layouts/Homepage/HeroVersion3';
import LibraryServices from '@/layouts/Homepage/LibraryServices';
import Footer from '@/layouts/NavbarAndFooter/Footer';
import Navbar from '@/layouts/NavbarAndFooter/Navbar';

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Homepage({}: Props) {
  return (
    <>
      <Navbar />
      <HeroVersion1 />
      <CardsCarousel />
      <CardsCarousel1 />
      <HeroVersion2 />
      <HeroVersion3 />
      <LibraryServices />
      <Footer />
    </>
  );
}
