import React from 'react'
import { useInputContext } from '../InputProvider';

function ListData() {
    const { listData } = useInputContext();
    console.log('listData', listData)

    return (
        <>

            <div className='container'>
                <h2>Listed Items</h2>
                <ul>
                    {listData?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

            </div>

        </>
    )
}

export default ListData