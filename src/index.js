import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

function Person(){
    return (
        <div class = "person">>
            <h1> Patrick </h1>>
            <p> Your age: 31</p>
        </div>
    );
}
// ReactDOM.render(<Person/>, document.querySelector('#p1'));