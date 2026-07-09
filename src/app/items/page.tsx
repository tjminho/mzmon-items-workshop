import { PrismaClient } from "@prisma/client";
import { AddItemForm } from "@/components/AddItemForm";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export default async function ItemsPage() {
  const items = await prisma.item.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main style={{ maxWidth: 640, margin: "40px auto", padding: 16 }}>
      <h1>품목 목록</h1>
      <p style={{ color: "#666" }}>Mzmon Academy · 3순위 Cursor 워크샵</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {items.length === 0 ? <p>등록된 품목이 없습니다.</p> : null}
      <AddItemForm />
    </main>
  );
}
