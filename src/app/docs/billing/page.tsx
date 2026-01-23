"use client";

import { DocsContent, DocsPagination, DocsCallout } from "@/components/docs";
import { useDocsTheme } from "@/app/docs/layout";

export default function BillingPage() {
  const { isDark } = useDocsTheme();

  const textPrimary = isDark ? '#ffffff' : '#0a0a0a';
  const textSecondary = isDark ? '#d1d5db' : '#4b5563';
  const textMuted = isDark ? '#9ca3af' : '#6b7280';
  const bgSubtle = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const accentGreen = '#22c55e';

  return (
    <DocsContent
      title="Billing"
      description="Understand Exact's pricing plans, billing cycles, and payment options."
    >
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '32px' }}>
        Exact offers flexible pricing to fit your needs, whether you&apos;re just getting started or
        building at scale. All plans include access to our core AI-powered features.
      </p>

      {/* Plans Overview */}
      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '24px' }}>
        Plans
      </h2>

      {/* Free Plan */}
      <div
        style={{
          backgroundColor: bgSubtle,
          border: `1px solid ${borderColor}`,
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <h3 style={{ color: textPrimary, fontSize: '20px', fontWeight: 600, margin: 0 }}>Free</h3>
          <span style={{ color: textPrimary, fontSize: '28px', fontWeight: 600 }}>$0<span style={{ color: textMuted, fontSize: '14px', fontWeight: 400 }}>/month</span></span>
        </div>
        <p style={{ color: textSecondary, lineHeight: '1.6', marginBottom: '16px' }}>
          Perfect for trying Exact. All core features included, forever.
        </p>
        <ul style={{ color: textSecondary, margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>5 UI polishes per day</li>
          <li style={{ marginBottom: '8px' }}>AI autocomplete (basic)</li>
          <li style={{ marginBottom: '8px' }}>Single component scope</li>
          <li style={{ marginBottom: '8px' }}>Basic accessibility fixes</li>
          <li style={{ marginBottom: '8px' }}>View-only diff preview</li>
        </ul>
      </div>

      {/* Pro Plan */}
      <div
        style={{
          backgroundColor: bgSubtle,
          border: `1px solid ${borderColor}`,
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '16px',
          position: 'relative',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: accentGreen,
            color: '#000',
            fontSize: '12px',
            fontWeight: 600,
            padding: '4px 12px',
            borderRadius: '9999px',
          }}
        >
          Popular
        </span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <h3 style={{ color: textPrimary, fontSize: '20px', fontWeight: 600, margin: 0 }}>Pro</h3>
          <span style={{ color: textPrimary, fontSize: '28px', fontWeight: 600 }}>$12<span style={{ color: textMuted, fontSize: '14px', fontWeight: 400 }}>/month</span></span>
        </div>
        <p style={{ color: textSecondary, lineHeight: '1.6', marginBottom: '16px' }}>
          For developers who need advanced features and unlimited AI requests.
        </p>
        <ul style={{ color: textSecondary, margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>Everything in Free</li>
          <li style={{ marginBottom: '8px' }}>Unlimited AI requests</li>
          <li style={{ marginBottom: '8px' }}>Faster AI responses</li>
          <li style={{ marginBottom: '8px' }}>Priority AI responses</li>
          <li style={{ marginBottom: '8px' }}>Smart refactoring tools</li>
          <li style={{ marginBottom: '8px' }}>Multi-file editing</li>
        </ul>
      </div>

      {/* Enterprise Plan */}
      <div
        style={{
          backgroundColor: bgSubtle,
          border: `1px solid ${borderColor}`,
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '32px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <h3 style={{ color: textPrimary, fontSize: '20px', fontWeight: 600, margin: 0 }}>Enterprise</h3>
          <span style={{ color: textPrimary, fontSize: '28px', fontWeight: 600 }}>Custom</span>
        </div>
        <p style={{ color: textSecondary, lineHeight: '1.6', marginBottom: '16px' }}>
          For teams that need dedicated support, custom deployment, and advanced security.
        </p>
        <ul style={{ color: textSecondary, margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>Everything in Pro</li>
          <li style={{ marginBottom: '8px' }}>Unlimited team members</li>
          <li style={{ marginBottom: '8px' }}>Self-hosted deployment</li>
          <li style={{ marginBottom: '8px' }}>Role-based access control</li>
          <li style={{ marginBottom: '8px' }}>Team polish profiles</li>
          <li style={{ marginBottom: '8px' }}>Dedicated support</li>
          <li style={{ marginBottom: '8px' }}>SLA guarantees</li>
        </ul>
      </div>

      <DocsCallout type="tip" title="Save 20% with Annual Billing">
        <p>Switch to annual billing to save 20% on Pro plans. That&apos;s just $9.60/month
        when billed yearly ($115.20/year).</p>
      </DocsCallout>

      {/* Billing Cycle */}
      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Billing Cycle
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        Your billing cycle starts on the day you upgrade to a paid plan. You&apos;ll be charged
        at the beginning of each billing period (monthly or annually).
      </p>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Monthly</strong> — Charged on the same date each month.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Annual</strong> — Charged once per year with 20% savings.
        </li>
      </ul>

      {/* Payment Methods */}
      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Payment Methods
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        We accept the following payment methods:
      </p>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>Credit and debit cards (Visa, Mastercard, American Express)</li>
        <li style={{ marginBottom: '12px' }}>PayPal</li>
        <li style={{ marginBottom: '12px' }}>Bank transfers (Enterprise plans only)</li>
      </ul>

      {/* Upgrading & Downgrading */}
      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Upgrading & Downgrading
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        You can change your plan at any time from your account settings.
      </p>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Upgrading</strong> — Your new plan takes effect immediately.
          You&apos;ll be charged a prorated amount for the remainder of your current billing period.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Downgrading</strong> — Your current plan remains active until
          the end of the billing period, then switches to the new plan.
        </li>
      </ul>

      {/* Cancellation */}
      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Cancellation
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        You can cancel your subscription at any time. When you cancel, you&apos;ll retain access to
        Pro features until the end of your current billing period. After that, your account will
        automatically switch to the Free plan.
      </p>

      <DocsCallout type="info" title="Need Help?">
        <p>For billing questions or issues, contact our support team at{' '}
        <a href="mailto:support@exactbuild.com" style={{ color: isDark ? '#60a5fa' : '#2563eb' }}>
          support@exactbuild.com
        </a> or reach out on{' '}
        <a href="https://x.com/ExactBuild" target="_blank" rel="noopener noreferrer" style={{ color: isDark ? '#60a5fa' : '#2563eb' }}>
          X (Twitter)
        </a>.
        </p>
      </DocsCallout>

      {/* Refunds */}
      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Refunds
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        We offer a 14-day money-back guarantee for new Pro subscriptions. If you&apos;re not
        satisfied within the first 14 days, contact us for a full refund. Refunds for annual
        plans are prorated based on the remaining months.
      </p>

      {/* Invoices */}
      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Invoices
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Invoices are automatically generated and sent to your email after each payment. You can
        also download past invoices from your account settings under Billing → Invoice History.
      </p>

      <DocsPagination
        prev={{ title: "Settings", href: "/docs/settings" }}
        next={{ title: "FAQ", href: "/docs/faq" }}
      />
    </DocsContent>
  );
}
