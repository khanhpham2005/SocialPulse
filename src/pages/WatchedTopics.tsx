import React, { useState } from 'react';
import {
  initialWatchedTopics,
  recentActivities,
  type WatchedTopicItem,
} from '../data/watchedTopics';
import { WatchedTopicsHeader } from './WatchedTopics/components/WatchedTopicsHeader';
import { AddTopicForm } from './WatchedTopics/components/AddTopicForm';
import { WatchedTopicsTable } from './WatchedTopics/components/WatchedTopicsTable';
import { RecentActivitiesCard } from './WatchedTopics/components/RecentActivitiesCard';

const WatchedTopics: React.FC = () => {
  const [topics, setTopics] = useState<WatchedTopicItem[]>(initialWatchedTopics);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddTopic = (newTopic: WatchedTopicItem) => {
    setTopics((prev) => [newTopic, ...prev]);
    setShowAddForm(false);
  };

  const handleToggleStatus = (id: string) => {
    setTopics((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: t.status === 'active' ? 'paused' : 'active' } : t
      )
    );
  };

  const handleDelete = (id: string) => {
    setTopics((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTopics = topics.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.keywords.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1216px] mx-auto space-y-6 pb-12">
      {/* Header with Search and Add Toggle */}
      <WatchedTopicsHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        showAddForm={showAddForm}
        onToggleAddForm={() => setShowAddForm((prev) => !prev)}
      />

      {/* Collapsible Add Topic Form */}
      {showAddForm && (
        <AddTopicForm
          onAdd={handleAddTopic}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      {/* Watched Topics Table */}
      <WatchedTopicsTable
        topics={filteredTopics}
        onToggleStatus={handleToggleStatus}
        onDelete={handleDelete}
      />

      {/* Recent Activities */}
      <RecentActivitiesCard activities={recentActivities} />
    </div>
  );
};

export default WatchedTopics;
