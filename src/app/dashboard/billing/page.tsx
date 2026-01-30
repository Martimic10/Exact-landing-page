"use client";

import { useState } from "react";

const plans = [
  {
    name: "Free",
    price: 0,
    interval: "month",
    description: "Perfect for trying Exact. All core features included, forever.",
    features: [
      "5 UI polishes / day",
      "AI autocomplete (basic)",
      "Single component scope",
      "Basic accessibility fixes",
      "View-only diff preview",
    ],
    current: true,
  },
  {
    name: "Starter",
    price: 12,
    interval: "month",
    description: "For solo developers and light daily use.",
    features: [
      "AI-assisted frontend code generation",
      "Live UI preview while editing",
      "Code diffs showing AI changes",
      "Basic component-aware refactors",
      "Standard AI models",
      "Monthly usage limits",
      "Personal projects",
    ],
    current: false,
  },
  {
    name: "Pro",
    price: 24,
    interval: "month",
    description: "Built for serious frontend developers.",
    features: [
      "High usage included (fair use)",
      "Priority AI models (faster & higher quality)",
      "Advanced UI & layout-safe refactors",
      "Component tree-aware changes",
      "Batch & multi-file transformations",
      "Project-wide suggestions and cleanup",
      "Undo / change history",
      "Commercial usage",
      "Early access to new features",
    ],
    current: false,
    popular: true,
  },
];

const invoices = [
  { id: "INV-001", date: "Jan 1, 2025", amount: "$0.00", status: "Paid", plan: "Free" },
];

