---
sidebar_position: 4
---

# Categories

Categories organise your inventory into groups so you can find, filter, and report on equipment by type. For example: **Lighting > Moving Lights > VL 3500**.

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
