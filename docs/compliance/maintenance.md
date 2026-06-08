---
sidebar_position: 2
---

# Maintenance

The Maintenance module is your service log for every piece of gear you own — repairs, scheduled servicing, inspections, cleaning, and firmware updates. Each record links to one or more assets and tracks the work from the moment it's scheduled through to sign-off, holding the gear out of service so it can't accidentally get booked onto a project mid-repair.

For a rental manager this is where the day-to-day reality of keeping kit show-ready gets captured. A Robe moving light comes back from a festival with a flickering LED engine; you open the fixture, log a Repair record, attach a photo of the fault, and the light drops out of the available pool until the work is signed off. Later you can see every record against that fixture — how often it's failed, what it's cost you, and whether it's worth keeping in the hire stock.

## Types of maintenance

| Type | When to use |
|---|---|
| **Repair** | Fixing damaged or broken equipment |
| **Preventative** | Scheduled servicing (e.g. quarterly lubrication) |
| **Test & Tag** | Electrical safety testing records |
| **Inspection** | Visual or structural inspection |
| **Cleaning** | Sanitising, decontamination, general cleaning |
| **Firmware Update** | Updating software or firmware on equipment |

## Statuses

Every maintenance record moves through these statuses:

| Status | Meaning |
|---|---|
| **Scheduled** | Planned but not started |
| **Awaiting Parts** | Blocked on parts or components |
| **In Progress** | Active work underway |
| **QA** | Work complete, awaiting quality verification |
| **Completed** | Work finished, asset released |
| **Cancelled** | Work cancelled |

## Results

When a maintenance record is completed, set the result:

| Result | Meaning |
|---|---|
| **Pass** | Work completed successfully, asset returns to service |
| **Fail** | Work did not resolve the issue |
| **Conditional** | Partially completed or deferred |

## Creating a maintenance record

### Single asset

1. Go to any asset's detail page and click the **Maintenance** tab.
2. Click **Add Maintenance Record**.
3. Select the **Type**, **Status**, and enter a **Description**.
4. Optionally set the **Scheduled Date** and **Cost**.
5. Attach photos of the issue before and after repair.
6. Click **Save**.

The asset's status changes to **In Maintenance** while the record is in one of the active statuses (Awaiting Parts, In Progress, QA).

### Multi-asset

For batch servicing — say, re-greasing the yokes on all eight followspots before pantomime season — create one maintenance record that links to multiple assets:

1. Go to **Maintenance** and click **Add Record**.
2. Select the **Type** and enter a **Description**.
3. In the **Assets** section, scan or search for assets to add. Use the barcode scanner in continuous mode to add assets quickly.
4. Set dates, cost, and attach photos as needed.
5. Click **Save**.

The maintenance record shows all linked assets. Each asset is held in **In Maintenance** until the record is completed.

## Scheduling recurring maintenance

To set up recurring maintenance:

1. Create a maintenance record as normal.
2. Set the **Schedule** — choose a frequency (daily, weekly, monthly) and the next due date.
3. The system creates the next record automatically when the current one is completed.

Recurring maintenance is useful for:
- Weekly cleaning of high-touch equipment
- Monthly inspection of safety gear
- Quarterly preventative servicing

## Maintenance history

Every asset's maintenance history is available from:
- The **Maintenance** tab on any asset's detail page
- The **Maintenance** section in the main navigation

Each record shows the type, status, date range, cost, linked assets, and any attached photos. Use the filter to narrow by type, status, or date range.

## Notifications

Overdue maintenance generates notifications. The notification shows the first asset name and the total count for multi-asset records, so you know at a glance which items need attention.

## Deleting a maintenance record

Deleting a record releases any held assets back to their previous status. The deletion is atomic — the record, its asset links, and the status changes happen in a single transaction.

## Next steps

- **[Workshop](./workshop.md)** — the kanban board view of the repair queue, where you move records through Awaiting Parts, In Progress, and a QA Pass/Fail decision.
- **[Test & Tag](./test-and-tag.md)** — a failed electrical test can refer an item here as a Repair record automatically.
- **[Check Items](./check-items.md)** — repeated check failures on the same asset auto-create a Preventative maintenance record.
- **[Damage Capture](../warehouse/damage.md)** — major or total damage can auto-create a Repair maintenance record.
