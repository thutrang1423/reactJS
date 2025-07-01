import React, { useState } from 'react';
import Child from './Child';

function Parent() {
    const [message, setMessage] = useState('');

    const handleDataFromChild = (data) => {
        setMessage(data);
    };

    return (
        <div>
            <h2>Parent Component</h2>
            <p>Message from child: {message}</p>
            <Child onSendData={handleDataFromChild} />
        </div>
    );
}

export default Parent;
