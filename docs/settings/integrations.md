---
sidebar_position: 3
---

# Integrations

GearFlow integrates with external platforms to extend your rental workflow. Configure integrations in **Settings > Integrations**.

## WooCommerce

The WooCommerce integration automatically creates GearFlow projects from WooCommerce orders via webhook. When a customer places an order on your WooCommerce store, GearFlow receives the order data and creates a project with the client, dates, line items, and location.

### Setting it up

1. In **Settings > Integrations**, click **Configure** on the WooCommerce card.
2. Enable the integration.
3. Enter your **WooCommerce Store URL**.
4. Copy the **Webhook URL** shown in GearFlow.
5. Generate a **Webhook Secret** and copy it.
6. In your WooCommerce admin panel, create a new webhook:
   - **Topic**: `Order created`
   - **Delivery URL**: paste the GearFlow webhook URL
   - **Secret**: paste the webhook secret
7. Back in GearFlow, configure the remaining options.

### Configuration options

| Section | What to configure |
|---|---|
| **Product Matching** | How WooCommerce products map to GearFlow models — by SKU, custom field, or product name |
| **Date Mapping** | Which order meta keys hold rental start/end dates and event date. Use **Test & Detect** to see available meta keys from a recent order. |
| **Location Mapping** | Which meta key holds the venue name, and a default location fallback |
| **Project Defaults** | Default project type, auto-advance to Quoting |

### Order processing flow

1. WooCommerce sends a `order.created` webhook to GearFlow.
2. GearFlow verifies the HMAC-SHA256 signature.
3. The system finds or creates the client (by email, company name, or auto-create).
4. Products are matched to GearFlow models using the configured strategy.
5. The venue location is resolved or auto-created.
6. A project is created with line items, dates, and client.
7. Notifications are sent to configured team members.

### Order log

The integration page includes a log of all webhook deliveries with status (Processing, Completed, Failed, Duplicate). You can retry failed orders from the log.

## Discord

The Discord integration connects a Discord bot to your GearFlow organisation, enabling crew members to look up assets and projects, pull documents, and log faults from their phone.

### Setting it up

The Discord integration is configured entirely from within GearFlow — no bot hosting setup required.

1. In **Settings > Integrations**, click **Configure** on the Discord card.
2. Enter your **Discord Bot Token** and **Application ID**.
3. Select the **Guild ID** where the bot will operate.
4. Configure **Channel Categories**:
   - **Active Category** — where project channels are created
   - **Archive Category** — where completed project channels are moved
5. Set **Channel Lifecycle Rules** — which project statuses trigger channel creation and archiving.
6. Click **Save**.

### Bot commands

Once configured, crew members can link their Discord account and use slash commands:

| Command | What it does |
|---|---|
| `/link` | Start the account linking process (sends a magic link via email) |
| `/asset lookup [code]` | Look up asset details by tag |
| `/project info [code]` | View project details |
| `/project crew [code]` | See who's assigned to a project |
| `/project doc [code] [type]` | Pull a document (packing list, call sheet) |
| `/asset fault [code]` | Report a fault on an asset |

### Account linking

To use the bot, crew members must link their Discord account:

1. In Discord, use the `/link` command.
2. The bot replies with instructions to check your email.
3. Click the magic link in the email.
4. Your Discord account is linked to your GearFlow crew profile.

Linking is a one-time process. The link is single-use and expires after a set period.

### Permissions

The bot enforces the same permission model as the web application — crew members can only do what their role allows.

## Single Sign-On (SSO)

GearFlow supports SAML 2.0 and OIDC Single Sign-On via the built-in SSO plugin. Configure providers in **Settings > SSO**.

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
- Any SAML 2.0 or OIDC compliant provider

### How it works

1. In **Settings > SSO**, enable SSO and click **Add Provider**.
2. Choose **SAML 2.0** or **OIDC**.
3. Fill in the provider details — your IdP provides the metadata URL, ACS URL, or client ID/secret.
4. GearFlow displays the redirect/callback URLs to enter in your IdP.
5. Test the connection by signing in with SSO.

### Provisioning modes

| Mode | Behaviour |
|---|---|
| **Auto-Create** | New SSO users are automatically added as organisation members |
| **Require Approval** | New SSO users are held for admin approval |
| **Existing Only** | Only existing members can sign in via SSO |

### Group-to-role mapping

Map IdP groups to GearFlow roles so users are automatically assigned the correct role when they sign in. Custom roles can be matched by IdP group claims for automatic assignment.

## Social login

Google and Microsoft social login can be enabled by your organisation's site admin. When enabled, users can sign in with their Google or Microsoft account in addition to email/password and SSO.

Users can connect or disconnect social accounts from their **Account > Connected Accounts** page.
