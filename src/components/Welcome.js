import './welcome.css'
import {Link} from 'react-router-dom';

const Welcome = () => (
    
    <div className='welcome'>
        <div className='border'>
            <h1>Welcome to doggy daycare</h1>
        </div>
        <Link to='/register'>
            <button>Check out the register</button>
        </Link>
        
    </div>
)

export default Welcome;
