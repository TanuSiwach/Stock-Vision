import React, { useEffect, useState } from 'react'
import InfoCard from './InfoCard';

const Info = ({ symbol }) => {

    const [informaton, setInformaton] = useState()

    const getData = async () => {
        const response = await fetch('http://localhost:3000/api/equity/corporateInfo/' + symbol);
        if (response.status == 200) {
            const data = await response.json();
            // console.log(data.corporate.announcements)
            setInformaton(data.corporate.announcements);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="block max-w p-4 bg-white border border-gray-200 rounded-lg shadow ">
            <h1 className="m-2 font-semibold leading-none tracking-tight text-gray-900 text-3xl p-3 bg-gray-200 rounded">Important Notifications</h1>
            <div className='flex flex-wrap'>
                {
                    informaton && (informaton.slice(0, Math.min(12, informaton.length)).map((item, index) => {
                        return (
                            <InfoCard key={index} data={item} />
                        )
                    })
                    )
                }
            </div>
        </div>
    )
}

export default Info
