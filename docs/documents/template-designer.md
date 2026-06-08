---
sidebar_position: 5
---

# Template Designer

The PDF template designer lets you control exactly how your documents look. Every document type — delivery dockets, quotes, call sheets, return sheets — can have its own customised template with your branding.

## Accessing the template designer

Go to **Settings** > **Documents** to see all your templates grouped by document type. Each type shows the current default template and any custom templates you've created.

Click **Customise** on a system default, or click into an existing custom template, to open the designer.

## Section-based layout

Templates are built from sections stacked vertically on the page. Each section is a content block. You can add, remove, reorder, and configure sections.

| Section type | What it shows |
|---|---|
| **Header** | Company logo, name, document title |
| **Client Details** | Client name, contact, email, address, tax ID |
| **Project Details** | Project name, number, venue, dates, terms |
| **Table** | Equipment line items with optional grouping, pricing, checkboxes, badges, asset tags |
| **Totals** | subtotal, discount, tax, total, deposit, balance |
| **Notes** | Client notes and/or crew notes |
| **Signature** | 1–6 signature lines with custom labels |
| **Custom Text** | Free text with `{token}` placeholders for dynamic data |
| **Crew Table** | Crew assignments with phone, email, notes |
| **Call Sheet Info** | PM, venue, schedule, equipment summary |
| **Day Header** | Day separator for multi-day documents |
| **Spacer** | Vertical space |
| **Page Break** | Force a new page |

## Branding and company logo

Set up your company branding in a **Brand Template** — a reusable set of header, footer, and accent colour settings. Document templates link to a brand template so all your documents share consistent styling.

To upload your logo: open the brand template, upload your logo image, and choose a header mode (logo, icon, or text-only).

## Section visibility

Each section has visibility rules so it only shows when it makes sense:

- **Document type filter** — show a section only on quotes, or only on delivery dockets, etc.
- **Data conditions** — show or hide based on project data (e.g. hide totals when the project has no pricing).

## Editor interface

The designer opens as a three-pane layout:

1. **Block tree** (left) — the list of sections in order. Drag to reorder. Click the + buttons between sections to add new ones.
2. **Preview** (centre) — a live preview of what the PDF will look like. Toggle between instant HTML preview and rendered PDF.
3. **Settings** (right) — configure the selected section: fields, visibility, styling (background colour, borders, padding).

## Saving and publishing

- **Save** — saves as a draft (only visible to your organisation)
- **Publish** — makes the template available for document generation
- **Set as default** — new documents of that type will use this template by default

Templates can be duplicated, exported (JSON), and imported into other GearFlow organisations.
