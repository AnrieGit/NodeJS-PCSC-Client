import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const Socket = () => {
    const [response, setResponse] = useState(false);

    useEffect(() => {
        const endpoint = 'http://127.0.0.1:4001';
        const socket = socketIOClient(endpoint);
        socket.on('FromServer', data => {
            if (data !== null) {
                setResponse(data.uid);
                console.log(data.uid);
            } else {
                setResponse(false);
            }
        });
    }, []);

    return (
        <div>
            {response ? <p>Card uid: {response}</p> : <p>Tap the Card</p>}
        </div>
    );
};

export default Socket;
