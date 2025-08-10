// -- clinic-frontend/src/layouts/MainLayout.jsx

import { Outlet } from 'react-router-dom';
import MobileBottomNav from '../components/mobileMenu';
import Header from '../components/headar';
import Footer from '../components/ footer';

const MainLayout = () => {
    return (
        <div className="flex-grow overflow-y-auto">
            <Header />
            <Outlet />
            <Footer />
        </div>

    );
};

export default MainLayout;
