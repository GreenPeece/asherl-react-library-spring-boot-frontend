/* eslint-disable no-empty-pattern */
import React from 'react';

import Footer from '@/layouts/NavbarAndFooter/Footer';
import Navbar from '@/layouts/NavbarAndFooter/Navbar';
import SearchBooksPage from '@/layouts/SearchBooksPage/SearchBooksPage';

export default function index() {
  return (
    <div>
      <Navbar />
      <SearchBooksPage />
      <Footer />
    </div>
  );
}
