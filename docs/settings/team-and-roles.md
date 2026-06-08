---
sidebar_position: 1
---

# Team & Roles

The **Team** section of Settings lets you manage who has access to your GearFlow organisation and what they can do.

## Inviting team members

1. Go to **Settings > Team**.
2. Click **Invite Member**.
3. Enter the person's **email address**.
4. Select their **Role** (see roles below).
5. Click **Send Invite**.

The invitee receives an email with a link to join. If they don't already have a GearFlow account, they'll create one during the acceptance flow. Invitations are organisation-specific — the new member joins your organisation directly.

You can resend or revoke pending invitations from the team page.

## Roles

GearFlow has a two-tier permission model: **site-level** roles for platform administration, and **organisation-level** roles for day-to-day operations.

### Organisation roles

| Role | Permissions |
|---|---|
| **Owner** | Full access to everything, including billing, settings, and member management. Transferred only by another Owner. |
| **Admin** | Full access to all resources and settings, including managing members and roles. |
| **Manager** | All CRUD operations on operational resources (assets, projects, clients, etc.). Cannot delete org settings or remove members. |
| **Member** | Read, create, and update on operational resources. Cannot manage org settings, billing, or members. |
| **Viewer** | Read-only access to all resources. Cannot create, edit, or delete anything. |
| **Warehouse** (legacy) | Warehouse-focused permissions — scan, prep, deploy, return. Read on most other resources. |
| **Staff** (legacy) | Similar to Member. |

### Site-level roles

| Role | Access |
|---|---|
| **Admin** | Access to the `/admin` panel for platform-wide management (all organisations, users, platform settings). The first user in the organisation is automatically promoted to site Admin. |
| **User** | Standard user within their organisation. |

### Custom roles

If the built-in roles don't fit your needs, you can create custom roles with specific permissions. Custom roles let you:

1. Go to **Settings > Team > Custom Roles**.
2. Click **Add Custom Role**.
3. Name the role (e.g. "Bookkeeper", "Workshop Manager").
4. Select the exact permissions for each resource (create, read, update, delete).
5. Click **Save**.

Custom roles appear in the role dropdown when inviting or editing members.

### SSO group matching

Custom roles can optionally be linked to an IdP group claim for automatic role assignment via SSO. When a user logs in with SSO, if their IdP group matches the role's `ssoGroupClaim`, they are automatically assigned that role.

## Editing a member's role

1. On the **Team** page, find the member in the list.
2. Click the role dropdown next to their name.
3. Select the new role.
4. The change takes effect immediately.

## Removing a member

1. On the **Team** page, find the member.
2. Click the menu (three dots) and select **Remove**.
3. Confirm the removal.

The member loses access to the organisation immediately. Their user account is not deleted — they can still log in if they belong to other organisations.

An Owner cannot be removed. To transfer ownership, the current Owner must assign another member as Owner first.
