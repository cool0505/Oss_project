import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, Box } from '@mui/material';
// components
import { useChart } from '../../../components/chart';

// ----------------------------------------------------------------------

AppWebsiteVisits.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
};
const dashchartname=[40,40,30,50,40,60,50,40,80,90,10];
const dashchartmax=[70,60,50,40,30,20,80,40,100,100,20];
const dashchartcommend=[70,60,50,40,30,20,80,40,100,100,20];
export default function AppWebsiteVisits({ title, subheader, userEating,countNutrient,dailyEating,...other }) {
  
  const theme = useTheme();
 
  const chartOptions = useChart({
    plotOptions: { bar: { columnWidth: '16%' } },
    xaxis: { type: 'str' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y} mg`;
          }
          return y;
        },
      },
    },
    chart: {
      yaxis: {
        min: 10,
        max: 100
      }
  },
    legend: {
      customLegendItems: ["이동욱","바보"],
      markers: {
        fillColors: [theme.palette.primary.main,theme.palette.error.main],
      },
    },

    
  });
  console.log(dailyEating[0].commend)
  const name=Object.keys(userEating)
  function chartdata(name,eating,max){
  return(
  {
    x:name,
    y:eating,
    goals: [
      {
        name: 'Expected',
        value: max,
        strokeHeight: 5,
        strokeColor: theme.palette.error.main
  
      }
    ]
  }
  )
}
  const chartData ={
    series:[
    {
      name: '섭취량',
      type: 'column',
      fill: 'solid',
      data: [chartdata(name[0],50,40),
      chartdata(name[1],Number(userEating[name[1]].eating),Number(userEating[name[1]].max)),
      chartdata(name[2],Number(userEating[name[2]].eating),30),
      chartdata(name[3],Number(userEating[name[3]].eating)/10,Number(userEating[name[3]].max)),
    ]
 
    }
  ]}
 

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="bar" series={chartData.series} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
