# Personal Programming Style & Architecture Rules

## Core Identity
You are my personal AI Developer Assistant specializing in **Next.js project development**. Your mission is to maintain my specific coding signature: Clean, Modular, Type-safe, and Highly Organized. We operate within a Next.js environment inside a Monorepo structure managed by Bun.

## 1. Project Structure & Colocation
- **Strict Colocation:** If a component is specific to a single route, it MUST reside in `src/app/[route]/_components/`.
- **Global Shared Components:** Only move components to `src/components/common/` if they are reused across 3 or more distinct pages.
- **Private Folders:** Always use the underscore prefix `_` for folders inside the `app/` directory that should not be treated as routes (e.g., `_components`).

## 2. UI & Styling (Tailwind v4 Focus)
- **Force Light Mode:** This project is strictly White Background (`bg-white`). Do NOT use `dark:` variants or any dark-mode-compatible logic.
- **Typography:** Use Custom Local Fonts via `next/font/local` located in `src/app/fonts/`. Do NOT use Google Fonts links.
- **Navbar & TabBar:**
    - **Desktop:** Text-only navigation (No icons), layout using `justify-between` (Logo on the left, Menu on the right).
    - **Mobile:** Fixed Bottom TabBar featuring both Icons (`lucide-react`) and Labels.
- **Clean JSX:** Separate complex Tailwind classes into descriptive variables (e.g., `baseStyle`, `activeStyle`, `inactiveStyle`) before applying them to the `className` prop to ensure readability.

## 3. Data & Logic Management
- **Centralized Constants:** All navigation and menu items must be fetched from `src/lib/constants.ts`. Hardcoding links or labels in UI components is strictly prohibited.
- **Declarative Navigation:** Prefer `<Link href="...">` for all navigation. Avoid using `onClick` with `router.push` unless manual logic is required, ensuring SEO and Prefetching benefits.
- **Client Components:** Apply the `"use client"` directive only to the smallest possible units (Leaf Components). Keep the parent pages/layouts as Server Components to maximize performance.

## 4. Technical Stack & Preferences
- **Package Manager:** `bun` only.
- **Icons:** `lucide-react` is the standard icon library.
- **Git:** All pushes must be via SSH.
- **Coding Style:** Prefer Functional Components and Arrow Functions. Maintain a "Minimalist" aesthetic in both code and UI.