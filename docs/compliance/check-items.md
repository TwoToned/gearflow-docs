---
sidebar_position: 4
---

# Check Items

Quality check items are defined checks that must be completed before equipment goes out the door or when it comes back. They're assigned to equipment models or kits, and warehouse operators fill them out during prep and return flows.

## Check item types

| Type | Input | Example |
|---|---|---|
| **Pass / Fail** | Toggle (Pass or Fail) | "Cable has no visible damage" |
| **Notes** | Free text | "Serial number: 12345" |
| **Measurement** | Numeric value with unit | "Battery voltage: 12.6V" |
| **Dropdown** | Select from options | "Colour: Black / White / Grey" |

Each check item can have:
- A **category** for grouping (e.g. "Visual", "Electrical", "Safety")
- **Measurement unit**, **min**, and **max** (for Measurement type)
- **Dropdown options** with optional fail flags (for Dropdown type)

## The check item library

All check items live in a shared library at **Settings > Check Items**:

1. Click **Add Check Item**.
2. Enter a **Label** (e.g. "Check cable for cuts").
3. Select the **Type** and fill in type-specific fields.
4. Assign a **Category** to group related checks.
5. Click **Save**.

From the library you can edit, duplicate, or delete check items. The library shows where each item is used (which models and kits have it assigned). An item cannot be deleted while it is assigned to models or kits.

## Assigning checks to models

Once check items exist in the library, assign them to equipment models:

1. Open any **Model** detail page.
2. Go to the **Checks** tab.
3. Click **Add Check Items** to open the library picker.
4. Select the checks that apply to this model.
5. Drag to reorder — checks appear in this order during warehouse prep.

All assets of this model inherit these check items. When the asset is prepped or returned, the operator sees the assigned checks.

You can also use **Bulk Assign** to add the same check items to multiple models at once.

### Kit check items

Kits can also have check items. Open a kit's detail page, go to the **Checks** tab, and assign items from the library.

Kits have a **check mode**:
- **Kit Level** — the kit is checked once, and all contents inherit the result
- **Per Item** — each child asset uses its own model's checks

## Check workflow during warehouse prep

When prepping equipment for a project:

1. In the **Prep** tab of the warehouse page, scan or select an asset.
2. If the asset's model has check items assigned, the **Item Check Form** opens as a slide-over sheet.
3. Work through each check item:
   - **Pass / Fail** — click **Pass** (green, right) or **Fail** (red, left)
   - **Measurement** — enter the value; pass/fail is calculated automatically from the threshold
   - **Dropdown** — select an option
   - **Notes** — type any comments
4. Click **Pass All** to pass every check item at once (undoable for 3 seconds via toast).
5. Click **Submit** to save the check results and complete the prep action.

If the model has no check items, the check form is skipped and the item is prepped directly.

### Check queue

When prepping or returning multiple items, the warehouse page builds a **check queue**. Items with checks go through the form one at a time. Items without checks are processed directly. Your barcode scanner stays focused on the input between checks so you can scan the next item without clicking.

### Ad-hoc checks

You can check any asset outside of a project flow at **`/check/[assetTag]`**. This is useful for:
- Spot checks on gear in the warehouse
- Pre-booking inspections
- Post-return quality audits

## Return checks

When gear comes back, the return flow also runs check items:
1. Scan or select returned items in the **Return** tab.
2. Complete the check items as you unpack and inspect.
3. Failed checks on return can flag items for damage tracking or maintenance.

### Deprep check gate

On the inbound side, a second check runs at deprep time (transition from staging back to inventory) for items whose model has check items. This means returned equipment gets checked twice — once at return scan and once at deprep — for thorough quality control.

## Check close-out

When a project is fully returned, use the **Close-Out** tab on the warehouse page to finalise:

1. Review the summary — stored, damaged, and lost counts.
2. Check the exceptions table for any items flagged during return.
3. Click **Close Out Project** in a two-step confirmation.

Close-out records are permanent. You can also batch close multiple projects from the warehouse dashboard.

## Check history

Every check result is saved. You can view:
- **Asset Checks tab** — timeline of all checks for a specific asset, grouped by session, filterable by context (prep, return, ad-hoc)
- **Model Failure Analytics** — per-check-item failure rate bars on the model detail page's Checks tab

## Predictive maintenance

If the same check item fails more than twice in the last three checks for an asset, the system automatically creates a Preventative maintenance record. This helps catch recurring issues before they become major problems.

## Permissions

| Action | Who can do it |
|---|---|
| Read the check item library | All roles with `checkItem.read` |
| Create, edit, delete check items | Owner, Admin, Manager |
| Assign checks to models | Owner, Admin, Manager |
| Complete checks during warehouse flow | Warehouse staff with `warehouse.scan` |
| Close out projects | Owner, Admin, Manager + `warehouse.close` |
