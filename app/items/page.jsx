"use client";
import { useEffect, useState } from "react";

export default function ItemsPage() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [editId, setEditId] = useState(null);

    async function load() {
        const res = await fetch("/api/items");
        const data = await res.json();
        setItems(data);
    }

    async function addOrUpdate(e) {
        e.preventDefault();
        if (!name || price === "") return alert("Nama & harga wajib");
        if (editId) {
            await fetch("/api/items", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: editId, name, price: Number(price) })
            });
            setEditId(null);
        } else {
            await fetch("/api/items", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, price: Number(price) })
            });
        }
        setName(""); setPrice("");
        load();
    }

    async function remove(id) {
        if (!confirm("Hapus item?")) return;
        await fetch(`/api/items?id=${id}`, { method: "DELETE" });
        load();
    }

    function startEdit(it) {
        setEditId(it.id);
        setName(it.name);
        setPrice(String(it.price));
    }

    useEffect(() => { load(); }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Items (CRUD)</h1>

            <form onSubmit={addOrUpdate} style={{ marginBottom: 16 }}>
                <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} style={{ marginLeft: 8 }} />
                <button type="submit" style={{ marginLeft: 8 }}>{editId ? "Update" : "Add"}</button>
                {editId && <button type="button" onClick={() => { setEditId(null); setName(""); setPrice(""); }} style={{ marginLeft: 8 }}>Cancel</button>}
            </form>

            <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr><th>ID</th><th>Name</th><th>Price</th><th>Created</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    {items.map(it => (
                        <tr key={it.id}>
                            <td>{it.id}</td>
                            <td>{it.name}</td>
                            <td>{it.price}</td>
                            <td>{new Date(it.createdAt).toLocaleString()}</td>
                            <td>
                                <button onClick={() => startEdit(it)}>Edit</button>
                                <button onClick={() => remove(it.id)} style={{ marginLeft: 8 }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    {items.length === 0 && <tr><td colSpan="5">No items</td></tr>}
                </tbody>
            </table>
        </div>
    );
}
