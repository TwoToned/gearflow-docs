---
sidebar_position: 3
---

# Stocktake

A stocktake is a physical inventory count: you walk a location, scan everything that's actually on the shelf, and GearFlow tells you where reality and the system disagree. It's how you catch the slow drift that creeps into every rental warehouse — a fixture that never got checked back in, a box of cables that walked onto a job and never returned, stock sitting in the wrong room.

The natural time to run one is before your busy season. A theatre supplier doing a full count in late summer before the autumn season finds that three Source Four bodies the system thinks are available are actually still in a road case from a show that struck months ago, and that the gel stock is half what the books claim. Better to know now than when a designer is waiting on them. You pick a location, scan everything physically present, and the system flags every discrepancy — missing items, unexpected items, wrong locations, quantity mismatches. Resolve each one and inventory updates on completion.

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

Stocktake counts that reveal shortfalls feed into the Reorder dashboard, so you can create supplier orders to restock what's low. If your count showed the gel stock running thin, those bulk items will surface on the reorder queue ready to turn into a draft PO before the season starts.

## Next steps

- **[Reorder](./reorder.md)** — turn the shortfalls a count reveals into draft purchase orders.
- **[Damage Capture](./damage.md)** — log condition issues you spot while counting.
- **[Check-In & Check-Out](./check-in-check-out.md)** — the deploy/return flow that keeps inventory accurate between counts.
