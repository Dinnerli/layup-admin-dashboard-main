
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { TabType } from "./ActivityTabs";
import { useChartOptions } from './useChartOptions';

interface ActivityChartProps {
  chartType: TabType;
}

const ActivityChart = ({ chartType }: ActivityChartProps) => {
  const chartOptions = useChartOptions(chartType);

  return (
    <div className="p-2.5 w-full">
      <div className="h-[287px] w-full">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps={{ className: 'h-full w-full' }}
        />
      </div>
    </div>
  );
};

export default ActivityChart;
