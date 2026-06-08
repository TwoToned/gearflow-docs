---
sidebar_position: 1
---

# Test & Tag

The Test & Tag module implements AS/NZS 3760:2022 electrical testing compliance. It manages the full lifecycle of equipment testing — from initial registration through quick-test workflows, result recording, label printing, and retest scheduling.

## Equipment classes

GearFlow supports these equipment classes defined by the standard:

| Class | Description | Tests applied |
|---|---|---|
| **Class I** | Earthed equipment | Earth continuity + insulation/leakage |
| **Class II** | Double insulated | Insulation/leakage only (no earth) |
| **Lead / Cord Assembly** | Extension leads and cord sets | Earth continuity + polarity |
| **RCD Portable** | Portable residual current devices | RCD-specific tests |
| **RCD Fixed** | Fixed RCD units | RCD-specific tests |
| **Three Phase** | Three-phase equipment | Per-phase testing |

## Appliance types

Each test item is classified by appliance type: **Appliance**, **Cord Set**, **Extension Lead**, **Power Board**, **RCD Portable**, **RCD Fixed**, **Three Phase**, **Microwave**, or **Other**. The combination of equipment class and appliance type determines which test profile applies.

## Test profiles

Test profiles define which visual checks and electrical tests are required for a given equipment class and appliance type combination.

### Default profiles

GearFlow ships with 12 AS/NZS 3760 default profiles. You can seed them from **Settings > Test & Tag > Profiles** by clicking **Seed Defaults**. Each profile defines:

- **Visual checks** — a checklist of inspection items (e.g. "Plug condition", "Cable condition", "No damage to casing")
- **Electrical tests** — measured tests with pass/fail thresholds (e.g. earth continuity ≤ 1.0 Ω, insulation ≥ 1.0 MΩ)
- **Sub-test config** — whether multi-outlet devices require per-outlet testing

### Profile resolution

When a test is started, the system resolves the correct profile:

1. Asset's explicitly assigned profile
2. Asset's model's default profile
3. First default profile matching the equipment class + appliance type
4. Any matching active profile

## Test status lifecycle

Every test-and-tag item moves through this status lifecycle:

```
Not Yet Tested → (first test passes) → Current
Current → (interval expires soon) → Due Soon
Due Soon → (interval expires) → Overdue
Any status → (test fails) → Failed
Any status → (manual) → Retired
Failed → (retest passes) → Current
```

## Adding items to the registry

Items can be added to the Test & Tag registry in several ways:

1. **Manually** — go to **Test & Tag** and click **New Item**, then select the asset, equipment class, and appliance type
2. **Auto-registration** — when you create an asset whose model has **Requires Test & Tag** enabled, a test-and-tag record is created automatically
3. **Bulk create** — from the registry page, use the batch create option to register multiple assets at once

## Quick test wizard

The quick-test wizard at **Test & Tag > Quick Test** guides you through testing in five steps:

1. **Scan** — scan or type the test tag ID. The system loads the asset and resolves the test profile. If the asset is retired, you can reactivate it here. A **Quick Pass** option pre-fills from the last test record for identical items.

2. **Visual** — work through the profile-driven visual inspection checklist. Each item shows a checkbox. Click **Pass All** (shortcut: Ctrl+Shift+P) to pass every visual check at once. The visual result is calculated automatically.

3. **Electrical** — enter readings for each enabled electrical test. Numeric inputs show the unit label and pass/fail threshold. Readings are evaluated in real time against the profile's thresholds.

4. **Sub-Tests** — only shown for multi-outlet devices (power boards, three-phase). Each outlet or phase has its own set of electrical inputs. Add or remove outlets as needed. Labels auto-generate as "Outlet 1", "Outlet 2", etc., or "L1-L2", "L2-L3" for three-phase.

5. **Result** — the overall result is displayed as a pass/fail pill with a breakdown by test category. If the result is **FAIL**, a workflow dialog offers options:
   - **Create Maintenance Record** — refer to an electrician
   - **Mark Out of Service** — remove from service, asset status set to Failed
   - **Retire Asset** — permanently retire the asset
   - **Save Without Action** — record the failure without further action

   Set the **Next Due Date** and choose **Save & Next** to continue testing or **Save & Print Label** to print the test tag.

### Session features

- **Tester** — defaults to the logged-in user. Select a different team member from the dropdown. Persists across tests in the session.
- **Audio feedback** — a beep sounds on save (different tones for pass and fail). Toggle in the session controls.
- **Session log** — a sidebar (desktop) or bottom bar (mobile) shows all items tested in this session with their results.
- **Keyboard shortcuts** — Ctrl+Enter to save, Escape to reset to scan.

## Test history

Every test-and-tag item has a complete test history. Open any item from the registry to see:
- All test records chronologically (most recent first)
- Visual check results per test
- Electrical readings and thresholds
- Sub-test results for multi-outlet devices
- Tester name, test date, and next due date
- Printed labels in the activity log

## Test expiry alerts

When a test is approaching its due date or has expired, the system generates notifications:
- **Due Soon** — items within the configured threshold (default 30 days) appear with a warning indicator
- **Overdue** — expired items appear with an overdue indicator and trigger notifications

You can see all items grouped by status on the Test & Tag dashboard. The registry table includes a status column so you can sort, filter, and act on items approaching expiry.

## Reports

The **Test & Tag > Reports** page offers 10 report types covering:
- Tests completed in a date range
- Items by status (Current, Due Soon, Overdue, Failed)
- Tester productivity
- Sub-test results
- CSV export for all report types

## Label printing

After saving a test, you can print a 89 mm × 36 mm label. The label includes:
- Test tag ID (with barcode)
- PASS / FAIL result
- Test date and next due date
- Tester name and company name
- Equipment class and appliance type

Labels print via the browser's print dialog. Use label sheets or adhesive-backed paper.

## Routes

| Page | URL |
|---|---|
| Test & Tag overview | `/test-and-tag` |
| Registry | `/test-and-tag/registry` |
| New item | `/test-and-tag/new` |
| Item detail | `/test-and-tag/[id]` |
| Quick test | `/test-and-tag/quick-test` |
| Reports | `/test-and-tag/reports` |
| Test profiles (settings) | `/settings/test-and-tag/profiles` |
