import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import TrendOverview from './pages/TrendOverview'
import TopicDetail from './pages/TopicDetail'
import TopicComparison from './pages/TopicComparison'
import WatchedTopics from './pages/WatchedTopics'
import DataSources from './pages/DataSources'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/tong-quan" replace />} />
        <Route path="/tong-quan" element={<TrendOverview />} />
        <Route path="/chi-tiet-chu-de" element={<TopicDetail />} />
        <Route path="/so-sanh" element={<TopicComparison />} />
        <Route path="/theo-doi" element={<WatchedTopics />} />
        <Route path="/nguon-du-lieu" element={<DataSources />} />
      </Route>
    </Routes>
  )
}

export default App
