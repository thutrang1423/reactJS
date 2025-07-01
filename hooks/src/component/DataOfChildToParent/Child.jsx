import React from 'react';

function Child({ onSendData }) {
    const handleClick = () => {
        onSendData('Hello from Child!');
    };

    return (
        <div>
            <h3>Child Component</h3>
            <button onClick={handleClick}>Send Data to Parent</button>
        </div>
    );
}

export default Child;
