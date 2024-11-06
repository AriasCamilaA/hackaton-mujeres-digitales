import Sidebar from './Sidebar';
import NavbarComponent from './Navbar';
import { useGlobalContextHook } from '../hooks/useGlobalContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Layout = ({ children }) => {
    const { get } = useGlobalContextHook();
    const session = get('session');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Verifica la sesión solo si no estás en la página de login
        if ((!session || session === null || session === undefined) && location.pathname !== '/login') {
            toast.error('You must be logged in to access this page');
            navigate('/login');
        }
    }, [session, location, navigate]); // Se ejecuta al cambiar sesión o ubicación


    if(location.pathname == '/login'){
        return children;
    }


    return (
        <div>
            <NavbarComponent />
            <div className='h-[90vh] flex w-screen'>
                <Sidebar className="w-[10wh]"/>
                <main className='w-[100%] overflow-auto p-4 ps-2'>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;
