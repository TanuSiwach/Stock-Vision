import React from 'react';
import { usePapaParse } from 'react-papaparse';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);





export const Chart = ({ dataX, name }) => {



    // console.log(dataX);

    const { jsonToCSV } = usePapaParse();
    const results = jsonToCSV(dataX);
    console.log(results);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'down',
            },
            title: {
                display: false,
                text: name,
            },
        },
    };

    const labels = dataX.map((x) => x.CH_TIMESTAMP)
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Price',
                data: dataX.map((x) => x.CH_CLOSING_PRICE),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],


    };
    return <Line options={options} data={data} />;
}
