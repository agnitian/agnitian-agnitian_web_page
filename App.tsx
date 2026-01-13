
import React, { useState, useEffect, useCallback } from 'react';
import { View } from './types';
import PublicHome from './pages/PublicHome';
import WebSolutions from './pages/WebSolutions';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PortalDashboard from './pages/PortalDashboard';
import Subscription from './pages/Subscription';
import Billing from './pages/Billing';
import Usage from './pages/Usage';
import Addons from './pages/Addons';
import ProjectDetail from './pages/ProjectDetail';
import Milestones from './pages/Milestones';
import PaymentMethod from './pages/PaymentMethod';
import InvoiceDetail from './pages/InvoiceDetail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simple scroll-to-top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigate = useCallback((view: View) => {
    setCurrentView(view);
    setIsMenuOpen(false);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case View.HOME: return <PublicHome navigate={navigate} />;
      case View.SOLUTIONS: return <WebSolutions navigate={navigate} />;
      case View.SERVICES: return <Services navigate={navigate} />;
      case View.ABOUT: return <About navigate={navigate} />;
      case View.CONTACT: return <Contact navigate={navigate} />;
      case View.PORTAL_DASHBOARD: return <PortalDashboard navigate={navigate} />;
      case View.PORTAL_SUBSCRIPTION: return <Subscription navigate={navigate} />;
      case View.PORTAL_BILLING: return <Billing navigate={navigate} />;
      case View.PORTAL_USAGE: return <Usage navigate={navigate} />;
      case View.PORTAL_ADDONS: return <Addons navigate={navigate} />;
      case View.PORTAL_PROJECT_DETAIL: return <ProjectDetail navigate={navigate} />;
      case View.PORTAL_MILESTONES: return <Milestones navigate={navigate} />;
      case View.PORTAL_PAYMENT_METHOD: return <PaymentMethod navigate={navigate} />;
      case View.PORTAL_INVOICE_DETAIL: return <InvoiceDetail navigate={navigate} />;
      default: return <PublicHome navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 glass-panel">
        <div className="flex items-center p-4 justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(View.HOME)}>
            <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[24px]">developer_board</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">AGNITIAN</h2>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate(View.SERVICES)} className="text-sm font-semibold hover:text-primary transition-colors">Services</button>
            <button onClick={() => navigate(View.SOLUTIONS)} className="text-sm font-semibold hover:text-primary transition-colors">Solutions</button>
            <button onClick={() => navigate(View.ABOUT)} className="text-sm font-semibold hover:text-primary transition-colors">About</button>
            <button onClick={() => navigate(View.CONTACT)} className="text-sm font-semibold hover:text-primary transition-colors">Contact</button>
            <button onClick={() => navigate(View.PORTAL_DASHBOARD)} className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20">Client Portal</button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="material-symbols-outlined text-slate-900 dark:text-white">
              {isMenuOpen ? 'close' : 'menu'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel border-t">
            <div className="flex flex-col p-4 gap-4">
              <button onClick={() => navigate(View.SERVICES)} className="text-left py-2 font-semibold">Services</button>
              <button onClick={() => navigate(View.SOLUTIONS)} className="text-left py-2 font-semibold">Solutions</button>
              <button onClick={() => navigate(View.ABOUT)} className="text-left py-2 font-semibold">About</button>
              <button onClick={() => navigate(View.CONTACT)} className="text-left py-2 font-semibold">Contact</button>
              <button onClick={() => navigate(View.PORTAL_DASHBOARD)} className="bg-primary text-white w-full py-3 rounded-lg font-bold">Client Portal</button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
