import React, { useEffect, useState } from 'react'
import { UserAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import TableRow from './TableRow'

export const Home = () => {

    const { user, logout } = UserAuth()
    const navigate = useNavigate();

    const [stockData, setStockData] = useState()
    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
        } catch (e) {
            console.log(e.message)
        }
    }

    const getData = async () => {
        const response = await fetch('http://localhost:3000/api/gainersAndLosers/NIFTY%2050');
        if (response.status == 200) {
            const data = await response.json();
            setStockData(data);
        }
    }

    useEffect(() => {

        // getData();
        fetch('http://localhost:3000/api/gainersAndLosers/NIFTY%2050')
            .then((response) => {
                response.json().then((data) => {
                    setStockData(data);
                    // console.log(stockData)
                }).catch((err) => {
                    console.log(err);
                })
            });


    }, [])

    if (stockData) {
        console.log(stockData.losers)
        console.log(stockData.gainers)

    }

    return (
        <div className="relative overflow-x-auto top-16">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Stock Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Value
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Open
                        </th>
                        <th scope="col" className="px-6 py-3">
                            High
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Low
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Change
                        </th>
                    </tr>



                </thead>
                <tbody>
                    <tr>
                        <th colSpan="6" scope="col" className="px-6 py-3 font-large text-gray-100 dark:text-white bg-green-600 text-center">
                            Gainer
                        </th>
                    </tr>

                    {
                        stockData && (stockData.gainers.map((item, index) => {
                            return (
                                <TableRow key={index} data={item} />
                            )
                        })
                        )
                    }

                    <tr>
                        <th colSpan="6" className="px-6 py-4 font-large text-gray-100 whitespace-nowrap dark:text-white bg-red-600 text-center">
                            Loser
                        </th>
                    </tr>

                    {
                        stockData && (stockData.losers.map((item, index) => {
                            return (
                                <TableRow key={index} data={item} type="looser" />
                            )
                        })
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}


