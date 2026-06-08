---
sidebar_position: 6
---

# Custom Fields

**Custom fields** let you record the gear-specific details GearFlow doesn't capture out of the box. Every rental house tracks something idiosyncratic — a rig number painted on the road case, the firmware version on a media server, the DMX footprint of a moving light, or the date a wireless mic was last frequency-coordinated. Define those fields once and they appear on every asset form and detail page, so the data lives with the gear instead of in a technician's head or a sticky note.

A lighting house might add a **DMX Address** field and a **Firmware** field to its moving lights, so the crew chief can see at a glance that fixture `TTP-00042` is running v4.2 before it goes out. A theatre might add a **Hang Position** field to track where each Source Four lives in the repertory plot. You decide what matters; GearFlow stores it and makes it searchable on the asset.

## Available field types

| Type | What it stores | Example |
|---|---|---|
| **Text** | Short text (single line) | "Firmware v4.2" |
| **Number** | Numeric value | 240 (for voltage) |
| **Date** | Date picker | 2025-06-01 (next service date) |
| **Dropdown (Select)** | Choose from predefined options | 120V, 208V, 240V |
| **Yes / No (Boolean)** | Toggle on/off | Safety bonded? Yes |

## Creating a custom field

1. Go to **Settings > Custom Fields**.
2. Click **Add Custom Field**.
3. Fill in the details:
   - **Label** — what the field is called (e.g. "Voltage")
   - **Field Type** — choose from the types above
   - **Entity Type** — what this field applies to (Asset, Bulk Asset, Kit). Currently supports **Asset**.
   - **Required** — toggle on if this field must be filled when adding/editing an asset
   - **Help Text** — optional hint shown below the field on forms
   - **Options** — for Dropdown type, enter each option on a new line
4. Click **Save**.

The field is now active. It appears on the asset create and edit forms, sorted by the order you define in Settings.

## Where custom fields appear

### On the asset form

When you add or edit an asset (serialised or bulk), custom fields appear in a **Custom Fields** section below the standard fields. Required fields are marked with an asterisk. Fields are shown in the order you set in Settings.

### On the asset detail page

Saved custom field values appear in a **Custom Fields** section on the asset detail page, below the standard information and above the Activity Log. This is read-only — click **Edit** to change values.

### In the equipment table

Custom field values do **not** appear as columns in the equipment table. They're available on the individual asset pages and in exports.

## Editing a custom field definition

1. Go to **Settings > Custom Fields**.
2. Click the field you want to edit.
3. You can change the **Label**, **Help Text**, **Required** setting, **Sort Order**, and **Options** (for Dropdown fields).
4. You cannot change the **Field Key** — this is a stable identifier that existing values are stored against.

## Deactivating a custom field

1. In **Settings > Custom Fields**, toggle the field off using the **Active** switch.
2. Deactivated fields don't appear on forms or detail pages.
3. Existing values are preserved. If you reactivate the field, the values reappear.

To completely remove a field, delete it from the settings page. This removes the field definition and all its stored values.

## Mobile considerations

On mobile, custom fields render in the same order and layout as desktop. Dropdown fields use a native picker. Date fields open the device date picker. Yes/No fields use touch-friendly toggle switches.

## Next steps

- **[Equipment](./equipment.md)** — see where custom fields appear on the asset create, edit, and detail pages.
- **[CSV Import / Export](./csv-import.md)** — custom field values travel with assets in exports.
- **[Settings overview](../settings/overview.md)** — custom field definitions are managed under organisation settings.
