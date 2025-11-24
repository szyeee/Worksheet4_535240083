// app/api/items/route.js
import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();
if (!global.prisma) global.prisma = prisma;

export async function GET(req) {
  try {
    const items = await prisma.item.findMany({ orderBy: { id: "asc" }});
    return new Response(JSON.stringify(items), { status: 200, headers: { "Content-Type": "application/json" }});
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json(); // { name, price }
    if (!body.name || body.price == null) {
      return new Response(JSON.stringify({ error: "name and price required" }), { status: 400 });
    }
    const created = await prisma.item.create({ data: { name: body.name, price: Number(body.price) }});
    return new Response(JSON.stringify(created), { status: 201, headers: { "Content-Type": "application/json" }});
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json(); // { id, name?, price? }
    const { id, ...data } = body;
    if (!id) return new Response(JSON.stringify({ error: "id required" }), { status: 400 });
    const updated = await prisma.item.update({
      where: { id: Number(id) },
      data: { ...("name" in data ? { name: data.name } : {}), ...("price" in data ? { price: Number(data.price) } : {}) }
    });
    return new Response(JSON.stringify(updated), { status: 200, headers: { "Content-Type": "application/json" }});
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return new Response(JSON.stringify({ error: "id required" }), { status: 400 });
    await prisma.item.delete({ where: { id: Number(id) }});
    return new Response(null, { status: 204 });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
}
