import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbars from './Navbars';
import Footers from './Footers';

const NavbarFooter = () => {
    useEffect(() => {
        document.title = "HannnAI";
    }, []);

    return (
        <>
            <Navbars />
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <Outlet />
                </div>
                <Footers />
            </div>
        </>
    );
};

export default NavbarFooter;
