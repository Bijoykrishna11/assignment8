import React from 'react';

const Cart = () => {
    return (
        <div>
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
    );
};

export default Cart;