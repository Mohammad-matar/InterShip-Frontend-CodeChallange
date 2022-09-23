import * as React from 'react';
import { TUser } from '../interfaces';

//we create a props to passed them into the function
interface Props {
    customer: TUser;
    completeTask(taskNameToDelete: string): void;
}

const ToShowCustomers = ({ customer, completeTask }: Props) => {
    return (
        // <div className='component-pagelist'>
        //     <div className='list_ofthe_customer'>
        //         <div className='task-comp'>
        //             <div className='content'>
        //                 <span>{customer.userCustomerName}</span>
        //                 <span>{customer.customerAddress}</span>
        //                 <span>{customer.phoneNumber}</span>
        //             </div>

        //             <button className='task-btn'
        //                 onClick={() => {
        //                     completeTask(customer.userCustomerName);
        //                 }}
        //             >X</button>
        //         </div>
        //     </div>
        // </div>
        <table id="customers">
            <tr>
                <td>{customer.userCustomerName}</td>
                <td>{customer.customerAddress}</td>
                <td>{customer.phoneNumber}</td>
            </tr>
            <button className='task-btn'
                onClick={() => {
                    completeTask(customer.userCustomerName);
                }}
            >X</button>
        </table >


    )
}

export default ToShowCustomers;