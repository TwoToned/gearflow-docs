import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started',
        'getting-started/navigation',
        'getting-started/account-setup',
      ],
    },
    {
      type: 'category',
      label: 'Inventory',
      collapsed: true,
      items: [
        'inventory/overview',
        'inventory/equipment',
        'inventory/kits',
        'inventory/accessories',
        'inventory/categories',
        'inventory/csv-import',
        'inventory/custom-fields',
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      collapsed: true,
      items: [
        'projects/overview',
        'projects/creating-projects',
        'projects/line-items',
        'projects/quotes',
        'projects/templates',
        'projects/tasks',
        'projects/project-numbering',
      ],
    },
    {
      type: 'category',
      label: 'Clients & Locations',
      collapsed: true,
      items: [
        'clients/overview',
      ],
    },
    {
      type: 'category',
      label: 'Warehouse',
      collapsed: true,
      items: [
        'warehouse/overview',
        'warehouse/check-in-check-out',
        'warehouse/pull-sheets',
        'warehouse/stocktake',
        'warehouse/reorder',
        'warehouse/damage',
        'warehouse/displays',
      ],
    },
    {
      type: 'category',
      label: 'Documents & PDFs',
      collapsed: true,
      items: [
        'documents/overview',
        'documents/delivery-dockets',
        'documents/run-sheets',
        'documents/call-sheets',
        'documents/timeline',
        'documents/template-designer',
      ],
    },
    {
      type: 'category',
      label: 'Crew',
      collapsed: true,
      items: [
        'crew/overview',
        'crew/planner',
        'crew/timesheets',
        'crew/certifications',
      ],
    },
    {
      type: 'category',
      label: 'Suppliers',
      collapsed: true,
      items: [
        'suppliers/overview',
        'suppliers/purchase-orders',
        'suppliers/sub-hires',
      ],
    },
    {
      type: 'category',
      label: 'Compliance & Safety',
      collapsed: true,
      items: [
        'compliance/overview',
        'compliance/test-and-tag',
        'compliance/maintenance',
        'compliance/workshop',
        'compliance/check-items',
      ],
    },
    {
      type: 'category',
      label: 'Reporting',
      collapsed: true,
      items: [
        'reports/overview',
        'reports/built-in-reports',
        'reports/custom-reports',
        'reports/utilization',
      ],
    },
    {
      type: 'category',
      label: 'Settings & Admin',
      collapsed: true,
      items: [
        'settings/overview',
        'settings/team-and-roles',
        'settings/branding',
        'settings/integrations',
        'settings/billing',
      ],
    },
    {
      type: 'category',
      label: 'Mobile & Barcode',
      collapsed: true,
      items: [
        'mobile/overview',
        'mobile/barcode-scanning',
      ],
    },
  ],
};

export default sidebars;
