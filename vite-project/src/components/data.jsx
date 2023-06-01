import React, { useEffect, useState } from 'react'
import { Chart } from './chart'
import { useLocation } from 'react-router-dom';
import Info from './Info';

const Data = ({ route }) => {
    const location = useLocation();
    const symbol = location.state.name;
    const name = location.state.fullName;

    const [stockData, setStockData] = useState()
    const [allData, setAllData] = useState()
    const currDate = new Date().toISOString().split('T')[0];

    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);
    const dateStart = startDate.toISOString().split('T')[0]

    const [url, setUrl] = useState("http://localhost:3000/api/equity/historical/" + symbol + "?dateStart=" + dateStart + "&dateEnd=" + currDate)
    const [returns, setReturns] = useState(0)

    const getData = async () => {
        const response = await fetch(url);
        if (response.status == 200) {
            const data = await response.json();
            // console.log(data);
            const arr = [].concat(data.map((x) => (x.data)));
            const all = arr.flat(1);
            all.sort((a, b) => {
                return new Date(a.CH_TIMESTAMP) - new Date(b.CH_TIMESTAMP);
            });
            setAllData(all);
            const gain = (((all[all.length - 1].CH_CLOSING_PRICE - all[0].CH_OPENING_PRICE) / all[0].CH_OPENING_PRICE) * 100).toPrecision(4)
            setReturns(gain)



        }
    }

    useEffect(() => {
        getData()
    }, [url])

    const monthly = () => {
        var startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 1);
        const dateStart = startDate.toISOString().split('T')[0]
        const url = "http://localhost:3000/api/equity/historical/" + symbol + "?dateStart=" + dateStart + "&dateEnd=" + currDate
        setUrl(url)
    }
    const weekly = () => {
        var startDate = new Date();
        startDate.setDate(startDate.getDate() - 10);
        const dateStart = startDate.toISOString().split('T')[0]
        const url = "http://localhost:3000/api/equity/historical/" + symbol + "?dateStart=" + dateStart + "&dateEnd=" + currDate
        setUrl(url)
    }
    const yearly = () => {
        const startDate = new Date();
        startDate.setFullYear(startDate.getFullYear() - 1);
        const dateStart = startDate.toISOString().split('T')[0]
        const url = "http://localhost:3000/api/equity/historical/" + symbol + "?dateStart=" + dateStart + "&dateEnd=" + currDate
        setUrl(url)
    }
    return (
        <div>
            <div className='flex justify-between bg-gray-200'>
                <h1 className="m-2 text-1xl font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{name}</h1>
                <div className="flex flex-row-reverse ">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2"
                        onClick={yearly}

                    >
                        One Year
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2"
                        onClick={monthly}
                    >
                        One Month
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2"
                        onClick={weekly}
                    >
                        One Week
                    </button>
                </div>
            </div>
            <div>
                <div className='p-2 m-2 flex justify-end'>
                    <div className="w-1/6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 m-2 ">
                        <p className='text-lg'>52 Weeks High</p>
                        {allData && <p className='font-semibold'> {allData[0].CH_52WEEK_HIGH_PRICE}</p>}
                    </div>
                    <div className="w-1/6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 m-2 ">
                        <p className='text-lg '>52 Weeks Low</p>
                        {allData && <p className='font-semibold'> {allData[0].CH_52WEEK_LOW_PRICE}</p>}
                    </div>
                    <div className="w-1/6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 m-2">
                        <p className='text-lg'>Returns</p>
                        {returns && <p className={returns < 0 ? "text-red-600 font-semibold" : "text-green-600 font-semibold"}> {returns}%</p>}
                    </div>
                </div>
                <div >
                    {allData && <Chart dataX={allData} name={name} />}
                </div>
            </div>

            <div className='mt-3'>
                <Info symbol={symbol} />
            </div>
        </div >
    )
}

export default Data



