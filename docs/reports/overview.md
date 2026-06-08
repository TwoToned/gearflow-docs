---
sidebar_position: 0
---

# Reports

The Reports module gives you two ways to get insights from your data: a library of pre-built reports covering common questions, and a custom report builder for ad-hoc analysis.

## How reports work

Every report — pre-built or custom — runs against your organisation's live data. Results appear as a table with pagination, and you can export to CSV or PDF.

### Data sources

Reports draw from 11 data sources:

| Source | What it reports on |
|---|---|
| Assets | Individual equipment items |
| Models | Equipment models and their properties |
| Projects | Rental projects |
| Kits | Equipment kits |
| Line Items | Project line items |
| Clients | Client records |
| Locations | Project locations and venues |
| Maintenance | Maintenance records |
| Activity Log | All actions logged in the system |
| Crew | Crew member records |
| Crew Assignments | Crew assignments to projects |

### Filters

Every report supports filtering. Available filter operators include:
- **Equals** / **Not equals** for exact matches
- **Contains** for text search
- **Greater than** / **Less than** for numeric and date fields
- **In** / **Not in** for list selections
- **Between** for date ranges

Date range presets include: Last 7 days, This Month, This Quarter, This Year, All Time.

### Grouping and aggregation

Reports can group results by any field with aggregations:
- **Count** — number of records in each group
- **Sum** — total of a numeric field
- **Average** — mean of a numeric field
- **Min** / **Max** — lowest and highest values

### Exporting

- **CSV export** — downloads as a comma-separated file for Excel or Google Sheets
- **PDF export** — a formatted, print-ready PDF with your organisation's branding (logo, colours)

### Saved reports

Custom reports and pre-built reports can be saved, named, and shared with your team. Saved reports appear in the report library and on your dashboard. You can pin frequently used reports for quick access.

### Scheduled reports

Reports can be scheduled to run automatically on a recurring basis:

1. Open any saved report.
2. Click **Schedule** in the report header.
3. Choose the **Frequency** (Daily, Weekly, or Monthly), the preferred **Time** (UTC hour), and the **Recipients**.
4. Click **Save**.

Scheduled reports are emailed as CSV attachments to the specified recipients. The system buckets runs so the same report won't run twice within its period.

## Permissions

| Action | Permission |
|---|---|
| View and run reports | All roles |
| Export to CSV | Owner, Admin, Manager |
| Create and save custom reports | Owner, Admin, Manager |
| Delete saved reports | Owner, Admin, Manager |

## What's next?

Reports are most powerful when you use them to drive decisions. A common starting point is **asset utilisation** — build a custom report against the Assets and Line Items sources, group by model, and aggregate how often each item ships out. You'll quickly see which gear earns its keep and which sits on the shelf, so you can plan sub-hires, justify new purchases, or retire underused kit. Save it, pin it to your dashboard, and schedule it to land in your inbox every month.
