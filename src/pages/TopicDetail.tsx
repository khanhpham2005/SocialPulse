import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTopicDetail } from '../data/topicDetail';
import { TopicHeader } from './TopicDetail/components/TopicHeader';
import { TopicStatsGrid } from './TopicDetail/components/TopicStatsGrid';
import { DiscussionTrendChart } from './TopicDetail/components/DiscussionTrendChart';
import { SentimentAnalysisCard } from './TopicDetail/components/SentimentAnalysisCard';
import { KeyPerspectivesSection } from './TopicDetail/components/KeyPerspectivesSection';
import { SampleCommentsSection } from './TopicDetail/components/SampleCommentsSection';

const TopicDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const topicId = searchParams.get('id') || 'topic-1';
  const topicData = getTopicDetail(topicId);

  const [isFollowing, setIsFollowing] = useState(true);

  return (
    <div className="max-w-[1216px] mx-auto space-y-6 pb-12">
      {/* Topic Header & Auto Summary */}
      <TopicHeader
        topic={topicData}
        isFollowing={isFollowing}
        onToggleFollow={() => setIsFollowing((prev) => !prev)}
      />

      {/* 4 Topic Metric Stat Cards */}
      <TopicStatsGrid stats={topicData.stats} />

      {/* Charts: Daily Discussion (7 cols) + Sentiment Breakdown (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <DiscussionTrendChart data={topicData.trend} />
        <SentimentAnalysisCard sentiment={topicData.sentiment} />
      </div>

      {/* 3 Key Perspectives */}
      <KeyPerspectivesSection perspectives={topicData.perspectives} />

      {/* Sample Comments & Source Posts */}
      <SampleCommentsSection
        comments={topicData.sampleComments}
        posts={topicData.samplePosts}
      />
    </div>
  );
};

export default TopicDetail;
