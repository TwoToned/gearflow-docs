---
sidebar_position: 2
---

# Line Items

Line items are the equipment and services on a project. They live inside the **Equipment** tab and are organised into categories and groups.

## Hierarchy

```
Category (e.g. "RF")
  └── Group (e.g. "2× Shure ULXD — £400/wk")
      └── Line Item (e.g. "Shure ULXD1 Beltpack — 1×")
```

- **Categories** are top-level organisers like "RF", "IEM", or "PA". They keep your equipment tab structured.
- **Groups** are the billable units on quotes. Each group has a title, quantity, and price. The equipment inside a group is for tracking only — the client sees the group on the quote, not the individual items.
- **Line Items** are individual pieces of equipment added from your inventory. They're indented under their parent group.

Standalone line items (not inside a group) appear directly under a category or in the Uncategorized zone and show up as their own line on quotes.

## Adding equipment

1. Open a project and go to the **Equipment** tab.
2. Click **Add Items**.
3. Search your inventory by model name, category, or asset tag.
4. Select the items and specify quantities.
5. Choose a category and group destination, or leave it uncategorised.

If the same model already exists on the project, you'll be asked whether to **combine with existing** (merge quantities) or **add as separate line item**.

### Availability check

When you add items, GearFlow checks availability. If the quantity you need exceeds what's available in the rental window, a red **OVERBOOKED** badge appears. You can still add the item — this flags that you may need to source additional stock or resolve a conflict.

Availability considers all overlapping projects, excluding finished and cancelled jobs. Items in maintenance, lost, or retired are not counted as available stock.

## Organising equipment

### Creating groups

1. Click **Add Group** in the Equipment tab toolbar.
2. Give the group a **title** (e.g. "Main PA — L/R") and **quantity** (e.g. 2).
3. The group's **price** is auto-suggested from the rates of the items inside it. You can override it manually.
4. Drag items into the group to associate them.

### Drag-and-drop reorder

Drag and drop to reorder categories, groups, and line items within the Equipment tab. Categories, groups, and items all support drag-and-drop in a single flat context.

### Moving items

Use the **Move to Category** or **Move to Group** options in a line item's dropdown menu to reorganise equipment.

## Custom line items

Custom items let you add gear that isn't in your inventory — borrowed equipment, client-supplied items, or one-off rentals.

1. In the Equipment tab, click **Add Items**.
2. Select **Custom Item**.
3. Enter a description (this becomes the display name), quantity, and unit price.

Custom items skip availability checks and won't merge with existing items. They appear on all documents and in warehouse views with a "Custom" badge.

## Services

Services like delivery, pickup, bump-in, and labour are managed in the **Labour & Logistics** tab. See [Creating Projects](./creating-projects.md) for service setup.

## Pricing

When you add equipment with a model linked to your inventory, the rate flows from the model's rate card (daily, weekly, monthly rates). The system calculates a **suggested price** based on the billing period and the model's rates.

- **Auto-optimised pricing**: The system finds the cheapest combination of months, weeks, and days using the model's rates.
- **Manual override**: You can override any line item's unit price. Overridden items show a "manual" badge.
- **Suggested price**: Groups show a suggested price calculated from their contained line items. Click to accept the suggestion or enter your own.

See [Quotes](./quotes.md) for detailed pricing information.
