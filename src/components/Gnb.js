import React from 'react';
import Link from 'next/link'

const Gnb = () => {
    return (
        <div>
            gnb
            <div>
                <Link href="/">
                    <a>home</a>
                </Link>
                <Link href="/profile">
                    <a>profile</a>
                </Link>
                <Link href="/card">
                    <a>card</a>
                </Link>
                <Link href="/finence">
                    <a>finence</a>
                </Link>
                <Link href="/admin">
                    <a>admin</a>
                </Link>
                {/* <Link href="/asd">
                    <a>finence</a>
                </Link> */}
            </div>
        </div>
    );
};

export default Gnb;