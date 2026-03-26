# Project Memory

This repository continues the earlier `design-system` work that previously lived at:

- `/Users/kinyoo/Desktop/CodexProject/design-system`

If Codex does not automatically carry over memory because the path changed, use the notes below as the working project context.

## Component Rules

- Always read [`.agent/rules.md`](/Users/kinyoo/Desktop/AntigravityProject/design-system/.agent/rules.md) before creating or changing UI components.
- This project should follow a shadcn/ui-oriented workflow:
  - research the matching shadcn component first
  - understand its base API and Radix structure
  - adapt variants, sizes, tokens, and wrappers to fit this design system
- If a shadcn equivalent exists, do not rebuild the accessible behavior from scratch unless there is a strong reason.

## Component Direction

- `Input`
  Keep the shadcn-style native `input` base, then extend it with this design system's `size`, `status`, `prefix`, `suffix`, `hint`, and `label` capabilities.
- `Select`
  For production-facing component output, prefer the shadcn/Radix Select structure over a long-term native `<select>` implementation.
- `Button`
  Gradually move toward a shadcn-style `buttonVariants` structure instead of relying only on scattered global class names.

## Color Token Decisions

- The color system is semantic-first and supports both light and dark modes.
- `surface` is semantic-only. Do not maintain a standalone `surface` color palette.
- Keep `gray` as an ordered neutral scale for text, borders, basic backgrounds, and neutral surface scenes.
- Put blue-tinted selected surfaces back into the `primary` ramp rather than inventing a dedicated surface color family.
- Current semantic mapping direction:
  - light mode:
    `--surface-base -> gray-0`
    `--surface-muted -> gray-100`
    `--surface-subtle -> gray-25`
    `--surface-hover -> gray-50`
    `--surface-selected -> primary-100`
  - dark mode:
    `--surface-base -> gray-0`
    `--surface-muted -> gray-50`
    `--surface-subtle -> gray-100`
    `--surface-hover -> gray-150`
    `--surface-selected -> primary-25`

## Collaboration Notes

- The user wants component output that frontend engineers can adopt directly, not only demo-perfect visuals.
- When changing a component, explicitly judge whether it should:
  - preserve shadcn structure
  - lightly extend shadcn
  - or only restyle the existing base
- When touching token exports for Figma, preserve the agreed structure unless the user explicitly asks to regenerate or change it.
