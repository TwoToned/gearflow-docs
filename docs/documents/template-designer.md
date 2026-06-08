---
sidebar_position: 5
---

# Template Designer

The template designer lets you control exactly how your documents look. Every document type — quotes, invoices, delivery dockets, return sheets, pull slips, and call sheets — can have its own customised template carrying your branding, your layout, and your wording.

Why bother? Because a document is a piece of your brand. The quote a venue client opens should look like it came from a real production company, not a generic form. The delivery docket your driver hands over should have your logo, your signature labels, and your terms. Build a template once and every future document of that type comes out polished and consistent, with no fiddling per job.

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
- **Data conditions** — show or hide based on project data (exists / not exists / equals / not equals). For example, hide the totals block when the project has no pricing.

This is what lets one well-built template family stay tidy: a totals section that only appears on quotes and invoices, a site-contact line that only shows when a delivery docket actually has one.

## Tokens in custom text

A **Custom Text** section can include `{token}` placeholders that resolve to live project data — `{client_name}`, `{project_name}`, `{total}`, and more. Use it for a validity clause on a quote ("This quote is valid for 30 days") or a standard terms line that still pulls the client's name in. Unknown tokens resolve to empty text, and token matching is case-insensitive.

## Editor interface

The designer opens as a three-pane layout:

1. **Block tree** (left) — the list of sections in order. Drag to reorder. Click the + buttons between sections to add new ones.
2. **Preview** (centre) — a live preview of what the PDF will look like. Toggle between instant HTML preview and rendered PDF.
3. **Settings** (right) — configure the selected section: fields, visibility, styling (background colour, borders, padding).

## Saving and publishing

- **Save** — saves as a draft (only visible to your organisation)
- **Publish** — makes the template available when generating documents
- **Set as default** — new documents of that type use this template unless you pick another

Templates can be duplicated, exported as JSON, and imported into other GearFlow organisations — so you can build a polished delivery docket once and reuse it across multiple businesses you run.

Say you want every quote to lead with your logo, group equipment by category with a bundle price (no itemised lamps), show a discount and GST line, and close with a 30-day validity clause. Customise the system default quote template, arrange the header, table, totals, and a custom-text section to match, preview it against sample data, then publish and set it as default. Every quote your team raises from then on comes out exactly that way.

## Next steps

- **[Branding](../settings/branding.md)** — set up the logo, colours, and brand template your documents inherit.
- **[Documents & PDFs](./overview.md)** — generate documents using the templates you've built.
- **[Settings](../settings/overview.md)** — where document template management lives.
