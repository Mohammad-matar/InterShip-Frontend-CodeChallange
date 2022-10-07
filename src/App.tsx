import React, { FC, useEffect, useState } from 'react';
import { TUser } from './interfaces'
import axios from 'axios';
import './App.css';
import ToShowCustomers from './Components/ToShowCustomers';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const App: FC = () => {

  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>('');
  const [phoneNumber, setphoneNumber] = useState<string>("");
  const [todoList, setTodoList] = useState<TUser[]>([]);



  ///TO Add a task
  const addCustomer = (): void => {
    const newInfo: TUser = { userCustomerName: name, customerAddress: address, phoneNumber: phoneNumber };
    console.log(phoneNumber)
    setTodoList([...todoList, newInfo]);
    console.log(todoList)
    console.log(newInfo)
    axios
      .post(`http://localhost:6060/posts`, todoList)
      .then((res) => {
        setTodoList([...todoList, newInfo]);

        alert('User Added Successfully');
      })
      .catch((err) => console.log(err));
    setName("");
    setAddress("");
    setphoneNumber("");
  }

  //To delete a task
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((customer) => {
        return customer.userCustomerName !== taskNameToDelete;
      }))
  }
  const [customers, setCustomers] = useState([]);
  console.log(customers)
  const getCustomer = (): void => {
    // console.log("getCusomer:")
    axios
      .get(`http://localhost:6060/posts`)
      .then((res) => {
        setCustomers(res?.data?.data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCustomer();
  }, [])

  return (
    <div className='App' >
      <div className='header'>
        <div className='inputContainer'>
          <div className='input-dev'>
            <input
              type='text'
              name='inputName'
              placeholder='Name...'
              value={name}
              onChange={(e) => {
                // console.log("-----", e.target.value)
                setName(e.target.value)
              }}
            />
            <input
              type='text'
              name='address'
              value={address}
              placeholder='Address (Name)...'
              onChange={(e) => setAddress(e?.target?.value)}
            />
            {/* <input
              type='tel'
              name='number'
              value={phoneNumber}
              placeholder='Enter Your (Number)...'
              onChange={(e) => setphoneNumber(e?.target?.value)}
            /> */}
            <div className='phoneinput-class'>
              <PhoneInput
                country={'lb'}
                value={phoneNumber}
                onChange={(phone) => setphoneNumber(phone)}
              />
            </div>
          </div>
        </div>
        <div className='input-submit-btn'>
          <button className='header-btn' onClick={addCustomer}>Submit</button>
        </div>
      </div>


      <div className='customer-list'>

        <table id="customers">
          <tr>
            <th>Name </th>
            <th>Address</th>
            <th>Phone Number</th>
            <th></th>
          </tr>
          {todoList.map((task: TUser, key: number) => {
            return <ToShowCustomers key={key} customer={task} completeTask={completeTask} />;
          })}
        </table>

      </div>
    </div >
  );
}

export default App;
