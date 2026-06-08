---
sidebar_position: 3
---

# Integrations

Integrations connect GearFlow to the tools your business already runs on — your online store, your crew's chat app, and your company's identity provider. Instead of re-keying orders, chasing crew on WhatsApp, or managing a separate password for every team member, you let those systems talk to GearFlow directly. Configure them all from **Settings > Integrations**.

| Integration | What it connects | Best for |
|---|---|---|
| **WooCommerce** | Your online hire store | Turning web orders into projects automatically |
| **Discord** | Your crew's chat | On-site lookups, fault reports, and per-project channels |
| **Single Sign-On** | Your identity provider | Enterprise teams with existing Microsoft/Google/Okta logins |
| **Social login** | Google / Microsoft accounts | Faster sign-in without a separate password |

---

## WooCommerce

The WooCommerce integration turns orders placed on your hire store into GearFlow projects — automatically, the moment they're paid. When a customer checks out, WooCommerce fires a webhook to GearFlow, which finds or creates the client, maps the ordered products to your equipment models, resolves the venue, and builds a project with line items and dates already in place. Your warehouse team sees the job in their queue without anyone touching a keyboard.

### Why it matters

A self-service hire store is only useful if the orders land somewhere your team actually works. Without the integration, every web order is a copy-paste job: read the email, create the project, re-type the client, match each SKU to a model by hand. The integration closes that gap — the order *is* the project.

**Use case — festival self-service hire.** A festival organiser places an equipment order on your WooCommerce store for a weekend stage: a line array, two moving-light bars, and an RF rack. GearFlow receives the order, matches each SKU to the right model, creates the project under the festival's client record, sets the rental dates from the order, and resolves the venue to the showground location. Your warehouse manager sees the new project in the prep queue immediately — before the organiser has even closed the checkout tab.

### Setting it up

1. In **Settings > Integrations**, click **Configure** on the WooCommerce card.
2. Toggle the integration **on**.
3. Enter your **WooCommerce Store URL**.
4. Copy the **Webhook URL** shown in GearFlow.
5. Click **Regenerate** to create a **Webhook Secret**, then copy it.
6. In your WooCommerce admin, go to **WooCommerce > Settings > Advanced > Webhooks** and add a new webhook:
   - **Topic**: `Order created`
   - **Delivery URL**: paste the GearFlow webhook URL
   - **Secret**: paste the webhook secret (it must match exactly — this is how GearFlow verifies the request really came from your store)
7. Save the webhook in WooCommerce. It sends a ping to confirm the connection.
8. Back in GearFlow, finish the remaining configuration sections below.

### Configuration options

| Section | What to configure |
|---|---|
| **Connection** | Store URL, the GearFlow webhook URL (copy), and the shared webhook secret (show / copy / regenerate) |
| **Product Matching** | How WooCommerce products map to GearFlow models — by **SKU**, a **custom field**, or **product name** |
| **Date Field Mapping** | Which order meta keys hold the rental start/end dates and event date. Also delivery address and notes. Pick the date format. |
| **Location Mapping** | Which meta key holds the venue name, and a default location to fall back on |
| **Project Defaults** | The default project type for created projects, and whether to auto-advance new projects to **Quoting** |

#### Test & Detect

Date and location data live in WooCommerce order *meta keys*, and every store names them differently depending on the booking plugin you use. Rather than guess, place one test order, then open the **Date Field Mapping** section and click **Test & Detect**. GearFlow reads the most recent order payload and shows you the available meta keys, so you can map "rental start" to whatever your store actually calls it.

### Inventory and product mapping

Matching ordered products to your equipment is the heart of the integration. You choose one of three strategies in **Product Matching**:

| Strategy | How it works | When to use it |
|---|---|---|
| **SKU** | The WooCommerce SKU is matched to a GearFlow model's **SKU** field, falling back to the model number | The most reliable — recommended if you keep SKUs in sync between the store and GearFlow |
| **Custom field** | A product meta field value is matched to the GearFlow model **ID** | When your store already stores the GearFlow model ID against each product |
| **Product name** | The product name is matched to a model **name** (case-insensitive, "contains") | A quick start when you don't maintain SKUs, but the loosest match |

To use SKU matching, set the **SKU** field on each GearFlow model (in **Inventory**) to match the product SKU in your store. A matched product becomes an **equipment** line item on the project. Anything GearFlow can't match still appears — as a **miscellaneous** line item — so nothing is silently dropped. Your team sees the unmatched line, fixes the mapping, and re-runs the order.

:::note Stock and availability
The integration creates the project and its line items; it does not decrement live stock at the moment of a web sale. Availability is reflected through the normal project lifecycle — once the project is confirmed and gear is reserved or deployed in the [Warehouse](../warehouse/check-in-check-out.md), it counts against availability like any other job. For high-turnover consumables sold online, keep an eye on your [reorder](../warehouse/reorder.md) levels.
:::

