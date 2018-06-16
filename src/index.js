import React from 'react';
import ReactDOM from 'react-dom';

const userObject = {
    name: 'Lou',
    luckyNumber: luckyNumber()
};

function luckyNumber() {
    return Math.floor((Math.random() * 1000) + 1);
}

function greeting(user) {
    return (
        <div className='container'>
            <h1>
                Hello, there {user.name}!
            </h1>
            <h2 className='text-muted'>
                {user.name}'s lucky number is {user.luckyNumber}
            </h2>
        </div>
    )
}

ReactDOM.render(
    greeting(userObject),
    document.getElementById('root')
);
