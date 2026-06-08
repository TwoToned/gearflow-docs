---
sidebar_position: 4
---

# Project Templates

Project templates let you save a project's structure — categories, groups, line items, and services — to reuse for future jobs. The payoff is biggest on work you do over and over: instead of rebuilding the same equipment list from scratch every time, you start from a proven setup and just swap the dates and client.

For example, your "Standard Festival Stage" package — a left/right line array, sub array, FOH and monitor consoles, a 12-way IEM rack, an RF rack, plus the usual bump-in, bump-out, and crew services — can be saved once as a template. Next summer when a new festival enquiry comes in, you apply the template, set the dates and venue, adjust quantities for the stage size, and you're quoting in minutes. The same applies to a recurring theatre season layout or a repeat corporate AGM rig.

## Saving a project as a template

1. Open an existing project (or create one with the desired structure).
2. Click the **...** menu in the project header.
3. Select **Save as Template**.
4. The system generates a template code (e.g. `TPL-0001`) and saves the full project structure.

Templates are fully isolated from live projects:
- They don't appear on the dashboard, in reports, in search results, or in availability checks.
- Their status cannot be advanced through the project lifecycle.
- They are excluded from all operational views.

## Applying a template

1. Click **+ New Project** from the Projects page.
2. In the project creation dialog, select a **template** from the picker.
3. The template's categories, groups, line items (without quantities), and services are pre-loaded into the new project.
4. Fill in the client, dates, venue, and adjust quantities as needed.

## Group templates

Group templates let you save individual group configurations — a faster way to reuse common setups without saving a whole project.

### Saving a group template

1. In a project's Equipment tab, open the dropdown menu on an existing group.
2. Select **Save as Template**.
3. Give the template a name and description.

### Applying a group template

1. Click **Add Group** in the Equipment tab toolbar.
2. The inline form includes a **template picker**. Select a saved template.
3. Line items from the template are pre-filled into the new group.
4. Adjust quantities and pricing as needed.

## Managing templates

- **Project templates** are managed where they're saved. To remove one, open the template project and delete it.
- **Group templates** are managed in **Settings > Group Templates**, reachable from the Settings sidebar or by typing `@grouptemplates` in the command palette.

## Next steps

- [Creating Projects](./creating-projects.md) — apply a template when starting a new job
- [Line Items](./line-items.md) — build the equipment structure that becomes a template
- [Quotes](./quotes.md) — price a job spun up from a template
