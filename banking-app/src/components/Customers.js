import Button from './Button';

const Customers = () => {
    const onClick = () => {
        console.log('click')
    }


    return (
        <header>
        <Button text='Add' color='#008CBA' onClick={onClick}/>
        </header>
    )
}

export default Customers;
