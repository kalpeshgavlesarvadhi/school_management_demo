import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import Chart from 'react-apexcharts';

interface GenderChartProps {
  males: number;
  females: number;
}

const malesCount = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
const femalesCount = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100

const series: GenderChartProps = {
  males: malesCount,
  females: femalesCount,
};

const GenderChart: React.FC = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  const options = {
    chart: {
      // height: 390,
      type: 'radialBar',
    },
    labels: ['Male', 'Female'],
    colors: ['#2196F3', '#FFC107'],
    legend: {
      show: false,
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '50%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: true,
          },
          value: {
            show: true,
          },
        },
      },
    },
  };

  const chartHeight = isSmScreen ? 200 : isMdScreen ? 250 : 242; // Adjust the height based on screen size
  // const chartWidth = isSmScreen ? 230 : isMdScreen ? '99.9%' : '100%';

  return (
    <Container sx={{ padding: '15px' }} maxWidth="xl">
      <Box>
        <Typography variant="h6">Gender Chart</Typography>
        <Chart
          options={options as any}
          series={[series.males, series.females]}
          type="radialBar"
          height={chartHeight}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="10px"
        fontSize="1rem"
        fontWeight="bold"
      >
        <Box
          display="flex"
          alignItems="center"
          marginRight="20px"
          color={options.colors[0]}
          marginTop={0}
        >
          <Box
            width="10px"
            height="10px"
            marginRight="5px"
            bgcolor={options.colors[0]}
          ></Box>
          {series.males} Males
        </Box>
        <Box display="flex" alignItems="center" color={options.colors[1]}>
          <Box
            width="10px"
            height="10px"
            marginRight="5px"
            bgcolor={options.colors[1]}
          ></Box>
          {series.females} Females
        </Box>
      </Box>
    </Container>
  );
};

export default GenderChart;
