import { Button } from 'bootstrap'
import React, { useContext, useState } from 'react'
import { useInputContext } from '../InputProvider'
import { useNavigate } from 'react-router-dom';

function InputComp() {
    const { inputTab, handleAddInput, handleRemoveInput, handleInputChange, handleSubmit } = useInputContext();
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate('/list')
    }

    return (
        <>
            <div className='container'>
                <h2 className='text-center mt-5 mb-5'>Add Entries Here</h2>
                {inputTab.map((value, index) => (
                    <div className='row text-center mb-3' key={index}>
                        <div className='col-lg-2'></div>
                        <div class=" col-lg-6 mb-3">
                            <input
                                type="text"
                                class="form-control"
                                value={value}
                                id="exampleFormControlInput1"
                                placeholder="enter here...."
                                onChange={(e) => handleInputChange(index, e.target.value)} />
                        </div>
                        <div className='col-lg-3'>
                            {inputTab.length > 1 && (
                                <button className="btn btn-primary" onClick={() => handleRemoveInput(index)}>Remove</button>
                            )}
                        </div>
                    </div>
                ))}
                <div className='row text-center'>
                    <div className='col-lg-4'>

                        <button className='btn btn-secondary' onClick={handleAddInput}>Add</button>

                    </div>

                    <div className='col-lg-4'>
                        <button className='btn btn-secondary' onClick={handleNavigation}>Next</button>

                    </div>
                    <div className='col-lg-4'>
                        <button className='btn btn-secondary' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default InputComp