import { useTheme } from '@emotion/react';
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export interface DataItem {
  month: string;
  present: number;
  absent: number;
}

export interface AttendanceChartData {
  data: DataItem[];
}

const generateDummyData = (year: number): AttendanceChartData => {
  return {
    data: [
      {
        month: 'January',
        present: Math.floor(Math.random() * 30) + 1,
        absent: Math.floor(Math.random() * 10),
      },
      {
        month: 'February',
        present: Math.floor(Math.random() * 30) + 1,
        absent: Math.floor(Math.random() * 10),
      },
      {
        month: 'March',
        present: Math.floor(Math.random() * 30) + 1,
        absent: Math.floor(Math.random() * 10),
      },
      {
        month: 'April',
        present: Math.floor(Math.random() * 30) + 1,
        absent: Math.floor(Math.random() * 10),
      },
      {
        month: 'May',
        present: Math.floor(Math.random() * 30) + 1,
        absent: Math.floor(Math.random() * 10),
      },
      {
        month: 'June',
        present: Math.floor(Math.random() * 30) + 1,
        absent: Math.floor(Math.random() * 10),
      },
      {
        month: 'July',
        present: Math.floor(Math.random() * 30) + 1,
        absent: Math.floor(Math.random() * 10),
      },
      {
        month: 'August',
        present: Math.floor(Math.random() * 30) + 1,
        absent: Math.floor(Math.random() * 10),
      },
      {
        month: 'September',
        present: Math.floor(Math.random() * 30) + 1,
        absent: Math.floor(Math.random() * 10),
      },
      {
        month: 'October',
        present: Math.floor(Math.random() * 30) + 1,
        absent: Math.floor(Math.random() * 10),
      },
      {
        month: 'November',
        present: Math.floor(Math.random() * 30) + 1,
        absent: Math.floor(Math.random() * 10),
      },
      {
        month: 'December',
        present: Math.floor(Math.random() * 30) + 1,
        absent: Math.floor(Math.random() * 10),
      },
    ],
  };
};

const dummyAttendanceData: Record<string, AttendanceChartData> = {
  '2021': generateDummyData(2021),
  '2022': generateDummyData(2022),
  '2023': generateDummyData(2023),
  '2024': generateDummyData(2024),
  '2025': generateDummyData(2025),
  '2026': generateDummyData(2026),
  '2027': generateDummyData(2027),
};

// const attendanceData: AttendanceChartData = {
//   data: [
//     { month: 'January', present: 22, absent: 5 },
//     { month: 'February', present: 18, absent: 7 },
//     { month: 'March', present: 22, absent: 4 },
//     { month: 'April', present: 19, absent: 6 },
//     { month: 'May', present: 21, absent: 5 },
//     { month: 'June', present: 17, absent: 9 },
//     { month: 'July', present: 23, absent: 3 },
//     { month: 'August', present: 20, absent: 6 },
//     { month: 'September', present: 18, absent: 8 },
//     { month: 'October', present: 24, absent: 2 },
//     { month: 'November', present: 19, absent: 5 },
//     { month: 'December', present: 16, absent: 6 },
//   ],
// };
const AttendanceChart: React.FC = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery((theme as any).breakpoints.down('sm'));
  const isMdScreen = useMediaQuery((theme as any).breakpoints.down('md'));

  const [selectedYear, setSelectedYear] = useState<string>('2022');

  const handleYearChange = (event: SelectChangeEvent<string>) => {
    setSelectedYear(event.target.value as string);
  };
  const attendanceData = dummyAttendanceData[selectedYear]?.data || [];

  // const filteredData = attendanceData.data.filter((item) =>
  //   item.month.startsWith(selectedYear)
  // );

  const options = {
    chart: {
      type: 'bar' as const,
    },
    xaxis: {
      categories: attendanceData.map((item) => item.month),
    },
  };

  const series = [
    {
      name: 'Present',
      data: attendanceData.map((item) => item.present),
    },
    {
      name: 'Absent',
      data: attendanceData.map((item) => item.absent),
    },
  ];

  // const chartHeight = isSmScreen ? 200 : isMdScreen ? 250 : 300; // Adjust the height based on screen size
  // const chartHeight = '100%'; // Adjust the height based on screen size
  const chartWidth = isSmScreen ? 230 : isMdScreen ? '99.9%' : '100%'; // Adjust the height based on screen size
  return (
    <Container maxWidth="xl">
      <Box height={'100%'} width={chartWidth}>
        <Typography pt={2} variant="h6">
          Attendance Chart
        </Typography>
        <Select
          value={selectedYear}
          onChange={handleYearChange}
          style={{ height: 30, marginRight: 16 }}
        >
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2024">2024</MenuItem>
          <MenuItem value="2025">2025</MenuItem>
          <MenuItem value="2026">2026</MenuItem>
          <MenuItem value="2027">2027</MenuItem>
          {/* Add more years as needed */}
        </Select>
        <Chart
          options={options as any}
          series={series}
          type="bar"
          height={'100%'}
        />
      </Box>
    </Container>
  );
};

export default AttendanceChart;
