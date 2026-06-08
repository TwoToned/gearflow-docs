---
sidebar_position: 6
---

# Warehouse Displays

**Warehouse Display** screens show a live dashboard on wall-mounted TVs or monitors in your warehouse. No login required — open a URL and the display runs full-screen.

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
