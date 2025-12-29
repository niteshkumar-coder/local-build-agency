
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import BlogPage from './pages/BlogPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';
import AdminLogin from './pages/AdminLogin.tsx';
import AITools from './pages/AITools.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import LeadPopup from './components/LeadPopup.tsx';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  const handleLogin = (status: boolean) => {
    setIsAdmin(status);
    localStorage.setItem('isAdmin', status.toString());
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <ScrollToTop />
        <Navbar isAdmin={isAdmin} />
        <LeadPopup />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Admin Routes */}
            <Route 
              path="/admin" 
              element={isAdmin ? <AdminDashboard /> : <AdminLogin onLogin={handleLogin} />} 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

// Helper component to ensure we scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
