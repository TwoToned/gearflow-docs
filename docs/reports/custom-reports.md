---
sidebar_position: 2
---

# Custom Reports

The custom report builder is for the questions the [built-in reports](./built-in-reports.md) don't cover. You pick a data source, choose the columns, filter and group the results, and preview it live before saving — no spreadsheets, no exporting raw data and pivoting it by hand. Once saved, a report can be shared with the team, pinned to the dashboard, and scheduled to email itself out on a recurring basis.

Say you want to know how much you spent fixing moving lights last quarter, broken down by repair type. Start from the Maintenance source, filter to records dated this quarter, group by maintenance type, and sum the cost. Five steps later you have a clean table showing exactly where the repair budget went — save it, pin it, and have it land in your inbox on the first of every month so you never have to rebuild it.

## Accessing the report builder

Go to **Reports** and click **Create Custom Report**, or navigate directly to `/reports/builder`.

When editing an existing saved report, click **Edit** to open the builder with that report's configuration pre-loaded.

## Building a report

The builder walks through five steps:

### 1. Choose a data source

Select one of the 11 data sources (Assets, Models, Projects, Kits, Line Items, Clients, Locations, Maintenance, Activity Log, Crew, Crew Assignments). This determines which fields and relationships are available in the next steps.

### 2. Select columns

Pick the fields you want in your report table. You can add fields from the main data source and from related sources — for example, showing client name alongside project data. Columns appear in the order you add them. Drag to reorder.

### 3. Add filters

Narrow the data by adding filter rules. Each rule specifies:
- A **field** to filter on
- An **operator** (equals, not equals, contains, greater than, less than, in, not in, between)
- A **value** or range

Filters combine as AND — all conditions must match. Common use cases:
- Assets with status "Available"
- Projects created this month
- Maintenance records with cost over $500

### 4. Configure grouping

Group results by any field in the data source. When grouping is enabled, you can add aggregation columns:
- **Count** — number of items in each group
- **Sum**, **Average**, **Min**, **Max** — numeric aggregations

For example, group maintenance records by type and show the total cost per type.

### 5. Preview and save

A live preview shows the report with your current data. Check the results and adjust columns or filters as needed. When you're satisfied:

1. Click **Save Report**.
2. Enter a **Name** and optional **Description**.
3. Choose whether to **Share** with your team and **Pin** to the dashboard.
4. Click **Save**.

The report appears in your saved reports list and can be run, exported, scheduled, or edited at any time.

## Exporting a custom report

Open any saved report and click:
- **CSV** — downloads a CSV file with the full results (not paginated)
- **PDF** — generates a formatted PDF with organisation branding, grouping summaries, and paginated data tables

## Managing saved reports

Saved reports are available from the Reports page. For each report you can:
- **Run** — execute with current data
- **Edit** — change the configuration in the builder
- **Duplicate** — create a copy as a starting point for a new report
- **Pin** / **Unpin** — show or hide from the pinned section
- **Share** — toggle team visibility
- **Schedule** — set up recurring email delivery
- **Delete** — remove the report

Reports you've created are visible in your **My Reports** section. Shared reports appear in the **Team Reports** section.

## Next steps

- **[Reports overview](./overview.md)** — the full list of data sources, filter operators, aggregations, exports, and scheduling options.
- **[Asset Utilization](./utilization.md)** — a purpose-built view for the "is this gear paying for itself?" question, with idle and loss-making filters.
- **[Built-in Reports](./built-in-reports.md)** — check whether a ready-made report already answers your question before building one.
