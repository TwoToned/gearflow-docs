---
sidebar_position: 1
---

# Equipment

The Equipment page (sidebar: **Inventory > Equipment**) is where you manage your entire gear catalogue — serialised assets, bulk assets, and models.

## Understanding models vs assets

A **model** is the template — "Shure SM58" with its specs, category, and default pricing. An **asset** is the individual unit — "SM58 #001" with its own asset tag and serial number. You create the model first, then add individual units under it.

## Adding serialised equipment

### Creating a model

1. Go to **Inventory > Equipment** and click **Add Model**.
2. Fill in the fields:
   - **Name** — required. e.g. "VL 3500 Spot"
   - **Manufacturer** — start typing to select an existing one or create new
   - **Model Number** — the manufacturer's model number
   - **Category** — assign a category (see **[Categories](./categories.md)**)
   - **Default Rental Price** — per-day rate used when adding to projects
   - **Description** — visible on documents and the asset detail page
3. Click **Save**. The model is created. You're now on the model detail page where you can add individual units.

### Adding units to a model

1. On the model detail page, click **Add Asset**.
2. GearFlow suggests the next asset tag based on your organisation's numbering scheme. You can type a different tag if needed.
3. Enter the **Serial Number** for this specific unit.
4. Fill in optional fields: **Purchase Date**, **Purchase Price**, **Supplier**, **Notes**.
5. Click **Save**. The asset appears in the equipment table with status **Available**.

To add multiple units at once, use the **Bulk Add** option — enter a quantity and GearFlow creates that many assets with sequential tags (e.g. TTP-00042 through TTP-00051).

### Adding a serialised asset without a model

Some inventory items don't have a manufacturer model number. Use the **No Model** option when adding an asset — this creates a single asset without a model template. You can assign a category and pricing later.

## Adding bulk assets

1. Go to **Inventory > Equipment** and click **Add Bulk Asset**.
2. Enter the **Name** (e.g. "XLR Cable 3m"), **Asset Tag**, and **Category**.
3. Set the **Total Quantity** — how many you own in total.
4. Enter the **Default Rental Price** per unit per day.
5. Click **Save**.

The bulk asset appears in the equipment table. You'll see the quantity as "50 / 50 Available" — available quantity decreases as units get deployed to projects.

## Asset tags

When adding assets, GearFlow auto-generates the next tag in sequence. You can:

- **Accept the suggestion** — click **Save** to use it
- **Override** — type your own tag (e.g. "VL-3500-042")
- **Leave blank** — if you leave the tag empty, GearFlow assigns the next auto-generated tag on save

Your tag format is set in **Settings > Inventory**:
- **Prefix** — letters before the number (e.g. "TTP")
- **Digit count** — how many digits (3 = 001, 5 = 00001)
- **Separator** — character between prefix and number

Tags must be unique across your organisation. If you enter a tag that's already in use, GearFlow shows an error and you can choose another.

## The equipment table

The equipment table shows all your assets, models, and bulk assets in one scrollable list. By default it shows every item, but you can narrow it down.

### Filtering

Click the **Filter** button to show or hide items by:
- **Type** — Assets, Models, or Bulk Assets
- **Status** — Available, Deployed, In Maintenance, Retired, Lost, Reserved
- **Category** — select one or more categories
- **Model** — filter to a specific model

Filters stack. Active filters show as tags below the search bar. Click the **X** on any tag to remove that filter.

### Sorting

Click any column header to sort by that column. Click again to toggle ascending/descending. A small arrow indicates the current sort direction. Sortable columns include **Tag**, **Name**, **Category**, **Status**, **Serial Number**, and **Rental Price**.

### Column visibility

Click the **Columns** button to toggle which columns appear. Hidden columns are still available when you export to CSV.

### Searching

Type in the search bar to find items by asset tag, name, model number, manufacturer, or serial number. Search is real-time — results narrow as you type.

## Viewing and editing equipment details

Click any asset, model, or bulk asset row to open its detail page.

### Asset detail page

The asset detail page shows:
- **Asset tag** and **serial number** at the top
- **Status** badge (colour-coded)
- **Model** and **category** breadcrumb
- **Current location** — which project it's deployed to, or "Warehouse"
- **Custom fields** — any fields defined for this asset type
- **Photos and documents** — images and files attached to this asset
- **Activity log** — a timeline of every deploy, return, maintenance event, and edit

To edit, click the **Edit** button in the top-right corner. Change any field and click **Save**.

### Model detail page

The model detail page shows:
- **Model name**, manufacturer, and model number
- **Category**
- **Default rental price** (per day/week/month)
- **All units** of this model — a table listing every serialised asset
- **Accessories** — default bulk accessories (see **[Accessories](./accessories.md)**)
- **Check items** — pre-hire checks that apply to all units of this model

To edit model details, click **Edit Model** in the header.

### Bulk asset detail page

The bulk asset detail page shows:
- **Asset tag** and **name**
- **Total quantity** and **available quantity**
- **Deployed quantity** — how many are currently checked out
- **Category**

To edit, click **Edit** in the top-right corner. Change the total quantity or other fields.

## Uploading photos and documents

### Adding photos

1. Open any asset or model detail page.
2. Scroll to the **Photos** section.
3. Click the upload area or drag and drop an image.
4. Supported formats: JPEG, PNG, WebP, HEIC. Max 10 MB per image.
5. Photos appear as thumbnails. Click any thumbnail to view full size.

Photos are useful for condition records, damage documentation, and identifying gear in the warehouse.

### Adding documents

1. On the asset or model detail page, scroll to the **Documents** section.
2. Click **Add Document**.
3. Choose a file — PDF, spreadsheets, text files, or images.
4. Enter a **name** and optional **notes**.
5. Click **Upload**.

Documents are available on the asset detail page and in reports. Commonly attached documents include test-and-tag certificates, purchase invoices, and user manuals.

## Asset statuses

| Status | How it gets there | How it changes |
|---|---|---|
| **Available** | Default for new assets | Deployed → Deployed |
| **Reserved** | Manually set from Available | Deploy or manual → Deployed / Available |
| **Deployed** | Checked out via warehouse | Return → Available or In Maintenance |
| **In Maintenance** | Returned with damage, or set manually | Complete maintenance → Available |
| **Retired** | Manually set | Irreversible (asset is inactive) |
| **Lost** | Returned as missing | Manual → Retired or Available if found |

## Mobile considerations

On mobile, the equipment table shows a compact view with fewer columns. Tap any row to see full details. The **Add** button shifts to a floating action button at the bottom-right of the screen. Filtering and searching work the same as desktop.
