import { Link } from "react-router-dom";

const categories = ["Electronics", "Clothing", "Home", "Sports", "Books"];

export default function CategoryMenu() {
  return (
    <aside className="w-48 border-r p-4 hidden md:block">
      <h3 className="font-semibold mb-3">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <Link
              to={`/category/${cat.toLowerCase()}`}
              className="block hover:text-yellow-600"
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
