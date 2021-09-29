import Button from './Button';
import Customers from './Customers';

const CustomersPage = () => {
    const customers = [
        {
            id:1,
            name: 'Piao',
            balance: 1000,
            account: '123456',
        },
        {
            id:2,
            name: 'Zing',
            balance: 2000,
            account: '323232',
        },
        {
            id:3,
            name: 'You Xing',
            balance: 3000,
            account: '554455'
        }
    ]
    
    const onClick = () => {
        console.log('click')
    }


    return (
        <header>
        <Button text='Add' color='#008CBA' onClick={onClick}/>
        <Customers customers={customers}/>
        </header>
    )
}

export default CustomersPage;
