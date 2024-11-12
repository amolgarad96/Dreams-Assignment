import React from 'react'
import { useInputContext } from '../InputProvider';

function ListData() {
    const { listData,handleDeleteItem } = useInputContext();
    console.log('listData', listData)

    return (
        <>

            <div className='container'>
                <h2>Listed Items</h2>
                <ul>
                    {listData?.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                        <span>{item}</span>
                        <button
                            className='btn btn-danger ml-3'
                            onClick={() => handleDeleteItem(idx)}
                            style={{ marginLeft: '10px' }}
                        >
                            Delete
                        </button>
                    </li>

                    ))}
                </ul>

            </div>

        </>
    )
}

export default ListData