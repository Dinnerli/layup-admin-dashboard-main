
import { useState } from "react";
import { Card } from "@/components/ui/card";
import ActivityTabs, { TabType } from "./activities/ActivityTabs";
import ActivityStat from "./activities/ActivityStat";
import ActivityChart from "./activities/ActivityChart";
import ActivityFilters from "./activities/ActivityFilters";

// Different data for each tab
const tabData = {
  user: {
    stats: [
      { title: "Active Users", value: "237", percentage: "40%", isPositive: true },
      { title: "New Users", value: "8", percentage: "40%", isPositive: false }
    ],
    chartType: 'user'
  },
  usage: {
    stats: [
      { title: "Total Usage", value: "1,243", percentage: "15%", isPositive: true },
      { title: "Avg. Time", value: "45m", percentage: "5%", isPositive: true }
    ],
    chartType: 'usage'
  },
  course: {
    stats: [
      { title: "Completed", value: "89", percentage: "12%", isPositive: false },
      { title: "In Progress", value: "156", percentage: "32%", isPositive: true }
    ],
    chartType: 'course'
  }
};

const ActivitiesCard = () => {
  const [activeTab, setActiveTab] = useState<TabType>('user');
  const currentData = tabData[activeTab];

  return (
    <Card className="w-full mt-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="w-full">
        {/* Header */}
        <div className="flex justify-between items-center w-full p-6 border-b border-[#B3B3B3]">
          <div className="flex items-center gap-2.5 px-2.5 flex-1">
            <h3 className="h3 text-[#233143] font-poppins">Activity Overview</h3>
          </div>
          <ActivityFilters />
        </div>

        {/* Tabs */}
        <ActivityTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex flex-col gap-2.5 w-full">
          {/* Stats Row */}
          <div className="flex items-center gap-5 p-2.5 h-20 w-full flex-wrap">
            {currentData.stats.map((stat, index) => (
              <ActivityStat 
                key={index}
                title={stat.title} 
                value={stat.value} 
                percentage={stat.percentage} 
                isActive={index === 0}
                isPositive={stat.isPositive}
              />
            ))}
          </div>

          {/* Chart */}
          <ActivityChart chartType={currentData.chartType} />
        </div>
      </div>
    </Card>
  );
};

export default ActivitiesCard;
