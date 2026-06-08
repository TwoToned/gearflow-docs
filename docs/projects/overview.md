---
sidebar_position: 0
---

# Projects

A **project** in GearFlow represents a rental job — from the initial client enquiry all the way through to final invoicing. Every quote, equipment list, crew schedule, and document lives inside a project.

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

Projects support multiple project managers. Add or remove managers from the project sidebar. They appear as avatar icons in the project header.
