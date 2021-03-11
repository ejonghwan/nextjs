import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { useRouter } from 'next/router'

const admin = () => {

    const router = useRouter();
    const [isLogin, setIslogin] = useState(false)

    const checkLogin = async () => {
        const res = await Axios.get('/api/isLogin')
        if(res.status === 200 && res.data.name) {
            // login
            setIslogin(true)
        } else {
            // no login
            router.push('/login')
        }
    }

    const handleClick = e => {
        setIslogin(false)
        Axios.get('/api/logout')
            .then(res => {
                router.push('/')
            })
    }

    useEffect(() => {
        checkLogin()
    }, [])

    return (
        <div>
            aadmin
            {isLogin && <button onClick={handleClick}>logout</button>}
        </div>
    );
};

export default admin;