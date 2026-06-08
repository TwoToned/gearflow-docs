---
sidebar_position: 3
---

# Call Sheets

A call sheet tells every crew member where they need to be and when. It's the single source of truth your audio techs, riggers, and stagehands check before a job — call time, role, venue, who to find on arrival — so nobody's standing in a car park at 6am wondering which dock to use.

GearFlow builds the call sheet straight from the crew assignments on a project, so it always reflects who's actually booked. Add a lighting op to tomorrow's bump-in and regenerate — they're on the sheet, sorted into the right slot, with their call time and phone number already filled in.

## What's on a call sheet

- **Project info block** — project name, venue, location, and site contact, alongside the schedule and equipment summary
- **Crew table** — one row per assigned crew member showing:

| Column | Detail |
|---|---|
| **Name** | Crew member |
| **Role** | e.g. FOH Engineer, Lighting Op, Stagehand |
| **Phase** | Bump-in, event, bump-out |
| **Call / wrap time** | When to arrive and when they're done |
| **Phone** | Contact number |
| **Notes** | Anything specific to that person |

- **Day headers** — when you generate for multiple days, each day gets its own section with the date, phase badges, and crew count

Crew are sorted by **call time** (earliest first), then by role, so the sheet reads top-to-bottom in the order people arrive. Project managers appear at the top.

## Generating a call sheet

Call sheets are generated from crew assignments and their shifts.

1. Open the project.
2. Click **Documents** > **Call Sheet**.
3. Optionally scope the sheet:

| Option | Result |
|---|---|
| **Date** | Single-day call sheet |
| **Date range** | Multi-day sheet with a day separator between each day |
| **Crew member** | A personalised sheet for one person |
| **All dates** | One document covering the full project |

If shifts have been created from the assignments, the call sheet uses the shift-specific times. Otherwise it falls back to the assignment start and end times.

## Multi-day call sheets

When you select multiple dates, the PDF inserts a **day header** between each day showing the date, phase badges, and crew count, so a multi-day run reads cleanly as one document.

Take a three-day theatre fit-up: day one is a rigging and lighting bump-in with a small crew, day two adds audio and the full stage team, day three is the show with running crew on standby. Generate one **All dates** sheet and each day is clearly separated, with the right people and call times under each header — one PDF to pin on the production office wall.

:::tip
For a personalised version, scope the sheet to a single **crew member**. That tech gets a clean sheet covering only their own calls across the run — handy to text or hand out individually.
:::

## Next steps

- **[Crew](../crew/overview.md)** — manage crew members, roles, and the assignments that feed the call sheet.
- **[Timeline PDF](./timeline.md)** — the logistics counterpart: a date-grouped run of deliveries, bump-in, and pickups.
- **[Template Designer](./template-designer.md)** — customise the crew table columns and branding.
