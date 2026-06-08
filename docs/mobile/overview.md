---
sidebar_position: 0
---

# Mobile & PWA

GearFlow is a Progressive Web App (PWA) — it runs in your mobile browser but installs to your home screen and opens full-screen like a native app. There's no app store download, no separate version to keep updated, and it's the same GearFlow your office uses, just sized for a phone.

This matters because the warehouse floor is where the work actually happens. During a festival bump-in, your crew lead shouldn't have to walk back to a desktop to confirm a road case of moving heads went out. They install GearFlow on their phone, scan tags as cases roll onto the truck, and deploy gear from the loading dock. The mobile interface is built for that — big touch targets, a scanner one tap away, and forms that slide up under your thumb.

## Installing GearFlow as a PWA

### On Android (Chrome)

1. Open GearFlow in Chrome.
2. Tap the menu (three dots) in the top-right corner.
3. Tap **Add to Home Screen**.
4. Tap **Install**.
5. GearFlow appears on your home screen with its own icon.

### On iOS (Safari)

1. Open GearFlow in Safari.
2. Tap the **Share** button (the square with an arrow).
3. Scroll down and tap **Add to Home Screen**.
4. Tap **Add** in the top-right corner.
5. GearFlow appears on your home screen. Opening it from here runs it in full-screen standalone mode.

### On desktop (Chrome, Edge)

1. Look for the **Install** icon in the address bar (or use the browser menu).
2. Click **Install**.
3. GearFlow opens in its own window with no browser chrome.

## Mobile-friendly features

### Responsive layout

GearFlow adapts to your screen size. On mobile:
- The sidebar collapses into a hamburger menu
- Tables show a compact view with fewer columns
- Action buttons become floating action buttons (FAB) at the bottom of the screen
- Forms and sheets slide up from the bottom for easier thumb reach

### Bottom navigation

On phones, a persistent bottom nav bar gives quick access to the five most-used sections:
- **Home** — dashboard
- **Assets** — equipment search and lookup
- **Scan** — opens the barcode scanner
- **Projects** — project list
- **Warehouse** — warehouse operations

### Touch targets

Buttons, links, and interactive elements have a minimum touch target of 44 × 44 pixels, making them easy to tap even on small screens. Checkboxes are at least 24 pixels.

## Offline support

GearFlow's service worker caches key assets and pages so the app loads even without a network connection. When you're offline:

- The app shell loads immediately
- Previously visited pages are available
- An **Offline** page is shown if you try to navigate somewhere that isn't cached
- Once you're back online, everything works as normal

## Camera and scanning

The built-in barcode scanner uses your device's camera. No additional scanner hardware is needed. The scanner is available from:

- The **Scan** button in the bottom nav (mobile)
- The **Scan** button in the top bar (desktop)
- Barcode input fields throughout the app (scanning auto-fills the field)

See **[Barcode Scanning](./barcode-scanning.md)** for details.

## When to use mobile vs desktop

| Task | Best on |
|---|---|
| Managing inventory and equipment | Desktop |
| Warehouse prep and deploy | Either — scan with phone, pack on desktop |
| Checking gear in/out in the warehouse | Mobile — walk around with your phone |
| Looking up asset details on site | Mobile — scan the tag |
| Reporting faults and damage | Mobile — take a photo on the spot |
| Data entry and configuration | Desktop |
| Report building and analysis | Desktop |

## Next steps

- **[Barcode Scanning](./barcode-scanning.md)** — point your phone's camera at a tag to look up, prep, deploy, or return gear.
- **[Warehouse overview](../warehouse/overview.md)** — the prep, deploy, and return flow your crew runs from their phones.
- **[Check-In / Check-Out](../warehouse/check-in-check-out.md)** — the scan-based workflow for moving gear to and from a project.
