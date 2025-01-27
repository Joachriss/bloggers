import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function ViewersChart() {
  return (
    <LineChart
    //   width={1000}
      height={350}

      sx={{
        //change left yAxis label styles
       "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
        strokeWidth:"0.4",
        fill:`rgb(106, 169, 169)`
       },
       // change all labels fontFamily shown on both xAxis and yAxis
       "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel":{
           fontFamily: "Roboto",
        },
        // change bottom label styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
            strokeWidth:"0.5",
            fill:`rgb(106, 169, 169)`
         },
          // bottomAxis Line Styles
         "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
          stroke:"#0000FF",
          strokeWidth:0.4
         },
         // leftAxis Line Styles
         "& .MuiChartsAxis-left .MuiChartsAxis-line":{
          stroke:"#00000FF",
          strokeWidth:0.4
         }
      }}

      className='text-white'
      colors={['#8884d8', '#82ca9d']}

      series={[
        { data: pData, label: 'pv' },
        { data: uData, label: 'uv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
