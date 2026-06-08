---
sidebar_position: 2
---

# Timesheets

**Timesheets** track the hours your crew actually work — whether on a specific project or on general duties — so the gap between what you quoted for labour and what you owe at the end of the month is one you can see and control. Crew log their time, managers review and approve, and approved hours export straight to payroll.

A festival weekend rarely runs to the minute. The bump-in overruns, a rigger stays an extra two hours derigging in the rain, the FOH engineer is on site from the first line check to the last truck pulling out. Timesheets capture that reality: a clean record of who worked, when, on what, with breaks accounted for — the difference between guessing your labour cost and knowing it.

## Logging time

From a crew member's detail page, open the **Time** tab to see all their entries, then click **Log Time** to add one. Managers can also log time for any crew member straight from the crew dashboard.

Each entry is either:

- **Project time** — linked to a specific project assignment (e.g. the rigger's hours on the festival bump-out)
- **General time** — a standalone shift with a description (e.g. "Warehouse maintenance" or "PAT testing day")

Every entry records:

| Field | Notes |
|---|---|
| Date | The day worked |
| Start time / End time | Clock-in and clock-out |
| Break minutes | Unpaid break deducted from the total |
| Description | For general (non-project) entries |
| Status | Where the entry sits in the approval flow |

**Total hours are calculated automatically** from start, end, and breaks — so a 07:00 call to a 19:00 wrap with a 30-minute break lands as 11.5 hours without anyone reaching for a calculator.

## Status flow

```
Draft → Submitted → Approved → Exported
                 ↘ Disputed → Draft
```

| Status | Description |
|---|---|
| **Draft** | Entry in progress — editable and deletable |
| **Submitted** | Crew member has submitted it for approval |
| **Approved** | A manager has signed it off |
| **Disputed** | A manager has flagged an issue; the crew member edits and resubmits |
| **Exported** | Approved and pushed to payroll |

Only **Draft** and **Disputed** entries can be edited; only **Draft** entries can be deleted. Once an entry is submitted, the hours are locked until a manager either approves or disputes them — so the record can't be quietly changed after the fact.

## Reviewing timesheets

Managers can review from two places:

- **Crew** > **Timesheets** — every entry across the organisation, with filtering and search by date, project, and crew member
- **Dashboard** — pending timesheets surface in the stats for quick sign-off

From the timesheets page you can:

- **Approve** — sign off a single entry or batch-approve a whole weekend's submissions at once
- **Dispute** — flag an entry with a reason; it drops back to the crew member to correct and resubmit (for example, if a rigger logged a 12-hour day that the shift sheet says was 10)
- **Export** — download timesheets as CSV for payroll, filtered by date range, project, or crew member

## Crew dashboard

Managers (anyone with crew update permission) land on the crew dashboard, which keeps the time-tracking workflow front and centre:

- Active crew count and hours logged in the last 7 days
- **Pending timesheets** awaiting approval — approve individually or in bulk right from here
- Upcoming shifts (the next 10 scheduled)
- Pending offers
- A **Log Time** action that lets you pick crew members and enter time on their behalf
- An **Export Timesheets** button with a date-range picker for payroll runs

## Next steps

- **[Crew overview](./overview.md)** — set default day and hourly rates so logged time costs out correctly.
- **[Crew Planner](./planner.md)** — see who's scheduled before the hours are ever worked.
- **[Certifications & Skills](./certifications.md)** — keep tickets current so the crew you're paying are crew you can legally roster.
