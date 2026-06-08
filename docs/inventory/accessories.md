---
sidebar_position: 3
---

# Accessories

An **accessory** is a child item that is inseparable from a parent asset — the hook clamp and safety bond that must travel with every moving light, the powerCON cable a fixture won't turn on without, the DMX terminator on a media server. You attach it to the parent once, and from then on GearFlow carries it everywhere the parent goes: onto quotes, onto pick sheets, out the door at deploy, and back onto the shelf at return.

This solves a problem every rental house knows by heart. You quote 30 moving lights, the crew loads 30 lights, and you find out at the venue that only 26 clamps made it onto the truck. Accessories make that impossible — bind the clamp and bond to the light once, and they're counted on every booking automatically, so what leaves the warehouse is always complete.

## How accessories are different from kits

Accessories are **not** kits. A kit is a container with its own asset tag that rents as a standalone unit. An accessory is inseparable from its parent — no separate tag, no separate booking, no separate price. If the parent goes on a project, the accessories go with it. If the parent returns, the accessories return.

## Two types of accessories

### Ships With (default)

The parent "ships with" N units of a bulk asset. The N units are drawn from the live warehouse pool at deploy time, just like a normal booking. Use this for accessories that you share across your inventory — like clamps that can go on any light, or adaptors that get pooled.

### Dedicated

N units are permanently pulled out of the shared pool when you attach them, and restored when you detach. Use this for accessories that are permanently assigned to a specific parent asset — like a hard-wired power cable or a custom mounting bracket.

## Adding accessories to equipment

### At the asset level (specific unit)

1. Open the asset's detail page.
2. Scroll to the **Accessories** section.
3. Click **Add Accessory**.

#### Adding a serialised accessory

1. Search for the serialised asset (e.g. "Safety Bond #004").
2. Select it. The accessory is added and appears under the parent.
3. A serialised accessory can only have one parent at a time. If it's already attached elsewhere, GearFlow shows a warning.

#### Adding a bulk accessory

1. Search for the bulk asset (e.g. "G-Clamp").
2. Enter the **quantity** and choose the **allocation mode** (Ships With or Dedicated).
3. Click **Add**. The bulk accessory appears with its quantity.

### At the model level (default for all units)

You can set default bulk accessories on a model so every asset of that model inherits them.

1. Open the model's detail page.
2. Scroll to the **Accessories** section.
3. Click **Add Accessory** and select a bulk asset.
4. Enter the quantity and mode (Ships With only — Dedicated at model level would drain your whole shelf).
5. Click **Add**.

Every asset of this model now ships with these accessories by default.

### Asset-level overrides

If a specific unit needs more (or fewer) accessories than the model default, add the accessory directly on the asset's detail page. Asset-level settings override model-level defaults for that specific unit.

## Removing accessories

1. On the asset or model detail page, go to the **Accessories** section.
2. Find the accessory and click **Remove**.
3. For **Ships With** accessories, the units return to the available pool. For **Dedicated** accessories, the units are restored.
4. Removing a model-level accessory doesn't affect projects where it was already added — those line items stay on the project.

## How accessories work on projects

### Adding a specific asset to a project (office)

When you add a specific serialised asset to a project in the office, its accessories are automatically added as child line items. You'll see them indented under the parent with an "Accessory" badge. The parent line shows as expandable.

### Adding by model (quoting)

When you add a line item by model (no specific asset selected), the model's default bulk accessories are added automatically, scaled by the line quantity. So "2x VL 3500 Spot" also adds 2x of each model accessory. This means accessories appear on quotes and documents immediately, without waiting for warehouse prep.

### Adding in the warehouse

When a warehouse operator scans a specific unit at prep or deploy time, any asset-level accessories (serialised and bulk) are materialised on the project. If the office already added model-level accessories, the warehouse scan reconciles them — duplicates are skipped, quantities are synced.

### The "Include accessories" checkbox

When adding equipment to a project, you'll see an **Include accessories** checkbox. It's checked by default. Uncheck it to add the asset without its accessories — useful for return-only flows or when accessories are managed separately.

## Deploy and return

### Deploying

In the warehouse deploy tab, accessories appear as read-only indented rows under their parent. You don't need to scan or verify them separately — they deploy automatically when the parent is deployed.

### Returning

Same on return. Scanning the parent returns everything — asset, serialised accessories, and bulk accessories. For multi-quantity lines (e.g. 5 lights, each with a clamp), returning a single unit only returns that unit's accessories.

### Scan routing

If a warehouse operator scans an accessory tag instead of the parent, the UI shows "Scan the parent instead" and directs them to the correct asset.

## Bulk Check-In

For accessory-heavy jobs (e.g. 50 lights, each with a clamp and safety bond), use the **Bulk Check-In** tab on the warehouse project page.

1. Go to the project's **Warehouse** tab.
2. Click the **Bulk Check-In** tab.
3. You'll see a project-wide list of every item due back, grouped by type:
   - **Accessories** — clamps, safety bonds, adaptors
   - **Assets** — the lights themselves
   - **Bulk items** — shared consumables
   - **Sub-hire** and **Custom items**
4. Each row shows the **name**, **model number**, an **item-type badge**, and the **Due Back** count.
5. Enter the quantity you're returning in the number input (defaults to the full outstanding amount).
6. Select a condition for the batch (Good, Damaged, Missing).
7. Click **Check In**.

Bulk Check-In returns everything in one action — no need to scan each parent's accessories one at a time.

## Mobile considerations

On mobile, accessory sections are shown as expandable cards. Adding and removing accessories uses the same flow as desktop. The Bulk Check-In tab is available in the mobile warehouse view with touch-optimised number inputs.

## Next steps

- **[Equipment](./equipment.md)** — manage the parent assets and models your accessories attach to.
- **[Kits](./kits.md)** — for gear that rents as a standalone bundle with its own tag and price, use a kit instead of an accessory.
- **[Custom Fields](./custom-fields.md)** — track extra data on the assets that carry accessories.
