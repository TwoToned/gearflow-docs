---
sidebar_position: 1
---

# Delivery Dockets

A delivery docket is the document your crew takes to site. It's the paper trail that proves what left the warehouse, what arrived at the dock, and who signed for it — the thing you reach for when a client later says a wireless pack never turned up.

Because it's generated from live project data after gear is deployed, the docket lists exactly what's checked out — down to the serial number on each unit — with checkboxes the receiving crew tick off item by item and signature lines that turn a printout into a record both sides agreed to.

## What's on a delivery docket

- **Project details** — project name, number, venue, and **site contact** (the person meeting your driver)
- **Equipment list** — every checked-out item, grouped by category, with row numbers, quantities, and model names
- **Per-unit rows** — a line with quantity greater than one expands to one row per assigned unit ("Unit 1 — TTP00042", "Unit 2 — TTP00043", …) so each physical box is checked off individually rather than as a single "x4"
- **Asset tags** — the serial / asset tag shown against each unit
- **Checkboxes** — a tick box per row for on-site delivery check-off
- **Signature section** — see below

### Signature section

The foot of the docket carries a three-column signature block so delivery and return can be signed on the same physical sheet:

| Column | Captures |
|---|---|
| **Delivered by** | Crew member's signature, date / time delivered |
| **Received by** | Client or venue signature on arrival |
| **Returned / collected** | Signature when the gear is handed back |

One docket follows the kit through its whole trip to site and back.

## Generating a delivery docket

1. Open the project.
2. Click **Documents** in the top bar.
3. Select **Delivery Docket** (and a custom template, if you have one published).

## Deployment-aware filtering

The delivery docket only lists equipment with a **Checked Out** status. Items still in prep, or not yet picked, are deliberately excluded — the docket should reflect what actually went on the truck, not the full booking.

This means **if you generate the docket before deploying anything, it comes back empty.** Deploy the gear from the warehouse first, then generate. For a multi-truck festival load, deploy and print one docket per load-out so each driver carries only their manifest.

:::tip
Need a pick list for the warehouse instead of a delivery record for the dock? Use a **Pull Slip**, which lists everything to be picked and pre-ticks units that are already deployed. See [Pull Sheets](../warehouse/pull-sheets.md).
:::

## Next steps

- **[Check-In / Check-Out](../warehouse/check-in-check-out.md)** — deploy gear so it appears on the docket, and check it back in on return.
- **[Template Designer](./template-designer.md)** — adjust the columns, signature labels, and branding on your docket.
- **[Documents & PDFs](./overview.md)** — the full set of documents you can generate from a project.
