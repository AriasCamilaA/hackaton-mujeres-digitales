import { Link } from "@nextui-org/react";

export default function FooterComponent() {
  return (
    <footer className="bg-white text-black w-full px-4 py-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="mb-4">
          <img src="/logo1.png" className="w-16 h-16 rounded-full mx-auto" alt="Infinicode Logo" />
          <p className="font-bold text-xl mt-2">Infinicode</p>
        </div>

        <div className="flex justify-center items-center mb-4 space-x-6">
          <Link href="#" className="px-4 py-1 text-lg hover:text-customBlue-light1">
            Privacy Policy
          </Link>
          <Link href="#" className="px-4 py-1 text-lg hover:text-customBlue-light1">
            Terms of Service
          </Link>
          <Link href="https://facebook.com/infinicode" target="_blank" className="text-sm sm:text-base hover:text-customPurple-light1">
            Facebook
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="mailto:infinicodecompany@gmail.com" className="text-sm sm:text-base hover:text-customPurple-light1">
            infinicodecompany@gmail.com
          </Link>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mt-4">© 2024 Infinicode. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
