import { useRouter } from 'next/router';

import BookCheckoutPage from '@/layouts/CheckoutPage/BookCheckoutPage';
import Footer from '@/layouts/NavbarAndFooter/Footer';
import Navbar from '@/layouts/NavbarAndFooter/Navbar';

export default function BookCheckoutDetails() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Navbar />
      <BookCheckoutPage book_id={typeof id === 'string' ? id : ''} />
      <Footer />
    </div>
  );
}
