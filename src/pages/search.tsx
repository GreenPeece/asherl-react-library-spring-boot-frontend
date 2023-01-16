import Footer from '@/layouts/NavbarAndFooter/Footer';
import Navbar from '@/layouts/NavbarAndFooter/Navbar';
import SearchBooksPage from '@/layouts/SearchBooksPage/SearchBooksPage';

export default function search({}: props) {
  return (
    <div>
      <Navbar />
      <SearchBooksPage />
      <Footer />
    </div>
  );
}
