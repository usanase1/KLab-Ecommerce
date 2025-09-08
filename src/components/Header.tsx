import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b bg-yellow-400">
      <div className="container mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-black-400">
          MyShop
        </Link>

        {/* Actions */}
        <div className="flex gap-4">
          <Link to="/cart" className="hover:text-yellow-600">
            Cart
          </Link>
          <Link to="/account" className="hover:text-yellow-600">
            Account
          </Link>
        </div>
      </div>
    </header>
  );
}
