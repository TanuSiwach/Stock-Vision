
import { Link, useNavigate } from 'react-router-dom'

const TableRow = ({ data, type }) => {

    const navigate = useNavigate();

    let s = "px-6 py-4 text-green-600"

    if (type == "looser") {
        s = "px-6 py-4 text-red-600"
    }

    const detailPage = () => {
        navigate('data', { state: { id: 1, name: data.meta.symbol, fullName: data.meta.companyName } });
    }

    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" onClick={detailPage}>
                {data.meta ? data.meta.companyName : data.symbol}
            </th>
            <td className="px-6 py-4">
                {data.lastPrice}
            </td>
            <td className="px-6 py-4">
                {data.open}
            </td>
            <td className="px-6 py-4">
                {data.dayHigh}
            </td>
            <td className="px-6 py-4">
                {data.dayLow}
            </td>
            <td className={s}>
                {data.pChange}%
            </td>
        </tr>
    )
}

export default TableRow;
