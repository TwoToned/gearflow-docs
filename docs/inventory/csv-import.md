---
sidebar_position: 5
---

# CSV Import / Export

**CSV import** is how you get a whole catalogue into GearFlow at once instead of typing it in fixture by fixture. If you're switching from a spreadsheet, an old asset register, or another rental system, you export your data to CSV, map it to GearFlow's columns, and upload — hundreds of models and assets land in minutes. **Export** runs the other direction: pull your current inventory out for reporting, an insurance schedule, or a bulk rate update.

The most common day-one task is onboarding. Say you're moving 400 lighting fixtures and 200 audio items off a spreadsheet you've maintained for years. Rather than re-key every serial number, you clean up the column headers, import your **models** first (the templates), then import the **assets** (the individual units) against them. The same round-trip — export, edit in Excel, re-import — is also the fastest way to push a price rise across your entire rate card before festival season.

## Exporting your inventory

### Export models

1. Go to **Inventory > Equipment**.
2. Click **Export** and select **Export Models**.
3. A CSV file downloads containing all active models with their:
   - Name, manufacturer, model number, SKU, category
   - Rental rates (daily, weekly, monthly)
   - Description
4. The exported CSV doubles as a ready-to-edit rate sheet — fill in rates and re-import them.

### Export serialised assets

1. Click **Export** and select **Export Assets**.
2. Downloads all active serialised assets with their tags, serial numbers, model info, and status.

### Export bulk assets

1. Click **Export** and select **Export Bulk Assets**.
2. Downloads all active bulk assets with names, tags, quantities, and rates.

## Importing models

1. Go to **Inventory > Equipment** and click **Import**.
2. Select **Import Models**.
3. Choose your CSV file and click **Upload**.
4. GearFlow matches rows by name + manufacturer + model number. If a match is found, the record is updated. If not, a new model is created.
5. The import includes SKU and daily/weekly/monthly rates. If you supply a daily rate but no default rental price, the daily rate is used as the default.

### CSV format for models

| Column | Required | Description |
|---|---|---|
| `name` | Yes | Model name |
| `manufacturer` | Yes | Manufacturer name |
| `modelNumber` | Yes | Manufacturer's model number |
| `category` | No | Category name (must exist in GearFlow) |
| `sku` | No | Your internal SKU |
| `description` | No | Model description |
| `dailyRate` | No | Price per day |
| `weeklyRate` | No | Price per week |
| `monthlyRate` | No | Price per month |

Column headers can use camelCase (`dailyRate`), snake_case (`daily_rate`), or Title Case (`Daily Rate`). GearFlow matches them automatically.

## Importing serialised assets

1. Click **Import** and select **Import Assets**.
2. Choose your CSV file and click **Upload**.
3. Assets are matched by asset tag. If a tag matches an existing asset, it's updated. If not, a new asset is created.
4. If you leave the `assetTag` column blank, GearFlow auto-generates one.

### CSV format for assets

| Column | Required | Description |
|---|---|---|
| `assetTag` | No (auto-generated if blank) | Unique asset tag |
| `modelName` | Yes | Must match an existing model name |
| `manufacturer` | Yes | Must match existing manufacturer |
| `modelNumber` | Yes | Must match existing model number |
| `serialNumber` | No | Unit's serial number |
| `status` | No | Available (default), Deployed, In Maintenance, Retired, Lost |
| `purchaseDate` | No | Date format YYYY-MM-DD |
| `purchasePrice` | No | Numeric |
| `notes` | No | Free text |

## Bulk rate updates

The fastest way to update pricing across hundreds of models:

1. **Export Models** — download your current models with their rates.
2. **Edit the rates** in your spreadsheet — change daily, weekly, or monthly rates. Leave blank any rate you don't want to change.
3. **Import Rates** — click **Import** and select **Import Rates**.
4. Select your edited CSV and click **Upload**.

**Important:** The rates import only updates existing models — it never creates new ones. Blank rate cells are left unchanged, so you can update just weekly rates without affecting daily or monthly rates. Unmatched rows are reported as errors.

## Common import issues

### "Model not found"

The model name, manufacturer, and model number must match existing records exactly. Check for:
- Extra spaces before or after names
- Different capitalisation ("Shure SM58" vs "shure sm58")
- Different manufacturer names ("Shure" vs "Shure Incorporated")

To fix, edit your CSV to match the existing values, or create the model in GearFlow first.

### "Column not recognised"

GearFlow accepts camelCase, snake_case, and Title Case headers. If you're getting errors, check:
- The header row doesn't have trailing spaces
- Column names match the table above (especially capitalisation)

### "Asset tag already exists"

Each tag must be unique. If the CSV contains a tag that's already in use:
- The existing asset is updated (not duplicated)
- If you wanted a new asset, use a different tag or leave it blank for auto-generation

### Rate rows not matching

The rates import tries to match models by ID first, then SKU, then model number, then name. If a name is shared by two models, the row is reported as ambiguous and skipped. Use SKU or model number for reliable matching.

### "Import partially failed"

Some rows succeeded, some didn't. Download the error report from the import dialog. It shows each failed row with the reason. Fix the errors in your CSV and re-import — successful rows won't be duplicated because GearFlow matches on existing records.

## Mobile considerations

CSV import is available on mobile through the same **Import** button. Upload from your device's file storage. The progress bar and error display work the same as desktop. For large files, keep the browser tab active until the upload completes.

## Next steps

- **[Equipment](./equipment.md)** — review and fine-tune the models and assets you just imported.
- **[Categories](./categories.md)** — make sure the category names in your CSV match existing categories so imported gear files correctly.
- **[Custom Fields](./custom-fields.md)** — set up the extra attributes you want to track on imported assets.
