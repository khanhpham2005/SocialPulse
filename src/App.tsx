import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute, GuestRoute } from './components/auth/AuthGuard';

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

import Login from './pages/Login';
import Register from './pages/Register';
import TrendOverview from './pages/TrendOverview';
import TopicDetail from './pages/TopicDetail';
import TopicComparison from './pages/TopicComparison';
import WatchedTopics from './pages/WatchedTopics';
import DataSources from './pages/DataSources';

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
