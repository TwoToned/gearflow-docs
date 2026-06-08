---
sidebar_position: 3
---

# Account Setup

Your account is the key to your entire rental operation — quotes worth tens of thousands, client contact details, asset values, and the warehouse history of every job you've run. If a login leaks, someone could alter a quote going out to a venue, export your client list, or lock your crew out mid-bump-in. Securing your account isn't box-ticking; it's protecting the business.

A practical scenario: your warehouse lead logs into GearFlow on a tablet on the loading dock to deploy a festival rig, then leaves the tablet on a road case. With a passkey tied to the device's fingerprint and 2FA on the account, that lost tablet is useless to anyone else. This page covers the profile, security, and notification settings that make that possible.

![Sign in to GearFlow with your password, a passkey, or SSO](/img/screenshots/login.png)

This page covers your personal account settings — profile, security, notifications, and login methods.

## Profile settings

### Updating your name and email

1. Click your avatar in the top-right corner and select **Account Settings**.

2. On the **Profile** tab, edit your **Name** or **Email** fields.

3. Click **Save**. If you changed your email, you'll receive a verification link at the new address.

### Changing your password

1. Go to **Account Settings** and click the **Security** tab.

2. Under **Password**, enter your current password, then your new password (8+ characters).

3. Click **Update Password**.

### Profile picture

1. In **Account Settings > Profile**, click the avatar area.

2. Choose a new image from your computer. Images are resized to 256×256 pixels.

3. Click **Upload**. Your new avatar appears across the app — on the dashboard, projects, and crew pages.

To remove your picture, click the avatar area and select **Remove**.

## Two-factor authentication

Adding 2FA keeps your account secure even if someone gets your password.

1. Go to **Account Settings > Security** and find **Two-Factor Authentication**.

2. Click **Enable 2FA**.

3. Scan the QR code with your authenticator app (Google Authenticator, Authy, 1Password, etc.).

4. Enter the 6-digit code from your app to confirm.

5. Save your backup codes in a safe place — you'll need them if you lose access to your authenticator app.

To disable 2FA, return to the same section and click **Disable 2FA**. You'll need to confirm with a code from your authenticator app.

## Passkeys (passwordless login)

Passkeys let you sign in with your device's biometric or PIN — fingerprint, face scan, or screen lock — instead of typing a password.

### Adding a passkey

1. Go to **Account Settings > Security** and find **Passkeys**.

2. Click **Add Passkey**.

3. Your browser asks you to authenticate (fingerprint, face, or PIN). Follow the prompts.

4. Give your passkey a name (e.g. "Work laptop") so you can identify it later.

### Using a passkey to sign in

On the login page, click **Sign in with Passkey**. Your browser prompts you to authenticate with your registered device.

### Managing passkeys

You can view, rename, or delete passkeys from the same section. Keep at least one passkey registered if you plan to use passwordless login.

## Notification preferences

1. Go to **Account Settings > Notifications**.

2. Toggle notifications on or off for each type:

   | Notification | When it's sent |
   |---|---|
   | **Project updates** | When a project status changes or line items are modified |
   | **Deployment reminders** | When gear is due for deployment or return |
   | **Crew assignments** | When you're assigned to or removed from a project |
   | **Maintenance alerts** | When equipment is due for servicing or test-and-tag |
   | **Pending approvals** | When an SSO user needs approval (admin only) |

3. Choose whether to receive notifications **in-app** only, or also **by email**.

## SSO login

If your organisation uses Single Sign-On, you can sign in with your corporate identity provider instead of a GearFlow password.

### Google and Microsoft login

1. On the login page, click **Sign in with Google** or **Sign in with Microsoft**.

2. Authenticate with your Google or Microsoft account.

3. If your email matches an existing GearFlow account, the accounts are linked automatically. You can now sign in with either method.

### SAML / OIDC (enterprise SSO)

Your organisation's admin sets up enterprise SSO in **Settings > SSO**. Once configured:

1. On the login page, enter your email address and click **Continue**.

2. If your email domain matches an SSO provider, you're redirected to your corporate login page.

3. Authenticate with your company credentials. After the first successful login, your account is provisioned based on your organisation's settings:

   - **Auto-create** — your account is created immediately
   - **Require approval** — an admin must approve your account before you can access GearFlow
   - **Existing only** — you must already have a GearFlow account to sign in via SSO

4. After login, you land on the dashboard.

### Connecting social accounts

To link a Google or Microsoft account to your existing GearFlow account:

1. Go to **Account Settings > Security** and find **Connected Accounts**.

2. Click **Connect** next to Google or Microsoft.

3. Authenticate with the provider. Your accounts are linked and you can sign in with either method.

## Active sessions

The **Security** tab also lists your active sessions — the devices currently signed in to your account. If you spot a warehouse tablet or laptop you no longer use, you can sign it out remotely from here. Worth a check after a busy tour when gear and devices have been on the road.

## Next steps

- [Navigation](./navigation.md) — find your way around with the sidebar, search, and command palette
- [Getting Started](../getting-started.md) — revisit the dashboard tour and organisation setup
