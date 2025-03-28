import { Card, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";
import { useState } from "react";

const AdminActivityCard = () => {
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  const [selectedStat, setSelectedStat] = useState<'course' | 'user' | 'group' | null>(null);
  
  return (
    <Card className="w-full h-[450px] shadow-sm animate-slide-in-up bg-white overflow-hidden" style={{ animationDelay: '0.4s' }}>
      <div className="flex flex-col h-full">
        {/* Header section */}
        <div className="flex justify-between items-center w-full p-3 border-b border-[#E5E7EA]">
          <div className="flex items-center">
            <CardTitle className="text-[22px]">Admin Activity</CardTitle>
          </div>
          <div className="flex items-center gap-2 mr-3">
            {/* Filter icon */}
            <div className="flex items-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.4 2.1H18.6C19.7 2.1 20.6 3 20.6 4.1V6.3C20.6 7.1 20.1 8.1 19.6 8.6L14.3 13.2C13.7 13.7 13.3 14.7 13.3 15.5V19.5C13.3 20.1 12.9 20.9 12.4 21.2L11 22.1C9.6 22.9 7.8 21.9 7.8 20.2V15.4C7.8 14.7 7.4 13.8 7 13.3L2.9 9C2.4 8.5 2 7.6 2 7V4.2C2 3 2.9 2.1 4 2.1H5.5H5.4Z" stroke="#8C9BAC" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {/* View Report link */}
            <a href="/reports/admin-activity" className="text-[12px] text-[#8C9BAC] border-b border-[#8C9BAC] hover:text-[#338FFF] hover:border-[#338FFF] transition-all duration-200 cursor-pointer">
              View Report
            </a>
          </div>
        </div>
        
        {/* Stats section - updated to match the new design */}
        <div className="flex justify-between items-center p-2">
          {/* Course Assigned */}
          <div 
            className={`flex items-start cursor-pointer transition-all duration-200 hover:shadow-md rounded-lg p-2 ${
              selectedStat === 'course' ? 'shadow-md border border-[#338FFF]' : ''
            }`}
            onClick={() => setSelectedStat('course')}
          >
            <div className="flex p-[6px_4px_4px_4px] flex-col justify-center items-center">
              <div className={`w-[8px] h-[8px] rounded-full transition-colors duration-200 ${
                selectedStat === 'course' ? 'bg-[#338FFF]' : 'bg-[#003072]'
              }`}></div>
            </div>
            <div className="flex flex-col justify-center items-start">
              <div className="flex px-[0px_4px] items-center gap-1">
                <span className={`font-poppins text-[10px] transition-colors duration-200 ${
                  selectedStat === 'course' ? 'text-[#338FFF]' : 'text-[#8C9BAC]'
                }`}>Course Assigned</span>
                <Info className="w-[8px] h-[8px] text-[#8C9BAC]" />
              </div>
              <div className="flex px-[0px_4px] items-center">
                <div className="flex flex-col justify-center items-start">
                  <span className="font-poppins text-[16px] font-bold text-[#4F5A69]">237</span>
                </div>
                <div className="flex justify-end items-center ml-1">
                  <span className="text-[#00D764] text-right font-poppins text-[12px]">40%</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0466 6.38004L7.99998 2.33337L3.95331 6.38004" stroke="#00D764" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M8 13.6667V2.44666" stroke="#00D764" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* User Creation */}
          <div 
            className={`flex items-start cursor-pointer transition-all duration-200 hover:shadow-md rounded-lg p-2 ${
              selectedStat === 'user' ? 'shadow-md border border-[#338FFF]' : ''
            }`}
            onClick={() => setSelectedStat('user')}
          >
            <div className="flex p-[6px_4px_4px_4px] flex-col justify-center items-center">
              <div className={`w-[8px] h-[8px] rounded-full transition-colors duration-200 ${
                selectedStat === 'user' ? 'bg-[#338FFF]' : 'bg-[#F5F6F8]'
              }`}></div>
            </div>
            <div className="flex flex-col justify-center items-start">
              <div className="flex px-[0px_4px] items-center gap-1">
                <span className={`font-poppins text-[10px] transition-colors duration-200 ${
                  selectedStat === 'user' ? 'text-[#338FFF]' : 'text-[#8C9BAC]'
                }`}>User Creation</span>
                <Info className="w-[8px] h-[8px] text-[#8C9BAC]" />
              </div>
              <div className="flex px-[0px_4px] items-center">
                <div className="flex flex-col justify-center items-start">
                  <span className="font-poppins text-[16px] font-bold text-[#4F5A69]">237</span>
                </div>
                <div className="flex justify-end items-center ml-1">
                  <span className="text-[#00D764] text-right font-poppins text-[12px]">40%</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0466 6.38004L7.99998 2.33337L3.95331 6.38004" stroke="#00D764" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M8 13.6667V2.44666" stroke="#00D764" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Group Assigned */}
          <div 
            className={`flex items-start cursor-pointer transition-all duration-200 hover:shadow-md rounded-lg p-2 ${
              selectedStat === 'group' ? 'shadow-md border border-[#338FFF]' : ''
            }`}
            onClick={() => setSelectedStat('group')}
          >
            <div className="flex p-[6px_4px_4px_4px] flex-col justify-center items-center">
              <div className={`w-[8px] h-[8px] rounded-full transition-colors duration-200 ${
                selectedStat === 'group' ? 'bg-[#338FFF]' : 'bg-[#CDE4FF]'
              }`}></div>
            </div>
            <div className="flex flex-col justify-center items-start">
              <div className="flex px-[0px_4px] items-center gap-1">
                <span className={`font-poppins text-[10px] transition-colors duration-200 ${
                  selectedStat === 'group' ? 'text-[#338FFF]' : 'text-[#8C9BAC]'
                }`}>Group Assigned</span>
                <Info className="w-[8px] h-[8px] text-[#8C9BAC]" />
              </div>
              <div className="flex px-[0px_4px] items-center">
                <div className="flex flex-col justify-center items-start">
                  <span className="font-poppins text-[16px] font-bold text-[#4F5A69]">237</span>
                </div>
                <div className="flex justify-end items-center ml-1">
                  <span className="text-[#00D764] text-right font-poppins text-[12px]">40%</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0466 6.38004L7.99998 2.33337L3.95331 6.38004" stroke="#00D764" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M8 13.6667V2.44666" stroke="#00D764" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chart */}
        <div className="flex-1 px-4 pb-4 flex items-end">
          <div className="w-full h-[200px] flex items-end justify-between">
            {months.map((month, index) => (
              <div key={month} className="flex flex-col items-center justify-end h-full">
                {/* Light blue bar */}
                <div className="w-2 bg-[#CDE4FF] rounded-t-sm" style={{ height: `${30 + Math.random() * 20}px` }}></div>
                
                {/* Medium blue bar */}
                <div className="w-2 bg-[#338FFF] rounded-none" style={{ height: `${40 + Math.random() * 30}px`, marginTop: '2px' }}></div>
                
                {/* Dark blue bar */}
                <div className="w-2 bg-[#0054A6] rounded-none" style={{ height: `${50 + Math.random() * 40}px`, marginTop: '2px' }}></div>
                
                {/* Month label */}
                <span className="text-[10px] text-[#8C9BAC] mt-2">{month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AdminActivityCard;
