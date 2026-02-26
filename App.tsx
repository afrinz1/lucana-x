
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import LoadingScreen from './components/Layout/LoadingScreen';
import Home from './pages/Home';
import ProductsIndex from './pages/ProductsIndex';
import ProductCategory from './pages/ProductCategory';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminProducts from './pages/AdminProducts';
import FrogAdminProducts from './pages/admin/products/FrogAdminProducts';
import ReelsAdminProducts from './pages/admin/products/ReelsAdminProducts';
import RodAdminProducts from './pages/admin/products/RodAdminProducts';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Use sessionStorage to ensure the loader only plays once per session if desired, 
  // but for a "first come into website" requirement, standard state is fine.
  // To strictly show it once per session, we could check sessionStorage here.

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className={`flex flex-col min-h-screen transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {!isLoading && (
          <>
            <Navbar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsIndex />} />
                <Route path="/products/:categoryId" element={<ProductCategory />} />
                <Route path="/products/detail/:productId" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/products/frog" element={<FrogAdminProducts />} />
                <Route path="/admin/products/reels" element={<ReelsAdminProducts />} />
                <Route path="/admin/products/rod" element={<RodAdminProducts />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
