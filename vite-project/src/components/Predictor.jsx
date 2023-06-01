import React from 'react'
import { Link } from 'react-router-dom'

const Predictor = () => {
    return (
        <div>
            <h1 className="m-2 text-1xl font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Price Prediction</h1>

            <div className='bg-gray-200 m-2'>
                <p className='p-1 text-lg'>A stock Price Predictor is a tool or system designed to analyze historical stock data and predict future stock prices. It uses mathematical algorithms and statistical analysis to identify patterns and trends in the data and generate predictions.</p>
            </div>

            <h1 className="m-2 p-1 font-semibold text-3xl">Disclaimer</h1>

            <div className='bg-gray-200 m-1 mb-6 p-1'>

                <p className='p-1 m-2 font-semibold'>
                    The stock market is subject to various factors that can affect the value of a stock, including economic, political, and global events. Any predictions or analysis provided on this website are not guaranteed and should not be relied upon for making investment decisions.
                </p>

                <p className='p-1 m-2 font-semibold'>
                    Investing in the stock market carries risks, and it is important to understand and accept these risks before making any investment decisions. Before making any investment decisions, it is important to conduct thorough research and consult with a qualified financial advisor.
                </p>

                <p className='p-1 m-2 font-semibold'>
                    We are not responsible for any losses or damages that may arise from the use of the information provided on this website.
                </p>

            </div>

            <div className="space-x-2 lg:block">
                <a href='http://localhost:8501/' target='_blank' className="relative inline-blockbg-white hover:bg-gray-100 text-gray-800 font-semibold p-2 border border-gray-400 rounded shadow"
                >
                    Proceed
                </a>
            </div>
        </div>
    )
}

export default Predictor
