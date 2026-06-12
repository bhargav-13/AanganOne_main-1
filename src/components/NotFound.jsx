import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';

import { Helmet } from 'react-helmet-async';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SEO
        title="404 - Page Not Found | AanganOne"
        description="The page you are looking for does not exist."
        url="https://aanganone.com/404"
      />
      {/* Inform search engines NOT to index this page */}
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <Navbar simple={true} />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-9xl font-bold text-[#E5F1E5] mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#00A150] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#008f47] transition-colors duration-300 shadow-md"
          >
            Go Back Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;
