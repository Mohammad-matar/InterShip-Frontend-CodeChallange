import React, { FC, useState } from 'react';
import { TUser } from './interfaces'
import './App.css';
import ToShowCustomers from './Components/ToShowCustomers';

const App: FC = () => {

  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>('');
  const [phoneNumber, setphoneNumber] = useState<string>("");

  const [todoList, setTodoList] = useState<TUser[]>([]);
  ///TO Add a task
  const addTask = (): void => {
    const newInfo: TUser = { userCustomerName: name, customerAddress: address, phoneNumber: phoneNumber };
    setTodoList([...todoList, newInfo]);
  }

  //To delete a task

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((customer) => {
        return customer.userCustomerName !== taskNameToDelete;
      }))
  }
  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            name='inputName'
            placeholder='Name...'
            onChange={(e) => {
              console.log("-----", e.target.value)
              setName(e.target.value)
            }}
          />
          <input
            type='text'
            name='address'
            placeholder='Address (Name)...'
            onChange={(e) => setAddress(e?.target?.value)}
          />
          <input
            type='tel'
            name='number'
            placeholder='Enter Your (Number)...'
            onChange={(e) => setphoneNumber(e?.target?.value)}
          />
        </div>
        <button onClick={addTask}>Submit</button>
      </div>


      <div className='customer-list'>
        {todoList.map((task: TUser, key: number) => {
          return <ToShowCustomers key={key} customer={task} completeTask={completeTask} />;
        })}

      </div>
    </div>
  );
}

export default App;
