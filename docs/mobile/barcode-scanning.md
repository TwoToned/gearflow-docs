---
sidebar_position: 1
---

# Barcode Scanning

GearFlow has a built-in barcode scanner that works with your device's camera — no external scanner needed. It reads standard barcodes and QR codes.

## Opening the scanner

There are several ways to open the scanner:

- **Mobile bottom nav** — tap the **Scan** button in the centre of the bottom navigation bar
- **Desktop top bar** — tap the **Scan** icon in the top navigation bar
- **Asset tag input fields** — tap the scan icon next to any barcode input field throughout the app

When opened from the top bar or bottom nav, the scanner overlays the full screen. When opened from an input field, it opens inline.

## Using the scanner

1. Point your camera at a barcode or QR code.
2. The scanner auto-detects the code — no button to press.
3. A chime sounds when a code is read successfully.
4. The app processes the scanned value and navigates or fills in the field.

The whole camera feed is the scan area — there's no reticle or box to align. Just point and it reads.

## Continuous mode

Some forms support **continuous scanning** — the scanner keeps reading after the first result without closing. This is used for:

- Adding multiple assets to a maintenance record
- Scanning multiple items during warehouse prep or return
- Batch operations where you need to scan several tags in sequence

In continuous mode, each scan adds the result to the list. Close the scanner when you're done.

## Which pages support scanning

The scanner works on any page with a barcode input field. Pages with dedicated scan support include:

| Page | What scanning does |
|---|---|
| **Equipment table** | Opens the asset matching the scanned tag |
| **Test & Tag > Quick Test** | Loads the test item by test tag ID |
| **Test & Tag > Registry** | Finds the item by test tag ID |
| **Maintenance (add assets)** | Adds the scanned asset to the maintenance record |
| **Warehouse > Prep** | Scans an asset to prep it |
| **Warehouse > Return** | Scans an asset to check it in |
| **Warehouse > Deploy** | Selects the scanned asset for checkout |
| **Projects > Line Items** | Adds the scanned asset as a line item |
| **Check / [assetTag]** | Opens the ad-hoc check page for the scanned asset |

## Quick asset lookup

You can look up any asset by scanning its tag or by navigating directly to:

```
/check/[assetTag]
```

Replace `[assetTag]` with the asset's tag value (e.g. TTP-00042). This page shows the asset's details and lets you perform an ad-hoc quality check.

The scan lookup resolves barcodes by checking in order:

1. **Asset** — matches by asset tag
2. **Kit** — matches by kit asset tag
3. **Bulk Asset** — matches by asset tag
4. **Test Tag Asset** — matches by test tag ID

The first match determines where the scan takes you.

## QR codes

GearFlow can generate QR codes for your assets. From any asset's detail page, click **Print QR Code** to generate a label with the asset's QR code. Print and attach it to the equipment for quick scanning in the field.

## Scanner audio

On supported devices, the scanner plays a 1200 Hz chime on successful scan so you know the code was read without looking at the screen. The chime is short (150 ms) with a soft fade-out.
