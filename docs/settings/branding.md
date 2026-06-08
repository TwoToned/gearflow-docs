---
sidebar_position: 2
---

# Branding

The **Branding** section of Settings lets you customise how GearFlow looks and feels for your team and appears on your documents.

## Organisation branding

### Logo

Upload your company logo. The logo appears in:

- The sidebar navigation
- Generated PDF documents (quotes, invoices, packing lists, etc.)
- Email notifications

Supported formats: JPEG, PNG, WebP. The system handles resizing automatically.

### Colours

Set your organisation's primary and accent colours. These are applied to:

- The sidebar header and navigation accents
- Document headers and footer bars
- Status badges and indicators

Enter hex colour codes or use the colour picker.

### Platform name

Customise the name displayed in the sidebar header, browser tab title, and email notifications. By default this is "GearFlow" but you can set it to your company name or brand.

## Asset tags

### Prefix and numbering

Configure how asset tags are generated for new equipment:

| Setting | Description | Example |
|---|---|---|
| **Prefix** | Letters before the number | `TTP` |
| **Digit count** | Number of digits | 5 → `00001` |
| **Separator** | Character between prefix and number | `-` → `TTP-00001` |
| **Counter** | Next number to use | Auto-increments |

New assets auto-suggest the next tag based on this format. You can override the suggestion when adding equipment.

### Test tag numbering

Test-and-tag labels use a separate numbering scheme configured in **Settings > Test & Tag**:

| Setting | Description |
|---|---|
| **Prefix** | Letters before the number (e.g. `TT`) |
| **Digit count** | Number of digits (e.g. 5) |
| **Counter** | Next number to use |

## Document templates

Document templates control the layout and content of generated PDFs. Go to **Settings > Documents** to manage templates:

1. Browse available template types (Quote, Invoice, Packing List, Call Sheet, etc.).
2. Click **Customise** on any system default to create an organisation-specific version.
3. Use the **Template Designer** to edit sections, fields, and layout.

### Template designer

The full-screen template designer has three panels:

- **Left** — icon navigation for sections: General, Header, Details, Table, Totals, Other
- **Centre** — form controls for each section: toggle elements on/off, edit labels, reorder fields
- **Right** — live PDF preview with your actual branding and sample data

Changes are saved as a new version. Each template has version history so you can revert if needed. Templates can be in **Draft** or **Published** state. Published defaults apply automatically when generating documents.

### Document template permissions

Managing document templates requires the `document.manage_templates` permission, granted to Owner, Admin, and Manager roles by default.
