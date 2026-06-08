import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/* ----------------------------------------------------------------- *
 * Inline SVG icons — no require(), no external assets.
 * Each takes the current color so it inherits the teal accent.
 * ----------------------------------------------------------------- */
type IconProps = {className?: string};

function IconInventory({className}: IconProps): ReactNode {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M21 8l-9 5-9-5 9-5 9 5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

function IconProjects({className}: IconProps): ReactNode {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </svg>
  );
}

function IconWarehouse({className}: IconProps): ReactNode {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M3 21V9l9-5 9 5v12" />
      <path d="M3 21h18" />
      <path d="M7 21v-7h10v7" />
      <path d="M7 17h10" />
    </svg>
  );
}

function IconCrew({className}: IconProps): ReactNode {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconDocuments({className}: IconProps): ReactNode {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h8" />
      <path d="M8 9h2" />
    </svg>
  );
}

function IconIntegrations({className}: IconProps): ReactNode {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

/* ----------------------------------------------------------------- *
 * Content data
 * ----------------------------------------------------------------- */
type Feature = {
  title: string;
  description: string;
  Icon: (props: IconProps) => ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: 'Inventory Management',
    description:
      'Track equipment, kits, and accessories across both serialised and bulk assets — so you always know what you own and where it is.',
    Icon: IconInventory,
  },
  {
    title: 'Project Management',
    description:
      'Build quotes and line items, reuse templates, and schedule jobs from first enquiry through to wrap.',
    Icon: IconProjects,
  },
  {
    title: 'Warehouse Operations',
    description:
      'Deploy and return gear, generate pull sheets, run stocktakes, and capture damage right from the floor.',
    Icon: IconWarehouse,
  },
  {
    title: 'Crew Coordination',
    description:
      'Plan crew with the planner, track hours with timesheets, and keep certifications current across your team.',
    Icon: IconCrew,
  },
  {
    title: 'Document Generation',
    description:
      'Produce delivery dockets, run sheets, call sheets, and timeline PDFs — all styled with the template designer.',
    Icon: IconDocuments,
  },
  {
    title: 'Integrations',
    description:
      'Sync orders from WooCommerce, equip your crew with Discord tools, and sign in seamlessly with SSO.',
    Icon: IconIntegrations,
  },
];

type Step = {
  number: string;
  title: string;
  description: string;
  to: string;
  cta: string;
};

const STEPS: Step[] = [
  {
    number: '1',
    title: 'Create your account',
    description:
      'Set up your organisation, invite your team, and configure the basics in a few minutes.',
    to: '/docs/getting-started',
    cta: 'Get started',
  },
  {
    number: '2',
    title: 'Add your inventory',
    description:
      'Import or enter your equipment, build kits, and tag accessories so everything is ready to deploy.',
    to: '/docs/inventory/equipment',
    cta: 'Add inventory',
  },
  {
    number: '3',
    title: 'Create your first project',
    description:
      'Spin up a project, add line items, and turn it into a quote you can send straight away.',
    to: '/docs/projects/creating-projects',
    cta: 'Create a project',
  },
];

type Section = {
  title: string;
  description: string;
  to: string;
};

