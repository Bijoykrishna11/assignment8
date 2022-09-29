import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Single from '../Single/Single';
import './Activities.css'

const Activities = () => {

    const [sports, setSports] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('time.json')
            .then(res => res.json())
            .then(data => setSports(data))

    }, [])

    const handleAdd = (single) => {
        console.log(single);
        const newCart = [...cart, single];
        setCart(newCart);
    }

    return (
        <div className='container'>
            <div className="event">
                {
                    sports.map(single => <Single
                        key={single.id}
                        single={single}
                        handleAdd={handleAdd}

                    ></Single>)
                }
            </div>


            <div className="timer">
                <Cart></Cart>

            </div>
        </div>
    );
};

export default Activities;