---
sidebar_position: 0
---

# Inventory

GearFlow organises your equipment into three asset types. Understanding these types is key to tracking your gear effectively.

## Asset types

### Serialised assets

A serialised asset is a specific, individually tracked item — a single speaker, amplifier, lighting fixture, or microphone. Each serialised asset has its own **asset tag** (barcode or QR code), serial number, and status lifecycle.

Use serialised tracking for items where you need to know exactly which unit went where, when it's due back, and what condition it returned in.

### Bulk assets

A bulk asset is a quantity-tracked item — for example, "50 XLR cables" or "20 sandbags." Instead of tracking each cable individually, GearFlow tracks the **total quantity** and **available quantity**.

Use bulk tracking for consumables, cables, and accessories where individual serial numbers aren't practical.

### Kits

A kit is a container that groups multiple assets together so they rent as one unit. A "Drum Mic Kit" might contain 4 microphones, 4 clips, and a case. Kits can contain both serialised and bulk assets, and kits can be nested inside other kits.

See the **[Kits](./kits.md)** page for details.

### Accessories

Accessories are child items that always ship with a parent asset — for example, a clamp and safety bond that travel with every moving light. They automatically cascade onto projects when the parent is deployed and back in when the parent returns.

See the **[Accessories](./accessories.md)** page for details.

## Categories

Categories organise your inventory into a hierarchy. You can create parent categories (e.g. "Lighting") and child categories (e.g. "Moving Lights", "Conventional", "LED"). Browse, filter, and report on equipment by category.

See the **[Categories](./categories.md)** page for details.

## Asset tags

Every serialised asset and kit gets an auto-generated asset tag. Your organisation's tag format is configured in **Settings > Inventory** — set a **prefix** (e.g. `TTP`), **digit count** (e.g. 5), and the system increments automatically (TTP-00001, TTP-00002…). You can override the suggested tag when adding equipment.

## Asset status lifecycle

Every serialised asset moves through a status lifecycle:

| Status | Description |
|---|---|
| **Available** | In the warehouse, ready to deploy |
| **Reserved** | Set aside for an upcoming project |
| **Deployed** | Checked out to a project |
| **In Maintenance** | Out for repair or servicing |
| **Retired** | Taken out of service permanently |
| **Lost** | Reported missing during a return |
