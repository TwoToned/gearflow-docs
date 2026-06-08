---
sidebar_position: 5
---

# Damage Capture

Report damage on returning equipment straight from the warehouse return flow. Camera-first capture with severity, notes, and optional client charge-back.

## Reporting damage

1. In the **Return** tab, select an item with damage.
2. Click **Report Damage** to open the damage dialog.
3. The camera opens to the rear-facing lens — take one or more photos of the damage.
4. Select a **severity**:

| Severity | What happens |
|---|---|
| **Minor** | Damage event is recorded only. No workshop ticket. |
| **Major** | Damage event recorded + workshop repair ticket auto-created. Asset held in maintenance. |
| **Total** | Damage event recorded + workshop repair ticket auto-created. Asset held in maintenance. |

5. Add notes about the damage.
6. Optionally mark the damage for **charge-back** to the client.

Every damage event and linked repair ticket is created in a single transaction — no half-written state.

## Charge-back tracking

When you mark damage as charge-back, the repair cost is attributed to the client rather than your business. This flows into project P&L reporting — charged-back damage is excluded from your operational damage costs.

## Workshop tickets

Major and total damage automatically creates a maintenance record with:

- Type: `REPAIR`
- Status: `SCHEDULED`
- Linked asset (held in `IN_MAINTENANCE`)

The repair ticket appears on your **Workshop Kanban** board for your service team to action.

## Damage log

Browse every damage event across your organisation at `/damage`. The log shows:

- Asset name and tag
- Severity
- Status (`OPEN`, `UNDER_REPAIR`, `RESOLVED`, `CHARGED_BACK`)
- Photos
- Estimated and actual costs
- Whether it was charged back
- Linked maintenance record

Filter and search to find specific events. Each damage event links back to the originating project and line item.
