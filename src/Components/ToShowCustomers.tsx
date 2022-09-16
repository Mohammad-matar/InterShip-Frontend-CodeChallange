import React from 'react'
import { TUser } from '../interfaces';

//we create a props to passed them into the function
interface Props {
    customer: TUser;
    completeTask(taskNameToDelete: string): void;
}

const ToShowCustomers = ({ customer, completeTask }: Props) => {
    return (
        <div className='task-comp'>
            <div className='content'>
                <span>{customer.userCustomerName}</span>
                <span>{customer.customerAddress}</span>
                <span>{customer.phoneNumber}</span>
            </div>

            <button className='task-btn'
                onClick={() => {
                    completeTask(customer.userCustomerName);
                }}
            >X</button>
        </div>
    )
}

export default ToShowCustomers;