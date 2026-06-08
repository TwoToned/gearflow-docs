---
sidebar_position: 1
---

# Creating Projects

## Create a new project

1. From the **Projects** page, click **+ New Project**.
2. Fill in the project details:

| Field | Description |
|---|---|
| **Project Name** | A name for the job (e.g. "Glastonbury — Pyramid Stage") |
| **Client** | Select an existing client or create a new one |
| **Project Type** | Dry Hire, Wet Hire, Installation, Tour, etc. |
| **Venue / Location** | The site or venue address |
| **Start Date / End Date** | The rental period dates |
| **Billing Weeks / Billing Days** | How the rental is billed — see [Quotes](./quotes.md) |
| **Tax Rate** | Override the organisation default tax rate for this project |
| **Project Code** | Leave blank for auto-generated codes (if configured) |
| **Project Notes** | Any notes for internal reference |

3. Click **Create Project**.

The project is created in **Enquiry** status. You can now add equipment, build your quote, and move it through the lifecycle.

## Edit project details

1. Open the project and click the **Edit** button in the header.
2. Update any fields — name, dates, client, venue, billing periods, tax rate, notes.
3. Click **Save**.

Changing the rental dates or billing periods recalculates pricing for all groups.

## Project status transitions

You advance a project through its lifecycle using the status badge or the status dropdown:

1. Open the project.
2. Click the current status badge (or use the **...** menu).
3. Select the next status.

The available transitions are:

| Current Status | Can advance to |
|---|---|
| Enquiry | Quoting |
| Quoting | Quoted |
| Quoted | Confirmed |
| Confirmed | Prepping |
| Prepping | Deployed |
| Deployed | On Site |
| On Site | Returned |
| Returned | Completed |
| Completed | Invoiced |

You can also move backward if needed — for example, from Quoted back to Quoting if the client requests changes.

## Cancelling a project

1. Open the project.
2. Click the **...** menu in the header.
3. Select **Cancel Project**.

Cancelled projects remain in the system for reference. Only cancelled projects can be **deleted** — doing so releases all checked-out assets back to Available status and removes all project data.
