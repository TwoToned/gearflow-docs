---
sidebar_position: 4
---

# Reorder

The **Reorder** dashboard at `/warehouse/reorder` lists every bulk item that's at or below its reorder threshold, grouped by preferred supplier. Tick items and generate draft purchase orders in one click.

## How it determines low stock

A bulk asset appears on the reorder list when its **available quantity** is at or below its **reorder threshold**. The threshold is set on each bulk asset's detail page.

For each candidate, the system suggests an order quantity to bring stock back up to `threshold × 1.5`, never less than 1. You can edit this quantity when creating the draft.

## Creating purchase orders

1. Go to **Warehouse > Reorder**.
2. Review the list of low-stock items, grouped by supplier.
3. Tick the items you want to reorder.
4. Click **Create Draft Orders**.

The system creates one draft **SupplierOrder** per supplier, pre-filled with the suggested quantities and the last recorded per-unit purchase price. Each bulk asset gets its `lastReorderedAt` timestamp updated.

## From draft to order

Draft orders appear in the existing **Suppliers** workflow. Review, adjust quantities if needed, and submit the order to your supplier.

## Marking preferred suppliers

Set a preferred supplier on any bulk asset from its detail page. This determines how items are grouped in the reorder dashboard and which supplier the draft order is created for.

## Integration with stocktake

Stocktakes that reveal shortfalls automatically feed items into the reorder queue — a discrepancy count that shows less stock than expected means the item will appear on the reorder dashboard when you next check.
