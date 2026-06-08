---
sidebar_position: 2
---

# Sub-Hires

A sub-hire is gear you rent in from another supplier for a specific job because you don't own it, or don't own enough of it. You're the one on the hook to the client, but the kit comes from someone else's warehouse.

Every rental house does this constantly. A festival main stage calls for 24 moving heads and you only own 16, so you sub-hire the extra eight Robe MegaPointes from a friendly local supplier. A theatre production needs a grand piano mic'd up and you hire in a specialist DPA package. The job won't go out the door without that gear, so it has to live on the project — but you're paying a third party for it, and you need to know your margin.

That's what a sub-hire order tracks: what you pay the supplier (**cost**), what you charge the client (**charge**), and the difference. It replaces the old habit of typing sub-hired gear in as free-text line items with no cost behind them.

## Managing sub-hires

Sub-hires are managed from a project's **Equipment** tab. Open a project, scroll to the **Sub-Hire Orders** section to see all sub-hires for that project.

Click **Add** > **Sub-hire** to create a new sub-hire order. Choose the supplier, enter the hire dates and notes, then add items. For the festival example above, you'd pick your moving-light supplier, set the hire window to match the festival load-in and load-out, and add eight Robe MegaPointes.

If you've already tried to add gear to the project and GearFlow warned you that stock was short, the **"Sub-hire N units instead"** shortcut on that warning jumps straight into this flow with the shortfall pre-filled.

## Sub-hire order structure

Each sub-hire order contains:

- **Supplier** — who you're hiring from
- **Items** — description, model, quantity, cost (what you pay), charge (what the client pays)
- **Groups** — optional grouping of items (e.g. "Shure ULXD Kit") with cost/charge overrides
- **Status** — Draft, Confirmed, On Hire, Returned, Cancelled
- **Payment status** — Unpaid, Partially Paid, Paid
- **Placement** — where items appear on the project equipment list (category and group)
- **Attachments** — supplier quotes, invoices, POs

## Dual pricing

Every sub-hire item has two prices:

| Price | What it is |
|---|---|
| **Unit cost** | What you pay the supplier |
| **Unit charge** | What you charge the client |

The system tracks both so you can see your margin on every order. The **unit charge** flows through to the project pricing — the client sees this on their quote.

Supplier rates are remembered: next time you add the same model from the same supplier, the cost field is pre-filled.

## Status flow

```
Draft → Confirmed → On Hire → Returned
  ↘         ↘                      ↘
Cancelled  Cancelled             Cancelled
```

- **Draft** — items appear on the equipment tab with an amber "Unconfirmed" badge
- **Confirmed** — gear is locked in; project totals include the sub-hire cost
- **On Hire** — gear has been collected / delivered (set from warehouse, not the sub-hire dialog)
- **Returned** — gear has been sent back to the supplier

## Display toggles

Each item and group has two toggles:

1. **Show on quote** — whether the item appears on the client's quote and invoice
2. **Show as sub-hired** — whether a "sub-hired" indicator shows on client documents

This lets you track costs internally without exposing supplier details to the client.

## Margin tracking

Sub-hire costs are included in the project's financial summary:

```
Project margin = total - service costs - labour costs - sub-hire costs
```

Sub-hire costs appear in the **Costs** section of the project summary alongside service and labour costs. Only Confirmed, On Hire, and Returned sub-hires are included in cost calculations — a Draft order you're still pricing won't drag down the margin until you commit to it.

## In the warehouse

Sub-hired gear flows through prep, deploy, and return just like your own kit. Because there's no internal asset record for someone else's MegaPointes, the items skip the scanner's asset picker and are prepped directly. When a group is involved (say a "Robe MegaPointe ×8" group), the warehouse shows it as a parent line with the individual units indented underneath, the same way kits behave. See **[Check-In & Check-Out](../warehouse/check-in-check-out.md)**.

## Next steps

- **[Check-In & Check-Out](../warehouse/check-in-check-out.md)** — prep, deploy, and return sub-hired gear alongside your own.
- **[Purchase Orders](./purchase-orders.md)** — for gear you're buying to keep rather than hiring in.
- **[Suppliers](./overview.md)** — manage the vendors you sub-hire from.
