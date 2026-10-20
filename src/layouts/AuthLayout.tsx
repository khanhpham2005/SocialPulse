import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { TrendingUp, Globe, HelpCircle } from 'lucide-react';

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/70 text-gray-900 antialiased font-sans">
      {/* Top Header */}
      <header className="h-16 bg-white border-b border-gray-200/80 px-6 sm:px-12 flex items-center justify-between shrink-0">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <TrendingUp className="h-4 w-4" />
          </div>
          <span className="text-lg font-bold text-gray-900 tracking-tight">SocialPulse</span>
        </Link>

        {/* Right language toggle */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
          <Globe className="h-3.5 w-3.5 text-gray-400" />
          <span>Tiếng Việt</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-400 hover:text-gray-600">English</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 my-4">
        <Outlet />
      </main>

      {/* Bottom Footer */}
      <footer className="h-14 px-6 sm:px-12 flex items-center justify-between text-xs text-gray-400 shrink-0 border-t border-gray-100 bg-transparent">
        <span>© 2026 SocialPulse</span>
        <button
          type="button"
          className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Trợ giúp</span>
        </button>
      </footer>
    </div>
  );
};

export default AuthLayout;

