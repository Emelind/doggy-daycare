import React, {useEffect, useState} from 'react';
import './register.css'

const Register = ( {setRegisterItem, showRegisterItem} ) => {

    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        console.log('useEffect running');

        const apiUrl = 'https://api.jsonbin.io/b/607eb43024143e5df089b745';
        
        fetch(apiUrl)
            .then((response) => {
                return response.json()
            })
            .then((data) => {

                setFetchedData(data.map( item => 
                    // ONCLICK med setRegisterItem till ITEM
                    <div onClick={() => setRegisterItem(item)} className='container' key={item.name}>
                        <p>{item.name}</p>
                        <img src={item.img} alt='dog'/>
                    </div>
                    ));
            })
            .catch((err) => {
                // Do something for an error here
                console.log(err)
            }) 
    }, []);

    return (
        <div className='register'>
            <button onClick={showRegisterItem}></button>
            {fetchedData}
        </div>
    )
}

export default Register;