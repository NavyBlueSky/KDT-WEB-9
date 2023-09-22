import { useState } from 'react';

export default function Color() {
    const [status, setStatus] = useState('블랙');
    const [status2, setStatus2] = useState('black');

    const handlered = () => {
        setStatus('레드');
        setStatus2('red');
    };

    const handleblue = () => {
        setStatus('블루');
        setStatus2('blue');
    };

    return (
        <div>
            <h1 style={{ color: status2 }}>{status}</h1>
            <button onClick={handlered}>red</button>
            <button onClick={handleblue}>blue</button>
        </div>
    );
}
