---
sidebar_position: 3
---

# Quotes

## Pricing structure

GearFlow uses a **billing weeks and billing days** model for rental pricing.

Every project has a billing period set on the project form:
- **Billing Weeks** — the number of weeks to charge
- **Billing Days** — the number of additional days

The **Match** button can auto-calculate these from the project's start and end dates.

### Rate calculation

Each model in your inventory has a rate card:

| Rate | Description |
|---|---|
| Daily rate | Price per day |
| Weekly rate | Price per week |
| Monthly rate | Price per month (optional) |

The pricing formula for a group is:

```
(weeklyRate × billingWeeks + dailyRate × billingDays) × groupQuantity
```

GearFlow automatically finds the cheapest combination of months, weeks, and days — for example, 2 weeks + 3 days might be cheaper than 17 individual days. This is called **optimised pricing**.

### Per-group overrides

Each group can override the project's billing period with its own billing weeks and days. Use this when different equipment categories have different rental terms.

## Discounts

Apply a percentage discount to the entire project:

1. Open the project and find the **Financial Summary** in the right sidebar.
2. Click the discount field.
3. Enter a percentage (e.g. 10 for 10%).

The discount amount is calculated from equipment revenue (before tax).

## Tax rate

Tax is calculated using this cascade:

1. **Per-project tax rate** — set on the project form, takes highest priority.
2. **Organisation default tax rate** — configured in **Settings > Project Defaults**.
3. **10%** — fallback default (GST).

The formula:

```
subtotal = equipment revenue
taxable amount = subtotal - discount
tax amount = taxable amount × taxRate / 100
total = taxable amount + tax amount
```

## How quotes appear

Groups appear as billable lines on the quote. Each group shows its title, quantity, and price.

Standalone line items (not in a group) appear as their own line items on the quote.

Line items inside a group are for internal tracking only and are **not** shown on the client quote.

## Sending a quote

1. Advance the project to **Quoting** status.
2. Build your equipment list and set group pricing.
3. Click **Documents** in the project header and select **Generate Quote**.
4. Review the PDF and click **Send** to email it to the client, or download it to share manually.

Once the quote is sent, advance the project to **Quoted**.

When the client accepts, advance to **Confirmed**.

## Project margin

The financial sidebar shows your margin:

```
margin = total - (service costs + labour costs)
margin percent = margin / total × 100
```

A colour-coded bar gives a quick visual:

| Margin | Colour |
|---|---|
| 40%+ | Green |
| 20–40% | Amber |
| Below 20% | Red |

Services and labour that are marked as **billable to client** flow into revenue instead of costs.
