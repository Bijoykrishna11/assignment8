import React, { useEffect, useState } from 'react';
import Single from '../Single/Single';
import './Activities.css'

const Activities = () => {

    const [sports, setSports] = useState([]);

    useEffect(() => {
        fetch('time.json')
            .then(res => res.json())
            .then(data => setSports(data))

    }, [])

    return (
        <div className='container'>
            <div className="event">
                {
                    sports.map(single => <Single
                        key={single.id}
                        single={single}

                    ></Single>)
                }
            </div>


            <div className="timer">
                <h1>hlw</h1>
            </div>
        </div>
    );
};

export default Activities;