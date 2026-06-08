---
sidebar_position: 3
---

# Stocktake

**Stocktake** is a periodic inventory count. You pick a location, scan everything physically present, and the system flags every discrepancy — missing items, unexpected items, wrong locations, quantity mismatches. Resolve each one and inventory updates on completion.

## Creating a stocktake

1. Go to **Warehouse > Stocktake**.
2. Click **New Stocktake**.
3. Pick a **location** to count.
4. Choose a **scope**:

| Scope | What it counts |
|---|---|
| **Full** | Every asset at this location |
| **Category** | Assets in a specific category only |
| **Spot Check** | Targeted count of specific assets |

The session opens in `DRAFT` with an expected-item list snapshotted from current inventory.

## Scanning during stocktake

Open the stocktake session and start scanning. Each scan marks an asset as found. The system compares what you scanned against what it expected to find.

- **Found items** — asset matches what the system expected
- **Missing items** — expected but not scanned
- **Unexpected items** — scanned but not on the expected list
- **Wrong location** — scanned at this location, but the system thought it was elsewhere
- **Quantity mismatch** — bulk asset found count doesn't match expected count

## Stocktake state machine

```
DRAFT → IN_PROGRESS → REVIEWING → COMPLETED
                                           
CANCELLED (from any state)
```

| Status | What happens |
|---|---|
| **DRAFT** | Snapshot taken, not yet counting |
| **IN_PROGRESS** | Scanning items |
| **REVIEWING** | Scanning complete, reviewing discrepancies |
| **COMPLETED** | Discrepancies resolved, inventory updated |
| **CANCELLED** | Stocktake abandoned, no changes applied |

## Reviewing and resolving discrepancies

When you finish scanning, the session moves to `REVIEWING`. Every discrepancy is listed:

1. Review each flagged item.
2. Choose a resolution action — mark as lost, adjust quantity, or update the recorded location.
3. The system applies each resolution in a transaction.

For bulk assets, quantities are floored at zero — a counted shortfall can't drive stock negative.

## Finalising

Once all discrepancies are resolved, complete the stocktake. All resolutions are written to live inventory — asset statuses, quantities, and locations are updated. A completed stocktake summary is available for your records.

## Integration with reorder

Stocktake counts that reveal shortfalls feed into the Reorder dashboard, so you can create supplier orders to restock what's low.