### How an order becomes a project

Behind the **Configure** screen, every incoming order runs through the same pipeline:

1. WooCommerce sends an `order.created` webhook to GearFlow.
2. GearFlow verifies the HMAC-SHA256 signature against your shared secret — an unsigned or mismatched request is rejected.
3. The system checks idempotency: if this order was already processed successfully, it's skipped (so a retry can't create a duplicate).
4. **Client** — matched by exact email first; if the order carries a company name, GearFlow fuzzy-matches it against your existing companies (normalising suffixes like "Pty Ltd", "Inc", "LLC"); otherwise a new client is created.
5. **Dates** — pulled from the mapped order meta keys for rental start/end and event date.
6. **Products** — matched to models using your chosen strategy; matched items become equipment lines, unmatched become miscellaneous lines.
7. **Location** — the venue meta value is matched against your existing locations (by name, address, substring, then fuzzy match); if nothing matches, a new **venue** location is auto-created. With no venue in the order, GearFlow uses your default location.
8. **Project** — created with the client, dates, location, and line items, then totals are recalculated.
9. **Notifications** — sent to the team members you've configured, and the action is written to the activity log.

### Order log

The Configure screen includes a **Recent Orders** log of every webhook delivery, with a status badge on each:

| Status | Meaning |
|---|---|
| **Processing** | The order was received and is being turned into a project |
| **Completed** | A project was created successfully |
| **Failed** | Something went wrong — open the row for the reason, fix it, and **Retry** |
| **Duplicate** | This order was already processed; it was skipped to avoid a double-up |

### Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| **No projects appear and the log is empty** | Webhook isn't reaching GearFlow | In WooCommerce, check the webhook status is *Active* and the Delivery URL exactly matches the one in GearFlow. Re-save the webhook to re-send the ping. |
| **Orders show as Failed with a signature error** | Webhook secret mismatch | The secret in WooCommerce must match GearFlow's exactly. Regenerate it in GearFlow, paste it into WooCommerce, and save both. |
| **Products land as miscellaneous line items** | SKU / name mismatch | Confirm the model's **SKU** field matches the store SKU (for SKU matching), or switch the matching strategy. Then **Retry** the order from the log. |
| **Wrong or missing dates on the project** | Meta keys not mapped | Place a test order, run **Test & Detect**, and map the rental start/end keys to the ones your store actually sends. |
| **Two projects for one order** | A webhook was delivered twice | GearFlow's idempotency check normally prevents this; a true duplicate is flagged **Duplicate** in the log and skipped. |
| **Client created twice under slightly different names** | Company name variants | GearFlow normalises common suffixes, but very different spellings won't match. Merge the clients in the [Clients](../clients/overview.md) list. |

---

## Discord

The Discord integration bridges your Discord server and GearFlow. It creates a dedicated channel for each project, lets crew link their Discord account to their GearFlow profile, and gives them slash commands to look up assets, pull documents, and report faults — all from their phone, mid-show, without opening a laptop. GearFlow is always the source of truth; the bot simply reads from and writes to it on the crew's behalf, enforcing the same permissions they'd have on the web.

### Why it matters — Discord as crew comms

Most rental crews already run their on-site comms through a chat app. The problem with WhatsApp groups and email threads is that the information lives *outside* the system that actually knows the answers. "What's the history on this mic?" turns into a phone call to the warehouse. "Where's the call sheet?" turns into someone digging through their inbox.

Discord replaces that. Each project gets its own channel, the right crew are added to it automatically, and the answers come from GearFlow directly:

**Use case — soundcheck and the festival weekend.** During soundcheck, your FOH engineer pulls up a wireless handheld that's crackling. Instead of calling the warehouse, they type `/asset lookup MIC-0042` in the project channel and see its model, recent fault history, and last test-and-tag date — enough to know it's a known-good unit and the issue is the cable. Later, a moving light won't strike. The lighting op runs `/asset fault FIX-0210`, picks **Major** severity, and ticks **hold for repair** — GearFlow logs a damage event and flips the fixture to *In Maintenance* so nobody redeploys it. Meanwhile your warehouse manager, watching from home, gets a Discord notification that gear from the festival project is due back Monday.

### Setting it up

The Discord integration is configured entirely from within GearFlow — the bot reads its credentials and behaviour from your settings, so there's no separate config to host.

