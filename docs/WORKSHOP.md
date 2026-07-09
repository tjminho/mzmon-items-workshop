# 유튜브 · 워크샵 데모 Repo 가이드

> **템플릿 경로**: `templates/mzmon-items-workshop/` (mzmon **private** monorepo)  
> **공개 repo**: https://github.com/tjminho/mzmon-items-workshop (Template repository)  
> **수강생 문서**: https://github.com/tjminho/mzmon-academy  
> **publish**: `scripts/publish-items-workshop.ps1` · [public-repos-strategy.md](../../docs/lecture/public-repos-strategy.md)

---

## 1. Repo 개요

| 항목 | 내용 |
|------|------|
| **스택** | Next.js 16 App Router · Prisma 7 · SQLite |
| **화면** | `/items` — 목록 + 등록 |
| **API** | `GET/POST /api/items` |
| **용도** | 유튜브 Ep.1~6 · 3순위 cohort · 1일 6h |

---

## 2. GitHub Template 설정 (1회)

### A. monorepo에서 분리 publish (권장)

```bash
cd templates/mzmon-items-workshop
git init
git add .
git commit -m "chore: initial mzmon items workshop template"
git remote add origin git@github.com:tjminho/mzmon-items-workshop.git
git push -u origin main
```

### B. GitHub 설정

1. Repository → **Settings** → **Template repository** ✅  
2. About: 「Mzmon Academy Cursor workshop starter」  
3. Topics: `nextjs` `prisma` `cursor` `workshop`

### C. 수강생 사용

```text
GitHub → Use this template → Create repository
→ Cursor Clone → pnpm install → prisma migrate deploy → pnpm dev
```

---

## 3. 로컬 빠른 시작 (강사)

```bash
cd templates/mzmon-items-workshop
pnpm install --ignore-workspace   # mzmon monorepo 안에서만 필요
npx prisma migrate deploy
pnpm db:seed
pnpm dev
# http://localhost:3000/items
```

---

## 4. Ep.1~6 촬영 · 수업용 Git tag (선택)

| Tag | 용도 | 내용 |
|-----|------|------|
| `ep1-empty` | Ep.1 | README만 (별도 branch) |
| `ep3-db` | Ep.3 | schema + migration |
| `ep6-done` | Ep.6 | **main** — CRUD 완성 |
| `bug` | Ep.5/7 | 디버깅 3종 (§5) |

**촬영**: Ep.3→4→5 연속 촬영 시 `main`에서 되돌리기:

```bash
git checkout -b shoot-ep3
git reset --hard ep3-db   # tag 만든 경우
```

---

## 5. `bug` 브랜치 (Ep.7 디버깅)

`main`에서 branch 생성 후 **아래 3가지만** 적용:

### Bug 1 — prisma import 경로

`src/app/items/page.tsx`

```diff
-import { prisma } from "@/lib/prisma";
+import { prisma } from "@/lib/prism";
```

### Bug 2 — POST body key

`src/app/api/items/route.ts`

```diff
-  const name = body.name?.trim();
+  const name = body.title?.trim();
```

### Bug 3 — form method

`src/components/AddItemForm.tsx`

```diff
-    <form onSubmit={onSubmit} style={{ marginTop: 16 }}>
+    <form style={{ marginTop: 16 }}>
```

**수업**: 수강생에게 `git checkout bug` 또는 patch 파일 배포

---

## 6. cohort zip fallback (Wi-Fi 불안)

```bash
cd templates && tar -czf mzmon-items-workshop.zip mzmon-items-workshop \
  --exclude=node_modules --exclude=.next
```

Notion LMS에 zip 업로드 · D-7 메일 첨부

---

## 7. Cursor 프롬프트 (Ep.1~4)

| Ep | 프롬프트 |
|:--:|----------|
| 2 | 「/items mock 3개만 Server Component」 |
| 3 | 「Item model + prisma migrate」 |
| 4 | 「POST /api/items name validation」 |
| 5 | 「AddItemForm + router.refresh」 |

전체 금지: 「쇼핑몰 admin 결제까지」

---

## 8. 면책

- 교육·데모 전용  
- **auth_net / Mzmon fork 상업 배포** 금지  
- `.env` 비어 있음 (SQLite file) — 채팅에 secret 붙여넣기 금지

---

## 변경 이력

| 날짜 | 내용 |
|------|------|
| 2026-07-08 | 데모 repo 템플릿 · GitHub 가이드 초판 |
