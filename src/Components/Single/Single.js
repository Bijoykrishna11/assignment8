import './Single.css'
import React from 'react';

const Single = (props) => {
    const { name, img, title, time } = props.single
    return (
        <div className='single-item'>
            <img src={img} alt="" />
        </div>
    );
};

export default Single;