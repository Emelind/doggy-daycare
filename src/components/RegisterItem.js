import './registerItem.css'

const RegisterItem = ({showRegister}) => {

    return (
        <div className='registerItem'>
            <div className='container'>
                <div className='container-header'>
                    <h3>Name</h3>
                    <div className='present-container'>
                        <p className='present-icon'></p>
                        <h4>Present</h4>
                    </div>
                    
                </div>
                <div className='container-main'>
                    <img src='https://images.dog.ceo/breeds/labrador/n02099712_3947.jpg' alt='dog' />
                    <div className='information'>
                        Sex:
                        <br/>
                        Breed:
                        <br/>
                        Age:
                        <br/>
                        Chip number:
                        <br/>
                        Owner name:
                        <br/>
                        Phone number:
                        <br/>
                        <button onClick={showRegister}>Check out the register</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default RegisterItem;