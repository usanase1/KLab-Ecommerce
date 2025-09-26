import { Card } from '../dashboardComponents/Card';
import { MdInventory, MdEdit, MdDelete, MdAdd, MdStar } from 'react-icons/md';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { products as catalog } from '../data/products';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';

// Types from data file (mirror minimal fields used here)
interface AdminProduct {
  id: string | number;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  isOnSale?: boolean;
  originalPrice?: number;
  rating: { rate: number; count: number };
  badge?: string;
}

const STORAGE_KEY = 'adminProducts';
const API_BASE = 'http://localhost:5000/api-v1/product';

export const Products = () => {
  const { user } = useAuth();
  const role = (user as any)?.userRole ?? 'user';

  // Local state of products (admin-editable)
  const [items, setItems] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'add' | 'edit'>('add');
  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [form, setForm] = useState<Omit<AdminProduct, 'id' | 'rating'> & { ratingRate: number; ratingCount: number }>({
    name: '',
    description: '',
    category: '',
    image: '',
    price: 0,
    isOnSale: false,
    originalPrice: undefined,
    badge: '',
    ratingRate: 4.5,
    ratingCount: 0,
  });

  function mapBackendProduct(p: any): AdminProduct {
    return {
      id: p._id ?? p.id,
      name: p.name,
      description: p.description ?? '',
      category: p.category ?? '',
      image: p.image || p.imageUrl || '',
      price: Number(p.price ?? 0),
      isOnSale: Boolean(p.isOnSale),
      originalPrice: p.originalPrice != null ? Number(p.originalPrice) : undefined,
      rating: p.rating ?? { rate: 4.5, count: 0 },
      badge: p.badge,
    };
  }

  // Load from API with fallback
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/getAllProducts`);
        const data = await res.json();
        const list = Array.isArray(data?.products) ? data.products : Array.isArray(data) ? data : data?.data || [];
        const mapped = (list || []).map(mapBackendProduct);
        if (mapped.length) {
          setItems(mapped);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn('Fetch products failed, using fallback', err);
      }

      // Fallback: localStorage then static catalog
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as AdminProduct[];
          if (parsed?.length) {
            setItems(parsed);
            setLoading(false);
            return;
          }
        } catch {}
      }
      const mapped: AdminProduct[] = catalog.map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        category: p.category,
        image: p.image,
        price: p.price,
        isOnSale: p.isOnSale,
        originalPrice: p.originalPrice,
        rating: p.rating,
        badge: p.badge,
      }));
      setItems(mapped);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    // persist a copy locally for fallback UX
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const isAdmin = role === 'admin';

  const openAdd = () => {
    setMode('add');
    setEditingId(null);
    setSelectedFile(null);
    setForm({
      name: '',
      description: '',
      category: '',
      image: '',
      price: 0,
      isOnSale: false,
      originalPrice: undefined,
      badge: '',
      ratingRate: 4.5,
      ratingCount: 0,
    });
    setIsOpen(true);
  };

  const openEdit = (id: string | number) => {
    const prod = items.find((i) => i.id === id);
    if (!prod) return;
    setMode('edit');
    setEditingId(id);
    setSelectedFile(null);
    setForm({
      name: prod.name,
      description: prod.description,
      category: prod.category,
      image: prod.image,
      price: prod.price,
      isOnSale: !!prod.isOnSale,
      originalPrice: prod.originalPrice,
      badge: prod.badge || '',
      ratingRate: prod.rating.rate,
      ratingCount: prod.rating.count,
    });
    setIsOpen(true);
  };

  const handleDelete = async (id: string | number) => {
    const prod = items.find((i) => i.id === id);
    if (!prod) return;
    if (!confirm(`Delete product "${prod.name}"? This action cannot be undone.`)) return;
    try {
      const token = localStorage.getItem('accessToken') || '';
      const res = await fetch(`${API_BASE}/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error('Delete failed');
      setItems((prev) => prev.filter((p) => p.id !== id));
      Notify.success('Product deleted');
    } catch (err: any) {
      console.error('delete failed', err);
      Notify.failure(err?.message || 'Delete failed');
    }
  };

  const validate = () => {
    if (!form.name.trim()) return 'Name is required';
    if (!form.category.trim()) return 'Category is required';
    if (mode === 'add' && !selectedFile) return 'Please choose an image file';
    if (form.price <= 0) return 'Price must be greater than 0';
    if (form.isOnSale && (form.originalPrice ?? 0) <= form.price) return 'Original price must be greater than price when on sale';
    return null;
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      Notify.failure(err);
      return;
    }

    try {
      const token = localStorage.getItem('accessToken') || '';
      const fd = new FormData();
      // Required text fields
      fd.append('name', form.name.trim());
      fd.append('description', form.description.trim());
      fd.append('category', form.category.trim());
      fd.append('price', String(Number(form.price)));
      // Optional fields
      if (form.isOnSale) fd.append('isOnSale', 'true');
      if (form.originalPrice != null && form.isOnSale) fd.append('originalPrice', String(Number(form.originalPrice)));
      if (form.badge) fd.append('badge', form.badge.trim());
      // If editing and no new file selected, try to pass existing image URL if backend supports it
      if (selectedFile) {
        fd.append('image', selectedFile);
      } else if (mode === 'edit' && form.image) {
        // Some backends accept an 'imageUrl' to keep existing one
        fd.append('imageUrl', form.image);
      }

      if (mode === 'add') {
        const res = await fetch(`${API_BASE}/create`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: fd,
        });
        if (!res.ok) {
          const msg = await res.text();
          throw new Error(msg || 'Create failed');
        }
        const created = await res.json();
        const createdProduct = created?.product || created;
        const mapped = mapBackendProduct(createdProduct);
        setItems((prev) => [mapped, ...prev]);
        Notify.success('Product added');
      } else if (mode === 'edit' && editingId != null) {
        const res = await fetch(`${API_BASE}/edit/${editingId}`, {
          method: 'PUT',
          headers: { Authorization: `Bearer ${token}` },
          body: fd,
        });
        if (!res.ok) {
          const msg = await res.text();
          throw new Error(msg || 'Update failed');
        }
        const updated = await res.json();
        const updatedProduct = updated?.product || updated;
        const mapped = mapBackendProduct(updatedProduct);
        setItems((prev) => prev.map((p) => (p.id === editingId ? mapped : p)));
        Notify.success('Product updated');
      }

      setIsOpen(false);
    } catch (e: any) {
      console.error('save failed', e);
      Notify.failure(e?.message || 'Save failed');
    }
  };

  if (!isAdmin) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-xl font-semibold mb-2">Not authorized</h1>
        <p className="text-gray-600 mb-4">Only administrators can manage products.</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
          <MdInventory className="w-6 h-6 mr-2" />
          Products
        </h1>
        <button onClick={openAdd} className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
          <MdAdd className="w-5 h-5" />
          Add Product
        </button>
      </div>

      <Card className="p-0 overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-700">#</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Product</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Category</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Price</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Rating</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr><td className="px-4 py-6 text-gray-500" colSpan={6}>Loading products...</td></tr>
              ) : (
                items.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">{p.id as any}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img src={p.image} alt={p.name} className="w-12 h-12 object-contain rounded border" />
                        <div>
                          <div className="font-medium text-gray-900 flex items-center gap-2">
                            {p.name}
                            {p.badge && (
                              <span className="text-[10px] uppercase tracking-wide bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{p.badge}</span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500 line-clamp-1">{p.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{p.category}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">${p.price.toFixed(2)}</span>
                        {p.isOnSale && p.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">${p.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-amber-500">
                        <MdStar className="w-4 h-4 mr-1" />
                        <span className="font-medium text-gray-800">{p.rating.rate.toFixed(1)}</span>
                        <span className="text-gray-400 text-xs ml-2">({p.rating.count})</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="inline-flex items-center gap-2">
                        <button onClick={() => openEdit(p.id)} className="px-2 py-1 text-blue-600 hover:text-blue-800 rounded hover:bg-blue-50" title="Edit">
                          <MdEdit className="inline w-5 h-5" />
                        </button>
                        <button onClick={() => handleDelete(p.id)} className="px-2 py-1 text-red-600 hover:text-red-800 rounded hover:bg-red-50" title="Delete">
                          <MdDelete className="inline w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg">
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold">{mode === 'add' ? 'Add Product' : 'Edit Product'}</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <form onSubmit={submitForm} className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Category</label>
                <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full border rounded px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-600 mb-1">Description</label>
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full border rounded px-3 py-2" rows={3} />
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-600 mb-1">Existing Image URL (optional)</label>
                  <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full border rounded px-3 py-2" placeholder="https://..." />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setSelectedFile(file);
                    }}
                    className="block w-full text-sm file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:bg-yellow-400 file:text-black hover:file:bg-yellow-500"
                  />
                  {selectedFile && <div className="text-xs text-gray-500 mt-1">Selected: {selectedFile.name}</div>}
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Price</label>
                <input type="number" step="0.01" min={0} value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Badge (optional)</label>
                <input value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Rating</label>
                <div className="flex gap-2">
                  <input type="number" step="0.1" min={0} max={5} value={form.ratingRate} onChange={(e) => setForm({ ...form, ratingRate: Number(e.target.value) })} className="w-24 border rounded px-3 py-2" />
                  <input type="number" step="1" min={0} value={form.ratingCount} onChange={(e) => setForm({ ...form, ratingCount: Number(e.target.value) })} className="w-28 border rounded px-3 py-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">On Sale?</label>
                <select value={form.isOnSale ? 'yes' : 'no'} onChange={(e) => setForm({ ...form, isOnSale: e.target.value === 'yes' })} className="w-full border rounded px-3 py-2">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              {form.isOnSale && (
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Original Price</label>
                  <input type="number" step="0.01" min={0} value={form.originalPrice ?? 0} onChange={(e) => setForm({ ...form, originalPrice: Number(e.target.value) })} className="w-full border rounded px-3 py-2" />
                </div>
              )}
              <div className="md:col-span-2 flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded border">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-yellow-400 text-black hover:bg-yellow-500">{mode === 'add' ? 'Add Product' : 'Save Changes'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
