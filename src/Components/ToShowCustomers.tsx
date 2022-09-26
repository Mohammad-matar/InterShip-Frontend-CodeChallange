import * as React from 'react';
import { TUser } from '../interfaces';

//we create a props to passed them into the function
interface Props {
    customer: TUser;
    completeTask(taskNameToDelete: string): void;
}

const ToShowCustomers = ({ customer, completeTask }: Props) => {
    return (
        <tr>
            <td>{customer.userCustomerName}</td>
            <td>{customer.customerAddress}</td>
            <td>{customer.phoneNumber}</td>
            <td>
                <button className='task-btn'
                    onClick={() => {
                        completeTask(customer.userCustomerName);
                    }}
                >X</button>
            </td>
        </tr>



    )
}

export default ToShowCustomers;