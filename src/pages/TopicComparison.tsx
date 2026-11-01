import React, { useState } from 'react';
import { defaultSelectedComparison } from '../data/topicComparison';
import { TopicComparisonHeader } from './TopicComparison/components/TopicComparisonHeader';
import { ComparisonSummaryCards } from './TopicComparison/components/ComparisonSummaryCards';
import { ComparisonCharts } from './TopicComparison/components/ComparisonCharts';
import { ComparisonMetricsTable } from './TopicComparison/components/ComparisonMetricsTable';

const TopicComparison: React.FC = () => {
  const [selected, setSelected] = useState<string[]>(defaultSelectedComparison);

  const removeTopic = (name: string) => {
    if (selected.length > 2) {
      setSelected(selected.filter((item) => item !== name));
    }
  };

  const addTopic = (name: string) => {
    if (selected.length < 5 && !selected.includes(name)) {
      setSelected([...selected, name]);
    }
  };

  return (
    <div className="max-w-[1216px] mx-auto space-y-6 pb-12">
      {/* Header & Topic Selector */}
      <TopicComparisonHeader
        selectedNames={selected}
        onRemove={removeTopic}
        onAdd={addTopic}
      />

      {/* Summary Cards for Selected Topics + Difference */}
      <ComparisonSummaryCards selectedNames={selected} />

      {/* Grouped Bar & Line Charts */}
      <ComparisonCharts selectedNames={selected} />

      {/* Comparison Metrics Table */}
      <ComparisonMetricsTable selectedNames={selected} />
    </div>
  );
};

export default TopicComparison;
