import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts';
import { ProtectedRoute, GuestRoute } from './components/auth/AuthGuard';

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Code splitting các trang bằng React.lazy
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const TrendOverview = lazy(() => import('./pages/TrendOverview'));
const TopicDetail = lazy(() => import('./pages/TopicDetail'));
const TopicComparison = lazy(() => import('./pages/TopicComparison'));
const WatchedTopics = lazy(() => import('./pages/WatchedTopics'));
const DataSources = lazy(() => import('./pages/DataSources'));

const PageLoading: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
    <div className="w-8 h-8 border-3 border-sky-600 border-t-transparent rounded-full animate-spin" />
    <span className="text-xs text-gray-500 font-medium">Đang tải dữ liệu...</span>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          {/* Auth pages: dành cho người chưa đăng nhập */}
          <Route element={<AuthLayout />}>
            <Route
              path="/dang-nhap"
              element={
                <GuestRoute>
                  <Login />
                </GuestRoute>
              }
            />
            <Route
              path="/dang-ky"
              element={
                <GuestRoute>
                  <Register />
                </GuestRoute>
              }
            />
          </Route>

          {/* Protected pages: yêu cầu đăng nhập */}
          <Route
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Navigate to="/tong-quan" replace />} />
            <Route path="/tong-quan" element={<TrendOverview />} />
            <Route path="/chi-tiet-chu-de" element={<TopicDetail />} />
            <Route path="/so-sanh" element={<TopicComparison />} />
            <Route path="/theo-doi" element={<WatchedTopics />} />
            <Route path="/nguon-du-lieu" element={<DataSources />} />
          </Route>

          {/* Bất kỳ route nào không khớp đều điều hướng về trang gốc */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
