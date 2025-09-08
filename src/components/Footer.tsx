import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/about" className="hover:text-yellow-600 ">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-600">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-yellow-600">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
