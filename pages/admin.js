import React, { useEffect } from 'react';
import Axios from 'axios'
import { useRouter } from 'next/router'

const admin = () => {

    const router = useRouter();

    const checkLogin = async () => {
        const res = await Axios.get('/api/isLogin')
        if(res.status === 200 && res.data.name) {
            // login
        } else {
            // no login
            router.push('/login')
        }
    }

    useEffect(() => {
        checkLogin()
    }, [])

    return (
        <div>
            aadmin
        </div>
    );
};

export default admin;