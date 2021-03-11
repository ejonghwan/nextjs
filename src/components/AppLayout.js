import React from 'react';
import Footer from './Footer'
import Top from './Top'

const AppLayout = ({ children }) => {
    return (
        <div>
            <div><Top /></div>
            <div>{children}</div>
            <div><Footer /></div>
        </div>
    );
};

export default AppLayout;