---
sidebar_position: 5
---

# Damage Capture

Gear comes back broken. A moving light takes a knock in transit, a cable returns with a crushed connector, a haze machine comes back from a corporate gig leaking fluid. **Damage Capture** lets you record exactly that — at the moment it lands on the return bench, with photos — instead of scribbling it on a clipboard and hoping someone follows up.

Logging damage during the return scan does two things at once. It pulls the asset out of circulation so it can't be booked onto the next job while it's broken, and it starts the paper trail you'll need if the damage is the client's responsibility. Say a hired-out Robe fixture comes back from a corporate event with a cracked lens: you photograph it on the return bench, mark it Major, note the cracked front glass, and flag it for charge-back. GearFlow holds the fixture in maintenance, raises a workshop ticket, and keeps that cost off your own books because the client is paying.

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

## Next steps

- **[Workshop](../compliance/workshop.md)** — the kanban board where auto-created repair tickets land for your service team.
- **[Maintenance](../compliance/maintenance.md)** — track the repair through to completion and back to available.
- **[Check-In & Check-Out](./check-in-check-out.md)** — the return flow where damage is captured.
