import './Single.css'
import React from 'react';

const Single = (props) => {
    const { img, title, time } = props.single;

    return (
        <div className='single-item'>
            <div>
                <img src={img} alt="" />
                <h1>{title}</h1>
                <h3>Time spent:{time}min</h3>
            </div>
            <button onClick={() => props.handleAdd(props.single)} className='btn'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Single;