import React, {useEffect, useState} from 'react';
import './register.css'
import {useHistory} from 'react-router-dom';
//import getData from './getData';

const Register = ( {setRegisterItem} ) => {

    const [elementData, setElementData] = useState(null);
    const [objectData, setObjectData] = useState([]);
    const history = useHistory();

    useEffect(() => {

        const apiUrl = 'https://api.jsonbin.io/b/6082a7f5a2213a0c14299336'; 
        
        // check if local storage is empty. If empty, fetch api and store to local storage
        if (localStorage.length <= 0) {
            
            fetch(apiUrl)
            .then((response) => {
                return response.json()
            })
            .then((data) => {

                for (let i = 0; i < data.length; i++) {
                    let obj = data[i];
                    localStorage.setItem(i, JSON.stringify(obj))
                }
                setObjectData(data);
                
            })
            .catch((err) => {
                console.log(err)
            })

        } else {
            // if local storage is not empty, get all items from storage and display
            let objects = [];
            for (let i = 0; i < localStorage.length; i++) {
                let object = JSON.parse(localStorage.getItem(i));
                objects.push(object);
            }
            setObjectData(objects);
        }
    }, []);

    useEffect(() => {

        setElementData(objectData.map( item => 
            <div onClick={() => {setRegisterItem(item); history.push('/registeritem')}} className={'container' + (item.present ? ' present' : ' not-present')} key={item.chipNumber}>
                <img src={item.img} alt='dog'/>
                <p>{item.name}</p>
            </div>
            ));

    }, [objectData]);

    return (
        <div className='register'>
            <div className='box'>
                {elementData}
            </div>
        </div>
    )
}

export default Register;

