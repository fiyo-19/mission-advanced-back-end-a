import { useState } from "react";

function Product({ title, price }) {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-semibold">{title}</h3>
      <p>{price}</p>
    </div>
  );
}

export default function Admin() {
  const [products, setProducts] = useState([
    { id: 1, title: "Big 4 Auditor Financial Analyst", price: "Rp 300K" },
    { id: 2, title: "Web Developer", price: "Rp 600K" },
    { id: 3, title: "Data Analyst", price: "Rp 700K" },
    { id: 4, title: "Human Resource", price: "Rp 400K" },
    { id: 5, title: "Data Science", price: "Rp 600K" },
    { id: 6, title: "Engineering", price: "Rp 500K" },
    { id: 7, title: "Mobile Developer", price: "Rp 600K" },
    { id: 8, title: "Digital Marketing", price: "Rp 500K" },
    { id: 9, title: "SEO Specialist", price: "Rp 300K" },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [editId, setEditId] = useState(null);

  const validatePrice = (price) => {
    return /^rp\s*\d+(k)?$/i.test(price.trim());
  };

  const validateForm = () => {
    if (!newTitle.trim()) {
      alert("Judul produk harus diisi!");
      return false;
    }
    if (!newPrice.trim()) {
      alert("Harga produk harus diisi!");
      return false;
    }
    if (!validatePrice(newPrice)) {
      alert("Input harga tidak benar! Contoh: Rp 300K");
      return false;
    }
    return true;
  };

  const handleAddOrUpdateProduct = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (editId) {
      const confirmed = window.confirm(
        "Apakah Anda yakin ingin menyimpan perubahan data?"
      );
      if (!confirmed) return;

      setProducts((prev) =>
        prev.map((product) =>
          product.id === editId
            ? { ...product, title: newTitle.trim(), price: newPrice.trim() }
            : product
        )
      );
      setEditId(null);
    } else {
      const confirmed = window.confirm(
        "Apakah Anda yakin ingin menambah produk baru?"
      );
      if (!confirmed) return;

      setProducts([
        ...products,
        {
          id: Date.now(),
          title: newTitle.trim(),
          price: newPrice.trim(),
        },
      ]);
    }

    setNewTitle("");
    setNewPrice("");
  };

  const handleEditProduct = (id) => {
    const prod = products.find((p) => p.id === id);
    if (!prod) return;

    setEditId(id);
    setNewTitle(prod.title);
    setNewPrice(prod.price);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setNewTitle("");
    setNewPrice("");
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Yakin ingin menghapus produk ini?")) {
      setProducts(products.filter((p) => p.id !== id));
      if (editId === id) {
        handleCancelEdit();
      }
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Halaman Admin</h1>

      <form onSubmit={handleAddOrUpdateProduct} className="mb-6">
        <input
          type="text"
          placeholder="Judul Produk"
          className="border rounded p-2 w-full mb-2"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Harga Produk (misal: Rp 300K)"
          className="border rounded p-2 w-full mb-2"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {editId ? "Update Produk" : "Tambah Produk"}
          </button>
          {editId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Batal
            </button>
          )}
        </div>
      </form>

      <div className="grid gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <Product title={product.title} price={product.price} />
            <div className="flex gap-2">
              <button
                onClick={() => handleEditProduct(product.id)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
