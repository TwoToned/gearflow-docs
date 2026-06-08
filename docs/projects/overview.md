---
sidebar_position: 0
---

# Projects

A **project** in GearFlow represents a rental job — from the initial client enquiry all the way through to final invoicing. Every quote, equipment list, crew schedule, and document lives inside a project, so the whole job stays in one place instead of scattered across spreadsheets, emails, and a whiteboard in the warehouse.

Picture a three-day festival main stage. The promoter emails asking for a quote — you open a new project in **Enquiry**. You build the equipment list: a left/right line array hang, a sub array, a 12-way IEM rack, an RF rack for handhelds, and front-of-house and monitor consoles, organised into **PA**, **IEM**, and **RF** categories. Pricing flows from each model's rate card across the festival's billing period, and the project moves to **Quoting**, then **Quoted** when the PDF goes out. The promoter signs off — you mark it **Confirmed**. Now the operational side kicks in: bump-in on the Thursday, the show days, bump-out on the Sunday night, plus the crew assigned to each. The warehouse preps and the project moves to **Prepping → Deployed → On Site**, the gear comes home to **Returned → Completed**, and you raise the final invoice at **Invoiced**. One project carried the job end to end.

The same shape works for a theatre season's run, a corporate AGM, or a national tour leg — only the equipment, dates, and crew change.

![Projects list — track every rental job from enquiry to invoice](/img/screenshots/projects.png)

## Project lifecycle

Each project moves through a status flow. You advance the status as the job progresses:

```
Enquiry → Quoting → Quoted → Confirmed → Prepping → Deployed → On Site → Returned → Completed → Invoiced
```

A project can be **Cancelled** from any status.

| Status | Meaning |
|---|---|
| **Enquiry** | Initial request from a client, nothing quoted yet |
| **Quoting** | You're building the quote — line items, pricing, services |
| **Quoted** | Quote has been sent to the client, awaiting response |
| **Confirmed** | Client has accepted — job is booked |
| **Prepping** | Gear is being prepared in the warehouse |
| **Deployed** | Equipment has left the warehouse |
| **On Site** | Gear is at the venue, event is running |
| **Returned** | Equipment is back in the warehouse |
| **Completed** | Return has been processed, everything checked in |
| **Invoiced** | Final invoice has been issued |
| **Cancelled** | Job cancelled at any point |

## Project structure

A project is organised into a hierarchy:

```
Project
  ├── Category (e.g. "RF", "IEM", "PA") — top-level organiser
  │   ├── Group — a billable unit on the quote (title, quantity, price)
  │   │   └── Line Item — individual piece of equipment (tracking only)
  │   └── Line Item — standalone item, appears on quote
  ├── Line Item — uncategorised equipment
  ├── Service — operational task (delivery, bump-in, labour)
  └── Crew Assignment — crew member assigned to a service
```

- **Categories** group your equipment into sections like RF, IEM, or PA.
- **Groups** are the billable units on quotes — each group has a title, quantity, and price. Equipment inside a group is for tracking only.
- **Line Items** are individual pieces of equipment added from your inventory. Standalone items (not in a group) appear on quotes as their own line item.
- **Services** are operational tasks like deliveries, bump-in, bump-out, and labour.
- **Crew Assignments** link crew members to services with specific roles.

## Project types

| Type | Description |
|---|---|
| Dry Hire | Equipment-only hire |
| Wet Hire | Equipment + operator |
| Installation | Permanent or semi-permanent install |
| Tour | Multi-date touring production |
| Corporate | Corporate event |
| Theatre | Theatrical production |
| Festival | Multi-act festival |
| Conference | Conference or seminar |
| Other | Custom type |

## Project details page

Every project has a detail page with a full-width header and a two-column layout.

**Header** shows the project name, status badge, client, project managers, type, and rental period.

**Tabs** in the left column:

| Tab | Content |
|---|---|
| **Equipment** | The equipment table — categories, groups, and line items. Add gear, set up groups, adjust pricing. |
| **Labour & Logistics** | Services (deliveries, bump-in/out, labour) and crew assignments. |
| **Notes** | Free-text notes attached to the project. |
| **Files** | Uploaded documents and media. |
| **Tasks** | To-do lists for tracking project work. |

**Right sidebar** shows the financial summary:
- Equipment revenue, services costs, labour costs
- Discount and tax
- Total and margin (with colour-coded bar)
- Pricing progress indicator
- Expandable pricing breakdown per group

## Project managers

Projects support multiple project managers. Add or remove managers from the project sidebar. They appear as avatar icons in the project header. On a large festival or tour, this lets you put a dedicated PM on audio and another on lighting while both see the same project.

## Next steps

- [Creating Projects](./creating-projects.md) — start a new job and move it through the lifecycle
- [Line Items](./line-items.md) — build the equipment list with categories and groups
- [Quotes](./quotes.md) — set pricing, discounts, and tax, then send the quote
- [Project Tasks](./tasks.md) — track the work that has to happen behind the scenes
