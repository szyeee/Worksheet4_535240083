// app/items/page.jsx (Client component)
"use client";
import { useEffect, useState } from "react";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  async function load() {
    const res = await fetch("/api/items");
    const data = await res.json();
    setItems(data);
  }

  async function add() {
    await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify({ name, price: Number(price) }),
      headers: { "Content-Type": "application/json" },
    });
    setName(""); setPrice("");
    load();
  }

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h1>Items</h1>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/>
      <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price"/>
      <button onClick={add}>Add</button>

      <ul>
        {items.map(it => (
          <li key={it.id}>{it.name} - {it.price}</li>
        ))}
      </ul>
    </div>
  );
}
