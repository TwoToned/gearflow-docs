---
sidebar_position: 1
---

# Check-In & Check-Out

GearFlow's warehouse uses a **Prep → Deploy → Return** flow for every project. This page covers each phase in detail.

---

## Prep phase

The Prep tab shows all line items on the project that aren't yet packed. From here you scan or browse items, assign them to containers, and confirm packing.

### Scanning items

Use the scan input at the top of the Prep tab. Point your scanner at an asset barcode and the system instantly finds the matching line item and marks it as packed. If the item isn't on the project yet, scanning adds it automatically and marks it packed in one step.

### Browsing and manual prep

If you don't have a scanner, browse the item list and use the prep checkbox on each row. Bulk items (e.g. "50 XLR cables") can be prepped one unit at a time — each unit gets its own row.

### Container assignment

Next to the scan input is a container dropdown. Select a container — either a physical case asset from your inventory or type a custom name — and every item you prep is tagged with that container. This grouping carries through to the Deploy and Return tabs.

When you prep the first item into a case asset, the case itself is automatically added to the project as a container line item.

### Packing confirmation

For items with check items assigned (test-and-tag), each unit must pass through the check queue before it can be packed. Items without checks are packed directly.

### Sub-hire items

Third-party gear (sub-hire items) has no internal asset record. These items skip the asset picker and are prepped directly without requiring a scanned asset tag.

---

## Deploy phase

The Deploy tab shows every prepped item that's ready to go. Items are grouped by container so you can see what's packed in each case.

### Deploying items

Select items individually or use the container header to select everything in a case. Click **Deploy** and the system marks each item as `CHECKED_OUT`.

- **Container auto-deploy**: When every item in a container has been deployed, the container itself is automatically deployed.
- **Partial deploy**: Deploy only a subset of prepped items. Remaining items stay in the Prep tab.

### Kits and prep-kits

Kits and prep-kits appear as expandable groups. Before deploying, you'll see a verification dialog showing how many items are verified. You can:

- Deploy all items (verified or not)
- Deploy only verified items
- Manually toggle verification circles on individual kit children and grandchildren

The system processes the entire kit as an atomic transaction — either everything deploys, or nothing does.

### Accessories

Permanent accessories (e.g. a clamp and safety bond that always travel with a light) cascade automatically. When you deploy a parent asset, its accessories deploy with it — no separate scan needed. They appear as read-only indented rows under the parent.

---

## Return phase

The Return tab shows every deployed item due back. Each item gets a condition assessment as it's checked in.

### Condition tracking

For each returned item, record one of:

| Condition | Result |
|---|---|
| **Good** | Asset returns to `AVAILABLE` status |
| **Damaged** | Asset moves to `IN_MAINTENANCE`, auto-creates a workshop ticket for major/total damage |
| **Missing** | Asset moves to `LOST` status |

### Container grouping

Items are grouped by their prep container, matching the Deploy tab layout. Return all items in a container and the container line item auto-returns.

### Accessory cascade

Returning a parent asset automatically cascades the return to its deployed permanent accessories. The system only returns accessories tied to that specific unit — shared bulk accessories release one unit at a time.

### Kits and prep-kits

Kit return works the same as deploy: verification dialog, atomic transaction, expandable groups. Partially deployed kits appear in **both** the Deploy and Return tabs with the relevant children in each.

### Force return

If an asset or kit is stuck in `CHECKED_OUT` (e.g. a project was deleted while gear was still deployed), use **Force Return** to reset it to `AVAILABLE`. Available on asset detail pages, kit detail pages, and in bulk from the asset list.
