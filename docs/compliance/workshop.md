---
sidebar_position: 3
---

# Workshop

The **Workshop** page is a kanban board for your repair queue. Instead of digging through maintenance records one at a time, your service tech sees every job at a glance and drags it across the board as work progresses — from first assessment, through parts and bench work, to a final quality check. It's a live view over your [maintenance records](./maintenance.md), not a separate system, so anything you log as a repair shows up here automatically.

This is the bench tech's home screen. After a summer festival run, a dozen tickets land in the queue: a moving light with a dead fan, a hazer that's lost pressure, a snake with a crushed connector. The tech parks the hazer in **Awaiting Parts** while a seal kit is on order, pushes the moving light into **In Progress**, and when the snake is reterminated it goes to **QA** for a second set of eyes. Only a QA **Pass** releases gear back to Available — nothing sneaks back onto the floor untested.

## Board columns

| Column | What it holds |
|---|---|
| **Awaiting Assessment** | New repairs queued for initial inspection |
| **Awaiting Parts** | Repairs held up while parts are ordered |
| **In Progress** | Active work being done |
| **QA** | Work complete, waiting for quality check — cards here get **Pass** and **Fail** buttons |
| **Completed** | Finished work, automatically archived from the active board |

## Creating a repair ticket

Repair tickets come from two sources:

1. **From an asset** — on any asset's detail page, go to the **Maintenance** tab and add a record with type **Repair**. It appears in the Scheduled column.

2. **From damage capture** — when damage is logged as major or total, the system auto-creates a Repair maintenance record that lands in the Awaiting Assessment column.

3. **Directly in the Workshop** — click **Add Ticket** on the workshop page and fill in the asset, description, and priority.

## Moving items through stages

To move a card forward or back a stage, click the arrow buttons on the card. Each click advances or retreats one column:

```
Awaiting Assessment → Awaiting Parts → In Progress → QA → Completed
```

You can cancel any ticket by clicking the **Cancel** action on the card.

### QA decision

When a card reaches the **QA** column, two buttons appear:

- **Pass** — sets the status to **Completed** and releases the asset back to **Available**
- **Fail** — keeps the card in QA (or moves it back) and the asset stays in **In Maintenance**

## Hold and release

All three in-progress statuses — **Awaiting Parts**, **In Progress**, **QA** — hold the asset in **In Maintenance** status. The asset cannot be deployed until it is released.

Release happens when:
- A QA card passes → asset returns to **Available**
- A card is cancelled → asset returns to its previous status

## Card details

Each kanban card shows:
- Asset tag and name
- Model and serial number
- Issue description
- Up to 4 photo thumbnails attached to the repair
- Days since the ticket was created
- Priority indicator

Click any card to open the full maintenance record where you can edit details, add photos, update costs, or change the status.

## The maintenance state machine

The workshop board is a view over the `MaintenanceRecord` model. The full status workflow is:

```
Scheduled → Awaiting Parts → In Progress → QA → Completed
                                                 (Cancelled at any point)
```

The **Scheduled** column exists in the maintenance lifecycle but is not shown on the active board — tickets only appear once they enter Awaiting Assessment.

## Integration points

- **Damage capture** links to the Workshop — major damage auto-creates tickets in the Awaiting Assessment column
- **Maintenance photos** attached to a record are shown as thumbnails on workshop cards (up to 4 per card)
- **Notifications** alert you when a repair has been in QA too long without a decision

## Next steps

- **[Maintenance](./maintenance.md)** — edit the underlying record, log costs, and add before/after photos that show up as card thumbnails.
- **[Test & Tag](./test-and-tag.md)** — see how a failed electrical test refers an item into the repair queue.
- **[Compliance & Safety overview](./overview.md)** — how the Workshop fits alongside testing, maintenance, and check items.
