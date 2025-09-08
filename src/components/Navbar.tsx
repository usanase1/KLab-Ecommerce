import { NavLink } from "react-router-dom";

const linkClass =
  "px-3 py-2 rounded hover:bg-yellow-50 hover:text-yellow-700";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto max-w-7xl flex gap-4 px-4 py-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${linkClass} bg-yellow-100 text-yellow-800`
              : linkClass
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/category/electronics"
          className={({ isActive }) =>
            isActive
              ? `${linkClass} bg-yellow-100 text-yellow-800`
              : linkClass
          }
        >
          Electronics
        </NavLink>
        <NavLink
          to="/category/clothing"
          className={({ isActive }) =>
            isActive
              ? `${linkClass} bg-yellow-100 text-yellow-800`
              : linkClass
          }
        >
          Clothing
        </NavLink>
        <NavLink
          to="/category/books"
          className={({ isActive }) =>
            isActive
              ? `${linkClass} bg-yellow-100 text-yellow-800`
              : linkClass
          }
        >
          Books
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? `${linkClass} bg-yellow-100 text-yellow-800`
              : linkClass
          }
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
}
