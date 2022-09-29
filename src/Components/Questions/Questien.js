import React from 'react';
import './Questien.css'

const Questien = () => {
    return (
        <div className='questien'>
            <div >
                <h3>How Does React Work?</h3>
                <p>Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript:In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.</p>
            </div>
            <div >
                <h3>What are the differences between props and state ?</h3>
                <p>    Props are used to pass data from one component to another.The state is a local data storage that is local to the component only and cannot be passed to other components.The this.setState property is used to update the state values in the component.</p>
            </div>
            <div >
                <h3>Why use useEffect without data load?</h3>
                <p>The useEffect Hook allows you to perform side effects in your components.The useEffect also use fou updateing data and added timer.
                    useEffect accepts two arguments. The second argument is optional.
                </p>
            </div>

        </div>
    );
};

export default Questien;