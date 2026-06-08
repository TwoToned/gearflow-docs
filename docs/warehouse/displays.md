---
sidebar_position: 6
---

# Warehouse Displays

A **Warehouse Display** is a live dashboard built for a wall-mounted TV or monitor on the warehouse floor — big text, dark background, readable from across the room, no login and no mouse. It answers the question every prep crew asks first thing in the morning: what's going out today, what's coming back, and is it all packed yet?

On a Friday before a festival weekend, the screen by the loading dock shows three dispatches due before noon, each with a green/amber/red pack-progress indicator. The crew can see at a glance that the lighting package for the main stage is fully packed and green, but the audio job is still amber with cables outstanding — so they know where to put the next pair of hands without anyone shouting across the warehouse. Returns due that afternoon sit right alongside.

![A warehouse screen keeps dispatch and prep status visible to the whole floor](/img/screenshots/warehouse.png)

## What displays show

Each display cycles through automatically, showing:

| Section | Content |
|---|---|
| **Today's Dispatch** | Projects with deliveries or start dates today. Shows delivery time, destination, vehicle, and pack progress (green/amber/red). |
| **Returns Due Today** | Projects with pickups or end dates today. Shows due time and expected item count. |
| **Prep Status** | Cards for projects being prepped. Shows packed/total items with a progress bar. |
| **Upcoming (7 days)** | A day grid showing dispatch and return counts for the next week. |
| **Alerts** | Unprepped dispatches, partially packed dispatches, and overdue returns. |

## Display layouts

| Layout | Shows |
|---|---|
| **Standard** | Full dashboard — dispatch, returns, prep status, 7-day forecast, alerts |
| **Compact** | Dispatch + returns only, with larger text |
| **Dispatch-only** | Today's dispatch with large prep status cards |

## Setting up a display

1. Go to **Settings > Displays**.
2. Click **Create Display**.
3. Give it a **name** (e.g. "Prep Station 1").
4. Optionally select a **location** scope — the display will only show projects at that location.
5. Choose a **layout**.
6. Copy the generated **display URL**.

Open the URL on any device — tablet, TV, or computer — and it displays the warehouse dashboard. The screen auto-refreshes every 60 seconds with no interaction needed.

## Managing display tokens

From **Settings > Displays** you can:

- **Edit** — change the name, location scope, or layout. Copy the URL again from the edit dialog.
- **Regenerate URL** — invalidates the old URL and generates a new one. Use this if a display URL was shared outside your team.
- **Revoke** — delete the display token permanently. The URL stops working immediately.

## Display URLs

Display URLs look like `/warehouse/display/{token}` where `{token}` is a 64-character hex string. The token is stored securely (hashed in the database) and can only be viewed through the Settings UI.

## Next steps

- **[Check-In & Check-Out](./check-in-check-out.md)** — the prep and deploy actions that drive the pack-progress indicators.
- **[Pull Sheets](./pull-sheets.md)** — the printed pick list behind each dispatch on the board.
