import React, { useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  FileText,
  BarChart3,
  Bookmark,
  Database,
  HelpCircle,
  Globe,
  ChevronRight,
  Menu,
  X,
  Shield,
  LogOut,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

/* ------------------------------------------------------------------ */
/*  Navigation data                                                    */
/* ------------------------------------------------------------------ */

interface NavItem {
  label: string;
  to: string;
  icon: React.ReactNode;
}

const exploreLinks: NavItem[] = [
  { label: 'Tổng quan xu hướng', to: '/tong-quan', icon: <TrendingUp className="h-4 w-4" /> },
  { label: 'Chi tiết chủ đề', to: '/chi-tiet-chu-de', icon: <FileText className="h-4 w-4" /> },
  { label: 'So sánh chủ đề', to: '/so-sanh', icon: <BarChart3 className="h-4 w-4" /> },
  { label: 'Chủ đề theo dõi', to: '/theo-doi', icon: <Bookmark className="h-4 w-4" /> },
];

const adminLinks: NavItem[] = [
  { label: 'Quản lý nguồn dữ liệu', to: '/nguon-du-lieu', icon: <Database className="h-4 w-4" /> },
];

/** Map pathname → readable page name for breadcrumb */
const pageNameMap: Record<string, string> = {
  '/tong-quan': 'Tổng quan xu hướng',
  '/chi-tiet-chu-de': 'Chi tiết chủ đề',
  '/so-sanh': 'So sánh chủ đề',
  '/theo-doi': 'Chủ đề theo dõi',
  '/nguon-du-lieu': 'Quản lý nguồn dữ liệu',
};

/* ------------------------------------------------------------------ */
/*  Sidebar Link                                                       */
/* ------------------------------------------------------------------ */

const SidebarLink: React.FC<NavItem & { onClick?: () => void }> = ({ label, to, icon, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
        isActive
          ? 'bg-indigo-50 text-indigo-600'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

/* ------------------------------------------------------------------ */
/*  Main Layout                                                        */
/* ------------------------------------------------------------------ */

const MainLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentPageName = pageNameMap[location.pathname] ?? 'Trang chủ';

  const closeSidebar = () => setSidebarOpen(false);

  const handleLogout = () => {
    logout();
    navigate('/dang-nhap', { replace: true });
  };

  const getInitials = (name?: string) => {
    if (!name) return 'MA';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  /* ---- Sidebar content (shared between mobile overlay & desktop) ---- */
  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
          <TrendingUp className="h-4 w-4" />
        </div>
        <span className="text-lg font-bold text-gray-900 tracking-tight">SocialPulse</span>
      </div>

      {/* Info box */}
      <div className="mx-4 mb-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-4 text-white">
        <p className="text-sm font-semibold leading-tight">Không gian khám phá</p>
        <p className="mt-1 text-xs text-indigo-100">🔒 Nguồn công khai · Bản demo</p>
      </div>

      {/* Nav sections */}
      <nav className="flex-1 overflow-y-auto px-3 space-y-6">
        {/* Explore & Analyze */}
        <div>
          <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Khám phá &amp; Phân tích
          </p>
          <div className="space-y-0.5">
            {exploreLinks.map((link) => (
              <SidebarLink key={link.to} {...link} onClick={closeSidebar} />
            ))}
          </div>
        </div>

        {/* Admin */}
        <div>
          <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Quản trị
          </p>
          <div className="space-y-0.5">
            {adminLinks.map((link) => (
              <SidebarLink key={link.to} {...link} onClick={closeSidebar} />
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom section */}
      <div className="mt-auto px-4 pb-4 space-y-4">
        {/* Privacy info box */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="h-3.5 w-3.5 text-indigo-500" />
            <span className="text-xs font-semibold text-gray-700">
              Hiểu xu hướng, tôn trọng riêng tư
            </span>
          </div>
          <p className="text-[11px] leading-relaxed text-gray-400">
            Dữ liệu chỉ được thu thập từ nguồn công khai. Không thu thập thông tin cá nhân.
          </p>
        </div>

        {/* User avatar & Logout button */}
        <div className="flex items-center justify-between gap-2 rounded-xl bg-gray-50/80 border border-gray-100 p-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold shrink-0">
              {getInitials(user?.name)}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-900 truncate">
                {user?.name || 'Minh Anh'}
              </p>
              <p className="text-[10px] text-gray-400 truncate">
                {user?.role || user?.email || 'Tài khoản demo'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors shrink-0"
            title="Đăng xuất"
            aria-label="Đăng xuất"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* ---- Mobile overlay ---- */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* ---- Sidebar ---- */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-[260px] bg-white border-r border-gray-200 flex flex-col
          transform transition-transform duration-200 ease-in-out
          lg:static lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Close btn (mobile only) */}
        <button
          type="button"
          onClick={closeSidebar}
          className="absolute top-4 right-3 lg:hidden text-gray-400 hover:text-gray-600"
          aria-label="Đóng menu"
        >
          <X className="h-5 w-5" />
        </button>

        {sidebarContent}
      </aside>

      {/* ---- Right side (header + content) ---- */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between h-14 px-4 sm:px-6 bg-white border-b border-gray-200">
          {/* Left: hamburger + breadcrumb */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
              aria-label="Mở menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <nav className="hidden sm:flex items-center text-sm text-gray-500">
              <span className="hover:text-gray-700 cursor-default">Không gian làm việc</span>
              <ChevronRight className="h-3.5 w-3.5 mx-1.5 text-gray-400" />
              <span className="font-medium text-gray-900">{currentPageName}</span>
            </nav>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors"
            >
              <Database className="h-3.5 w-3.5" />
              Dữ liệu demo
            </button>

            <button
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              Tiếng Việt / English
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              aria-label="Trợ giúp"
            >
              <HelpCircle className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:bg-rose-50 hover:text-rose-600 transition-colors"
              title="Đăng xuất"
              aria-label="Đăng xuất"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
