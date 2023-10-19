import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Header />
            <div className='outlet'>
                <Outlet />
            </div>

            <SideBar />
        </>
    );
}