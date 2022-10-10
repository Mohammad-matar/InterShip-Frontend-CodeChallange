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



  ///TO Add a task
  const addCustomer = (): void => {
    const newInfo: TUser = { name: name, address: address, phoneNumber: phoneNumber };
    axios
      .post(`http://localhost:6060/posts`, newInfo)
      .then((res) => {
        alert('User Added Successfully');
      })
      .catch((err) => console.log(err));
    setName("");
    setAddress("");
    setphoneNumber("");
  }

  //To delete a task
  // const completeTask = (taskNameToDelete: string): void => {
  //   setTodoList(
  //     todoList.filter((customer) => {
  //       return customer.name !== taskNameToDelete;
  //     }))
  // }
  const [customers, setCustomers] = useState([]);
  const getCustomer = (): void => {
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


  //delete task
  
  return (
    <div className='App' >
      <div className='header'>
        <div className='inputContainer'>
          <div className='input-dev'>
            <div className='input_container'>
              <input
                type='text'
                name='inputName'
                placeholder='Name...'
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </div>

            <div className='input_container'>
              <input
                type='text'
                name='address'
                value={address}
                placeholder='Address (Name)...'
                onChange={(e) => setAddress(e?.target?.value)}
              />
            </div>

            <div className='phoneinput-class input_container'>
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
          <thead>
            <tr>
              <th>Name </th>
              <th>Address</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer: TUser, key: number) => {
              return <ToShowCustomers key={key} customer={customer} />;
            })}
          </tbody>

        </table>

      </div>
    </div >
  );
}

export default App;
