import dynamic from "next/dynamic"

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

import * as S from './styles';


export const Home = () => {

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false,
      },
      foreColor: '#fbdbfb',
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      axisBorder: {
        color: '#fbdbfb'
      },
      accessTicks: {
        color: '#fbdbfb'
      },
      categories: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
      ]
    },
    fill: {
      opacity: 1,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 1,
        opacityTo: 0.8
      }
    }
  };
  const series = [
    {
      name: 'invested',
      data: [10000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000]
    },
    {
      name: 'profit',
      data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000]
    }
  ]

  return (
    <S.Container>
      <S.Content>
        <Chart type="bar" height={400} options={options} series={series} />
      </S.Content>
    </S.Container>
  )
}