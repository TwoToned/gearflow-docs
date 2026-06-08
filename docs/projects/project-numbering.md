---
sidebar_position: 6
---

# Project Numbering

GearFlow can automatically generate project codes (e.g. `TTP-2025-001`, `SHOW-2026-042`) based on a configurable pattern. This is optional — if no pattern is configured, you enter project codes manually.

## Configuring auto-numbering

1. Go to **Settings > Project Defaults**.
2. Find the **Project Numbering** section.
3. Set the following:

### Format pattern

Use tokens to define the code structure. For example:

| Pattern | Renders as |
|---|---|
| `%YYYY-%INC` | `2026-001`, `2026-002` |
| `TTP-%YY-%SEQ` | `TTP-26-001`, `TTP-26-002` |
| `SHOW-%YYYY-%MM-%INC` | `SHOW-2026-06-001` |
| `GIG/%YYYY/%INC` | `GIG/2026/001` |

Available tokens:

| Token | Renders |
|---|---|
| `%YYYY` | 4-digit year (2026) |
| `%YY` | 2-digit year (26) |
| `%MM` | 2-digit month (06) |
| `%M` | Month, no padding (6) |
| `%DD` | 2-digit day (05) |
| `%D` | Day, no padding (5) |
| `%INCREMENT` / `%INC` / `%SEQ` | Auto-incrementing counter |

You must include an increment token — otherwise every project in the same period would get the same code.

### Reset period

Choose when the counter resets:

| Reset | Counter scope | Example |
|---|---|---|
| **Never** | Global | `001`, `002`, `003`… |
| **Yearly** | Per year | Resets each January |
| **Monthly** | Per month | Resets each 1st of the month |
| **Daily** | Per day | Resets each day |

### Padding

Set how many digits the increment uses (e.g. padding 3 → `001`, `042`, `999`). Default is 2.

## How it works

1. When you create a new project, GearFlow checks if a format is configured.
2. If yes, it calculates the next number based on the pattern and current counter value.
3. The counter is allocated inside the project creation — two projects created at the same time get different numbers.
4. If you enter a manual project code, it always overrides the auto-generated one.
5. If the auto-generated code happens to collide with an existing manual code, GearFlow bumps the counter and tries again.

## Previewing the next number

In the Settings page, a **Next project number** preview updates live as you edit the format pattern — no numbers are consumed by previewing.

## On the project form

When auto-numbering is on, the **Project Code** field shows an `Auto: <next number>` placeholder. Leave it blank to auto-generate. Enter a code manually to override.
