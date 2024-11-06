
import Sidebar from './Sidebar';
import NavbarComponent from './Navbar';

const Layout = ({ children }) => {
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