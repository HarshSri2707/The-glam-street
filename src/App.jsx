import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

import BlogPage from './pages/BlogPage';
import contentData from './data/content.json';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-glam-cream">
          {/* Navigation - Shows on all pages */}
          <Navigation data={contentData.navigation} />

          {/* Routes - Different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            
            {/* Placeholder routes - you can add these pages later */}
            <Route path="/shop" element={<Shop page="Shop" />} />
            <Route path="/routines" element={<ComingSoon page="Routines" />} />
            <Route path="/community" element={<ComingSoon page="Community" />} />
            <Route path="/support" element={<ComingSoon page="Support" />} />
          </Routes>

          {/* Footer - Shows on all pages */}
          <Footer data={contentData.footer} />
        </div>
      </Router>
    </HelmetProvider>
  );
}

// Simple Coming Soon Component for unbuilt pages
const ComingSoon = ({ page }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-glam-burgundy to-glam-charcoal">
      <div className="text-center space-y-6 px-6">
        <div className="text-7xl">🚀</div>
        <h1 className="font-lora text-5xl font-bold text-white">
          {page} Page Coming Soon
        </h1>
        <p className="text-xl text-white/80 max-w-md mx-auto">
          We're working on something amazing. Check back soon!
        </p>
        <a href="/" className="inline-block px-8 py-4 bg-glam-gold text-glam-charcoal font-sans font-bold hover:bg-white transition-colors duration-300">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default App;