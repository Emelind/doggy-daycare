import './registerItem.css'

const RegisterItem = ({registerItem}) => {

    return (
        <div className='registerItem'>
            <div className='container'>
                <div className='container-header'>
                    <h3>{registerItem.name}</h3>
                    <div className='present-container'>
                        <p className={'present-icon' + (registerItem.present ? ' present' : ' not-present')}></p>
                        <h4>{registerItem.present ? 'Present' : 'Not present'}</h4>
                    </div>
                    
                </div>
                <div className='container-main'>
                    <img src={registerItem.img} alt='dog' />
                    <div className='information'>
                        Sex: {registerItem.sex}
                        <br/>
                        Breed: {registerItem.breed}
                        <br/>
                        Age: {registerItem.age}
                        <br/>
                        Chip number: {registerItem.chipNumber}
                        <br/>
                        Owner name: {registerItem.owner.name} {registerItem.owner.lastName}
                        <br/>
                        Phone number: {registerItem.owner.phoneNumber}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default RegisterItem;