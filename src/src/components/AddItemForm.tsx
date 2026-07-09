"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function AddItemForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (!res.ok) {
      setError("등록에 실패했습니다.");
      return;
    }
    setName("");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} style={{ marginTop: 16 }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="품목명"
        required
        style={{ padding: 8, marginRight: 8 }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        등록
      </button>
      {error ? <p style={{ color: "crimson" }}>{error}</p> : null}
    </form>
  );
}