export default function BillingPage() {
  const [billingInterval, setBillingInterval] = useState<"month" | "year">("month");

  const getPrice = (price: number) => {
    if (billingInterval === "year") {
      return Math.floor(price * 10);
    }
    return price;
  };

  return (
    <>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1 className="text-xl md:text-2xl" style={{ color: "#ffffff", fontWeight: 600, marginBottom: "8px" }}>
          Billing
        </h1>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>
          Manage your subscription and billing details.
        </p>
      </div>

      {/* Current Plan Banner */}
      <div className="current-plan-banner" style={{ marginBottom: "32px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", flexWrap: "wrap" }}>
            <h2 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600 }}>Free Plan</h2>
            <span
              style={{
                padding: "4px 10px",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                borderRadius: "9999px",
                color: "#22c55e",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              Active
            </span>
          </div>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>
            You&apos;re on the free plan with 5 UI polishes per day.
          </p>
        </div>
        <div className="current-plan-price">
          <p style={{ color: "#ffffff", fontSize: "24px", fontWeight: 600 }}>$0</p>
          <p style={{ color: "#6b7280", fontSize: "13px" }}>per month</p>
        </div>
      </div>

      {/* Billing Interval Toggle */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "#111111",
            borderRadius: "8px",
            padding: "4px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <button
            onClick={() => setBillingInterval("month")}
            style={{
              padding: "8px 16px",
              backgroundColor: billingInterval === "month" ? "rgba(255, 255, 255, 0.1)" : "transparent",
              border: "none",
              borderRadius: "6px",
              color: billingInterval === "month" ? "#ffffff" : "#6b7280",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingInterval("year")}
            style={{
              padding: "8px 16px",
              backgroundColor: billingInterval === "year" ? "rgba(255, 255, 255, 0.1)" : "transparent",
              border: "none",
              borderRadius: "6px",
              color: billingInterval === "year" ? "#ffffff" : "#6b7280",
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Yearly
            <span
              style={{
                padding: "2px 6px",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                borderRadius: "4px",
                color: "#22c55e",
                fontSize: "11px",
                fontWeight: 500,
              }}
            >
              Save 17%
            </span>
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="plans-grid" style={{ marginBottom: "48px" }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              backgroundColor: "#111111",
              border: plan.popular
                ? "1px solid rgba(168, 85, 247, 0.5)"
                : plan.current
                ? "1px solid rgba(255, 255, 255, 0.3)"
                : "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "20px",
              position: "relative",
              marginTop: plan.popular ? "12px" : "0",
            }}
          >
            {plan.popular && (
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  padding: "4px 12px",
                  backgroundColor: "#a855f7",
                  borderRadius: "9999px",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                Most Popular
              </div>
            )}

            <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>
              {plan.name}
            </h3>
            <p style={{ color: "#6b7280", fontSize: "13px", marginBottom: "16px" }}>
              {plan.description}
            </p>

            <div style={{ marginBottom: "20px" }}>
              <span style={{ color: "#ffffff", fontSize: "32px", fontWeight: 600 }}>
                ${getPrice(plan.price)}
              </span>
              <span style={{ color: "#6b7280", fontSize: "14px" }}>
                /{billingInterval === "year" ? "year" : "mo"}
              </span>
            </div>

            <ul style={{ margin: 0, padding: 0, listStyle: "none", marginBottom: "24px" }}>
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    color: "#9ca3af",
                    fontSize: "13px",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ flexShrink: 0, marginTop: "2px" }}><CheckIcon /></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              disabled={plan.current}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: plan.current
                  ? "transparent"
                  : plan.popular
                  ? "#a855f7"
                  : "#ffffff",
                border: plan.current ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
                borderRadius: "8px",
                color: plan.current ? "#6b7280" : plan.popular ? "#ffffff" : "#000000",
                fontSize: "14px",
                fontWeight: 500,
                cursor: plan.current ? "default" : "pointer",
              }}
            >
              {plan.current ? "Current Plan" : `Upgrade to ${plan.name}`}
            </button>
          </div>
        ))}
      </div>

      {/* Payment Method */}
      <h2 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>
        Payment Method
      </h2>
      <div
        className="payment-method"
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "32px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CreditCardIcon />
          </div>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>
            No payment method on file
          </p>
        </div>
        <button
          className="add-payment-btn"
          style={{
            padding: "10px 16px",
            backgroundColor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "6px",
            color: "#ffffff",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          Add Payment Method
        </button>
      </div>

      {/* Billing History */}
      <h2 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>
        Billing History
      </h2>

      {/* Desktop Table */}
      <div className="billing-table-desktop">
        {/* Table Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr auto",
            padding: "12px 20px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: "rgba(255, 255, 255, 0.02)",
          }}
        >
          <span style={{ color: "#6b7280", fontSize: "12px", fontWeight: 500, textTransform: "uppercase" }}>Invoice</span>
          <span style={{ color: "#6b7280", fontSize: "12px", fontWeight: 500, textTransform: "uppercase" }}>Date</span>
          <span style={{ color: "#6b7280", fontSize: "12px", fontWeight: 500, textTransform: "uppercase" }}>Amount</span>
          <span style={{ color: "#6b7280", fontSize: "12px", fontWeight: 500, textTransform: "uppercase" }}>Status</span>
          <span></span>
        </div>

        {/* Table Rows */}
        {invoices.map((invoice, index) => (
          <div
            key={invoice.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr auto",
              padding: "16px 20px",
              alignItems: "center",
              borderBottom: index < invoices.length - 1 ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
            }}
          >
            <span style={{ color: "#ffffff", fontSize: "14px" }}>{invoice.id}</span>
            <span style={{ color: "#6b7280", fontSize: "13px" }}>{invoice.date}</span>
            <span style={{ color: "#ffffff", fontSize: "14px" }}>{invoice.amount}</span>
            <span
              style={{
                display: "inline-flex",
                padding: "4px 10px",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                borderRadius: "9999px",
                color: "#22c55e",
                fontSize: "12px",
                fontWeight: 500,
                width: "fit-content",
              }}
            >
              {invoice.status}
            </span>
            <button
              style={{
                padding: "6px 12px",
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "6px",
                color: "#9ca3af",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Download
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="billing-cards-mobile">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "12px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}>{invoice.id}</span>
              <span
                style={{
                  padding: "4px 10px",
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  borderRadius: "9999px",
                  color: "#22c55e",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                {invoice.status}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span style={{ color: "#6b7280", fontSize: "13px" }}>{invoice.date}</span>
              <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}>{invoice.amount}</span>
            </div>
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "6px",
                color: "#9ca3af",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Download Invoice
            </button>
          </div>
        ))}
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        .current-plan-banner {
          background-color: #111111;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .current-plan-price {
          text-align: left;
        }
        .plans-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .payment-method {
          display: flex;
          flex-direction: column;
        }
        .add-payment-btn {
          width: 100%;
        }
        .billing-table-desktop {
          display: none;
        }
        .billing-cards-mobile {
          display: block;
        }
        @media (min-width: 640px) {
          .current-plan-banner {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .current-plan-price {
            text-align: right;
          }
          .plans-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .payment-method {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .add-payment-btn {
            width: auto;
          }
        }
        @media (min-width: 768px) {
          .plans-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .billing-table-desktop {
            display: block;
            background-color: #111111;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            overflow: hidden;
          }
          .billing-cards-mobile {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

// Icon Components
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}
