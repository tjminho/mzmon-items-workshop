# mzmon-items-workshop

> **Mzmon Academy 3순위** · Cursor · 인프런 · 유튜브  
> **목표**: `/items` 품목 CRUD (Next.js 16 App Router + Prisma 7 + SQLite)  
> **공개 Template**: https://github.com/tjminho/mzmon-items-workshop/generate  
> **수강생 문서**: https://github.com/tjminho/mzmon-academy

---

## 빠른 시작

```bash
pnpm install
pnpm db:migrate --name init
pnpm db:seed
pnpm dev
```

http://localhost:3000/items

---

## GitHub Template

1. GitHub → **Use this template** → Create repository  
2. repo 이름 예: `my-items-workshop`  
3. Cursor에서 clone · `pnpm dev`

상세: [docs/WORKSHOP.md](./docs/WORKSHOP.md)  
설치 체크: https://github.com/tjminho/mzmon-academy/blob/main/student/install-checklist.md

| 강 | 상태 |
|:--:|------|
| L1 | repo 생성 · Cursor |
| L2 | User story · SPEC.md |
| L3 | mock → DB 목록 |
| L4~L6 | API · form · CRUD 완성 |

**bug 브랜치**: [WORKSHOP.md §5](./docs/WORKSHOP.md) — L7 디버깅용

---

## 면책

교육용 템플릿 · Mzmon/auth_net 상업 fork 배포 금지
