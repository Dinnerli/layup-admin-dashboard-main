
import { Info } from "lucide-react";
import StatIndicator from "./StatIndicator";

type ActivityStatProps = { 
  title: string; 
  value: string; 
  percentage: string;
  isActive: boolean;
  isPositive: boolean;
};

const ActivityStat = ({ 
  title, 
  value, 
  percentage, 
  isActive,
  isPositive 
}: ActivityStatProps) => {
  return (
    <div className={`flex items-center gap-2.5 p-2.5 rounded-lg ${isActive ? 'bg-[#F2F3F5]' : ''}`}>
      <div className="flex flex-col items-center justify-center p-2.5">
        <div 
          className={`w-0.5 h-[35px] ${isActive ? 'bg-[#338FFF]' : 'bg-[#CDD1D7]'}`}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2.5 px-2.5">
          <span className={`text-base font-bold ${isActive ? 'text-[#338FFF]' : 'text-[#8C9BAC]'}`}>
            {title}
          </span>
          <Info className="w-4 h-4 text-[#8C9BAC]" stroke="#8C9BAC" />
        </div>
        <div className="flex items-center px-2.5">
          <div>
            <span className="text-2xl font-bold text-[#4F5A69]">{value}</span>
          </div>
          <div className="w-[66px] flex justify-end items-center">
            <StatIndicator value={percentage} isPositive={isPositive} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityStat;
