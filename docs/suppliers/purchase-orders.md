---
sidebar_position: 1
---

# Purchase Orders

A purchase order is your formal record of buying something from a supplier — gear you're adding to inventory, or consumables you're burning through on a job. Unlike a [sub-hire](./sub-hires.md), a PO is for things you keep: cables you'll re-rent for years, lamps you'll fit to a fixture, or a new moving light joining the fleet.

A typical week in a rental house generates a string of them. You're down to your last reel of gaffer tape and a box of TrueCon cables before a festival weekend, so you raise a PO to your usual electrical wholesaler. A client has booked a long corporate run and you decide to buy two more Shure ULXD beltpacks rather than sub-hire them every month. Each of these becomes a PO so you always know what's on order, what it cost, and when it's due in.

## Creating a purchase order

1. Go to **Suppliers** and open a supplier's detail page
2. Go to the **Orders** tab and click **New Order**

Or from a project, create a PO against the project's needs.

Each PO records:

- **Order number** — auto-generated, unique per organisation
- **Type** — Purchase, Sub-hire, Repair, or Other
- **Status** — Draft, Submitted, Confirmed, Partial, Received, Cancelled
- **Supplier** — who you're ordering from
- **Project** (optional) — link to a project
- **Dates** — order date, expected date, received date
- **Items** — description, quantity, unit price, line total

## Order items

Add items to the PO with:

- Description or model
- Quantity
- Unit price (line total is calculated automatically)
- Optional notes

Totals are recalculated automatically when items change. GST (10%) is applied on top of the subtotal.

## Order statuses

| Status | Meaning |
|---|---|
| **Draft** | Being prepared, not yet sent to supplier |
| **Submitted** | Sent to supplier, awaiting confirmation |
| **Confirmed** | Supplier has confirmed the order |
| **Partial** | Some items received |
| **Received** | All items received (date auto-recorded) |
| **Cancelled** | Order cancelled |

## Managing orders

From the supplier detail page's **Orders** tab you can:

- View all orders for that supplier
- Click an order to see full details
- Update the status as the order progresses
- Edit items on draft orders

Orders link to your asset records — when received, items can be added to your inventory. Mark the PO as **Received** and GearFlow stamps the received date automatically, so the new ULXD beltpacks or that pallet of TrueCons are ready to enter your registry.

## Next steps

- **[Sub-Hires](./sub-hires.md)** — when you need to hire gear in for a single job rather than buy it.
- **[Reorder](../warehouse/reorder.md)** — let GearFlow flag low-stock consumables and raise the draft POs for you.
- **[Suppliers](./overview.md)** — manage the vendors your orders are placed against.