const SECTIONS: Section[] = [
  {
    title: 'Getting Started',
    description: 'Account setup, navigation, and your first steps in GearFlow.',
    to: '/docs/getting-started',
  },
  {
    title: 'Inventory',
    description: 'Equipment, kits, accessories, categories, and CSV import.',
    to: '/docs/inventory/overview',
  },
  {
    title: 'Projects',
    description: 'Quotes, line items, templates, tasks, and project numbering.',
    to: '/docs/projects/overview',
  },
  {
    title: 'Clients',
    description: 'Manage client records, contacts, and rental history.',
    to: '/docs/clients/overview',
  },
  {
    title: 'Documents',
    description: 'Delivery dockets, run sheets, call sheets, and the designer.',
    to: '/docs/documents/overview',
  },
  {
    title: 'Crew',
    description: 'Planner, timesheets, and certification tracking.',
    to: '/docs/crew/overview',
  },
  {
    title: 'Suppliers',
    description: 'Sub-hires, purchase orders, and supplier records.',
    to: '/docs/suppliers/overview',
  },
  {
    title: 'Warehouse',
    description: 'Check-in / check-out, displays, stocktake, and damage.',
    to: '/docs/warehouse/overview',
  },
  {
    title: 'Compliance & Safety',
    description: 'Test-and-tag, maintenance, and check-item schedules.',
    to: '/docs/compliance/overview',
  },
  {
    title: 'Reports',
    description: 'Built-in reports, utilisation, and custom reporting.',
    to: '/docs/reports/overview',
  },
  {
    title: 'Settings',
    description: 'Branding, billing, integrations, and configuration.',
    to: '/docs/settings/overview',
  },
  {
    title: 'Mobile',
    description: 'Barcode scanning and warehouse work on the go.',
    to: '/docs/mobile/overview',
  },
];

/* ----------------------------------------------------------------- *
 * Sections
 * ----------------------------------------------------------------- */
function Hero(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <Heading as="h1" className={styles.heroTitle}>
          GearFlow
          <span className={styles.heroTitleSub}>
            The operator manual for AV and theatre rental companies
          </span>
        </Heading>
        <p className={styles.heroSubtitle}>
          GearFlow tracks every piece of equipment, every project, and every
          crew member — from the first quote to the final return. One system
          that shows you what you own, where it is, who has it, and when it is
          due back.
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={`button button--primary button--lg ${styles.heroButton}`}
            to="/docs/getting-started">
            Get Started
          </Link>
          <Link
            className={`button button--secondary button--lg ${styles.heroButton}`}
            to="/docs/intro">
            Explore Features
          </Link>
        </div>
      </div>
    </header>
  );
}

function Features(): ReactNode {
  const dashboardImg = useBaseUrl('/img/screenshots/dashboard.png');
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <Heading as="h2">Everything you need to run the floor</Heading>
          <p>
            From the warehouse shelf to the loading dock, GearFlow keeps your
            whole operation in sync.
          </p>
        </div>

        <div className={styles.showcase}>
          <img
            src={dashboardImg}
            alt="The GearFlow dashboard showing projects, inventory, and crew at a glance"
            className={styles.showcaseImg}
            loading="lazy"
          />
        </div>

        <div className={styles.featureGrid}>
          {FEATURES.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <feature.Icon className={styles.featureIconSvg} />
              </div>
              <Heading as="h3" className={styles.featureTitle}>
                {feature.title}
              </Heading>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStart(): ReactNode {
  return (
    <section className={styles.quickStart}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <Heading as="h2">Start using GearFlow in minutes</Heading>
          <p>Three steps from sign-up to your first sent quote.</p>
        </div>

        <div className={styles.stepGrid}>
          {STEPS.map((step) => (
            <div key={step.number} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <Heading as="h3" className={styles.stepTitle}>
                {step.title}
              </Heading>
              <p className={styles.stepDescription}>{step.description}</p>
              <Link className={styles.stepLink} to={step.to}>
                {step.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sections(): ReactNode {
  return (
    <section className={styles.sections}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <Heading as="h2">Explore the documentation</Heading>
          <p>Twelve sections covering every corner of GearFlow.</p>
        </div>

        <div className={styles.sectionGrid}>
          {SECTIONS.map((section) => (
            <Link
              key={section.title}
              to={section.to}
              className={styles.sectionCard}>
              <Heading as="h3" className={styles.sectionCardTitle}>
                {section.title}
              </Heading>
              <p className={styles.sectionCardDescription}>
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — The operator manual for AV and theatre rental`}
      description="GearFlow is the rental management platform for AV, lighting, staging, and theatre companies. Track equipment, projects, and crew from quote to return.">
      <Hero />
      <main>
        <Features />
        <QuickStart />
        <Sections />
      </main>
    </Layout>
  );
}
