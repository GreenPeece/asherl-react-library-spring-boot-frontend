import { OktaAuth } from '@okta/okta-auth-js';
import React from 'react';

import { CardsCarousel } from '@/layouts/Homepage/CardsCarouselVariations/CardsCarousel';
import CardsCarousel1 from '@/layouts/Homepage/CardsCarouselVariations/CardsCarousel1';
import HeroVersion1 from '@/layouts/Homepage/HeroVersion1';
import HeroVersion2 from '@/layouts/Homepage/HeroVersion2';
import HeroVersion3 from '@/layouts/Homepage/HeroVersion3';
import LibraryServices from '@/layouts/Homepage/LibraryServices';
import Footer from '@/layouts/NavbarAndFooter/Footer';
import Navbar from '@/layouts/NavbarAndFooter/Navbar';
import { oktaConfig } from '@/lib/oktaConfig';

type Props = {};

const oktaAuth = new OktaAuth(oktaConfig);
// eslint-disable-next-line no-empty-pattern
export default function Homepage({}: Props) {

  const customAuthHandler = () => {
    history.pushState('/login')
  }

  const restoreOriginalUri = async (_oktaAuh: any, originalUri:any) => {
    history.replaceState(toRelativeUrl originalUri / windows/location.origin)
  }
 
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
