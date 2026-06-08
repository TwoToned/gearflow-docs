---
sidebar_position: 3
---

# Asset Utilization

The Utilization page answers a fundamental question: **is this gear paying for itself?** It shows per-asset booking rates, revenue, costs, and net contribution so you can identify your best-performing gear and find equipment that's costing you money.

It turns gut feel into numbers. You might suspect that rack of older LED pars never goes out, or that one hazer costs more in repairs than it earns — utilization confirms it. Filter to idle stock and you'll see the wireless mic kit that's booked 4% of the year and would pay for itself as a sub-hire. Filter to loss-making assets and you'll find the moving light whose fan replacements have quietly outrun its hire income. Either way you walk into the next purchasing or retirement decision with the figures in hand.

## Accessing utilization

Go to **Reports > Utilization** or navigate to `/utilization`.

## What's calculated

### Revenue

Revenue is calculated from line items where a specific asset was assigned (not model-only line items). For checked-out items, the system counts the rental rate as booked. This avoids fabricating allocations for gear that hasn't been assigned yet.

### Booking days

The total number of days the asset was booked across all non-cancelled projects. Calculated as the sum of `(rental end − rental start + 1)` for every line item with this asset assigned, clamped to the requested period.

### Costs

Two cost types are tracked per asset:

| Cost type | Source |
|---|---|
| **Maintenance Cost** | Sum of all maintenance record costs linked to this asset within the period |
| **Damage Cost** | Sum of damage event costs (actual or estimated), minus any charge-backs the client paid for |

### Net contribution

The bottom line per asset:

```
Net Contribution = Revenue − Maintenance Cost − Damage Cost (after charge-back)
```

A positive number means the asset is earning more than it costs to maintain. A negative number means you're spending more on it than it brings in.

## Period selector

By default, the report shows data **since the asset was created**. Use the period selector to choose:

- **30 days**
- **90 days**
- **365 days**
- **All time**

The booking rate percentage is calculated as `booking days ÷ period days`.

## Filters

### Idle filter

Show only assets with low or zero booking rates — your **dead stock**. These are items sitting in the warehouse that rarely get deployed. Use this view to decide what to sell or repurpose.

### Lossy filter

Show only assets with negative net contribution — gear that's costing more than it earns. These are candidates for rate increases, repairs, or retirement.

## Using the data

The utilization table is sortable by any column. Common workflows:

1. **Find idle gear** — apply the Idle filter, review assets with 0% booking rate
2. **Find loss-making gear** — apply the Lossy filter, compare maintenance costs against revenue
3. **Review high performers** — sort by Net Contribution descending to see your most profitable assets
4. **Compare models** — use the report builder to group utilization by model

## Limitations

Current revenue calculations only include line items where a specific asset was assigned at checkout. Model-only line items (where the asset hasn't been individually assigned) don't contribute to revenue yet. This avoids showing revenue numbers you can't verify, and the data becomes more accurate as your team assigns specific assets at checkout time.

## Next steps

- **[Built-in Reports](./built-in-reports.md)** — pair utilization with Model Popularity and Maintenance Costs by Type for the full picture before a purchase or retirement call.
- **[Custom Reports](./custom-reports.md)** — group utilization by model or category to compare whole product lines, not just individual assets.
- **[Maintenance](../compliance/maintenance.md)** — the records behind the maintenance-cost figures that eat into net contribution.
