import dynamic from "next/dynamic"
import { useEffect, useState } from "react";
import { useInvest } from "../../contexts/InvestContext";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

import * as S from './styles';


export const Home = () => {
  const { stocks } = useInvest();
  const [series, setSeries] = useState([]);

  useEffect(() => {

    let dataInvested = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let dataProfit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    dataInvested.forEach((_, index) => {
      const currentMonthCheck = index + 1;
      stocks.forEach((stock) => {
        console.log(stock.month);
        if (currentMonthCheck >= stock.month) {
          console.log(stock.month, currentMonthCheck);

          // const acc = index > 0 ? dataInvested[index - 1] : 0;
          const totalInvested = stock.amount * stock.price;
          dataInvested[index] += totalInvested;
        }

      })
    })

    dataProfit.forEach((_, index) => {
      stocks.forEach((stock) => {
        const currentMonth = index + 1;
        const timeMonthDiff = currentMonth - stock.month;
        if (currentMonth <= 12 && currentMonth > stock.month) {
          const totalProfit = (stock.amount * stock.price) * Math.pow((1 + stock.growthRate / 100), timeMonthDiff) - stock.price;
          dataProfit[index] += Number(totalProfit.toFixed(2));

        }
      })

    })


    const seriesTemp = [
      {
        name: 'invested',
        data: dataInvested,
      },
      {
        name: 'profit',
        data: dataProfit
      }
    ]

    setSeries(seriesTemp);


  }, [stocks]);


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
    dataLabels: {
      enabled: true,
      formatter: (value) => { return value.toFixed(2) },

    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return "$" + value.toFixed(0);
        }
      }
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


  return (
    <S.Container>
      <S.Content>
        <Chart type="bar" height={400} options={options} series={series} />
      </S.Content>
    </S.Container>
  )
}