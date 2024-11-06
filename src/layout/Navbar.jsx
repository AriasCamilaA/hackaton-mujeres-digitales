import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function NavbarComponent() {
  return (
    <nav className="bg-primary flex justify-between text-white w-screen px-4 py-2 h-[10vh]">
      <div className="flex justify-center items-center">
        <img src="/logo.webp" className="w-10 h-10 rounded-full me-4"/>
        <p className="font-bold text-inherit">infiinicode</p>
      </div>
      <div>
        <div className="flex justify-center items-center lg:flex hover:bg-customPurple-light1 px-4 py-1 rounded-full cursor-pointer">
            <h5 className="me-4">
                @usuario
            </h5>
            <img
            src="https://picsum.photos/200"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
            />
        </div>
      </div>
    </nav>
  );
}