1. Create a Discord application and bot in the [Discord Developer Portal](https://discord.com/developers/applications), and invite it to your server with the **Manage Channels** permission.
2. In GearFlow, go to **Settings > Integrations** and click **Configure** on the Discord card.
3. Enter your **Discord Bot Token** and **Application ID**. (The token is encrypted at rest and never shown back to you — the page only confirms whether one is set.)
4. Enter the **Guild ID** of the Discord server the bot operates in.
5. Configure **Channel Categories**:
   - **Active Category** — where new project channels are created
   - **Archive Category** — where channels are moved when a project finishes
6. Set **Channel Lifecycle Rules** — which project statuses create a channel (default: **Confirmed**) and which archive it (default: **Completed**, **Invoiced**, **Returned**, **Cancelled**).
7. Optionally enable a welcome message on channel creation, and posting fault reports into the project channel.
8. Click **Save**, then **Deploy commands** to register the slash commands in your server.

The Configure page also shows a **connection-health** indicator (online / offline, based on the bot's last heartbeat), a roster of linked and unlinked crew with an "X of Y linked" summary, and recent activity.

### Channel management

Project channels are created and retired automatically, following the lifecycle rules you set:

- **Creation** — when a project reaches a status in your "create on" list (Confirmed by default), the bot creates a channel named after the project code in the **Active Category**, and adds the crew assigned to that project.
- **Membership** — crew are granted access based on their project assignments. If someone links their Discord account *after* a channel already exists, they're retroactively added to the projects they're on.
- **Archiving** — when a project moves to a "done" status (Completed, Invoiced, Returned, Cancelled), its channel is moved to the **Archive Category** and locked, keeping the history without cluttering the active list.
- **Un-archiving** — if a project's status moves back, the channel returns to the active category.

This all happens within one poll cycle of the status change, so the active category always reflects the jobs actually in flight.

### Account linking

Before a crew member can use the bot, they link their Discord account to their GearFlow crew profile — a one-time step:

1. In Discord, the crew member runs `/link`.
2. The bot replies privately and emails a magic link to the address on their crew profile.
3. They click the link and confirm.
4. Their Discord account is now bound to their GearFlow profile.

Linking is hardened against abuse: the response is constant whether or not the email exists (no way to fish for valid addresses), it's rate-limited, the token is single-use and stored only as a hash, and it's bound to the Discord account that requested it.

### Slash commands

Once linked, crew use these commands. The bot enforces the **same permission model as the web app** — a viewer can look things up but can't change them.

| Command | What it does |
|---|---|
| `/link` | Start the one-time account-linking process |
| `/asset lookup [code]` | Look up an asset by tag — model, status, and fault history |
| `/project info [code]` | View a project's details |
| `/project crew [code]` | See who's assigned to a project |
| `/project doc [code] [type]` | Pull a document (packing list / pick sheet or call sheet) |
| `/asset fault [code]` | Report a fault on an asset, with a severity and an optional "hold for repair" flag |

### Notification types

The bot posts to Discord when things change in GearFlow, so crew don't have to keep checking the app. What gets sent includes:

- **Project channel created** — a welcome message when a new job's channel goes live (if enabled)
- **Crew assignment changes** — when someone is added to or removed from a project they're on
- **Project status changes** — driving the channel create / archive lifecycle
- **Fault reports** — when `/asset fault` is used, the report can be posted into the project channel (if enabled) so the whole crew sees it

### A crew member's workflow

Putting it together, here's a freelance lighting tech's day on a festival:

1. They join your Discord server and run `/link`, click the emailed link, and they're connected.
2. They're assigned to the **Main Stage** project in GearFlow, so they're automatically added to its Discord channel.
3. During load-in, they run `/project doc MAIN-STAGE packing-list` to pull the pick sheet and check what's in each road case.
4. A moving light flickers during focus — they run `/asset fault FIX-0210`, set **Major**, tick **hold for repair**. The fixture flips to *In Maintenance* and the report lands in the channel.
5. The warehouse manager sees it, pulls a spare, and replies in the same channel — no phone calls, and the asset's history is updated for the next hire.

### Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| **Connection shows offline** | Bot process not running or wrong token | Check the bot token is correct and re-save; the connection health card reports the last startup error if one occurred. |
| **Slash commands don't appear** | Commands not deployed to the guild | Click **Deploy commands** after saving; commands are registered per-guild, not globally. |
| **Channels aren't being created** | Lifecycle status or missing permission | Confirm the project reached a "create on" status, and that the bot has **Manage Channels** in the active category. |
| **`/link` says my email isn't found** | Email mismatch | The address on the crew profile must match where the magic link is sent. Update the crew member's email in [Crew](../crew/overview.md). |
| **A command returns "not linked"** | Account not enrolled | The crew member needs to run `/link` and complete the magic-link step first. |

---

## Single Sign-On (SSO)

Single Sign-On lets your team sign in to GearFlow with the company login they already use — Microsoft Entra, Google Workspace, Okta, and others — instead of a separate GearFlow password. For an enterprise team, that means central control: when IT off-boards someone in the identity provider, their GearFlow access goes with it, and you can map identity-provider groups straight to GearFlow roles. GearFlow supports **SAML 2.0** and **OIDC**. Configure providers in **Settings > SSO**.

### Why it matters

**Use case — a theatre company on Microsoft Entra.** A regional theatre company runs everything through Microsoft Entra: production staff, casual crew, and front-of-house all have company accounts. They turn on SSO in GearFlow and add their Entra app as an OIDC provider. Now a new lighting hire signs in with the same Microsoft login they use for email — no extra password to issue. The company maps their Entra **"Production Crew"** group to GearFlow's **Member** role and **"Heads of Department"** to **Manager**, so people land with the right access automatically. When a casual finishes the season and IT disables their Entra account, they can no longer reach GearFlow either.

### Supported identity providers

- Microsoft Entra (Azure AD)
- Google Workspace
- Okta
- OneLogin
- Auth0
- Duo
- JumpCloud
- PingIdentity
- Authentik
- Any SAML 2.0 or OIDC-compliant provider

### How it works

1. In **Settings > SSO**, enable SSO and click **Add Provider**.
2. Choose the **OIDC** or **SAML** tab and fill in your provider's details — your IdP supplies the metadata URL, issuer, or client ID/secret.
3. GearFlow displays the service-provider details to enter on the IdP side: the **ACS URL**, **Metadata URL**, and **OIDC Redirect** (callback) URL.
4. Give the provider a display name and brand icon — these appear on the login page's SSO button.
5. Test the connection by signing in with SSO before you roll it out to the team.

### User provisioning

Decide what happens when someone signs in via SSO for the first time:

| Mode | Behaviour |
|---|---|
| **Auto-create** | The user is added as an organisation member immediately, with the role resolved from group mappings |
| **Require approval** | The user can authenticate but has no access until an admin approves them in **Settings > SSO** |
| **Existing only** | Only people who are already members can sign in via SSO; new users are turned away |

### Group-to-role mapping

Map IdP groups to GearFlow roles so people get the right access automatically. When you save mappings, GearFlow resolves a user's role on sign-in in this priority order:

1. **Custom roles** with a matching group claim
2. **Explicit group mappings** (custom-role mappings first, then the highest-privilege built-in role wins)
3. The **default role**, if nothing matches

You also control **when** roles update: re-evaluate on every login, set once on first login only, or ignore groups entirely and assign roles by hand. When a user signs in carrying a group you haven't mapped yet, GearFlow surfaces it as an **unmapped group** (an amber radar icon) so you can decide what role it should grant.

### Login behaviour

- **Allow password login** — keep email/password sign-in available alongside SSO (on by default).
- **Enforce SSO** — require SSO and block password and social login. You can only turn this on *after* a successful test sign-in, so you can't lock your team out of a misconfigured provider.

### Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| **Login succeeds but email is blank / sign-in fails on Microsoft Entra** | Entra doesn't return the standard `email` claim | In the provider edit form, set the **Email Claim** to `preferred_username`. Add `preferred_username` as an optional ID-token claim in your Entra app registration. |
| **Redirect / callback errors** | Mismatched callback URL | The redirect URI in your IdP must exactly match the OIDC Redirect URL shown in GearFlow's provider form. |
| **Users get the wrong role** | Group claims not arriving or unmapped | Configure group claims in your IdP's token settings, then map the incoming groups in **Group-to-Role Mapping**. Unmapped groups appear with an amber icon. |
| **Can't enable Enforce SSO** | No successful test login yet | Complete a test sign-in with SSO first — the toggle unlocks once a test succeeds. |
| **New users can't get in** | Provisioning set to *Existing only* or *Require approval* | Switch to auto-create, or approve them under **Settings > SSO > Pending Approvals**. |

No new environment variables are required — provider credentials are stored securely per provider in GearFlow.

---

## Social login

Google and Microsoft social login can be enabled by your organisation's site admin. When enabled, users can sign in with their Google or Microsoft account in addition to email/password and SSO — handy for small teams who want a one-click login without the full SSO setup. Users can connect or disconnect social accounts from their **Account > Connected Accounts** page.

## Next steps

- **[Team and roles](./team-and-roles.md)** — set up the roles that SSO group mappings and the Discord bot both enforce.
- **[Branding](./branding.md)** — put your logo and colours on the quotes and documents the Discord bot pulls and WooCommerce projects generate.
- **[Projects](../projects/overview.md)** — see how the projects WooCommerce creates move through their lifecycle.
- **[Crew](../crew/overview.md)** — manage the crew profiles that link to Discord accounts.
