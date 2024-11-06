import Sidebar from "./Sidebar";
import NavbarComponent from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      <div className="h-[90vh] flex flex-col md:flex-row w-screen">
        <Sidebar className="w-full md:w-[15rem] md:h-full" />
        <main className="w-full p-4 overflow-auto ps-2">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
