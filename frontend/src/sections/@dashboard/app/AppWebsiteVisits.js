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
    plotOptions: { bar: { columnWidth: '50%' } },
    xaxis: { type: 'str' },
    yaxis: {
      show: false,
    },
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
      
      
  },
    legend: {
      show:false,
      customLegendItems: ["이동욱","바보"],
      markers: {
        fillColors: [theme.palette.primary.main,theme.palette.error.main],
      },
    },
    xaxis:{
      labels:{
        style:{
          fontSize:'17px'
        }

      }
      
    }
    

    
  });
  console.log(dailyEating[0].commend)
  const name=Object.keys(userEating)
  function chartdata(name,eating,commend,max){
    if (max==NaN){
      max=0;
    }
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
  
      },
      {
        name: 'Expected',
        value:  commend,
        strokeHeight: 5,
        strokeColor: theme.palette.warning.main
  
      },
    ]
  }
  )
}

  const chartData1 ={
    series:[
    {
      name: '섭취량',
      type: 'column',
      fill: 'solid',
      data: [
      chartdata(name[1],Number(userEating[name[1]].eating),Number(userEating[name[1]].max)),
    ]
    }
  ]}
    function chartdata1(name,eating,commend,max){
    return(
        [{
          name: '섭취량',
          type: 'column',
          fill: 'solid',
          data: [
          chartdata(name,eating,commend,max),
        ]
        }]  
    )
  }
  console.log(chartdata1(name[1],Number(userEating[name[1]].eating),Number(userEating[name[1]].max)))
  console.log(chartData1.series)
 

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr" style={{display:'flex',flexDirection:'row'}} >
        <ReactApexChart type="bar" series={chartdata1(name[0],Number(userEating[name[0]].eating),Number(userEating[name[0]].commend),Number(userEating[name[0]].max))} options={chartOptions} height={364} width={100} />
        <ReactApexChart type="bar" series={chartdata1(name[1],Number(userEating[name[1]].eating),Number(userEating[name[1]].commend),Number(userEating[name[1]].max))} options={chartOptions} height={364} width={100}/>
        <ReactApexChart type="bar" series={chartdata1(name[2],Number(userEating[name[2]].eating),Number(userEating[name[2]].commend),Number(userEating[name[2]].max))} options={chartOptions} height={364} width={100}/>
        <ReactApexChart type="bar" series={chartdata1(name[3],Number(userEating[name[3]].eating),Number(userEating[name[3]].commend),Number(userEating[name[3]].max))} options={chartOptions} height={364} width={100}/>
        {/* <ReactApexChart type="bar" series={chartdata1(name[4],Number(userEating[name[4]].eating),Number(userEating[name[4]].commend),Number(userEating[name[4]].max))} options={chartOptions} height={364} width={100}/>
        <ReactApexChart type="bar" series={chartdata1(name[5],Number(userEating[name[5]].eating),Number(userEating[name[5]].commend),Number(userEating[name[5]].max))} options={chartOptions} height={364} width={100}/> */}
      </Box>
    </Card>
  );
}
