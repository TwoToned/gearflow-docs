---
sidebar_position: 4
---

# Categories

**Categories** are the filing system for your catalogue. They organise your models and kits into a browsable, nested hierarchy so you — and everyone quoting, picking, or reporting — can find gear by type instead of scrolling a flat list of thousands of items. For example: **Lighting > Moving Lights > Spot Fixtures**.

A good category tree pays off everywhere. When a designer asks "what wireless do we have free that week?", you filter the equipment table to **Audio > Microphones > Wireless** and see it instantly. When you run an end-of-year report on utilisation, categories are how you slice "lighting earned $X, audio earned $Y". Set the structure up once and the whole platform inherits it.

## Category hierarchy

Categories are hierarchical. A parent category can have multiple child categories, and those children can have their own children. There's no limit to the depth.

A typical structure might look like:

```
Lighting
├── Moving Lights
│   ├── VL 3500
│   └── Mac Encore
├── Conventional
│   ├── Source Four
│   └── PAR Can
└── Control
    ├── Lighting Consoles
    └── DMX Cables
Audio
├── Microphones
│   ├── Wireless
│   └── Wired
├── Speakers
└── Cables
```

In the category list, children are indented under their parents so you can see the structure at a glance.

### Categories vs. tags

Categories are a strict, single-parent tree — each model or kit lives in exactly one category. For cross-cutting groupings that don't fit a tree (e.g. everything heading out on `tour-2026`, or every fixture flagged `needs-recert`), use **tags** instead. A Source Four sits in **Lighting > Conventional** *and* can carry the tags `house-stock` and `repertory-2026`. Use categories for the "what kind of gear is this" question, tags for everything else.

## Browsing inventory by category

### From the category page

1. Go to **Inventory > Categories**.
2. Click any category to open its detail page.
3. The detail page shows:
   - **Subcategories** — any child categories, displayed as a grid
   - **Models** — tab showing all models in this category (with counts)
   - **Kits** — tab showing all kits in this category

### From the equipment table

1. Go to **Inventory > Equipment**.
2. Click the **Filter** button and select **Category**.
3. Choose one or more categories. The table filters to show only items in those categories.
4. Category filters stack with other filters like status and type.

### From the sidebar

Click **Inventory** in the sidebar, then select **Categories** from the expanded menu. You'll land on the category list page.

## Creating a category

1. Go to **Inventory > Categories** and click **Add Category**.
2. Enter a **Name** — required. Keep it short and descriptive.
3. Optionally select a **Parent Category** to make this a child of an existing category.
4. Click **Save**. The category appears in the hierarchy.

## Editing a category

1. On the category detail page, click **Edit Category**.
2. Change the **Name** or **Parent Category**.
3. Click **Save**.

Changing the parent category moves the category (and all its children) to a new position in the hierarchy.

## Deleting a category

1. On the category detail page, click **Delete Category**.
2. If the category has models, kits, or subcategories assigned, GearFlow asks what to do:
   - Reassign them to another category
   - Delete the category (items become uncategorised)

Categories with no items assigned are deleted immediately.

## Mobile considerations

On mobile, the category list uses indented cards instead of a table. Tap a category to open its detail page. Subcategories and tabs (Models/Kits) are accessible through a swipeable section.

## Next steps

- **[Equipment](./equipment.md)** — assign models and assets to the categories you've created.
- **[Kits](./kits.md)** — kits are categorised too, so they show up alongside models when you filter.
- **[Inventory overview](./overview.md)** — see how categories fit alongside the four asset types.
