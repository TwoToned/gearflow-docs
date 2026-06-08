---
sidebar_position: 0
---

# Clients

The **Clients** module is your address book of everyone you rent equipment to — from one-off event organisers to repeat corporate accounts and production companies you work with season after season.

A client record is more than a name in a list. It holds the billing and shipping addresses that flow onto every quote, invoice, and delivery docket, and the contact details your crew need when they roll up to the loading dock. Keep a client clean and complete, and every document you generate for their next job is already half-filled — you select "Northbridge Conference Centre" on the project form and their venue address, site contact, and account history come with it. No retyping, no wrong postcode on the delivery run.

## Clients list

Go to **Clients** in the sidebar to see every client. Each entry shows:

| Column | What it shows |
|---|---|
| **Client name** | Company or individual name |
| **Primary contact** | Contact person and email |
| **Phone** | Contact phone number |
| **City / location** | Derived from the billing address |

Click any client to open their detail page, which shows their information, addresses, and linked projects.

## Adding a client

1. Go to **Clients** and click **+ New Client**.
2. Fill in the details:

| Field | Description |
|---|---|
| **Client Name** | Company or individual name (required) |
| **Contact Name** | Primary contact person |
| **Email** | Contact email address |
| **Phone** | Contact phone number |
| **Billing Address** | Street, city, postcode, country |
| **Shipping Address** | The delivery destination, if different from billing |
| **Notes** | Internal notes — gate codes, dock hours, preferred PM |

3. Click **Create Client**.

You can also create a client on the fly while building a project — the **Client** field on the project form has a "Create new" option, so you don't have to break flow when a new enquiry comes in.

## Addresses, venues, and maps

Each client carries a **billing address** and a separate **shipping address**. The shipping address is where gear actually goes — and for a repeat client, that's often a specific venue or delivery dock rather than the head office.

As you type an address, GearFlow offers autocomplete suggestions. Pick one and the address is geocoded: the client detail page then shows a small map for both the billing and shipping addresses, and your crew gets a **Get Directions** link that opens the route in Google Maps (or Apple Maps on iPhone). Type a freeform address without picking a suggestion and it's saved as plain text — useful for a temporary festival site office that the mapping service doesn't recognise yet.

:::note
Address autocomplete and maps require your organisation's Google Maps key to be configured. Without it, address fields still work as plain text — you just won't get suggestions or the embedded map. Suggestions are biased to your organisation's country, which you set in **Settings > General**.
:::

## Editing a client

1. Open the client from the list.
2. Click **Edit**.
3. Update any field and click **Save**.

Updating a client's details updates them on all **future** documents. Documents already generated keep the client details exactly as they were when produced, so a quote you sent last month doesn't silently change.

## Importing clients

Migrating from a spreadsheet or another system? Import in bulk rather than retyping.

1. Go to **Clients** and click **Import**.
2. Download the CSV template.
3. Fill in your client data using the template format.
4. Upload the completed CSV file.

The import matches on **email address** — existing clients are updated, new ones are created. So re-running an import to fix a batch of phone numbers won't create duplicates.

## Clients on projects and documents

When you create a project and select a client, their details flow straight through to:

- Quotes and invoices (name, contact, billing address, tax ID)
- Delivery dockets and return sheets (shipping address, site contact)
- Service addresses for deliveries and pickups
- Crew-facing documents like run sheets and call sheets

Picture a corporate AV client you cover four conferences a year for. Set their record up once — billing to head office, shipping to the convention centre dock, the venue logistics manager as the site contact — and every new project for them starts pre-populated. Your warehouse team gets the right dock address on the delivery docket, and your PM gets a tappable site-contact number on the run sheet, without anyone re-keying a thing.

## Next steps

- **[Projects](../projects/overview.md)** — create a project for a client and start building the equipment list.
- **[Documents & PDFs](../documents/overview.md)** — generate quotes, dockets, and run sheets that pull the client details automatically.
