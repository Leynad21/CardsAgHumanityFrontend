import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow overflow-y-auto lg:pl-24 lg:pr-24">
                <div className="max-w-120 mx-auto flex flex-col gap-8">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;
