import { useState } from 'react';

export default function Appear() {
    const [status, setStatus] = useState('사라져라');
    const [status2, setStatus2] = useState('안녕하세요');

    const handleToggle = () => {
        if (status === '사라져라') {
            setStatus('보여라');
            setStatus2('');
        } else {
            setStatus('사라져라');
            setStatus2('안녕하세요');
        }
    };
    return (
        <div>
            <button onClick={handleToggle}>{status}</button>
            <p>{status2}</p>
        </div>
    );
}
