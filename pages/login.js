import React from 'react';
import Axios from 'axios'
import { useRouter } from 'next/router'

const login = () => {

    const router = useRouter()

    const handleSubmit = e => {
        e.preventDefault()
        Axios.post('/api/login')
            .then(res => {
                if(res.status === 200) {
                    router.push('/admin');
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <input type="password" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default login;