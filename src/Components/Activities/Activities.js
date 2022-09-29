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

    const handleAdd = (single) => {
        console.log(single);
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
                <h1>Mr.Bijoy</h1>
                <p>Bhandaria,Pirojpur</p>
                <div className='about'>
                    <h4>Hight:1.65 m</h4>
                    <h4>Weight: 53 kg</h4>
                    <h4>Age:23</h4>
                </div>

                <h3>Break Time</h3>
                <div className='btn-break'>
                    <button>10 </button>
                    <button>20 </button>
                    <button>30</button>
                    <button>40 </button>
                </div>
                <h3>Details</h3>
                <div className='bteak-time'>
                    <h4>Time taken:</h4>
                    <h4>Break:</h4>
                </div>

                <button className='finish'>Finish</button>

            </div>
        </div>
    );
};

export default Activities;