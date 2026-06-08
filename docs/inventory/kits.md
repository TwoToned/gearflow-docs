---
sidebar_position: 2
---

# Kits

A kit is a container that groups multiple assets so they rent as one unit. An "RF Rack Kit" might contain 4 wireless receivers, 4 beltpacks, and 4 lavalier mics in a rack case — one tag on the shelf, one line item on the project, one scan at deploy and return.

## What kits are (and aren't)

Kits are **not** accessories. An accessory is permanently attached to its parent asset (see **[Accessories](./accessories.md)**). A kit is a reusable container — its members can change, it has its own asset tag and status, and it appears as a single line item on project documents.

## Creating a kit

1. Go to **Inventory > Kits** and click **Add Kit**.
2. Fill in the basic details:
   - **Name** — required. e.g. "Portable PA Kit"
   - **Asset Tag** — auto-generated or enter a custom one
   - **Category** — helps with filtering and reports
   - **Description** — visible on the kit detail page and documents
3. Click **Save**. You're taken to the kit detail page.

### Adding serialised assets to a kit

1. On the kit detail page, click **Add Item** and select **Serialised Asset**.
2. Search for an asset by tag, name, or serial number.
3. Select the asset. It's added to the kit contents.
4. Repeat for each asset. The same asset can only belong to one kit at a time.

### Adding bulk assets to a kit

1. Click **Add Item** and select **Bulk Asset**.
2. Search for the bulk asset (e.g. "XLR Cable 3m").
3. Enter the **quantity** — how many of this bulk asset the kit includes.
4. Click **Add**. The bulk asset appears with its quantity in the kit contents.

### Removing items from a kit

On the kit detail page, find the item and click the **Remove** button. Removing a serialised asset releases it back to the warehouse. Removing a bulk asset restores the quantity to the available pool.

## Kit pricing

Kits have two pricing modes that you choose when adding the kit to a project:

### Kit Price

A single price covers the entire kit. The kit appears as one line on the quote with one total price. Individual items inside the kit don't show separate prices. Use this for pre-packaged kits where you offer a bundle rate.

### Itemised

Each item in the kit keeps its own price. The kit line shows as a parent with children underneath, each with their individual rates. The total is the sum of all items. Use this when you want the client to see every component and its cost.

### Setting kit rates

1. On the kit detail page, go to the **Rates** section.
2. Set **Per Day**, **Per Week**, and **Per Month** rates.
3. These rates appear as defaults when the kit is added to a project. You can override them per project.
4. Rates for individual kit members (in Itemised mode) come from each asset's model rate.

## Nested kits (kits within kits)

A kit can contain other kits. For example, a "Corporate AV Package" kit might contain an "RF Rack Kit" kit, a "Portable PA Kit" kit, and a "Road Case" bulk asset.

1. Open the parent kit detail page.
2. Click **Add Item** and select **Kit**.
3. Search for the child kit and select it.
4. The child kit appears as a nested item, shown with a container icon and "Kit" badge.

In the warehouse, scanning the parent kit deploys or returns everything at once — parent, children, and grandchildren (kits inside kits). The UI shows nested kits with expandable chevrons so you can see the full structure.

### Key restrictions

- A kit can be nested at any depth
- The same kit cannot be in two places at once
- Kit membership is tracked independently — a kit that's a member of another kit can also be rented standalone

## Kit verification

Before deploying or returning a kit, the warehouse page prompts you to verify its contents.

1. In the **Warehouse** tab for a project, find the kit line item.
2. Click the **Verify** toggle next to each item in the kit.
3. A circular indicator shows each item's verification status — empty (unverified) or filled (verified).
4. Verification is clickable — you don't need to scan each item. Toggle it manually as you check items off.
5. Nested kit items are verified the same way — each grandchild item has its own toggle.

When you attempt to deploy or return, a dialog shows **"X of Y items verified"**. You can:
- **Proceed anyway** — deploy/return with unverified items
- **Go back** — finish verifying
- **Deploy Verified** — deploy only the verified items

The verification resets after each deploy or return cycle.

## Kit statuses

| Status | Meaning |
|---|---|
| **Available** | All members available, ready to rent |
| **Deployed** | Checked out to a project |
| **In Maintenance** | At least one member is in maintenance |
| **Retired** | Kit is deactivated |

A kit's status is derived from its members. If any member is deployed, the kit is Deployed. If any member is in maintenance, the kit is In Maintenance. The kit returns to Available only when all members are back.

## Archiving and deleting a kit

### Archive (soft delete)

1. On the kit detail page, click **Delete Kit**.
2. Choose **Archive Kit**. This releases all members back to the warehouse and sets the kit to inactive.
3. Archived kits don't appear in the main kit list. Filter by "Inactive" to see them.

### Permanent delete

1. Click **Delete Kit** and choose **Delete Permanently**.
2. This option is blocked if the kit has been used on any past projects — historical data must be preserved.
3. If the kit has never been rented, the permanent delete removes it entirely.

## Mobile considerations

On mobile, the kit detail page shows contents in a stacked card layout. Nested kits are collapsible. Verification toggles are larger for touch targets. Use the floating **Add Item** button to add new kit members.

## Next steps

- **[Equipment](./equipment.md)** — manage individual serialised and bulk assets.
- **[Accessories](./accessories.md)** — permanently attach items to assets.
- **[Custom Fields](./custom-fields.md)** — add your own data fields to any inventory item.
- **[Inventory Overview](./overview.md)** — see the full inventory section.
