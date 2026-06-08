---
sidebar_position: 0
---

# Inventory

The **Inventory** module is the single source of truth for every piece of gear your company owns — from a flagship lighting console down to a box of XLR cables. It tracks what you have, where it is, what condition it's in, and what it rents for, so the office can quote accurately and the warehouse can pick with confidence.

The foundation of getting this right is choosing the correct **asset type** for each item. GearFlow models gear four ways — serialised, bulk, kit, and accessory — because a $40,000 moving light and a $4 cable tie need very different tracking. Pick the right type up front and everything downstream (quoting, pick sheets, returns, maintenance, reports) behaves the way a busy rental manager expects.

![The Inventory list — browse, search, and filter your entire equipment catalogue](/img/screenshots/inventory.png)

## Asset types

### Serialised assets

A serialised asset is a specific, individually tracked unit. Each one carries its own **asset tag** (barcode or QR), serial number, and full status lifecycle.

Reach for serialised tracking when you need to know exactly *which* unit went where, when it's due back, and what condition it returned in — your Martin MAC moving lights, a d&b line array, a wireless mic frequency that's coordinated for a specific venue, or a lighting console worth more than the truck it ships in. When a fixture comes back with a cracked lens, you want to know it was unit `TTP-00042` so the maintenance history follows that exact body.

### Bulk assets

A bulk asset is quantity-tracked rather than unit-tracked. Instead of a tag per item, GearFlow tracks a **total quantity** and a live **available quantity**.

Use bulk tracking where individual serial numbers buy you nothing: "120 × XLR 3m cables", "40 × G-clamps", "60 × sandbags", or "200 × cable ties". Nobody cares which of the 120 XLRs went out — they care that 86 are on the festival and 34 are still on the shelf. Bulk assets keep that count honest without a barcode on every cable.

### Kits

A kit is a reusable container that groups several assets so they rent as one line item, with one tag and one scan. An **RF Rack Kit** might hold 4 wireless receivers, 4 beltpacks, and 4 lavalier mics in a rack case — picked, deployed, and returned as a single unit. Kits can hold both serialised and bulk assets and can even nest inside other kits (a "Corporate AV Package" containing the RF Rack Kit plus a Portable PA Kit).

See the **[Kits](./kits.md)** page for details.

### Accessories

Accessories are child items that are *inseparable* from a parent asset — the clamp and safety bond that must travel with every moving light, or the power cable and DMX terminator a fixture can't work without. You attach them once and they cascade onto projects automatically when the parent is added, deploy when the parent deploys, and check back in when the parent returns. No more discovering at load-out that 30 lights went to site with only 28 clamps.

Unlike a kit, an accessory has no tag, no separate booking, and no separate price of its own.

See the **[Accessories](./accessories.md)** page for details.

## Categories

Categories organise your inventory into a hierarchy. You can create parent categories (e.g. "Lighting") and child categories (e.g. "Moving Lights", "Conventional", "LED"). Browse, filter, and report on equipment by category.

See the **[Categories](./categories.md)** page for details.

## Asset tags

Every serialised asset and kit gets an auto-generated asset tag. Your organisation's tag format is configured in **Settings > Inventory** — set a **prefix** (e.g. `TTP`), **digit count** (e.g. 5), and the system increments automatically (TTP-00001, TTP-00002…). You can override the suggested tag when adding equipment.

## Asset status lifecycle

Every serialised asset moves through a status lifecycle:

| Status | Description |
|---|---|
| **Available** | In the warehouse, ready to deploy |
| **Reserved** | Set aside for an upcoming project |
| **Deployed** | Checked out to a project |
| **In Maintenance** | Out for repair or servicing |
| **Retired** | Taken out of service permanently |
| **Lost** | Reported missing during a return |

## Next steps

- **[Equipment](./equipment.md)** — add your first serialised and bulk assets, set up models, and learn how asset tags are generated.
- **[Categories](./categories.md)** — build the category hierarchy that organises your catalogue (Lighting > Moving Lights, Audio > Wireless).
- **[Kits](./kits.md)** — bundle gear into reusable containers that rent as one line item.
- **[CSV Import / Export](./csv-import.md)** — migrating from a spreadsheet? Bring your whole catalogue in at once.
