import React from 'react';
import Navbar from '../Pages/Components/Shared/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;