import './welcome.css'

const Welcome = ({showRegister}) => (
    
    <div className='welcome'>
        <h1>Welcome to doggy daycare!</h1>
        <button onClick={showRegister}>Check out the register</button>
    </div>
)

export default Welcome;
