// InputContext.js
import React, { createContext, useContext, useState } from 'react';
import { notification } from 'antd'; 


const InputContext = createContext();

export const useInputContext = () => useContext(InputContext);

export const InputProvider = ({ children }) => {
    // const [inputs, setInputs] = useState(['']); 
    const [inputTab,setInputTab] = useState([''])
    const [val,setVal] = useState('')
    const [listData,setListData] = useState([])
    console.log('listData',listData)

    // const addInput = () => setInputs([...inputs, '']);

    // const removeInput = (index) => {
    //     setInputs(inputs.filter((_, i) => i !== index));
    // };

    // const updateInput = (index, value) => {
    //     const newInputs = [...inputs];
    //     newInputs[index] = value;
    //     setInputs(newInputs);
    // };
    const handleAddInput = () => {
        setInputTab([...inputTab, '']); 
    };

    const handleRemoveInput = (index) => {
        const updatedInputTab = inputTab.filter((_, i) => i !== index);
        setInputTab(updatedInputTab);
    };
    const handleInputChange = (index,value) =>{
        const newInputs = [...inputTab];
        console.log("newInputs",newInputs)
        newInputs[index] = value;
        setInputTab(newInputs);
    }
    const handleSubmit = () =>{
        setListData(...listData,inputTab)
        console.log('listData',listData)
        if(listData){

            notification.success({
                message: 'Submission Successful',
                description: 'Your inputs have been saved successfully.',
                duration: 3,
            });
        }
    }

    return (
        <InputContext.Provider value={{ inputTab,setInputTab, handleAddInput,listData, handleRemoveInput,handleInputChange,handleSubmit }}>
            {children}
        </InputContext.Provider>
    );
};
