// app/api/items/route.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const items = await prisma.item.findMany();
  return new Response(JSON.stringify(items), { status: 200 });
}

export async function POST(req) {
  const body = await req.json();
  // expect { name: "...", price: 12.34 }
  const created = await prisma.item.create({ data: body });
  return new Response(JSON.stringify(created), { status: 201 });
}

export async function PUT(req) {
  const body = await req.json();
  // expect { id, name?, price? }
  const { id, ...data } = body;
  const updated = await prisma.item.update({
    where: { id: Number(id) },
    data,
  });
  return new Response(JSON.stringify(updated), { status: 200 });
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return new Response("id required", { status: 400 });
  await prisma.item.delete({ where: { id: Number(id) } });
  return new Response(null, { status: 204 });
}
