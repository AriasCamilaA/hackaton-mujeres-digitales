import { Link, Button } from "@nextui-org/react";

export default function FooterComponent() {
  return (
    <footer className="bg-primary text-white w-screen px-4 py-2 h-[10vh]">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img src="/logo.webp" className="w-10 h-10 rounded-full me-4" />
          <p className="font-bold text-inherit">infiinicode</p>
        </div>
        <div className="flex justify-center items-center">
          <Link href="#" className="px-4 py-1 text-lg hover:text-customBlue-light1">
            Privacy Policy
          </Link>
          <Link href="#" className="px-4 py-1 text-lg hover:text-customBlue-light1">
            Terms of Service
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Button auto flat color="gradient" className="px-4 py-1 rounded-full">
            Contact Us
          </Button>
        </div>
      </div>
    </footer>
  );
}
