import React from 'react';
import {useState} from 'react';
import Button from './Button';
import "./AddInput.css";


const AddInput = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState('');
  
   const handleInputChange = (e) => {
      setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('')
    };

    return (
      <div className="add-button-container">
        <input onChange={handleInputChange} 
               value={inputData}
               className="add-task-input" 
               type="text" 
               />
        <div className="add-task-button-container">
          <Button onClick={handleAddTaskClick}>Adcionar</Button>
        </div>
      </div>
    );     
};
 
export default AddInput;