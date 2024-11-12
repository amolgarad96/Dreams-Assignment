import React, { useState } from 'react';

function Todo() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [editIdx, setEditIdx] = useState(null);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    const handleSubmit = () => {
        if (editIdx !== null) {
            setData([...data, query]);
            let updatedData = data.map((it, id) => id === editIdx ? query : it);
            setData(updatedData);
        } else {
            setData([...data, query]);
        }
        setQuery('');
    };
    const handleEdit = (listId) => {
        setQuery(data[listId]);
        setEditIdx(listId);
    }

    const handleDelete = (listId) => {
        let filterData = data.filter((_, id) => id !== listId)
        setData(filterData);

    }

    console.log('data', data);

    return (
        <>
            <h1>TODO Application</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter here..."
                    value={query}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Add</button>
                <div>
                    <ul>
                        {data.map((it, idx) => {
                            return (
                                <>
                                    <li key={idx}>
                                        {it}{' '}
                                        <span>
                                            <button onClick={() => handleEdit(idx)}>Edit</button>
                                        </span>
                                        <span>
                                            <button onClick={() => handleDelete(idx)}>Delete</button>
                                        </span>
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Todo;
