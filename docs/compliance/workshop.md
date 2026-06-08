---
sidebar_position: 3
---

# Workshop

The **Workshop** page (sidebar: **Workshop**) is a kanban board that shows your repair queue. It's a visual view over maintenance records — cards move through columns as work progresses, and a Completed lane archives finished jobs.

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
