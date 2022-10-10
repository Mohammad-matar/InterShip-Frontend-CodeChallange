import { TUser } from '../interfaces';

//we create a props to passed them into the function
interface Props {
    customer: TUser;
}

const ToShowCustomers = ({ customer }: Props) => {
    return (
        <tr>
            <td>{customer.name}</td>
            <td>{customer.address}</td>
            <td>{customer.phoneNumber}</td>
            <td>
                <button className='task-btn'
                    onClick={() => {
                        // completeTask(customer.name);
                    }}
                >X</button>
            </td>
        </tr>
    )
}

export default ToShowCustomers;