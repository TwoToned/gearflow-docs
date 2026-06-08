---
sidebar_position: 2
---

# Sub-Hires

A sub-hire is when you rent gear from another supplier for a specific project — you don't own the gear, you're hiring it in on behalf of your client. GearFlow tracks the full order: what you're paying the supplier, what you're charging the client, and the margin.

## Managing sub-hires

Sub-hires are managed from a project's **Equipment** tab. Open a project, scroll to the **Sub-Hire Orders** section to see all sub-hires for that project.

Click **Add** > **Sub-hire** to create a new sub-hire order. Choose the supplier, enter the hire dates and notes, then add items.

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

Sub-hire costs appear in the **Costs** section of the project summary alongside service and labour costs. Only Confirmed, On Hire, and Returned sub-hires are included in cost calculations.
